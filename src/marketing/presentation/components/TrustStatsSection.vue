<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const stats = computed(() => tm('trustStats.stats'))

const { targetRef: revealRoot, isVisible: revealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="confianza"
    ref="revealRoot"
    class="trust"
    :class="{ 'trust--revealed': revealVisible }"
    aria-labelledby="trust-heading"
  >
    <div class="trust__inner">
      <h2 id="trust-heading" class="trust__title trust__reveal" style="--reveal-i: 0">{{ t('trustStats.heading') }}</h2>
      <p class="trust__lead trust__reveal" style="--reveal-i: 1">{{ t('trustStats.lead') }}</p>
      <ul class="trust__grid" role="list">
        <li
          v-for="(stat, i) in stats"
          :key="i"
          class="trust__cell trust__reveal"
          :style="{ '--reveal-i': i + 2, '--trust-stagger': i }"
        >
          <p class="trust__value">{{ stat.value }}</p>
          <p class="trust__label">{{ stat.label }}</p>
          <p class="trust__hint">{{ stat.hint }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.trust {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: #ffffff;
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.trust__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.trust__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
  color: #000000;
}

.trust__lead {
  margin: 0 0 clamp(2rem, 4vw, 2.75rem);
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: #666666;
}

.trust__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 700px) {
  .trust__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

.trust__cell {
  text-align: center;
  padding: 1.5rem 1.15rem;
  border-radius: 12px;
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  border: 1px solid rgba(0, 112, 201, 0.12);
  box-shadow: 0 4px 14px rgba(0, 112, 201, 0.06);
  opacity: 0;
  transform: translate3d(0, 24px, 0);
}

.trust--revealed .trust__cell {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(0.08s + var(--trust-stagger, 0) * 0.09s);
}

.trust__value {
  margin: 0 0 0.35rem;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--apple-blue);
}

.trust__label {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #000000;
}

.trust__hint {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: #777777;
}

.trust__reveal:not(.trust__cell) {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

.trust--revealed .trust__reveal:not(.trust__cell) {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

@media (prefers-reduced-motion: reduce) {
  .trust__reveal,
  .trust__cell {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
