import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { fixcoreAppLinks } from '../../../../core/config/fixcore-app';
import { LanguageService } from '../../../../core/i18n/language.service';
import { LangToggle } from '../../../../shared/components/lang-toggle/lang-toggle';
import { LogoMark } from '../../../../shared/components/logo/logo';
import { scrollToSection } from '../../scroll-to-section';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoMark, LangToggle],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onResize()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeader {
  protected readonly i18n = inject(LanguageService);

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly loginUrl = computed(() => fixcoreAppLinks.login(this.i18n.lang()));
  protected readonly registerUrl = computed(() => fixcoreAppLinks.register(this.i18n.lang()));

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  protected onResize(): void {
    if (window.innerWidth > 768) this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    this.closeMenu();
    scrollToSection(id);
  }
}
