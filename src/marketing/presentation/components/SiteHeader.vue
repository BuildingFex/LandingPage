<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'
import Button from 'primevue/button'
import LocaleSwitcher from './LocaleSwitcher.vue'
import { MarketingRouteNames } from '@/marketing/domain/marketingRoutes.js'

const { t } = useI18n()
const route = useRoute()

const SCROLL_SOLID_THRESHOLD = 16

const scrollY = ref(0)

const isHeaderTransparent = computed(() => {
  const onHome =
    route.name === MarketingRouteNames.HOME || route.path === '/' || route.path === ''
  return onHome && scrollY.value <= SCROLL_SOLID_THRESHOLD
})

function updateScroll() {
  scrollY.value = window.scrollY || 0
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

const nav = computed(() => [
  { hash: '#inicio', label: t('nav.home') },
  { hash: '#subscriptions', label: t('nav.subscriptions') },
  { hash: '#beneficios', label: t('nav.benefits') },
  { hash: '#contacto', label: t('nav.contact') },
])

function navLinkIsActive(hash) {
  if (route.name !== MarketingRouteNames.HOME) return false
  if (hash === '#inicio') return route.hash === '' || route.hash === '#inicio'
  return route.hash === hash
}
</script>

<template>
  <header class="header" :class="{ 'header--transparent': isHeaderTransparent }" role="banner">
    <div class="header__wrap">
      <div class="header__bar">
        <router-link class="brand" :to="{ name: MarketingRouteNames.HOME }">
          <img
            src="/logo-buildingfex.png"
            :alt="t('brand')"
            class="brand__img"
            width="148"
            height="32"
            decoding="async"
          />
        </router-link>
        <nav class="nav" :aria-label="t('header.navAria')">
          <router-link
            v-for="item in nav"
            :key="item.hash"
            class="nav__link"
            :class="{ 'nav__link--active': navLinkIsActive(item.hash) }"
            :to="{ name: MarketingRouteNames.HOME, hash: item.hash }"
            :aria-current="navLinkIsActive(item.hash) ? 'page' : undefined"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <LocaleSwitcher class="locale" />
        <Button
          :as="RouterLink"
          :to="{ name: MarketingRouteNames.LOGIN }"
          :label="t('header.start')"
          outlined
          rounded
          severity="secondary"
          size="small"
          class="header-cta"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  padding: 0;
  font-family: var(--apple-font);
  font-size: var(--apple-header-nav-size);
  font-weight: var(--apple-header-nav-weight);
  letter-spacing: var(--apple-header-nav-tracking);
  line-height: var(--apple-header-nav-leading);
  color: var(--apple-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: color 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.header--transparent {
  color: rgba(255, 255, 255, 0.92);
}

.header__wrap {
  width: 100%;
  max-width: none;
  margin: 0;
  background: transparent;
}

.header__bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  min-height: var(--apple-header-min-height);
  width: 100%;
  padding: 0.55rem max(1rem, env(safe-area-inset-right)) 0.55rem max(1rem, env(safe-area-inset-left));
  border-radius: 0;
  border-left: none;
  border-right: none;
  background: var(--apple-bg);
  border-bottom: 1px solid var(--apple-border);
  box-shadow: var(--apple-shadow-sm);
  transition:
    background 0.35s cubic-bezier(0.25, 0.1, 0.25, 1),
    border-color 0.35s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.header--transparent .header__bar {
  background: transparent !important;
  border-bottom: none !important;
  box-shadow: none !important;
}

.header--transparent {
  background: transparent !important;
}

@media (min-width: 900px) {
  .header__bar {
    flex-wrap: nowrap;
    gap: 0.85rem;
    padding-left: max(1.25rem, env(safe-area-inset-left));
    padding-right: max(1.25rem, env(safe-area-inset-right));
  }
}

.brand {
  display: flex;
  align-items: center;
  margin-right: auto;
  line-height: 0;
  border-radius: 6px;
  transition: opacity 0.2s ease;
}

.brand:hover {
  opacity: 0.72;
}

.brand:focus-visible {
  outline: var(--apple-focus-ring);
  outline-offset: var(--apple-focus-ring-offset);
}

.brand__img {
  height: 28px;
  width: auto;
  max-width: min(148px, 42vw);
  object-fit: contain;
  object-position: left center;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.1rem;
  font-size: var(--apple-header-nav-size);
  font-weight: var(--apple-header-nav-weight);
  letter-spacing: var(--apple-header-nav-tracking);
  width: 100%;
  order: 3;
  padding-top: 0.5rem;
  margin-top: 0.15rem;
  border-top: 1px solid var(--apple-border-hairline);
  transition: border-color 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.header--transparent .nav {
  border-top-color: transparent;
}

.nav__link {
  color: var(--apple-text-secondary);
  padding: 0.35rem 0.5rem;
  border-radius: var(--apple-radius-pill);
  line-height: var(--apple-header-nav-leading);
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.header--transparent .nav__link {
  color: rgba(255, 255, 255, 0.78);
}

.nav__link:hover {
  color: var(--apple-text);
  background: rgba(0, 0, 0, 0.04);
}

.header--transparent .nav__link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.nav__link:focus-visible {
  outline: var(--apple-focus-ring);
  outline-offset: var(--apple-focus-ring-offset);
}

.nav__link--active {
  color: var(--apple-text);
  font-weight: var(--apple-header-nav-weight-active);
  background: rgba(0, 0, 0, 0.05);
}

.header--transparent .nav__link--active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.14);
}

.nav__link--active:hover {
  background: rgba(0, 0, 0, 0.07);
}

.header--transparent .nav__link--active:hover {
  background: rgba(255, 255, 255, 0.18);
}

@media (max-width: 899px) {
  .nav {
    justify-content: center;
  }

  .nav__link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.35rem 0.6rem;
  }
}

.locale {
  flex-shrink: 0;
}

.header-cta {
  flex-shrink: 0;
}

.header-cta.p-button {
  border-radius: var(--apple-radius-pill) !important;
  overflow: hidden;
  font-family: var(--apple-font) !important;
  font-weight: var(--apple-header-cta-weight) !important;
  font-size: var(--apple-header-cta-size) !important;
  letter-spacing: var(--apple-header-nav-tracking) !important;
  line-height: var(--apple-header-nav-leading) !important;
  padding: 0.45rem 1.1rem !important;
  min-height: 2rem;
  border-color: var(--apple-border-hairline) !important;
  color: var(--apple-text) !important;
  background: rgba(255, 255, 255, 0.92) !important;
  -webkit-font-smoothing: antialiased;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.header-cta.p-button :deep(.p-button-label) {
  border-radius: inherit;
}

.header-cta.p-button:hover {
  background: #ffffff !important;
  border-color: var(--apple-border-hairline) !important;
  box-shadow: var(--apple-shadow-sm);
}

.header-cta.p-button:focus-visible {
  outline: var(--apple-focus-ring);
  outline-offset: var(--apple-focus-ring-offset);
}

.header--transparent :deep(.locale-switcher) {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}

.header--transparent :deep(.locale-switcher__btn) {
  color: rgba(255, 255, 255, 0.82);
}

.header--transparent :deep(.locale-switcher__btn:hover:not(.locale-switcher__btn--active)) {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

.header--transparent :deep(.locale-switcher__btn--active) {
  color: var(--apple-text);
  background: #ffffff;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 0 0 0.5px rgba(0, 0, 0, 0.06);
}

.header--transparent .header-cta.p-button.p-button-outlined.p-button-secondary {
  background: transparent !important;
  border-color: rgba(255, 255, 255, 0.45) !important;
  color: #ffffff !important;
  box-shadow: none !important;
}

.header--transparent
  .header-cta.p-button.p-button-outlined.p-button-secondary
  :deep(.p-button-label),
.header--transparent
  .header-cta.p-button.p-button-outlined.p-button-secondary
  :deep(.p-button-icon) {
  color: #ffffff !important;
}

.header--transparent .header-cta.p-button.p-button-outlined.p-button-secondary:not(:disabled):hover,
.header--transparent .header-cta.p-button.p-button-outlined.p-button-secondary:not(:disabled):active {
  background: rgba(255, 255, 255, 0.12) !important;
  border-color: rgba(255, 255, 255, 0.55) !important;
  color: #ffffff !important;
}

.header--transparent
  .header-cta.p-button.p-button-outlined.p-button-secondary:not(:disabled):hover
  :deep(.p-button-label),
.header--transparent
  .header-cta.p-button.p-button-outlined.p-button-secondary:not(:disabled):active
  :deep(.p-button-label) {
  color: #ffffff !important;
}

.header--transparent .header-cta.p-button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.85);
  outline-offset: 2px;
}

.header--transparent .brand {
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.header--transparent .brand__img {
  display: block;
  filter: none;
}

@media (min-width: 900px) {
  .nav {
    width: auto;
    order: 0;
    margin-left: auto;
    padding-top: 0;
    margin-top: 0;
    border-top: none;
  }

  .locale {
    margin-left: 0;
  }
}
</style>
