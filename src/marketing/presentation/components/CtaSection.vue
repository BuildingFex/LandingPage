<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const { targetRef: ctaRevealRoot, isVisible: ctaRevealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})

const query = ref('')

const faqItems = computed(() => tm('cta.faqItems') || [])

const filteredFaq = computed(() => {
  const list = faqItems.value
  const q = query.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(
    (item) =>
      String(item.question).toLowerCase().includes(q) ||
      String(item.answer).toLowerCase().includes(q),
  )
})
</script>

<template>
  <section
    id="contacto"
    ref="ctaRevealRoot"
    class="cta"
    :class="{ 'cta--revealed': ctaRevealVisible }"
    aria-labelledby="cta-hero-title"
  >
    <div class="cta__wrap">
      <div class="cta__grid">
        <div class="cta__left">
          <h2 id="cta-hero-title" class="cta__hero-title cta__reveal--title" style="--reveal-i: 0">
            {{ t('cta.heroTitle') }}
          </h2>

          <label class="cta__search-label cta__reveal" style="--reveal-i: 1">
            <span class="cta__search-icon pi pi-search" aria-hidden="true" />
            <input
              v-model="query"
              class="cta__search-input"
              type="search"
              name="faq-search"
              autocomplete="off"
              :placeholder="t('cta.searchPlaceholder')"
              :aria-label="t('cta.searchAria')"
            />
          </label>

          <h3 class="cta__faq-heading cta__reveal" style="--reveal-i: 2">{{ t('cta.faqTitle') }}</h3>
          <p class="cta__support cta__reveal" style="--reveal-i: 3">
            {{ t('cta.supportBefore') }}<strong>{{ t('cta.supportBold') }}</strong>{{ t('cta.supportAfter') }}
          </p>
        </div>

        <div class="cta__right">
          <div class="cta__faq-card cta__reveal" style="--reveal-i: 4">
            <template v-if="filteredFaq.length">
              <details
                v-for="(item, i) in filteredFaq"
                :key="`${item.question}-${i}`"
                class="cta__details"
              >
                <summary class="cta__summary">
                  <span class="cta__question">{{ item.question }}</span>
                  <span class="cta__chev pi pi-angle-down" aria-hidden="true" />
                </summary>
                <div class="cta__answer">
                  <p>{{ item.answer }}</p>
                </div>
              </details>
            </template>
            <p v-else class="cta__empty">{{ t('cta.searchEmpty') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 3rem max(1rem, env(safe-area-inset-left)) 4rem max(1rem, env(safe-area-inset-right));
  background: var(--apple-bg-secondary);
  border-top: 1px solid var(--apple-border-hairline);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.cta__wrap {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.cta__grid {
  display: grid;
  gap: 2.5rem;
  align-items: start;
}

@media (min-width: 900px) {
  .cta__grid {
    grid-template-columns: minmax(260px, 1fr) minmax(320px, 1.15fr);
    gap: 3rem;
  }
}

.cta__reveal {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.cta--revealed .cta__reveal {
  animation: lp-rise-block 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

.cta__reveal--title {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

.cta--revealed .cta__reveal--title {
  animation: lp-rise-title 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

.cta__hero-title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.75rem, 3.2vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--apple-text);
}

.cta__search-label {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 2rem;
  padding: 0.65rem 1.1rem;
  border-radius: 980px;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.cta__search-label:focus-within {
  background: #ffffff;
  border-color: var(--apple-border-hairline);
  box-shadow: 0 0 0 3px rgba(var(--apple-blue-rgb), 0.15);
}

.cta__search-icon {
  font-size: 0.95rem;
  color: var(--apple-text-tertiary);
  flex-shrink: 0;
}

.cta__search-input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 1rem;
  letter-spacing: -0.016em;
  color: var(--apple-text);
  outline: none;
}

.cta__search-input::placeholder {
  color: var(--apple-text-secondary);
}

.cta__faq-heading {
  margin: 0 0 0.65rem;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--apple-text);
}

.cta__support {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.015em;
  color: var(--apple-text-secondary);
}

.cta__support strong {
  color: var(--apple-text);
  font-weight: 700;
}

.cta__faq-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 28px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.cta__details {
  border-bottom: 1px solid var(--apple-border-hairline);
}

.cta__details:last-child {
  border-bottom: none;
}

.cta__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  list-style: none;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: var(--apple-text);
  user-select: none;
}

.cta__summary::-webkit-details-marker {
  display: none;
}

.cta__question {
  flex: 1;
  text-align: left;
}

.cta__chev {
  flex-shrink: 0;
  font-size: 0.85rem;
  color: var(--apple-text-tertiary);
  transition: transform 0.2s ease;
}

.cta__details[open] .cta__chev {
  transform: rotate(-180deg);
}

.cta__answer {
  padding: 0 1.25rem 1.15rem;
  margin-top: -0.25rem;
}

.cta__answer p {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--apple-text-secondary);
}

.cta__empty {
  margin: 0;
  padding: 1.5rem 1.25rem;
  font-size: 0.9375rem;
  color: var(--apple-text-secondary);
  text-align: center;
}

@media (max-width: 899px) {
  .cta__summary {
    min-height: 48px;
    padding: 0.85rem 1rem;
    align-items: flex-start;
  }

  .cta__question {
    padding-right: 0.25rem;
  }
}

@media (max-width: 479px) {
  .cta__hero-title {
    font-size: clamp(1.45rem, 6vw, 1.85rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta__reveal,
  .cta__reveal--title {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
