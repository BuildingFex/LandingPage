<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const cards = computed(() => tm('hero.cards'))

const { targetRef: hlRevealRoot, isVisible: hlRevealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="hero-highlights"
    ref="hlRevealRoot"
    class="hl"
    :class="{ 'hl--revealed': hlRevealVisible }"
    aria-labelledby="hl-title"
  >
    <div class="hl__inner">
      <h2 id="hl-title" class="hl__title">{{ t('hero.columnTitle') }}</h2>
      <ul class="hl__grid" role="list">
        <li v-for="(card, i) in cards" :key="i" class="hl-card" :style="{ '--hl-stagger': i }">
          <h3 class="hl-card__title">{{ card.title }}</h3>
          <p class="hl-card__text">{{ card.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hl {
  padding: 3.25rem max(1rem, env(safe-area-inset-left)) 3.75rem max(1rem, env(safe-area-inset-right));
  background: var(--apple-bg-secondary);
  border-bottom: 1px solid var(--apple-border-hairline);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.hl__inner {
  max-width: 1068px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

/* WhatsApp-style scroll reveal: fade + rise + light ease-out (colors unchanged) */
.hl__title {
  margin: 0 auto 2.25rem;
  max-width: 32rem;
  text-align: center;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--apple-text);
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

.hl--revealed .hl__title {
  animation: lp-rise-title 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hl__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
  align-items: stretch;
}

@media (min-width: 640px) {
  .hl__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 900px) {
  .hl__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tarjetas: entrada estilo WhatsApp (stagger) + hover azul de marca */
.hl-card {
  --hl-card-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --hl-card-spring: cubic-bezier(0.34, 1.2, 0.64, 1);
  --hl-stagger: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 32px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  opacity: 0;
  transform: translate3d(0, 48px, 0) scale(0.985);
  transition:
    background-color 0.45s var(--hl-card-ease),
    border-color 0.45s var(--hl-card-ease),
    box-shadow 0.45s var(--hl-card-ease),
    transform 0.5s var(--hl-card-spring);
}

.hl--revealed .hl-card {
  animation: lp-rise-card 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(0.08s + var(--hl-stagger) * 0.085s);
}

.hl-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background: radial-gradient(120% 90% at 50% -10%, rgba(255, 255, 255, 0.14), transparent 52%);
  opacity: 0;
  transition: opacity 0.5s var(--hl-card-ease);
  pointer-events: none;
}

.hl-card:hover {
  background: var(--apple-blue);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow:
    0 16px 48px rgba(var(--apple-blue-rgb), 0.35),
    0 4px 12px rgba(var(--apple-blue-rgb), 0.2);
  transform: translateY(-5px);
}

.hl-card:hover::before {
  opacity: 1;
}

.hl-card__title,
.hl-card__text {
  position: relative;
  z-index: 1;
  transition: color 0.45s var(--hl-card-ease);
}

.hl-card__title {
  margin: 0 0 0.375rem;
  font-size: clamp(1.25rem, 2.2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--apple-text);
}

.hl-card__text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.016em;
  font-weight: 400;
  color: #6e6e73;
}

.hl-card:hover .hl-card__title {
  color: #f5f5f7;
}

.hl-card:hover .hl-card__text {
  color: rgba(255, 255, 255, 0.9);
}

@media (prefers-reduced-motion: reduce) {
  .hl__title,
  .hl-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .hl-card,
  .hl-card::before,
  .hl-card__title,
  .hl-card__text {
    transition-duration: 0.01ms;
  }

  .hl-card:hover {
    transform: none;
  }
}

@media (max-width: 519px) {
  .hl-card {
    padding: 0.75rem;
    border-radius: 18px;
  }
}
</style>
