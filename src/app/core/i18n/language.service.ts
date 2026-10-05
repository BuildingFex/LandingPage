import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { en } from './translations/en';
import { es, Translation } from './translations/es';

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

const TRANSLATIONS: Record<Lang, Translation> = { es, en };

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/**
 * Holds the active language (taken from the `/:lang` URL segment) and exposes
 * the matching translation as a signal so every view re-renders on switch.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  private readonly current = signal<Lang>(DEFAULT_LANG);
  private keepScrollOnNextNavigation = false;

  readonly lang = this.current.asReadonly();
  readonly t = computed(() => TRANSLATIONS[this.current()]);

  setLang(lang: Lang): void {
    this.current.set(lang);
    this.document.documentElement.lang = lang;
  }

  /** Swaps the `/:lang` segment of the current URL, keeping path, fragment and scroll. */
  switchTo(lang: Lang): void {
    if (lang === this.current()) return;
    const tree = this.router.parseUrl(this.router.url);
    const segments = tree.root.children['primary']?.segments ?? [];
    const rest = segments.slice(1).map((s) => s.path);
    this.keepScrollOnNextNavigation = true;
    this.router.navigate(['/', lang, ...rest], {
      queryParamsHandling: 'preserve',
      fragment: tree.fragment ?? undefined,
    });
  }

  /** Builds an in-app route for the active language, e.g. `path('login')` → `['/es', 'login']`. */
  path(...segments: string[]): string[] {
    return ['/', this.current(), ...segments];
  }

  consumeKeepScroll(): boolean {
    const keep = this.keepScrollOnNextNavigation;
    this.keepScrollOnNextNavigation = false;
    return keep;
  }
}
