/**
 * Ubiquitous language: public routes of the marketing / landing bounded context.
 * Keep names in sync with `presentation/router` route definitions.
 */
export const MarketingRouteNames = /** @type {const} */ ({
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  TERMS: 'terms',
  PRIVACY: 'privacy',
})

/** @typedef {typeof MarketingRouteNames[keyof typeof MarketingRouteNames]} MarketingRouteName */

export const MarketingPaths = /** @type {const} */ ({
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TERMS: '/terms',
  PRIVACY: '/privacy',
})
