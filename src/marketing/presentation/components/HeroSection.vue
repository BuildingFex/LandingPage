<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { MarketingRouteNames } from '@/marketing/domain/marketingRoutes.js'
// Hook de internacionalización
const { t } = useI18n()
/**
 * Hero Component
 * -----------------
 * Este componente representa la sección principal (Hero) de la landing page.
 * Incluye:
 * - Imagen de fondo con overlays
 * - Animaciones de entrada progresivas
 * - Contenido internacionalizado (i18n)
 * - Botón CTA que redirige al login
 */
const heroRevealed = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    heroRevealed.value = true
  })
})
</script>

<template>
  <!--
    Sección principal HERO
    - Aplica clase dinámica para activar animaciones
  -->
  <section id="inicio" class="hero" :class="{ 'hero--revealed': heroRevealed }">
    <div class="hero__media" aria-hidden="true">
      <div class="hero__bg" />
      <div class="hero__overlay" />
      <div class="hero__top-shade" />
    </div>

    <div class="hero__layout">
      <div class="hero__content">
        <p class="hero__eyebrow hero__reveal" style="--reveal-i: 0">{{ t('hero.eyebrow') }}</p>
        <h1 class="hero__title hero__reveal--title" style="--reveal-i: 1">{{ t('hero.title') }}</h1>
        <p class="hero__lead hero__reveal" style="--reveal-i: 2">{{ t('hero.lead') }}</p>

        <div class="hero__reveal" style="--reveal-i: 3">
          <Button
            class="hero__cta"
            :as="RouterLink"
            :to="{ name: MarketingRouteNames.LOGIN }"
            :label="t('hero.ctaPrimary')"
            icon="pi pi-arrow-right"
            iconPos="right"
            rounded
            severity="info"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero: Apple marketing — tipografía del sistema, cristal mate, CTA azul */
/*
 * HERO STYLES
 * --------------
 * Diseño inspirado en landing pages modernas (estilo Apple).
 * Incluye:
 * - Fondo oscuro con imagen
 * - Tipografía limpia
 * - CTA tipo píldora
 */
.hero {
  --hero-fg: #f5f5f7;
  --hero-fg-muted: rgba(245, 245, 247, 0.72);
  --hero-fg-eyebrow: rgba(245, 245, 247, 0.58);
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
  /* El header es fixed: el hero empieza arriba del todo y el fondo queda detrás del header */
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

/* Cinta de sombra bajo el header (degradado negro suave hacia abajo) */
.hero__top-shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: min(42vh, 220px);
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.72) 0%,
    rgba(0, 0, 0, 0.38) 38%,
    rgba(0, 0, 0, 0.12) 68%,
    transparent 100%
  );
}

.hero__layout {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height, 4rem) + 3.5rem)
    max(1.25rem, env(safe-area-inset-right)) 2.75rem max(1.25rem, env(safe-area-inset-left));
}

@media (min-width: 900px) {
  .hero__layout {
    padding-bottom: 3rem;
    padding-top: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height, 4rem) + 4.5rem);
  }
}

.hero__content {
  max-width: 38rem;
}

.hero__reveal {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.hero--revealed .hero__reveal {
  animation: lp-rise-block 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.075s);
}

.hero__reveal--title {
  opacity: 0;
  transform: translate3d(0, 36px, 0);
}

.hero--revealed .hero__reveal--title {
  animation: lp-rise-title 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.075s);
}

@media (prefers-reduced-motion: reduce) {
  .hero__reveal,
  .hero__reveal--title {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
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
  overflow: hidden;
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
/**
 *  Responsive (móviles)
 */
@media (max-width: 639px) {
  .hero {
    min-height: min(100dvh, 720px);
  }

  .hero__layout {
    padding-top: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height, 4rem) + 3.25rem);
    padding-bottom: max(2rem, env(safe-area-inset-bottom));
  }

  .hero__title {
    font-size: clamp(1.6rem, 7vw, 2.35rem);
  }

  .hero__lead {
    max-width: none;
    font-size: 1rem;
  }
  /*Botón ocupa ancho en movil */
  .hero__cta {
    width: 100%;
  }

  .hero__cta :deep(.p-button) {
    width: 100%;
    justify-content: center;
  }
}
</style>
