<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { webAppUrl } from '../config.js'

const { t } = useI18n()

const appEntry = computed(() => webAppUrl('/app'))
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero__media" aria-hidden="true">
      <div class="hero__bg" />
      <div class="hero__overlay" />
    </div>

    <p class="hero__watermark" aria-hidden="true">{{ t('hero.watermark') }}</p>

    <span class="hero__beta">{{ t('hero.beta') }}</span>

    <div class="hero__layout">
      <div class="hero__content">
        <div class="hero__logo-wrap">
          <img
            src="/logo-buildingfex.png"
            :alt="t('brand')"
            class="hero__logo-img"
            width="240"
            height="52"
            decoding="async"
          />
        </div>

        <p class="hero__eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1 class="hero__title">{{ t('hero.title') }}</h1>
        <p class="hero__lead">{{ t('hero.lead') }}</p>

        <Button
          v-if="appEntry"
          class="hero__cta"
          :label="t('hero.ctaPrimary')"
          icon="pi pi-arrow-right"
          iconPos="right"
          rounded
          as="a"
          :href="appEntry"
          severity="info"
        />
        <Button
          v-else
          class="hero__cta"
          :label="t('hero.ctaPrimary')"
          icon="pi pi-arrow-right"
          iconPos="right"
          rounded
          as="a"
          href="/#contacto"
          severity="info"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero: Apple marketing — tipografía del sistema, cristal mate, CTA azul */
.hero {
  --hero-fg: #f5f5f7;
  --hero-fg-muted: rgba(245, 245, 247, 0.72);
  --hero-fg-eyebrow: rgba(245, 245, 247, 0.58);
  --hero-glass: rgba(255, 255, 255, 0.14);
  --hero-glass-border: rgba(255, 255, 255, 0.22);
  /* CTA solo en hero: píldora clara sobre imagen oscura */
  --hero-cta-bg: #f5f5f7;
  --hero-cta-bg-hover: #ffffff;
  --hero-cta-fg: #1d1d1f;

  position: relative;
  isolation: isolate;
  min-height: min(88vh, 920px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: var(--apple-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0a0a0a;
}

.hero__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-image: url('/hero-bg.png');
  background-size: cover;
  background-position: center 35%;
  transform: scale(1.02);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.68) 0%,
      rgba(0, 0, 0, 0.42) 45%,
      rgba(0, 0, 0, 0.18) 72%,
      transparent 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.22) 52%, rgba(0, 0, 0, 0.04) 100%);
}

.hero__watermark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -52%);
  z-index: 1;
  margin: 0;
  font-size: clamp(3.5rem, 18vw, 14rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1;
  color: rgba(255, 255, 255, 0.065);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

.hero__beta {
  position: absolute;
  top: max(1rem, env(safe-area-inset-top));
  right: max(1rem, env(safe-area-inset-right));
  z-index: 3;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hero-fg);
  background: var(--hero-glass);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 0.4rem 0.75rem;
  border-radius: var(--apple-radius-pill);
  border: 1px solid var(--hero-glass-border);
}

.hero__layout {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem max(1.25rem, env(safe-area-inset-right)) 2.75rem max(1.25rem, env(safe-area-inset-left));
}

@media (min-width: 900px) {
  .hero__layout {
    padding-bottom: 3rem;
    padding-top: 7rem;
  }
}

.hero__content {
  max-width: 38rem;
}

.hero__logo-wrap {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 0.85rem;
  margin-bottom: 1.35rem;
  background: rgba(251, 251, 253, 0.92);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-radius: var(--apple-radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: var(--apple-shadow-md);
}

.hero__logo-img {
  display: block;
  width: auto;
  max-width: min(220px, 72vw);
  height: auto;
  max-height: 44px;
  object-fit: contain;
  object-position: left center;
}

.hero__eyebrow {
  margin: 0 0 0.65rem;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--hero-fg-eyebrow);
}

.hero__title {
  margin: 0 0 0.85rem;
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--hero-fg);
  text-shadow: 0 2px 32px rgba(0, 0, 0, 0.35);
}

.hero__lead {
  margin: 0 0 1.85rem;
  font-size: 17px;
  line-height: 1.47059;
  letter-spacing: -0.022em;
  color: var(--hero-fg-muted);
  max-width: 42ch;
}

.hero__cta {
  width: fit-content;
  max-width: 100%;
}

.hero__cta :deep(.p-button) {
  background: var(--hero-cta-bg) !important;
  border: none !important;
  color: var(--hero-cta-fg) !important;
  font-weight: 500 !important;
  font-size: 17px !important;
  letter-spacing: -0.022em;
  line-height: 1.17647;
  padding: 0.7rem 1.45rem !important;
  border-radius: var(--apple-radius-pill) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease !important;
}

.hero__cta :deep(.p-button:hover) {
  background: var(--hero-cta-bg-hover) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.32);
  transform: translateY(-1px);
}

.hero__cta :deep(.p-button:focus-visible) {
  outline: 2px solid rgba(255, 255, 255, 0.95);
  outline-offset: 3px;
}

.hero__cta :deep(.p-button .p-button-label),
.hero__cta :deep(.p-button .p-button-icon) {
  color: var(--hero-cta-fg) !important;
}

@media (max-width: 639px) {
  .hero {
    min-height: min(100dvh, 720px);
  }

  .hero__layout {
    padding-top: 4.75rem;
    padding-bottom: max(2rem, env(safe-area-inset-bottom));
  }

  .hero__title {
    font-size: clamp(1.6rem, 7vw, 2.35rem);
  }

  .hero__lead {
    max-width: none;
    font-size: 1rem;
  }

  .hero__cta {
    width: 100%;
  }

  .hero__cta :deep(.p-button) {
    width: 100%;
    justify-content: center;
  }
}
</style>
