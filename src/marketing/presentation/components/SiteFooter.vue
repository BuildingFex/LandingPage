<script setup>
import { useI18n } from 'vue-i18n'
import { MarketingRouteNames } from '@/marketing/domain/marketingRoutes.js'
import { DEVELOPER_URL } from '@/marketing/infrastructure/envConfig.js'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__shell">
      <strong class="footer__brand">{{ t('brand') }}</strong>

      <nav class="footer__legal" :aria-label="t('footer.legalNavAria')">
        <router-link :to="{ name: MarketingRouteNames.PRIVACY }" class="footer__link">{{ t('footer.privacy') }}</router-link>
        <span class="footer__dot" aria-hidden="true">·</span>
        <router-link :to="{ name: MarketingRouteNames.TERMS }" class="footer__link">{{ t('footer.terms') }}</router-link>
      </nav>

      <div class="footer__credit">
        <span class="footer__credit-label">{{ t('footer.developedBy') }}</span>
        <a
          v-if="DEVELOPER_URL"
          class="footer__badge"
          :href="DEVELOPER_URL"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="t('footer.developerBadgeAria')"
        >
          <img src="/favicon.png" alt="" class="footer__badge-icon" width="18" height="18" decoding="async" />
          <span class="footer__badge-text">{{ t('footer.developerName') }}</span>
        </a>
        <span v-else class="footer__badge footer__badge--static" role="group" :aria-label="t('footer.developerName')">
          <img src="/favicon.png" alt="" class="footer__badge-icon" width="18" height="18" decoding="async" />
          <span class="footer__badge-text">{{ t('footer.developerName') }}</span>
        </span>
      </div>

      <p class="footer__copy">{{ t('footer.copy', { year }) }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  padding: 1.35rem max(1.25rem, env(safe-area-inset-left)) 1.5rem max(1.25rem, env(safe-area-inset-right));
  background: #f8f9fa;
  border-top: 1px solid var(--apple-border-hairline);
  font-family: var(--apple-font);
  -webkit-font-smoothing: antialiased;
}

.footer__shell {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 1.5rem;
  text-align: center;
}

.footer__brand {
  font-size: 0.9375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--apple-text);
}

.footer__legal {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
}

.footer__dot {
  color: var(--apple-text-tertiary);
  font-weight: 400;
  user-select: none;
}

.footer__link {
  font-size: 0.8125rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: #6e6e73;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: var(--apple-link);
}

.footer__link:focus-visible,
.footer__badge:focus-visible {
  outline: 2px solid var(--apple-blue);
  outline-offset: 3px;
  border-radius: 4px;
}

.footer__credit {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.6rem;
}

.footer__credit-label {
  font-size: 0.8125rem;
  color: #6e6e73;
  letter-spacing: -0.01em;
}

.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.75rem 0.35rem 0.45rem;
  background: #ffffff;
  border-radius: var(--apple-radius-pill);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--apple-shadow-sm);
  text-decoration: none;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.footer__badge:hover {
  box-shadow: var(--apple-shadow-md);
}

.footer__badge--static {
  cursor: default;
}

.footer__badge-icon {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex-shrink: 0;
}

.footer__badge-text {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--apple-text);
}

.footer__copy {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: #6e6e73;
  max-width: 100%;
  word-break: break-word;
}

@media (min-width: 900px) {
  .footer__shell {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    gap: 1rem 2rem;
  }

  .footer__copy {
    text-align: right;
    flex: 0 0 auto;
  }
}
</style>
