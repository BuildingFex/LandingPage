<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const items = computed(() => tm('features.items'))
</script>

<template>
  <section id="beneficios" class="feat" aria-labelledby="feat-heading">
    <div class="feat__inner">
      <header class="feat__header">
        <h2 id="feat-heading" class="feat__heading">{{ t('features.heading') }}</h2>
        <p class="feat__sub">{{ t('features.sub') }}</p>
      </header>

      <ul class="feat__grid" role="list">
        <li v-for="(item, i) in items" :key="i" class="feat-card">
          <div class="feat-card__icon-wrap" aria-hidden="true">
            <i :class="['feat-card__icon', 'pi', item.icon]" />
          </div>
          <h3 class="feat-card__title">{{ item.title }}</h3>
          <p class="feat-card__text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.feat {
  padding: 3.25rem max(1rem, env(safe-area-inset-left)) 4rem max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: var(--apple-bg-secondary);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.feat__inner {
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.feat__header {
  margin: 0 auto 2.75rem;
  max-width: 40rem;
  text-align: center;
}

.feat__heading {
  margin: 0 0 0.85rem;
  font-size: clamp(1.65rem, 3.2vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.1;
  color: var(--apple-text);
}

.feat__sub {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.5;
  letter-spacing: -0.018em;
  color: var(--apple-text-secondary);
}

.feat__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) and (max-width: 719px) {
  .feat__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 720px) {
  .feat__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.35rem;
    align-items: stretch;
  }
}

@media (max-width: 639px) {
  .feat-card {
    padding: 1.35rem 1.15rem 1.5rem;
  }
}

.feat-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.75rem 1.5rem 2rem;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 32px rgba(0, 0, 0, 0.06);
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.feat-card:hover {
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.07),
    0 20px 48px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.feat-card__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.15rem;
  border-radius: 14px;
  background: rgba(var(--apple-blue-rgb), 0.08);
  color: var(--apple-blue);
}

.feat-card__icon {
  font-size: 1.35rem;
  line-height: 1;
}

.feat-card__title {
  margin: 0 0 0.65rem;
  font-size: 1.1875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--apple-text);
}

.feat-card__text {
  margin: 0;
  flex: 1;
  font-size: 0.9375rem;
  line-height: 1.5;
  letter-spacing: -0.014em;
  color: #424245;
}

@media (max-width: 719px) {
  .feat__header {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }
}
</style>
