import { effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from '../i18n/language.service';
import { Translation } from '../i18n/translations/es';

/**
 * Keeps <title> and the meta description in sync with the active language.
 * Call from a page component's injection context.
 */
export function usePageMeta(select: (t: Translation) => { title: string; description?: string }) {
  const i18n = inject(LanguageService);
  const title = inject(Title);
  const meta = inject(Meta);

  effect(() => {
    const page = select(i18n.t());
    title.setTitle(page.title);
    meta.updateTag({ name: 'description', content: page.description ?? i18n.t().meta.homeDescription });
  });
}
