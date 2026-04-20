<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SkipLink from '../components/SkipLink.vue'
import HeroSection from '../components/HeroSection.vue'
import HeroHighlightsSection from '../components/HeroHighlightsSection.vue'
import SubscriptionsSection from '../components/SubscriptionsSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import HowItWorksSection from '../components/HowItWorksSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TrustStatsSection from '../components/TrustStatsSection.vue'
import VideosSection from '../components/VideosSection.vue'
import CtaSection from '../components/CtaSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div class="landing">
    <SkipLink />
    <SiteHeader />
    <HeroSection />
    <HeroHighlightsSection />
    <main id="main-content" role="main" tabindex="-1">
      <SubscriptionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TrustStatsSection />
      <VideosSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
}

main {
  flex: 1;
  min-width: 0;
}
</style>
