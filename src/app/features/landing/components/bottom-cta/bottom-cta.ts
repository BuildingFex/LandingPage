import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { fixcoreAppLinks } from '../../../../core/config/fixcore-app';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-bottom-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    @let t = i18n.t().bottomCta;
    <section class="bottom-cta" id="demo" aria-labelledby="cta-title">
      <div class="container bottom-cta__inner">
        <h2 class="bottom-cta__title" id="cta-title" appReveal>{{ t.title }}</h2>
        <p class="bottom-cta__subtitle" appReveal>{{ t.subtitle }}</p>
        <a [href]="registerUrl()" class="btn btn--green btn--lg" appReveal>
          <app-icon name="arrow-right" [size]="20" />
          {{ t.button }}
        </a>
        <p class="bottom-cta__fine-print" appReveal>{{ t.finePrint }}</p>
      </div>
    </section>
  `,
  styles: `
    .bottom-cta {
      padding: var(--space-4xl) 0;
      background: linear-gradient(135deg, var(--blue-900) 0%, #0c1e3a 40%, #0f2b4e 100%);
      position: relative;
      overflow: hidden;
    }

    .bottom-cta::before {
      content: '';
      position: absolute;
      top: -50%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 200%;
      background: radial-gradient(ellipse, rgba(45, 125, 210, 0.1) 0%, transparent 60%);
      pointer-events: none;
    }

    .bottom-cta__inner {
      position: relative;
      z-index: 1;
      text-align: center;
    }

    .bottom-cta__title {
      font-family: var(--font-display);
      font-size: clamp(1.625rem, 4vw, 2.75rem);
      font-weight: 800;
      color: var(--white);
      margin-bottom: var(--space-md);
      letter-spacing: -0.02em;
      text-wrap: balance;
    }

    .bottom-cta__subtitle {
      font-size: clamp(1rem, 2.2vw, 1.125rem);
      color: var(--blue-200);
      margin: 0 auto var(--space-2xl);
      max-width: 520px;
    }

    .bottom-cta__fine-print {
      font-size: 0.8125rem;
      color: var(--blue-200);
      opacity: 0.75;
      margin-top: var(--space-lg);
    }

    @media (max-width: 480px) {
      .btn {
        width: 100%;
        white-space: normal;
      }
    }
  `,
})
export class BottomCta {
  protected readonly i18n = inject(LanguageService);
  protected readonly registerUrl = computed(() => fixcoreAppLinks.register(this.i18n.lang()));
}
