<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { webAppUrl } from '../config.js'

const { t, tm } = useI18n()

const plans = computed(() => tm('subscriptions.plans'))

function subscribeHref(path) {
  const url = webAppUrl(path)
  return url || undefined
}
</script>

<template>
  <section id="subscriptions" class="subs" aria-labelledby="subscriptions-title">
    <div class="subs__inner">
      <h2 id="subscriptions-title" class="subs__heading">{{ t('subscriptions.heading') }}</h2>

      <ul class="subs__grid" role="list">
        <li
          v-for="(plan, i) in plans"
          :key="plan.id"
          class="subs__card"
          :class="{ 'subs__card--featured': i === 1 }"
        >
          <div class="subs__header">
            <h3 class="subs__name">{{ plan.name }}</h3>
            <p class="subs__price-line">{{ t('subscriptions.priceFmt', { price: plan.price }) }}</p>
            <p class="subs__range-line">{{ plan.range }}</p>
            <p class="subs__highlight">{{ plan.highlight }}</p>
          </div>

          <div class="subs__rule" role="presentation" />

          <ul class="subs__features" role="list">
            <li v-for="(line, j) in plan.features" :key="j" class="subs__feature">
              <i class="pi pi-check subs__check" aria-hidden="true" />
              <span>{{ line }}</span>
            </li>
          </ul>

          <Button
            v-if="subscribeHref(plan.path)"
            class="subs__cta"
            as="a"
            :href="subscribeHref(plan.path)"
            :label="t('subscriptions.ctaLabel')"
            rounded
            severity="info"
          />
          <Button
            v-else
            class="subs__cta"
            disabled
            :label="t('subscriptions.ctaLabel')"
            rounded
            severity="info"
            :title="t('subscriptions.ctaDisabledHint')"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.subs {
  /* Alineado al azul de marca (main.css) */
  --subs-accent: var(--apple-blue);
  --subs-accent-hover: var(--apple-blue-hover);

  padding: 3.25rem max(1rem, env(safe-area-inset-left)) 4rem max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: var(--apple-bg-secondary);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.subs__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.subs__heading {
  margin: 0 0 2.25rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.07;
  color: var(--apple-text);
  text-align: center;
}

.subs__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  align-items: stretch;
}

@media (min-width: 640px) and (max-width: 899px) {
  .subs__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .subs__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

.subs__card {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem 1.75rem;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 28px rgba(0, 0, 0, 0.06);
}

.subs__card--featured {
  border-color: rgba(var(--apple-blue-rgb), 0.22);
  box-shadow:
    0 4px 16px rgba(var(--apple-blue-rgb), 0.1),
    0 20px 40px rgba(0, 0, 0, 0.08);
}

.subs__header {
  margin-bottom: 1.25rem;
}

.subs__name {
  margin: 0 0 0.85rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--subs-accent);
}

.subs__price-line {
  margin: 0 0 0.5rem;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--apple-text);
}

.subs__range-line {
  margin: 0 0 0.5rem;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--apple-text);
}

.subs__highlight {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.015em;
  color: var(--apple-text);
}

.subs__rule {
  height: 1px;
  margin: 0 0 1.25rem;
  background: var(--apple-border-hairline);
  flex-shrink: 0;
}

.subs__features {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.subs__feature {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--apple-text);
}

.subs__check {
  flex-shrink: 0;
  margin-top: 0.15rem;
  font-size: 0.75rem;
  color: var(--subs-accent);
}

.subs__cta {
  margin-top: auto;
  align-self: flex-start;
}

.subs__cta :deep(.p-button) {
  background: var(--subs-accent) !important;
  border-color: var(--subs-accent) !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 0.875rem !important;
  letter-spacing: -0.01em;
  border-radius: 980px !important;
  padding: 0.6rem 1.35rem !important;
  min-width: auto;
  box-shadow: 0 2px 10px rgba(var(--apple-blue-rgb), 0.3);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.subs__cta :deep(.p-button:hover:not(:disabled)) {
  background: var(--subs-accent-hover) !important;
  border-color: var(--subs-accent-hover) !important;
  box-shadow: 0 4px 14px rgba(var(--apple-blue-rgb), 0.35);
}

.subs__cta :deep(.p-button:focus-visible) {
  outline: var(--apple-focus-ring);
  outline-offset: var(--apple-focus-ring-offset);
}

.subs__cta :deep(.p-button:disabled) {
  opacity: 0.45;
}

@media (max-width: 639px) {
  .subs__card {
    padding: 1.5rem 1.2rem 1.5rem;
  }

  .subs__cta {
    align-self: stretch;
  }

  .subs__cta :deep(.p-button) {
    width: 100%;
    justify-content: center;
  }
}
</style>
