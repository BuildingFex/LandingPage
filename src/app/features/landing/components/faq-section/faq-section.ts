import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-faq-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionHeading],
  template: `
    @let t = i18n.t().faq;
    <section class="section" id="faq" aria-labelledby="faq-title">
      <div class="container">
        <app-section-heading
          icon="help-circle"
          headingId="faq-title"
          [badge]="t.badge"
          [title]="t.title"
          [subtitle]="t.subtitle"
        />

        <div class="faq__list">
          @for (item of t.items; track $index) {
            @let open = openIndex() === $index;
            <div class="faq-item" [class.active]="open">
              <h3>
                <button
                  type="button"
                  class="faq-item__header"
                  [id]="'faq-q-' + $index"
                  [attr.aria-expanded]="open"
                  [attr.aria-controls]="'faq-a-' + $index"
                  (click)="toggle($index)"
                >
                  <span class="faq-item__question">{{ item.q }}</span>
                  <span class="faq-item__icon"><app-icon name="plus" [size]="14" [stroke]="2.5" /></span>
                </button>
              </h3>
              <div
                class="faq-item__body"
                role="region"
                [id]="'faq-a-' + $index"
                [attr.aria-labelledby]="'faq-q-' + $index"
                [attr.inert]="open ? null : ''"
              >
                <div class="faq-item__inner">
                  <p class="faq-item__answer">{{ item.a }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .faq__list {
      max-width: 780px;
      margin: 0 auto;
    }

    .faq-item {
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-md);
      overflow: hidden;
      transition: all var(--transition-base);
    }

    .faq-item:hover {
      border-color: var(--blue-200);
    }

    .faq-item.active {
      border-color: var(--blue-300);
      box-shadow: 0 4px 16px rgba(30, 86, 160, 0.08);
    }

    .faq-item__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      width: 100%;
      padding: var(--space-lg) var(--space-xl);
      background: var(--white);
      text-align: left;
      transition: background var(--transition-fast);
    }

    .faq-item__header:hover {
      background: var(--gray-50);
    }

    .faq-item__question {
      font-weight: 600;
      color: var(--gray-800);
      font-size: 1rem;
    }

    .faq-item__icon {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--blue-50);
      color: var(--blue-500);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-base);
    }

    .faq-item.active .faq-item__icon {
      background: var(--blue-500);
      color: var(--white);
      transform: rotate(45deg);
    }

    /* grid-rows trick: animates to the content's real height (no max-height cap) */
    .faq-item__body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--transition-slow);
    }

    .faq-item.active .faq-item__body {
      grid-template-rows: 1fr;
    }

    .faq-item__inner {
      overflow: hidden;
    }

    .faq-item__answer {
      padding: 0 var(--space-xl) var(--space-lg);
      color: var(--gray-500);
      font-size: 0.9375rem;
      line-height: 1.7;
    }

    @media (max-width: 480px) {
      .faq-item__header {
        padding: var(--space-md) var(--space-lg);
      }

      .faq-item__question {
        font-size: 0.9375rem;
      }

      .faq-item__answer {
        padding: 0 var(--space-lg) var(--space-md);
      }
    }
  `,
})
export class FaqSection {
  protected readonly i18n = inject(LanguageService);
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
