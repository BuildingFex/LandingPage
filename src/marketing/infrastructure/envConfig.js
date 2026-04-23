export const WEB_APP_BASE = (import.meta.env.VITE_WEB_APP_URL ?? '').replace(/\/$/, '')

export function webAppUrl(path) {
  if (!WEB_APP_BASE) return ''
  const p = path.startsWith('/') ? path : `/${path}`
  return `${WEB_APP_BASE}${p}`
}

export const DEVELOPER_URL = (import.meta.env.VITE_DEVELOPER_URL ?? '').replace(/\/$/, '')
