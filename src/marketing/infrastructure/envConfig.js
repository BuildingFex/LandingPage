/** Base URL of the Web Application (no trailing slash). Set in `.env` as VITE_WEB_APP_URL. */
export const WEB_APP_BASE = (import.meta.env.VITE_WEB_APP_URL ?? '').replace(/\/$/, '')

/**
 * @param {string} path Absolute path starting with /
 */
export function webAppUrl(path) {
  if (!WEB_APP_BASE) return ''
  const p = path.startsWith('/') ? path : `/${path}`
  return `${WEB_APP_BASE}${p}`
}

/** Optional link for “Developed by” badge in the footer (e.g. agency site). */
export const DEVELOPER_URL = (import.meta.env.VITE_DEVELOPER_URL ?? '').replace(/\/$/, '')

/** YouTube video ID for the product demo embed on the landing (optional). */
export const YOUTUBE_PRODUCT_ID = String(import.meta.env.VITE_YOUTUBE_PRODUCT_ID ?? '').trim()

/** YouTube video ID for the team/story embed on the landing (optional). */
export const YOUTUBE_TEAM_ID = String(import.meta.env.VITE_YOUTUBE_TEAM_ID ?? '').trim()
