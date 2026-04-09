import { createRouter, createWebHistory } from 'vue-router'
import { MarketingPaths, MarketingRouteNames } from '../../domain/marketingRoutes.js'
import LandingView from '../views/LandingView.vue'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: MarketingPaths.HOME, name: MarketingRouteNames.HOME, component: LandingView },
    { path: MarketingPaths.TERMS, name: MarketingRouteNames.TERMS, component: TermsView },
    { path: MarketingPaths.PRIVACY, name: MarketingRouteNames.PRIVACY, component: PrivacyView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  },
})
