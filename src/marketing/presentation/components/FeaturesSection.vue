<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const items = computed(() => tm('features.items'))
const paragraphs = computed(() => tm('features.paragraphs'))

const { targetRef: featRevealRoot, isVisible: featRevealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="beneficios"
    ref="featRevealRoot"
    class="feat"
    :class="{ 'feat--revealed': featRevealVisible }"
    aria-labelledby="feat-heading"
  >
    <div class="feat__inner">
      <div class="feat__split">
        <div class="feat__copy">
          <h2
            id="feat-heading"
            class="feat__headline feat__reveal"
            style="--reveal-i: 0"
            :aria-label="t('features.heading')"
          >
            <span class="feat__headline-black">{{ t('features.headingBlack') }}</span>
            <span class="feat__headline-accent">{{ t('features.headingOrange') }}</span>
          </h2>
          <p
            v-for="(para, j) in paragraphs"
            :key="j"
            class="feat__para feat__reveal"
            :style="{ '--reveal-i': j + 1 }"
          >
            {{ para }}
          </p>
        </div>

        <ul class="feat__cards" role="list">
          <li
            v-for="(item, i) in items"
            :key="i"
            class="feat-card"
            :style="{ '--feat-stagger': i }"
          >
            <div class="feat-card__icon-wrap" aria-hidden="true">
              <i :class="['feat-card__icon', 'pi', item.icon]" />
            </div>
            <div class="feat-card__body">
              <h3 class="feat-card__title">{{ item.title }}</h3>
              <p class="feat-card__text">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feat {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: #ffffff;
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.feat__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.feat__split {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.25rem, 5vw, 3.5rem);
  align-items: start;
}

@media (min-width: 900px) {
  .feat__split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 5vw, 4rem);
  }
}

.feat__copy {
  max-width: 36rem;
}

@media (min-width: 900px) {
  .feat__copy {
    max-width: none;
    padding-right: 0.5rem;
  }
}

.feat__headline {
  margin: 0 0 1.5rem;
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
}

.feat__headline-black {
  display: block;
  color: #000000;
}

.feat__headline-accent {
  display: block;
  color: var(--apple-blue);
  white-space: pre-line;
}

.feat__para {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: #666666;
}

.feat__para:last-of-type {
  margin-bottom: 0;
}

.feat__reveal {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
}

.feat--revealed .feat__reveal {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

.feat__cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

@media (min-width: 900px) {
  .feat__cards {
    gap: 1.5rem;
  }
}

.feat-card {
  --feat-stagger: 0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.1rem;
  padding: 1.25rem 1.2rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translate3d(0, 40px, 0) scale(0.99);
  transition:
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.feat--revealed .feat-card {
  animation: lp-rise-card 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(0.1s + var(--feat-stagger) * 0.09s);
}

.feat-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.feat-card__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 10px;
  background: var(--apple-blue);
  color: #ffffff;
}

.feat-card__icon {
  font-size: 1.35rem;
  line-height: 1;
}

.feat-card__body {
  min-width: 0;
  flex: 1;
}

.feat-card__title {
  margin: 0 0 0.4rem;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #000000;
}

.feat-card__text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.012em;
  color: #666666;
}

@media (prefers-reduced-motion: reduce) {
  .feat__reveal,
  .feat-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .feat-card:hover {
    transform: none;
  }
}
</style>
