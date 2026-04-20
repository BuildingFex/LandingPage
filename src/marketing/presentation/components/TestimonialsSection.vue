<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const items = computed(() => tm('testimonials.items'))

const { targetRef: revealRoot, isVisible: revealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="testimonios"
    ref="revealRoot"
    class="tstm"
    :class="{ 'tstm--revealed': revealVisible }"
    aria-labelledby="tstm-heading"
  >
    <div class="tstm__inner">
      <h2 id="tstm-heading" class="tstm__title tstm__reveal" style="--reveal-i: 0">{{ t('testimonials.heading') }}</h2>
      <p class="tstm__lead tstm__reveal" style="--reveal-i: 1">{{ t('testimonials.lead') }}</p>
      <ul class="tstm__grid" role="list">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="tstm__card tstm__reveal"
          :style="{ '--reveal-i': i + 2, '--tstm-stagger': i }"
        >
          <span class="tstm__quote-mark pi pi-comments" aria-hidden="true" />
          <blockquote class="tstm__quote">
            <p>{{ item.quote }}</p>
          </blockquote>
          <footer class="tstm__meta">
            <p class="tstm__name">{{ item.name }}</p>
            <p class="tstm__role">{{ item.role }}</p>
          </footer>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.tstm {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: var(--apple-bg-secondary);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.tstm__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.tstm__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
  color: #000000;
}

.tstm__lead {
  margin: 0 0 clamp(2rem, 4vw, 2.75rem);
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: #666666;
}

.tstm__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .tstm__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.35rem;
  }
}

.tstm__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.35rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.tstm--revealed .tstm__card {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(0.1s + var(--tstm-stagger, 0) * 0.09s);
}

.tstm__quote-mark {
  display: block;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: var(--apple-blue);
  opacity: 0.85;
}

.tstm__quote {
  margin: 0 0 1.25rem;
  padding: 0;
  border: 0;
  flex: 1;
}

.tstm__quote p {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  letter-spacing: -0.012em;
  color: #333333;
}

.tstm__meta {
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.tstm__name {
  margin: 0 0 0.2rem;
  font-size: 0.9375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #000000;
}

.tstm__role {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: #888888;
}

.tstm__reveal:not(.tstm__card) {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

.tstm--revealed .tstm__reveal:not(.tstm__card) {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

@media (prefers-reduced-motion: reduce) {
  .tstm__reveal,
  .tstm__card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
