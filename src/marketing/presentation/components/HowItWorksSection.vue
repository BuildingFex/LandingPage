<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const steps = computed(() => tm('howItWorks.steps'))

const { targetRef: revealRoot, isVisible: revealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="como-funciona"
    ref="revealRoot"
    class="hiw"
    :class="{ 'hiw--revealed': revealVisible }"
    aria-labelledby="hiw-heading"
  >
    <div class="hiw__inner">
      <h2 id="hiw-heading" class="hiw__title hiw__reveal" style="--reveal-i: 0">{{ t('howItWorks.heading') }}</h2>
      <p class="hiw__lead hiw__reveal" style="--reveal-i: 1">{{ t('howItWorks.lead') }}</p>
      <ol class="hiw__steps" role="list">
        <li
          v-for="(step, i) in steps"
          :key="i"
          class="hiw__step hiw__reveal"
          :style="{ '--reveal-i': i + 2, '--hiw-stagger': i }"
        >
          <div class="hiw__step-head">
            <span class="hiw__num" aria-hidden="true">{{ step.number }}</span>
            <span class="hiw__icon-wrap" aria-hidden="true">
              <i :class="['hiw__icon', 'pi', step.icon]" />
            </span>
          </div>
          <div class="hiw__step-body">
            <h3 class="hiw__step-title">{{ step.title }}</h3>
            <p class="hiw__step-text">{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.hiw {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: #ffffff;
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.hiw__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.hiw__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
  color: #000000;
}

.hiw__lead {
  margin: 0 0 clamp(2rem, 4vw, 2.75rem);
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: #666666;
}

.hiw__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.35rem;
}

@media (min-width: 768px) {
  .hiw__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}

.hiw__step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.35rem 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fafafa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.hiw--revealed .hiw__step {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(0.12s + var(--hiw-stagger, 0) * 0.1s);
}

.hiw__step-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.hiw__num {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(0, 0, 0, 0.08);
  line-height: 1;
}

.hiw__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 10px;
  background: var(--apple-blue);
  color: #ffffff;
}

.hiw__icon {
  font-size: 1.2rem;
  line-height: 1;
}

.hiw__step-title {
  margin: 0 0 0.45rem;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #000000;
}

.hiw__step-text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.012em;
  color: #666666;
}

.hiw__reveal {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

.hiw--revealed .hiw__reveal:not(.hiw__step) {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

@media (prefers-reduced-motion: reduce) {
  .hiw__reveal,
  .hiw__step {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
