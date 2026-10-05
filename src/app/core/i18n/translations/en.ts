import { Translation } from './es';

export const en: Translation = {
  meta: {
    homeTitle: 'FixCore — CMMS Platform for Industrial Maintenance',
    homeDescription:
      'Digitize your work orders, manage spare parts, and receive WhatsApp alerts. The SaaS platform that technicians and plant managers love to use.',
    loginTitle: 'Log In — FixCore',
    loginDescription:
      'Access your FixCore account or create a new one to manage your industrial plant maintenance.',
    termsTitle: 'Terms and Conditions — FixCore',
    numberLocale: 'en-US',
  },

  nav: {
    links: [
      { id: 'features', label: 'Features' },
      { id: 'solutions', label: 'Solutions' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'faq', label: 'FAQ' },
    ],
    login: 'Log In',
    demo: 'Request Demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home: 'FixCore — home',
  },

  hero: {
    badge: '50+ industrial plants already optimize their operations',
    titleBefore: 'Eliminate ',
    titleHighlight: 'downtime',
    titleAfter: ' in your industrial plant.',
    subtitle:
      'Digitize your work orders, manage spare parts, and receive WhatsApp alerts. The SaaS platform that technicians and plant managers love to use.',
    primaryCta: 'Free Trial',
    secondaryCta: 'See How It Works',
    rating: '4.9/5 from 120+ reviews',
    ratingLabel: 'Rated 4.9 out of 5',
    trustedBy: 'Trusted by:',
    dashboardAlt: 'FixCore dashboard - MTTR and asset availability charts',
    phoneAlt: 'FixCore mobile app scanning an industrial QR code',
  },

  stats: [
    { value: 30, prefix: '', suffix: '%', label: 'MTTR Reduction' },
    { value: 10000, prefix: '+', suffix: '', label: 'WOs Resolved' },
    { value: 99, prefix: '', suffix: '%', label: 'Asset Availability' },
    { value: 0, prefix: '', suffix: '', label: 'Paper Used' },
  ],

  features: {
    badge: 'Features',
    title: 'A frictionless maintenance experience.',
    subtitle:
      'Every module designed to eliminate paper, reduce errors, and accelerate failure resolution.',
    items: [
      {
        icon: 'qr',
        title: 'QR Reports',
        desc: 'Scan and report failures in less than 3 clicks from any smartphone. No apps to download.',
      },
      {
        icon: 'zap',
        title: 'Automated Alerts',
        desc: 'Receive critical stop notifications directly on WhatsApp (via n8n). In real-time.',
      },
      {
        icon: 'check-square',
        title: 'WO Management',
        desc: 'Smart assignment, tool checklists, and digital closing. Fully traceable.',
      },
      {
        icon: 'box',
        title: 'Inventory Control',
        desc: 'Real-time stock deduction and automated restocking alerts.',
      },
      {
        icon: 'building',
        title: 'Multi-Plant Architecture',
        desc: 'Unified portal ideal for contractor firms managing multiple clients.',
      },
      {
        icon: 'bar-chart',
        title: 'Management Reports',
        desc: 'Automatic MTTR and availability calculation with one click. Data-driven decisions.',
      },
    ],
  },

  howItWorks: {
    badge: 'Simple Process',
    title: 'Optimize your maintenance in 3 simple steps.',
    subtitle: 'From reported failure to repaired machine, paperless and bottleneck-free.',
    steps: [
      {
        title: 'Scan and Report',
        desc: 'The operator reports the failure in front of the machine with a simple QR scan from their phone.',
      },
      {
        title: 'Assign and Repair',
        desc: 'Automatic notification to the exact technician with the correct tool and spare part.',
      },
      {
        title: 'Measure and Optimize',
        desc: 'The plant manager views response time reports and makes better decisions.',
      },
    ],
  },

  solutions: {
    badge: 'Solutions',
    title: 'Designed for every link in your operation.',
    subtitle: 'Each role has its own optimized view and experience.',
    items: [
      {
        variant: 'orange',
        icon: 'gear',
        tag: 'Operational Management',
        title: 'For Plant Managers',
        desc: 'Unified history, budget control, and zero operational blindness. All in a single dashboard.',
      },
      {
        variant: 'blue',
        icon: 'monitor',
        tag: 'Multi-Tenant',
        title: 'For Contractor Firms',
        desc: 'White-label reports, technician routing, and multi-tenant management to scale your B2B operation.',
      },
      {
        variant: 'dark',
        icon: 'wrench',
        tag: 'Low Friction',
        title: 'For Floor Technicians',
        desc: 'Low-friction interface, PIN/OTP login, and field stock visualization. Designed for gloves.',
      },
    ],
  },

  testimonials: {
    badge: 'Testimonials',
    title: 'What industrial leaders say.',
    subtitle: 'Real companies that transformed their maintenance with FixCore.',
    items: [
      {
        quote:
          'With FixCore I stopped digging through WhatsApp chats at the end of the month. Everything is centralized and stops are resolved faster. It was a before and after for our operation.',
        name: 'Carla García',
        role: 'Plant Manager — InduPro Mexico',
        avatar: 'assets/img/testimonial-carla.webp',
      },
      {
        quote:
          'The multi-client portal allowed us to scale. Now we send automatic reports with our own logo to the factories we serve. FixCore is our competitive advantage.',
        name: 'Víctor Salazar',
        role: 'B2B Operations Manager — SolMex Services',
        avatar: 'assets/img/testimonial-victor.webp',
      },
    ],
  },

  pricing: {
    badge: 'Transparent Pricing',
    title: 'Plans designed to scale with you.',
    subtitle: 'Start for free, grow when you are ready. No hidden costs or lock-in contracts.',
    monthly: 'Monthly',
    annual: 'Annual',
    switchLabel: 'Annual billing',
    save: 'Save 20%',
    popular: '⭐ Most Popular',
    free: 'Free',
    freeNote: 'Forever • No credit card required',
    guarantee: '14-day free trial on all paid plans • No credit card required • Cancel anytime',
    plans: [
      {
        id: 'free',
        icon: 'shield',
        name: 'Starter',
        desc: 'Frictionless trial. Ideal to validate the platform in your plant before scaling.',
        featured: false,
        price: null,
        period: '',
        monthlyNote: '',
        annualNote: '',
        features: [
          { text: 'Up to 3 critical machines', included: true },
          { text: 'Unlimited QR reports', included: true },
          { text: '1 technical user', included: true },
          { text: 'Basic Work Orders', included: true },
          { text: '30-day history', included: true },
          { text: 'WhatsApp Alerts', included: false },
          { text: 'Management reports', included: false },
        ],
        cta: 'Start for Free',
      },
      {
        id: 'plant',
        icon: 'building',
        name: 'Plant',
        desc: 'For individual factories. Everything your management and operators need.',
        featured: true,
        price: { monthly: 89, annual: 71 },
        period: 'USD / month',
        monthlyNote: '≈ S/ 330 per month • Monthly billing',
        annualNote: 'Billed annually ($852/year)',
        features: [
          { text: 'Unlimited machines', included: true, highlight: true },
          { text: 'Up to 10 active technicians', included: true, highlight: true },
          { text: 'Unlimited management users', included: true },
          { text: 'Real-time WhatsApp alerts', included: true },
          { text: 'Inventory and stock control', included: true },
          { text: 'MTTR and availability reports', included: true },
          { text: 'Unlimited complete history', included: true },
          { text: 'Priority support', included: true },
        ],
        cta: 'Subscribe Now',
      },
      {
        id: 'contractor',
        icon: 'users',
        name: 'Contractor',
        desc: 'For B2B maintenance firms managing multiple factories. Scale without limits.',
        featured: false,
        price: { monthly: 29, annual: 23 },
        period: 'USD / tech / month',
        monthlyNote: 'Unlimited clients and plants included',
        annualNote: 'Billed annually per technician ($276/tech/year)',
        features: [
          { text: 'Unlimited clients/plants', included: true, highlight: true },
          { text: 'Complete multi-tenant portal', included: true, highlight: true },
          { text: 'White-label reports with your logo', included: true },
          { text: 'Technician routing and dispatch', included: true },
          { text: 'REST API + Webhooks', included: true },
          { text: 'ERP Integration (SAP, Oracle)', included: true },
          { text: 'Everything in Plant Plan', included: true },
          { text: 'Dedicated onboarding', included: true },
        ],
        cta: 'Subscribe Now',
      },
    ],
  },

  faq: {
    badge: 'Frequently Asked Questions',
    title: 'Have questions about FixCore?',
    subtitle: "Quick answers to our clients' most common doubts.",
    items: [
      {
        q: 'Do I need to install special hardware?',
        a: 'No. FixCore is 100% SaaS and runs in the cloud. You only need a smartphone or tablet to scan QR codes that you can print with any printer. No IoT sensors or special infrastructure required to start.',
      },
      {
        q: 'How does charging per field technician work?',
        a: 'Our model is per active field technician license. Operators who only report failures (scan QR) do not count as a license. You only pay for technicians who receive and close Work Orders. We include unlimited management users.',
      },
      {
        q: 'Is it difficult for older operators to learn how to use it?',
        a: 'FixCore was designed with operators of all ages in mind. The reporting flow is just 3 clicks: scan, select failure type, and send. It does not require creating an account or remembering passwords. Our clients report full adoption in less than a week.',
      },
      {
        q: 'Can I integrate FixCore with my current ERP?',
        a: 'Yes. We offer a documented REST API and configurable webhooks that you can connect to SAP, Oracle, Microsoft Dynamics, or any other ERP. We also support integration via n8n and Zapier for no-code automations.',
      },
    ],
  },

  bottomCta: {
    title: 'Ready to protect your capital assets?',
    subtitle: 'Join the companies that already reduced their downtime with FixCore.',
    button: 'Start your Free Trial',
    finePrint: 'No credit card required • 3-machine pilot • Cancel anytime',
  },

  footer: {
    support: 'Support',
    api: 'API / Webhooks',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    rights: 'All rights reserved.',
  },

  auth: {
    tagline: 'Frictionless maintenance management.',
    desc: 'Digitize work orders, control inventory, and receive WhatsApp alerts. All from a single platform.',
    pills: ['QR Reports', 'WhatsApp Alerts', 'Multi-Plant', '99% Uptime', 'Paperless'],
    back: 'Back to home',
    tabLogin: 'Log In',
    tabRegister: 'Create Account',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    emailError: 'Please enter a valid email address.',
    emailPlaceholder: 'you@company.com',
    password: 'Password',
    login: {
      title: 'Welcome back',
      subtitle: 'Enter your credentials to access your account.',
      email: 'Email address',
      passwordError: 'Password is required.',
      remember: 'Remember me',
      forgot: 'Forgot your password?',
      submit: 'Log In',
      invalid: 'Invalid credentials. Please try again.',
      success: 'Logged in! Redirecting to dashboard...',
      divider: 'or continue with',
    },
    register: {
      title: 'Create your account',
      subtitle: 'Start your 14-day free trial. No credit card required.',
      name: 'Full name',
      namePlaceholder: 'E.g.: John Doe',
      nameError: 'Name is required.',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      companyError: 'Company name is required.',
      email: 'Work email',
      passwordPlaceholder: 'Minimum 8 characters',
      passwordError: 'Minimum 8 characters.',
      acceptPrefix: 'I accept the ',
      termsLink: 'Terms of Service',
      acceptMiddle: ' and the ',
      privacyLink: 'Privacy Policy',
      termsError: 'You must accept the terms to continue.',
      submit: 'Create Free Account',
      success: (firstName: string) =>
        `Welcome, ${firstName}! Your account has been successfully created.`,
      divider: 'or sign up with',
    },
    strength: ['Very weak', 'Weak', 'Fair', 'Strong'],
    social: (provider: string) =>
      `Redirecting to ${provider} for authentication... This feature requires OAuth configuration in production.`,
  },

  terms: {
    title: 'Terms and Conditions',
    updated: 'Last updated: September 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        body: 'By accessing and using the FixCore services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our service.',
      },
      {
        title: '2. Use of Service',
        body: 'Our platform is designed for industrial plant maintenance management. You agree to use the service only for the intended purposes and in accordance with applicable laws.',
      },
      {
        title: '3. Privacy and Data',
        body: 'The use of the platform is subject to our Privacy Policy, which details how we collect and protect your operational data.',
      },
      {
        title: '4. Modifications',
        body: 'We reserve the right to modify or replace these terms at any time. You will be notified of any significant changes prior to their effective date.',
      },
    ],
    back: 'Go back',
  },
};
