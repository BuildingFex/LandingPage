import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { fixcoreAppLinks } from '../../core/config/fixcore-app';
import { LanguageService } from '../../core/i18n/language.service';
import { usePageMeta } from '../../core/seo/page-meta';
import { Icon } from '../../shared/components/icon/icon';
import { LangToggle } from '../../shared/components/lang-toggle/lang-toggle';
import { LogoMark } from '../../shared/components/logo/logo';

type Tab = 'login' | 'register';
type AlertKind = 'error' | 'success' | 'info';
interface FormAlert {
  kind: AlertKind;
  text: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_FRAGMENTS = ['register', 'crear-cuenta'];
const STRENGTH_COLORS = ['#ef4444', '#f97316', '#f59e0b', '#22c55e'];

@Component({
  selector: 'app-login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ReactiveFormsModule, RouterLink, Icon, LangToggle, LogoMark],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  protected readonly i18n = inject(LanguageService);
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly timers: ReturnType<typeof setTimeout>[] = [];

  protected readonly tab = signal<Tab>('login');
  protected readonly loading = signal(false);
  protected readonly alert = signal<FormAlert | null>(null);
  protected readonly shake = signal(false);
  protected readonly submitted = signal(false);
  protected readonly termsError = signal(false);
  protected readonly showLoginPassword = signal(false);
  protected readonly showRegisterPassword = signal(false);

  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', Validators.required],
    remember: [false],
  });

  protected readonly registerForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    terms: [false, Validators.requiredTrue],
  });

  private readonly registerPassword = toSignal(this.registerForm.controls.password.valueChanges, {
    initialValue: '',
  });

  /** 0-4 score: length ≥ 8, mixed case, digit, symbol. `null` hides the meter. */
  protected readonly strength = computed(() => {
    const value = this.registerPassword();
    if (!value) return null;
    let score = 0;
    if (value.length >= 8) score++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;
    const level = Math.max(0, score - 1);
    return {
      score,
      color: STRENGTH_COLORS[level],
      label: this.i18n.t().auth.strength[level],
    };
  });

  protected readonly strengthBars = [0, 1, 2, 3];
  protected readonly year = new Date().getFullYear();

  constructor() {
    usePageMeta((t) => ({ title: t.meta.loginTitle, description: t.meta.loginDescription }));

    inject(ActivatedRoute)
      .fragment.pipe(takeUntilDestroyed())
      .subscribe((fragment) => {
        if (fragment && REGISTER_FRAGMENTS.includes(fragment)) this.switchTab('register');
      });

    inject(DestroyRef).onDestroy(() => this.timers.forEach(clearTimeout));
  }

  protected switchTab(tab: Tab): void {
    if (this.loading()) return;
    this.tab.set(tab);
    this.alert.set(null);
    this.submitted.set(false);
    this.termsError.set(false);
  }

  /** Errors only show after a submit attempt, and clear while the field is focused. */
  protected showError(control: AbstractControl): boolean {
    return this.submitted() && control.invalid && control.touched;
  }

  protected onFocus(control: AbstractControl): void {
    control.markAsUntouched();
  }

  protected submitLogin(): void {
    const form = this.loginForm;
    this.alert.set(null);
    this.submitted.set(true);
    form.markAllAsTouched();
    if (form.invalid) return this.triggerShake();

    this.loading.set(true);
    this.later(1500, () => {
      this.loading.set(false);
      const t = this.i18n.t().auth.login;
      // Demo behaviour carried over from the static site: any valid email + 4-char password.
      if (form.controls.password.value.length >= 4) {
        this.alert.set({ kind: 'success', text: t.success });
        this.later(2000, () => window.location.assign(fixcoreAppLinks.dashboard()));
      } else {
        this.alert.set({ kind: 'error', text: t.invalid });
      }
    });
  }

  protected submitRegister(): void {
    const form = this.registerForm;
    this.alert.set(null);
    this.submitted.set(true);
    form.markAllAsTouched();
    this.termsError.set(form.controls.terms.invalid);
    if (form.invalid) return this.triggerShake();

    this.loading.set(true);
    this.later(1800, () => {
      this.loading.set(false);
      const firstName = form.controls.name.value.trim().split(/\s+/)[0];
      this.alert.set({ kind: 'success', text: this.i18n.t().auth.register.success(firstName) });
      form.disable();
      this.later(2000, () => window.location.assign(fixcoreAppLinks.dashboard()));
    });
  }

  protected socialLogin(provider: string): void {
    this.alert.set({ kind: 'info', text: this.i18n.t().auth.social(provider) });
  }

  private triggerShake(): void {
    this.shake.set(true);
    this.later(400, () => this.shake.set(false));
  }

  private later(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }
}
