<script setup>
import { useI18n } from 'vue-i18n'
import SkipLink from '../components/SkipLink.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const { t } = useI18n()
</script>

<template>
  <div class="privacy-page">
    <SkipLink />
    <SiteHeader />
    <main id="main-content" class="privacy-main" role="main" tabindex="-1">
      <article class="privacy-article" aria-labelledby="privacy-heading">
        <h1 id="privacy-heading" class="privacy-h1">{{ t('privacy.title') }}</h1>
        <p class="privacy-p">{{ t('privacy.lead') }}</p>
      </article>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--apple-bg);
  font-family: var(--apple-font);
  -webkit-font-smoothing: antialiased;
}

.privacy-main {
  flex: 1;
  padding: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height) + 1.25rem) 1.25rem 3rem;
}

.privacy-article {
  max-width: 720px;
  margin: 0 auto;
}

.privacy-h1 {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--apple-text);
}

.privacy-p {
  margin: 0;
  font-size: 17px;
  line-height: 1.47;
  letter-spacing: -0.022em;
  color: var(--apple-text-secondary);
}
</style>
