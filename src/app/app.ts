import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from './core/i18n/language.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  constructor() {
    const router = inject(Router);
    const scroller = inject(ViewportScroller);
    const i18n = inject(LanguageService);

    // Scroll to the top (or to the #fragment) after each page change, except
    // when only the language changed: then the reader keeps their position.
    router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (i18n.consumeKeepScroll()) return;
        const fragment = router.parseUrl(router.url).fragment;
        // Wait a tick so the freshly activated page has rendered its sections.
        setTimeout(() => {
          if (fragment && document.getElementById(fragment)) {
            scroller.scrollToAnchor(fragment);
          } else {
            scroller.scrollToPosition([0, 0]);
          }
        });
      });
  }
}
