<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import LocaleSwitcher from './LocaleSwitcher.vue'
import { webAppUrl } from '../config.js'

const { t } = useI18n()
const route = useRoute()

const nav = computed(() => [
  { hash: '#inicio', label: t('nav.home') },
  { hash: '#subscriptions', label: t('nav.subscriptions') },
  { hash: '#video-product', label: t('nav.productVideo') },
  { hash: '#video-team', label: t('nav.teamVideo') },
  { hash: '#beneficios', label: t('nav.benefits') },
  { hash: '#contacto', label: t('nav.contact') },
])

const appEntry = computed(() => webAppUrl('/app'))

function navLinkIsActive(hash) {
  if (route.path !== '/') return false
  if (hash === '#inicio') return route.hash === '' || route.hash === '#inicio'
  return route.hash === hash
}
</script>

<template>
  <header class="header" role="banner">
    <div class="header__wrap">
      <div class="header__bar">
        <router-link class="brand" to="/">
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
            :to="{ path: '/', hash: item.hash }"
            :aria-current="navLinkIsActive(item.hash) ? 'page' : undefined"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <LocaleSwitcher class="locale" />
        <Button
          v-if="appEntry"
          :label="t('header.start')"
          as="a"
          :href="appEntry"
          outlined
          severity="secondary"
          size="small"
          class="header-cta"
        />
        <Button
          v-else
          :label="t('header.start')"
          as="a"
          href="/#contacto"
          outlined
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
  position: sticky;
  top: 0;
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
}

.header__wrap {
  width: 100%;
  max-width: none;
  margin: 0;
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
}

.nav__link {
  color: var(--apple-text-secondary);
  padding: 0.35rem 0.5rem;
  border-radius: var(--apple-radius-pill);
  line-height: var(--apple-header-nav-leading);
  transition: color 0.2s ease, background 0.2s ease;
}

.nav__link:hover {
  color: var(--apple-text);
  background: rgba(0, 0, 0, 0.04);
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

.nav__link--active:hover {
  background: rgba(0, 0, 0, 0.07);
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

.header-cta :deep(.p-button) {
  border-radius: var(--apple-radius-pill) !important;
  font-family: var(--apple-font) !important;
  font-weight: var(--apple-header-cta-weight) !important;
  font-size: var(--apple-header-cta-size) !important;
  letter-spacing: var(--apple-header-nav-tracking) !important;
  line-height: var(--apple-header-nav-leading) !important;
  padding: 0.45rem 1rem !important;
  border-color: var(--apple-border-hairline) !important;
  color: var(--apple-text) !important;
  background: rgba(255, 255, 255, 0.92) !important;
  -webkit-font-smoothing: antialiased;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.header-cta :deep(.p-button:hover) {
  background: #ffffff !important;
  border-color: var(--apple-border-hairline) !important;
  box-shadow: var(--apple-shadow-sm);
}

.header-cta :deep(.p-button:focus-visible) {
  outline: var(--apple-focus-ring);
  outline-offset: var(--apple-focus-ring-offset);
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
