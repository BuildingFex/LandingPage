import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/i18n/language.service';
import { LogoMark } from '../../../../shared/components/logo/logo';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoMark, RouterLink],
  template: `
    @let t = i18n.t().footer;
    <footer class="footer">
      <div class="container footer__inner">
        <a class="footer__logo" [routerLink]="i18n.path()">
          <app-logo-mark tone="light" [size]="28" [inner]="false" />
          <span>FixCore</span>
        </a>

        <nav class="footer__links">
          <!-- No destination yet in the original site -->
          <a href="#" (click)="$event.preventDefault()">{{ t.support }}</a>
          <a href="#" (click)="$event.preventDefault()">{{ t.api }}</a>
          <a href="#" (click)="$event.preventDefault()">{{ t.privacy }}</a>
          <a [routerLink]="i18n.path('terms')">{{ t.terms }}</a>
        </nav>

        <span class="footer__copy">&copy; {{ year }} FixCore. {{ t.rights }}</span>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background: var(--gray-900);
      padding: var(--space-2xl) 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--space-lg);
    }

    .footer__logo {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--white);
    }

    .footer__links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-sm) var(--space-xl);
    }

    .footer__links a {
      font-size: 0.875rem;
      color: var(--gray-400);
    }

    .footer__links a:hover {
      color: var(--blue-300);
    }

    .footer__copy {
      font-size: 0.8125rem;
      color: var(--gray-400);
    }

    @media (max-width: 900px) {
      .footer__inner {
        flex-direction: column;
        text-align: center;
      }

      .footer__links {
        justify-content: center;
        gap: var(--space-sm) var(--space-lg);
      }
    }
  `,
})
export class SiteFooter {
  protected readonly i18n = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
}
