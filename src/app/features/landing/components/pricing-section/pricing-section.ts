import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../section-heading/section-heading';

type Billing = 'monthly' | 'annual';

@Component({
  selector: 'app-pricing-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, RouterLink, SectionHeading],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
  protected readonly i18n = inject(LanguageService);

  protected readonly billing = signal<Billing>('monthly');
  /** True while the price numbers fade out before swapping value. */
  protected readonly swapping = signal(false);

  protected setBilling(mode: Billing): void {
    if (mode === this.billing() || this.swapping()) return;
    this.swapping.set(true);
    setTimeout(() => {
      this.billing.set(mode);
      this.swapping.set(false);
    }, 200);
  }

  protected toggleBilling(): void {
    this.setBilling(this.billing() === 'monthly' ? 'annual' : 'monthly');
  }
}
