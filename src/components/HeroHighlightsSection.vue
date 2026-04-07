<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const cards = computed(() => tm('hero.cards'))
</script>

<template>
  <section class="hl" id="hero-highlights" aria-labelledby="hl-title">
    <div class="hl__inner">
      <h2 id="hl-title" class="hl__title">{{ t('hero.columnTitle') }}</h2>
      <ul class="hl__grid" role="list">
        <li v-for="(card, i) in cards" :key="i" class="hl-card">
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

.hl__title {
  margin: 0 auto 2.25rem;
  max-width: 32rem;
  text-align: center;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--apple-text);
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

/* Tarjetas blancas, radio amplio, sombra suave (referencia tipo Apple, sin CTA) */
.hl-card {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 32px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.hl-card:hover {
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 20px 40px rgba(0, 0, 0, 0.08);
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

@media (max-width: 519px) {
  .hl-card {
    padding: 0.75rem;
    border-radius: 18px;
  }
}
</style>
