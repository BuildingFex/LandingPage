import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  template: `
    @let t = i18n.t().features;
    <section class="section" id="features" aria-labelledby="features-title">
      <div class="container">
        <app-section-heading
          icon="sparkle"
          headingId="features-title"
          [badge]="t.badge"
          [title]="t.title"
          [subtitle]="t.subtitle"
        />

        <ul class="features__grid">
          @for (item of t.items; track item.icon) {
            <li class="feature-card" appReveal>
              <div class="feature-card__icon"><app-icon [name]="item.icon" /></div>
              <h3 class="feature-card__title">{{ item.title }}</h3>
              <p class="feature-card__desc">{{ item.desc }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .features__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
    }

    .feature-card {
      padding: var(--space-2xl);
      border-radius: var(--radius-xl);
      background: var(--white);
      border: 1px solid var(--gray-200);
      transition: all var(--transition-base);
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--blue-400), var(--blue-300));
      opacity: 0;
      transition: opacity var(--transition-base);
    }

    .feature-card:hover {
      border-color: var(--blue-200);
      box-shadow: var(--shadow-lg), var(--shadow-glow);
      transform: translateY(-4px);
    }

    .feature-card:hover::before {
      opacity: 1;
    }

    .feature-card__icon {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-lg);
      background: var(--blue-50);
      color: var(--blue-500);
      transition: all var(--transition-base);
    }

    .feature-card:hover .feature-card__icon {
      background: linear-gradient(135deg, var(--blue-500), var(--blue-400));
      color: var(--white);
      transform: scale(1.05);
    }

    .feature-card__title {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: var(--space-sm);
    }

    .feature-card__desc {
      font-size: 0.9375rem;
      color: var(--gray-500);
      line-height: 1.65;
    }

    @media (max-width: 1024px) {
      .features__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
      }
    }

    @media (max-width: 640px) {
      .features__grid {
        grid-template-columns: 1fr;
      }

      .feature-card {
        padding: var(--space-xl) var(--space-lg);
      }
    }
  `,
})
export class FeaturesSection {
  protected readonly i18n = inject(LanguageService);
}
