<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import SkipLink from '../components/SkipLink.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { MarketingRouteNames } from '@/marketing/domain/marketingRoutes.js'

const route = useRoute()
const { t } = useI18n()

const isRegister = computed(() => route.name === MarketingRouteNames.REGISTER)

const loginEmail = ref('')
const loginPassword = ref('')
const regName = ref('')
const regEmail = ref('')
const regPassword = ref('')

function onLoginSubmit() {
  // Hook: replace with API / redirect to external app when wired
}

function onRegisterSubmit() {
  // Hook: replace with API when wired
}
</script>

<template>
  <div class="auth-page">
    <SkipLink />
    <SiteHeader />
    <main id="main-content" class="auth-main" role="main" tabindex="-1">
      <div class="auth-shell">
        <nav class="auth-tabs" :aria-label="t('auth.tabsAria')">
          <RouterLink
            class="auth-tab"
            :class="{ 'auth-tab--active': !isRegister }"
            :to="{ name: MarketingRouteNames.LOGIN }"
          >
            {{ t('auth.loginTab') }}
          </RouterLink>
          <RouterLink
            class="auth-tab"
            :class="{ 'auth-tab--active': isRegister }"
            :to="{ name: MarketingRouteNames.REGISTER }"
          >
            {{ t('auth.registerTab') }}
          </RouterLink>
        </nav>

        <div class="auth-card">
          <template v-if="!isRegister">
            <h1 class="auth-title">{{ t('auth.loginTitle') }}</h1>
            <form class="auth-form" :aria-label="t('auth.ariaLogin')" @submit.prevent="onLoginSubmit">
              <label class="auth-field">
                <span class="auth-label">{{ t('auth.email') }}</span>
                <input
                  v-model="loginEmail"
                  class="auth-input"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                />
              </label>
              <label class="auth-field">
                <span class="auth-label">{{ t('auth.password') }}</span>
                <input
                  v-model="loginPassword"
                  class="auth-input"
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  required
                />
              </label>
              <Button type="submit" class="auth-submit" rounded :label="t('auth.signIn')" severity="info" />
            </form>
            <p class="auth-switch">
              {{ t('auth.noAccount') }}
              <RouterLink class="auth-link" :to="{ name: MarketingRouteNames.REGISTER }">
                {{ t('auth.goRegister') }}
              </RouterLink>
            </p>
          </template>

          <template v-else>
            <h1 class="auth-title">{{ t('auth.registerTitle') }}</h1>
            <form class="auth-form" :aria-label="t('auth.ariaRegister')" @submit.prevent="onRegisterSubmit">
              <label class="auth-field">
                <span class="auth-label">{{ t('auth.fullName') }}</span>
                <input
                  v-model="regName"
                  class="auth-input"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                />
              </label>
              <label class="auth-field">
                <span class="auth-label">{{ t('auth.email') }}</span>
                <input
                  v-model="regEmail"
                  class="auth-input"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                />
              </label>
              <label class="auth-field">
                <span class="auth-label">{{ t('auth.password') }}</span>
                <input
                  v-model="regPassword"
                  class="auth-input"
                  type="password"
                  name="password"
                  autocomplete="new-password"
                  required
                />
              </label>
              <Button
                type="submit"
                class="auth-submit"
                rounded
                :label="t('auth.createAccount')"
                severity="info"
              />
            </form>
            <p class="auth-switch">
              {{ t('auth.haveAccount') }}
              <RouterLink class="auth-link" :to="{ name: MarketingRouteNames.LOGIN }">
                {{ t('auth.goLogin') }}
              </RouterLink>
            </p>
          </template>

          <p class="auth-note">{{ t('auth.note') }}</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: var(--apple-bg-secondary, #f5f5f7);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.auth-main {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(env(safe-area-inset-top, 0px) + var(--landing-header-height) + 1.75rem) 1.25rem 3rem;
}

.auth-shell {
  width: 100%;
  max-width: 420px;
}

.auth-tabs {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.25rem;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.04);
}

.auth-tab {
  flex: 1;
  text-align: center;
  padding: 0.55rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--apple-text-secondary);
  text-decoration: none;
  border-radius: 10px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.auth-tab:hover {
  color: var(--apple-text);
  background: rgba(255, 255, 255, 0.6);
}

.auth-tab--active {
  color: var(--apple-text);
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.auth-card {
  padding: 1.75rem 1.5rem 1.5rem;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 12px 28px rgba(0, 0, 0, 0.06);
}

.auth-title {
  margin: 0 0 1.35rem;
  font-size: clamp(1.35rem, 3vw, 1.6rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--apple-text);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.auth-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.auth-label {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--apple-text-secondary);
}

.auth-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.65rem 0.85rem;
  font-size: 1rem;
  font-family: inherit;
  letter-spacing: -0.02em;
  color: var(--apple-text);
  background: var(--apple-bg, #ffffff);
  border: 1px solid var(--apple-border-hairline);
  border-radius: 10px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.auth-input:focus {
  outline: none;
  border-color: rgba(var(--apple-blue-rgb), 0.45);
  box-shadow: 0 0 0 3px rgba(var(--apple-blue-rgb), 0.12);
}

.auth-submit {
  margin-top: 0.25rem;
  width: 100%;
  justify-content: center;
}

.auth-submit :deep(.p-button) {
  width: 100%;
  justify-content: center;
  font-weight: 600 !important;
}

.auth-switch {
  margin: 1.25rem 0 0;
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--apple-text-secondary);
  text-align: center;
}

.auth-link {
  color: var(--apple-blue);
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.25rem;
}

.auth-link:hover {
  text-decoration: underline;
}

.auth-note {
  margin: 1.25rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--apple-border-hairline);
  font-size: 0.75rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--apple-text-secondary);
  text-align: center;
}
</style>
