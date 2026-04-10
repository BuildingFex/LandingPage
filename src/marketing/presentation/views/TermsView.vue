<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SkipLink from '../components/SkipLink.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const { t, tm } = useI18n()

const sections = computed(() => tm('terms.sections'))
</script>

<template>
  <div class="terms-page">
    <SkipLink />
    <SiteHeader />
    <main id="main-content" class="terms-main" role="main" tabindex="-1">
      <article class="terms-article" aria-labelledby="terms-heading">
        <h1 id="terms-heading" class="terms-h1">{{ t('terms.title') }}</h1>
        <p class="terms-updated">{{ t('terms.updated') }}</p>
        <section
          v-for="(block, i) in sections"
          :key="i"
          class="terms-block"
          :aria-labelledby="`terms-sec-${i}`"
        >
          <h2 :id="`terms-sec-${i}`" class="terms-h2">{{ block.title }}</h2>
          <p class="terms-p">{{ block.body }}</p>
        </section>
      </article>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.terms-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--apple-bg, #ffffff);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.terms-main {
  flex: 1;
  background: var(--apple-bg);
  color: var(--apple-text);
  padding: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height) + 1.25rem) 1.25rem 3.5rem;
}

.terms-article {
  max-width: 720px;
  margin: 0 auto;
}

.terms-h1 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.75rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.07;
  color: var(--apple-text);
}

.terms-updated {
  margin: 0 0 2rem;
  font-size: 12px;
  line-height: 1.33337;
  letter-spacing: -0.01em;
  color: var(--apple-text-secondary);
}

.terms-block {
  margin-bottom: 1.75rem;
}

.terms-h2 {
  margin: 0 0 0.5rem;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.23536;
  color: var(--apple-text);
}

.terms-p {
  margin: 0;
  font-size: 14px;
  line-height: 1.42859;
  letter-spacing: -0.016em;
  color: var(--apple-text-secondary);
}
</style>
