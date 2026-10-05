import { Routes } from '@angular/router';
import { langGuard } from './core/i18n/lang.guard';
import { DEFAULT_LANG } from './core/i18n/language.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },

  // Old static-site URLs keep working.
  { path: 'index.html', redirectTo: 'es' },
  { path: 'index-en.html', redirectTo: 'en' },
  { path: 'login.html', redirectTo: 'es/login' },
  { path: 'login-en.html', redirectTo: 'en/login' },
  { path: 'terms.html', redirectTo: 'es/terms' },
  { path: 'terms-en.html', redirectTo: 'en/terms' },

  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing-page').then((m) => m.LandingPage),
      },
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login-page').then((m) => m.LoginPage),
      },
      {
        path: 'terms',
        loadComponent: () => import('./features/legal/terms-page').then((m) => m.TermsPage),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
