import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-testimonials-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  template: `
    @let t = i18n.t().testimonials;
    <section class="section section--light" id="testimonials" aria-labelledby="testimonials-title">
      <div class="container">
        <app-section-heading
          icon="message"
          headingId="testimonials-title"
          [badge]="t.badge"
          [title]="t.title"
          [subtitle]="t.subtitle"
        />

        <div class="testimonials__grid">
          @for (item of t.items; track item.name) {
            <figure class="testimonial-card" appReveal>
              <div class="testimonial-card__stars" role="img" aria-label="5/5">
                @for (star of stars; track star) {
                  <app-icon name="star" [size]="18" />
                }
              </div>
              <blockquote class="testimonial-card__quote">{{ item.quote }}</blockquote>
              <figcaption class="testimonial-card__author">
                <img
                  class="testimonial-card__avatar"
                  [src]="item.avatar"
                  [alt]="item.name"
                  width="52"
                  height="52"
                  loading="lazy"
                />
                <div>
                  <div class="testimonial-card__name">{{ item.name }}</div>
                  <div class="testimonial-card__role">{{ item.role }}</div>
                </div>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .testimonials__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
    }

    .testimonial-card {
      background: var(--white);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      border: 1px solid var(--gray-200);
      transition: all var(--transition-base);
      display: flex;
      flex-direction: column;
    }

    .testimonial-card:hover {
      box-shadow: var(--shadow-lg);
      border-color: var(--blue-200);
      transform: translateY(-2px);
    }

    .testimonial-card__stars {
      display: flex;
      gap: 2px;
      margin-bottom: var(--space-lg);
      color: #f59e0b;
    }

    .testimonial-card__quote {
      flex: 1;
      font-size: 1.0625rem;
      color: var(--gray-700);
      line-height: 1.7;
      margin-bottom: var(--space-xl);
      font-style: italic;
      position: relative;
    }

    .testimonial-card__quote::before {
      content: '“';
      font-family: Georgia, serif;
      font-size: 3.5rem;
      color: var(--blue-200);
      position: absolute;
      top: -20px;
      left: -5px;
      line-height: 1;
      opacity: 0.5;
    }

    .testimonial-card__author {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .testimonial-card__avatar {
      width: 52px;
      height: 52px;
      flex-shrink: 0;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--blue-100);
    }

    .testimonial-card__name {
      font-weight: 700;
      color: var(--gray-900);
      font-size: 0.9375rem;
    }

    .testimonial-card__role {
      font-size: 0.8125rem;
      color: var(--gray-500);
    }

    @media (max-width: 768px) {
      .testimonials__grid {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
      }

      .testimonial-card {
        padding: var(--space-xl) var(--space-lg);
      }

      .testimonial-card__quote {
        font-size: 1rem;
      }
    }
  `,
})
export class TestimonialsSection {
  protected readonly i18n = inject(LanguageService);
  protected readonly stars = [1, 2, 3, 4, 5];
}
