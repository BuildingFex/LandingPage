import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LANGS, LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lang-toggle" role="group" [attr.aria-label]="i18n.t().nav.language">
      @for (lang of langs; track lang) {
        <button
          type="button"
          class="lang-toggle__btn"
          [class.active]="i18n.lang() === lang"
          [attr.aria-pressed]="i18n.lang() === lang"
          [attr.lang]="lang"
          (click)="i18n.switchTo(lang)"
        >
          {{ lang.toUpperCase() }}
        </button>
      }
    </div>
  `,
  styles: `
    .lang-toggle {
      display: inline-flex;
      align-items: center;
      background: var(--gray-100);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-full);
      padding: 3px;
      gap: 2px;
    }

    .lang-toggle__btn {
      min-width: 2.25rem;
      padding: 4px 10px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--gray-500);
      border-radius: var(--radius-full);
      transition: all var(--transition-fast);
    }

    .lang-toggle__btn:hover:not(.active) {
      color: var(--gray-800);
    }

    .lang-toggle__btn.active {
      background: var(--blue-500);
      color: var(--white);
      box-shadow: var(--shadow-sm);
    }
  `,
})
export class LangToggle {
  protected readonly i18n = inject(LanguageService);
  protected readonly langs = LANGS;
}
