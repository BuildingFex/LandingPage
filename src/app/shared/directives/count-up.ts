import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

const DURATION_MS = 2000;

/** Animates the host's text from 0 to `appCountUp` once it becomes visible. */
@Directive({ selector: '[appCountUp]' })
export class CountUp {
  readonly target = input.required<number>({ alias: 'appCountUp' });
  readonly locale = input('es-MX');

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly started = signal(false);
  private frame = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Render the final value before the animation starts / when the locale changes.
    effect(() => {
      const value = this.target();
      const locale = this.locale();
      if (!this.started()) {
        this.el.textContent = '0';
      } else if (!this.frame) {
        this.el.textContent = value.toLocaleString(locale);
      }
    });

    afterNextRender(() => {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer.disconnect();
          if (reduceMotion || this.target() === 0) {
            this.started.set(true);
          } else {
            this.animate();
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(this.el);
      destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(this.frame);
      });
    });
  }

  private animate(): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const value = Math.ceil(this.target() * progress);
      this.el.textContent = value.toLocaleString(this.locale());
      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      } else {
        this.frame = 0;
        this.started.set(true);
      }
    };
    this.frame = requestAnimationFrame(step);
  }
}
