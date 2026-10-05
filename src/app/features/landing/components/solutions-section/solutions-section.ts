import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-solutions-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  template: `
    @let t = i18n.t().solutions;
    <section class="section" id="solutions" aria-labelledby="solutions-title">
      <div class="container">
        <app-section-heading
          icon="users"
          headingId="solutions-title"
          [badge]="t.badge"
          [title]="t.title"
          [subtitle]="t.subtitle"
        />

        <ul class="solutions__grid">
          @for (item of t.items; track item.variant) {
            <li class="solution-card" [class]="'solution-card--' + item.variant" appReveal>
              <div class="solution-card__icon"><app-icon [name]="item.icon" [size]="28" /></div>
              <span class="solution-card__tag">{{ item.tag }}</span>
              <h3 class="solution-card__title">{{ item.title }}</h3>
              <p class="solution-card__desc">{{ item.desc }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .solutions__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
    }

    .solution-card {
      padding: var(--space-2xl) var(--space-xl);
      border-radius: var(--radius-xl);
      position: relative;
      overflow: hidden;
      transition: all var(--transition-base);
      min-height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      --accent: var(--gray-400);
      --accent-bg: rgba(148, 163, 184, 0.15);
    }

    .solution-card::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.1;
      background: radial-gradient(circle at top right, var(--accent), transparent 70%);
      transition: opacity var(--transition-base);
    }

    .solution-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-xl);
    }

    .solution-card:hover::before {
      opacity: 0.16;
    }

    .solution-card--orange {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border: 1px solid rgba(249, 115, 22, 0.2);
      --accent: var(--orange-400);
      --accent-bg: rgba(249, 115, 22, 0.15);
    }

    .solution-card--blue {
      background: linear-gradient(135deg, #0f2027 0%, #203a43 100%);
      border: 1px solid rgba(45, 125, 210, 0.2);
      --accent: var(--blue-300);
      --accent-bg: rgba(45, 125, 210, 0.15);
    }

    .solution-card--dark {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      border: 1px solid rgba(148, 163, 184, 0.15);
    }

    .solution-card__icon {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-lg);
      background: var(--accent-bg);
      color: var(--accent);
      position: relative;
    }

    .solution-card__tag {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      margin-bottom: var(--space-sm);
      color: var(--accent);
      position: relative;
    }

    .solution-card__title {
      font-family: var(--font-display);
      font-size: 1.375rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: var(--space-sm);
      position: relative;
    }

    .solution-card__desc {
      font-size: 0.9375rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.65;
      position: relative;
    }

    @media (max-width: 1024px) {
      .solutions__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
      }

      .solution-card:last-child {
        grid-column: span 2;
        width: 100%;
        max-width: calc(50% - var(--space-lg) / 2);
        margin: 0 auto;
      }
    }

    @media (max-width: 640px) {
      .solutions__grid {
        grid-template-columns: 1fr;
      }

      .solution-card {
        min-height: 0;
        padding: var(--space-xl) var(--space-lg);
      }

      .solution-card:last-child {
        grid-column: auto;
        max-width: none;
      }
    }
  `,
})
export class SolutionsSection {
  protected readonly i18n = inject(LanguageService);
}
