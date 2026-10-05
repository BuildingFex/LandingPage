import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DEFAULT_LANG, LanguageService, isLang } from './language.service';

/** Validates the `:lang` segment and makes it the active language. */
export const langGuard: CanActivateFn = (route) => {
  const lang = route.paramMap.get('lang');
  if (!isLang(lang)) {
    return inject(Router).createUrlTree(['/', DEFAULT_LANG]);
  }
  inject(LanguageService).setLang(lang);
  return true;
};
