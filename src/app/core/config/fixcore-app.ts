import { Lang } from '../i18n/language.service';

/** Production URL of the FixCore web app (Next.js on Vercel). */
const FIXCORE_APP_URL = 'https://fixcore-app.vercel.app';
/** Next.js dev server used when the landing itself runs locally. */
const FIXCORE_APP_LOCAL_URL = 'http://localhost:3000';

function isLocalHost(): boolean {
  if (typeof location === 'undefined') return false;
  return (
    location.protocol === 'file:' || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)
  );
}

export function fixcoreAppBase(): string {
  return isLocalHost() ? FIXCORE_APP_LOCAL_URL : FIXCORE_APP_URL;
}

export const fixcoreAppLinks = {
  login: (lang: Lang) => `${fixcoreAppBase()}/login?lang=${lang}`,
  register: (lang: Lang) => `${fixcoreAppBase()}/registro?lang=${lang}`,
  dashboard: () => `${fixcoreAppBase()}/dashboard`,
};
