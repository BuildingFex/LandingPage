import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-how-it-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, SectionHeading],
  template: `
    @let t = i18n.t().howItWorks;
    <section class="section section--light" id="how-it-works" aria-labelledby="how-title">
      <div class="container">
        <app-section-heading
          icon="clock"
          headingId="how-title"
          [badge]="t.badge"
          [title]="t.title"
          [subtitle]="t.subtitle"
        />

        <ol class="steps">
          @for (step of t.steps; track $index) {
            <li class="step-card" appReveal>
              <div class="step-card__number" aria-hidden="true">{{ $index + 1 }}</div>
              <h3 class="step-card__title">{{ step.title }}</h3>
              <p class="step-card__desc">{{ step.desc }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-2xl);
      position: relative;
    }

    .steps::before {
      content: '';
      position: absolute;
      top: 40px;
      left: 15%;
      right: 15%;
      height: 2px;
      background: linear-gradient(90deg, var(--blue-200), var(--green-300), var(--orange-300));
    }

    .step-card {
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .step-card__number {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: var(--white);
      border: 3px solid var(--blue-200);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-lg);
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--blue-500);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-base);
    }

    .step-card:hover .step-card__number {
      background: linear-gradient(135deg, var(--blue-500), var(--blue-400));
      color: var(--white);
      border-color: var(--blue-500);
      transform: scale(1.1);
      box-shadow: 0 8px 25px rgba(30, 86, 160, 0.3);
    }

    .step-card__title {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: var(--space-sm);
    }

    .step-card__desc {
      font-size: 0.9375rem;
      color: var(--gray-500);
      line-height: 1.65;
      max-width: 280px;
      margin: 0 auto;
    }

    /* Stack vertically with a connecting line on the left */
    @media (max-width: 768px) {
      .steps {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
        max-width: 480px;
        margin: 0 auto;
      }

      .steps::before {
        top: 28px;
        bottom: 28px;
        left: 27px;
        right: auto;
        width: 2px;
        height: auto;
        background: linear-gradient(180deg, var(--blue-200), var(--green-300), var(--orange-300));
      }

      .step-card {
        display: grid;
        grid-template-columns: 56px 1fr;
        column-gap: var(--space-lg);
        text-align: left;
      }

      .step-card__number {
        grid-row: span 2;
        width: 56px;
        height: 56px;
        font-size: 1.375rem;
        margin: 0;
      }

      .step-card__title {
        font-size: 1.125rem;
        margin-top: var(--space-xs);
      }

      .step-card__desc {
        max-width: none;
        margin: 0;
      }
    }
  `,
})
export class HowItWorks {
  protected readonly i18n = inject(LanguageService);
}
