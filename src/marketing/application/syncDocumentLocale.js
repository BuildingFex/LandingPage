import { toHtmlLang } from '../domain/locale.js'

export function syncDocumentLocale(localeCode) {
  document.documentElement.setAttribute('lang', toHtmlLang(localeCode))
}
