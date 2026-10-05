import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/** Fades/slides the host in the first time it enters the viewport. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'animate-on-scroll' },
})
export class Reveal {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        el.classList.add('visible');
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('visible');
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
