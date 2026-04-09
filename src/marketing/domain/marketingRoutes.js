/**
 * Ubiquitous language: public routes of the marketing / landing bounded context.
 * Keep names in sync with `presentation/router` route definitions.
 */
export const MarketingRouteNames = /** @type {const} */ ({
  HOME: 'home',
  TERMS: 'terms',
  PRIVACY: 'privacy',
})

/** @typedef {typeof MarketingRouteNames[keyof typeof MarketingRouteNames]} MarketingRouteName */

export const MarketingPaths = /** @type {const} */ ({
  HOME: '/',
  TERMS: '/terms',
  PRIVACY: '/privacy',
})
