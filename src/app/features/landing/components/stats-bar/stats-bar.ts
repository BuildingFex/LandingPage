import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { CountUp } from '../../../../shared/directives/count-up';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-stats-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountUp, Reveal],
  template: `
    @let t = i18n.t();
    <section class="stats-bar" id="stats">
      <dl class="container stats-bar__inner">
        @for (stat of t.stats; track $index) {
          <div class="stats-bar__item" appReveal>
            <dt class="stats-bar__label">{{ stat.label }}</dt>
            <dd class="stats-bar__number">
              {{ stat.prefix }}<span [appCountUp]="stat.value" [locale]="t.meta.numberLocale"></span
              >{{ stat.suffix }}
            </dd>
          </div>
        }
      </dl>
    </section>
  `,
  styles: `
    .stats-bar {
      background: var(--blue-900);
      padding: var(--space-2xl) 0;
      position: relative;
      overflow: hidden;
    }

    .stats-bar::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(45, 125, 210, 0.08) 0%,
        transparent 50%,
        rgba(34, 197, 94, 0.05) 100%
      );
    }

    .stats-bar__inner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      position: relative;
      z-index: 1;
    }

    .stats-bar__item {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: var(--space-md) var(--space-sm);
      position: relative;
    }

    .stats-bar__item:not(:last-child)::after {
      content: '';
      position: absolute;
      right: calc(var(--space-xl) / -2);
      top: 20%;
      height: 60%;
      width: 1px;
      background: rgba(255, 255, 255, 0.1);
    }

    .stats-bar__number {
      order: 1;
      font-family: var(--font-display);
      font-size: clamp(1.75rem, 3.5vw, 2.5rem);
      font-weight: 800;
      color: var(--white);
      letter-spacing: -0.02em;
      line-height: 1.2;
      font-variant-numeric: tabular-nums;
    }

    .stats-bar__number span {
      background: linear-gradient(135deg, var(--blue-300) 0%, var(--green-400) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stats-bar__label {
      order: 2;
      font-size: 0.875rem;
      color: var(--blue-200);
      margin-top: var(--space-xs);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .stats-bar__inner {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
      }

      .stats-bar__item:nth-child(2)::after {
        display: none;
      }

      .stats-bar__item::after {
        right: calc(var(--space-lg) / -2) !important;
      }
    }

    @media (max-width: 480px) {
      .stats-bar__label {
        font-size: 0.8125rem;
      }
    }
  `,
})
export class StatsBar {
  protected readonly i18n = inject(LanguageService);
}
