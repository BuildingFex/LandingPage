import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon, IconName } from '../../../../shared/components/icon/icon';

/** Badge + title + subtitle block shared by every landing section. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: { class: 'text-center', style: 'display: block' },
  template: `
    <span class="section-badge">
      <app-icon [name]="icon()" [size]="14" [stroke]="2.5" />
      {{ badge() }}
    </span>
    <h2 class="section-title" [attr.id]="headingId()">{{ title() }}</h2>
    <p class="section-subtitle">{{ subtitle() }}</p>
  `,
})
export class SectionHeading {
  readonly icon = input.required<IconName>();
  readonly badge = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly headingId = input<string>();
}
