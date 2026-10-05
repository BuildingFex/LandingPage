import { ChangeDetectionStrategy, Component, input } from '@angular/core';

let nextId = 0;

/**
 * FixCore hexagon mark. `tone="light"` is the variant used on dark backgrounds
 * (footer, auth branding panel); `inner` adds the faded inner hexagon.
 */
@Component({
  selector: 'app-logo-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      line-height: 0;
    }
  `,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 100 100" fill="none" focusable="false">
      <defs>
        <linearGradient [attr.id]="strokeId" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" [attr.stop-color]="tone() === 'light' ? '#4da3ff' : '#1e56a0'" />
          <stop offset="100%" [attr.stop-color]="tone() === 'light' ? '#8ec5ff' : '#4da3ff'" />
        </linearGradient>
        <radialGradient [attr.id]="dotId" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4da3ff" />
          <stop offset="100%" stop-color="#2d7dd2" />
        </radialGradient>
      </defs>
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        [attr.stroke]="'url(#' + strokeId + ')'"
        stroke-width="7"
        stroke-linejoin="round"
      />
      @if (inner()) {
        <polygon
          points="50,22 78,38 78,62 50,78 22,62 22,38"
          [attr.stroke]="'url(#' + strokeId + ')'"
          stroke-width="5"
          stroke-linejoin="round"
          opacity="0.5"
        />
      }
      <circle cx="50" cy="50" r="10" [attr.fill]="'url(#' + dotId + ')'" />
    </svg>
  `,
})
export class LogoMark {
  readonly size = input(36);
  readonly tone = input<'dark' | 'light'>('dark');
  readonly inner = input(true);

  protected readonly strokeId = `fc-logo-stroke-${nextId}`;
  protected readonly dotId = `fc-logo-dot-${nextId++}`;
}
