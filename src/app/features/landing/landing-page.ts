import { ChangeDetectionStrategy, Component } from '@angular/core';
import { usePageMeta } from '../../core/seo/page-meta';
import { BottomCta } from './components/bottom-cta/bottom-cta';
import { FaqSection } from './components/faq-section/faq-section';
import { FeaturesSection } from './components/features-section/features-section';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { PricingSection } from './components/pricing-section/pricing-section';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SolutionsSection } from './components/solutions-section/solutions-section';
import { StatsBar } from './components/stats-bar/stats-bar';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    Hero,
    StatsBar,
    FeaturesSection,
    HowItWorks,
    SolutionsSection,
    TestimonialsSection,
    PricingSection,
    FaqSection,
    BottomCta,
    SiteFooter,
  ],
  template: `
    <app-site-header />
    <main>
      <app-hero />
      <app-stats-bar />
      <app-features-section />
      <app-how-it-works />
      <app-solutions-section />
      <app-testimonials-section />
      <app-pricing-section />
      <app-faq-section />
      <app-bottom-cta />
    </main>
    <app-site-footer />
  `,
})
export class LandingPage {
  constructor() {
    usePageMeta((t) => ({ title: t.meta.homeTitle, description: t.meta.homeDescription }));
  }
}
