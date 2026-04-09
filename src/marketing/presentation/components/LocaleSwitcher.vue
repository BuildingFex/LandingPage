<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const codes = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

function setLocale(code) {
  if (locale.value !== code) {
    locale.value = code
  }
}
</script>

<template>
  <div
    class="locale-switcher"
    role="group"
    aria-label="Idioma / Language"
  >
    <button
      v-for="item in codes"
      :key="item.code"
      type="button"
      class="locale-switcher__btn"
      :class="{ 'locale-switcher__btn--active': locale === item.code }"
      :aria-pressed="locale === item.code"
      :aria-label="item.code === 'es' ? 'Español' : 'English'"
      @click="setLocale(item.code)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
.locale-switcher {
  display: inline-flex;
  flex-shrink: 0;
  align-items: stretch;
  padding: 3px;
  border-radius: var(--apple-radius-pill);
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  font-family: var(--apple-font);
  -webkit-font-smoothing: antialiased;
}

.locale-switcher__btn {
  position: relative;
  margin: 0;
  min-width: 2.5rem;
  padding: 0.35rem 0.7rem;
  border: none;
  border-radius: calc(var(--apple-radius-pill) - 4px);
  background: transparent;
  color: var(--apple-text-secondary);
  font: inherit;
  font-size: var(--apple-header-segment-label-size, 11px);
  font-weight: var(--apple-header-segment-label-weight, 500);
  letter-spacing: var(--apple-header-nav-tracking, -0.01em);
  line-height: 1.2;
  cursor: pointer;
  transition:
    color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;
}

.locale-switcher__btn:hover:not(.locale-switcher__btn--active) {
  color: var(--apple-text);
  background: rgba(255, 255, 255, 0.45);
}

.locale-switcher__btn--active {
  color: var(--apple-text);
  background: #ffffff;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 0 0.5px rgba(0, 0, 0, 0.05);
}

.locale-switcher__btn:focus {
  outline: none;
}

.locale-switcher__btn:focus-visible {
  outline: var(--apple-focus-ring);
  outline-offset: 2px;
  z-index: 1;
}
</style>
