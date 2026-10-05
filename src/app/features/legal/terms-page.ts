import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { usePageMeta } from '../../core/seo/page-meta';
import { LangToggle } from '../../shared/components/lang-toggle/lang-toggle';
import { LogoMark } from '../../shared/components/logo/logo';

@Component({
  selector: 'app-terms-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, LangToggle, LogoMark],
  template: `
    @let t = i18n.t().terms;
    <main class="terms">
      <article class="terms__card">
        <header class="terms__header">
          <a [routerLink]="i18n.path()" class="terms__logo">
            <app-logo-mark [size]="32" [inner]="false" />
            <span>FixCore</span>
          </a>
          <app-lang-toggle />
        </header>

        <h1>{{ t.title }}</h1>
        <p class="terms__updated">{{ t.updated }}</p>

        @for (section of t.sections; track $index) {
          <h2>{{ section.title }}</h2>
          <p>{{ section.body }}</p>
        }

        <a href="#" class="terms__back" (click)="back($event)">&larr; {{ t.back }}</a>
      </article>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      min-height: 100dvh;
      background: var(--gray-100);
    }

    .terms {
      padding: 40px var(--gutter);
    }

    .terms__card {
      max-width: 800px;
      margin: 0 auto;
      background: var(--white);
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .terms__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      margin-bottom: 30px;
    }

    .terms__logo {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--blue-900);
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.5rem;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.625rem, 4vw, 2rem);
      color: var(--blue-900);
      line-height: 1.2;
      margin-bottom: 12px;
    }

    h2 {
      font-family: var(--font-display);
      font-size: clamp(1.125rem, 3vw, 1.375rem);
      color: var(--blue-900);
      margin: 30px 0 10px;
    }

    p {
      color: var(--gray-600);
      margin-bottom: 15px;
    }

    .terms__updated {
      font-size: 0.875rem;
    }

    .terms__back {
      display: inline-block;
      margin-top: 30px;
      color: var(--blue-400);
      font-weight: 500;
    }

    .terms__back:hover {
      text-decoration: underline;
    }

    @media (max-width: 640px) {
      .terms {
        padding: var(--space-md);
      }

      .terms__card {
        padding: var(--space-xl) var(--space-lg);
      }

      .terms__logo {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 380px) {
      .terms {
        padding: 0;
      }

      .terms__card {
        border-radius: 0;
        box-shadow: none;
        min-height: 100dvh;
      }
    }
  `,
})
export class TermsPage {
  protected readonly i18n = inject(LanguageService);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  constructor() {
    usePageMeta((t) => ({ title: t.meta.termsTitle }));
  }

  /** Same as the original `history.back()`, but stays on the site when opened directly. */
  protected back(event: Event): void {
    event.preventDefault();
    const navigationId = (history.state as { navigationId?: number } | null)?.navigationId ?? 1;
    if (navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(this.i18n.path());
    }
  }
}
