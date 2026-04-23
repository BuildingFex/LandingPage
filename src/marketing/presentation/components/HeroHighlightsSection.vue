<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()

const cards = computed(() => tm('hero.cards'))

const expandedIndex = ref(null)

function toggle(i) {
  expandedIndex.value = expandedIndex.value === i ? null : i
}

function cardAriaLabel(card, i) {
  return expandedIndex.value === i
    ? t('hero.cardToggleCollapse', { title: card.title })
    : t('hero.cardToggleExpand', { title: card.title })
}

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
        <li
          v-for="(card, i) in cards"
          :key="i"
          class="hl-card"
          :class="{ 'hl-card--open': expandedIndex === i }"
          :style="{ '--hl-stagger': i }"
        >
          <div class="hl-card__icon-rail" aria-hidden="true">
            <i :class="['hl-card__glyph', 'pi', card.icon]" />
          </div>
          <div class="hl-card__body">
            <button
              type="button"
              class="hl-card__trigger"
              :aria-expanded="expandedIndex === i"
              :aria-controls="`hl-panel-${i}`"
              :aria-label="cardAriaLabel(card, i)"
              @click="toggle(i)"
            >
              <span class="hl-card__title-row">
                <span class="hl-card__title" role="heading" aria-level="3">{{ card.title }}</span>
                <i class="pi pi-angle-down hl-card__chev" aria-hidden="true" />
              </span>
              <p class="hl-card__text">{{ card.text }}</p>
            </button>
            <div
              :id="`hl-panel-${i}`"
              class="hl-card__panel-wrap"
              role="region"
              :aria-hidden="expandedIndex !== i"
            >
              <div class="hl-card__panel-inner">
                <p class="hl-card__detail">{{ card.detail }}</p>
              </div>
            </div>
          </div>
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
  align-items: start;
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

.hl-card {
  --hl-card-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --hl-card-spring: cubic-bezier(0.34, 1.2, 0.64, 1);
  --hl-stagger: 0;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: visible;
  isolation: isolate;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 32px rgba(0, 0, 0, 0.06);
  padding: 0;
  opacity: 0;
  transform: translate3d(0, 48px, 0) scale(0.985);
  transition:
    background-color 0.45s var(--hl-card-ease),
    border-color 0.45s var(--hl-card-ease),
    box-shadow 0.45s var(--hl-card-ease),
    transform 0.5s var(--hl-card-spring);
}

.hl-card__icon-rail {
  position: relative;
  z-index: 2;
  flex: 0 0 clamp(3.25rem, 24%, 5.5rem);
  max-width: 5.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.5rem;
  background: var(--apple-blue);
  border-radius: 20px 0 0 20px;
  transition: background-color 0.45s var(--hl-card-ease);
}

.hl-card__glyph {
  font-size: clamp(1.35rem, 3.5vw, 1.65rem);
  line-height: 1;
  color: #ffffff;
}

.hl-card__body {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 0 20px 20px 0;
  transition: background-color 0.45s var(--hl-card-ease);
}

.hl-card:hover .hl-card__body {
  background: transparent;
}

.hl--revealed .hl-card {
  animation: lp-rise-card 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(0.08s + var(--hl-stagger) * 0.085s);
}

.hl-card:hover {
  background: var(--apple-blue);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(-5px);
}

.hl-card__trigger {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  padding: 1rem;
  text-align: left;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: color 0.45s var(--hl-card-ease);
}

.hl-card__trigger:focus-visible {
  outline: 2px solid var(--apple-blue);
  outline-offset: 2px;
}

.hl-card:hover .hl-card__trigger:focus-visible {
  outline-color: #ffffff;
}

.hl-card__title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.375rem;
}

.hl-card__title {
  margin: 0;
  font-size: clamp(1.25rem, 2.2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--apple-text);
  transition: color 0.45s var(--hl-card-ease);
}

.hl-card__chev {
  flex-shrink: 0;
  margin-top: 0.2rem;
  font-size: 0.85rem;
  color: var(--apple-text-secondary);
  transition:
    transform 0.4s var(--hl-card-spring),
    color 0.45s var(--hl-card-ease);
}

.hl-card--open .hl-card__chev {
  transform: rotate(180deg);
}

.hl-card__text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.016em;
  font-weight: 400;
  color: #6e6e73;
  transition: color 0.45s var(--hl-card-ease);
}

.hl-card__panel-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.42s var(--hl-card-ease);
}

.hl-card--open .hl-card__panel-wrap {
  grid-template-rows: 1fr;
}

.hl-card__panel-inner {
  overflow: hidden;
  min-height: 0;
}

.hl-card__detail {
  margin: 0;
  padding: 0 1rem 1rem;
  padding-top: 0.35rem;
  font-size: 0.875rem;
  line-height: 1.55;
  letter-spacing: -0.012em;
  color: #4a4a4e;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  transition:
    color 0.45s var(--hl-card-ease),
    border-color 0.45s var(--hl-card-ease);
}

.hl-card:hover .hl-card__title,
.hl-card:hover .hl-card__text {
  color: #f5f5f7;
}

.hl-card:hover .hl-card__chev {
  color: rgba(255, 255, 255, 0.85);
}

.hl-card:hover .hl-card__detail {
  color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.22);
}

@media (prefers-reduced-motion: reduce) {
  .hl__title,
  .hl-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .hl-card,
  .hl-card__title,
  .hl-card__text,
  .hl-card__detail,
  .hl-card__chev,
  .hl-card__panel-wrap {
    transition-duration: 0.01ms;
  }

  .hl-card:hover {
    transform: none;
  }

  .hl-card--open .hl-card__chev {
    transform: rotate(180deg);
  }
}

@media (max-width: 519px) {
  .hl-card {
    border-radius: 18px;
  }

  .hl-card__icon-rail {
    border-radius: 18px 0 0 18px;
    flex-basis: clamp(3rem, 26%, 4.5rem);
    padding: 0.5rem 0.35rem;
  }

  .hl-card__body {
    border-radius: 0 18px 18px 0;
  }

  .hl-card__trigger {
    padding: 0.75rem;
  }

  .hl-card__detail {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-bottom: 0.75rem;
  }
}
</style>
