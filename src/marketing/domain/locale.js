export const SUPPORTED_LOCALE_CODES = ['en', 'es']

export function toHtmlLang(locale) {
  return locale === 'es' ? 'es-419' : 'en'
}

export function isSupportedLocale(code) {
  return SUPPORTED_LOCALE_CODES.includes(code)
}
