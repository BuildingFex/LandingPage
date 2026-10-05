import { IconName } from '../../../shared/components/icon/icon';

export type SolutionVariant = 'orange' | 'blue' | 'dark';
export type PlanTone = 'free' | 'plant' | 'contractor';

export interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: PlanTone;
  icon: IconName;
  name: string;
  desc: string;
  featured: boolean;
  /** USD price per period; `null` for the free plan. */
  price: { monthly: number; annual: number } | null;
  period: string;
  monthlyNote: string;
  annualNote: string;
  features: PlanFeature[];
  cta: string;
}

export const es = {
  meta: {
    homeTitle: 'FixCore — Plataforma CMMS para Gestión de Mantenimiento Industrial',
    homeDescription:
      'Digitaliza tus órdenes de trabajo, gestiona repuestos y recibe alertas en WhatsApp. La plataforma SaaS que técnicos y jefes de planta aman usar.',
    loginTitle: 'Iniciar Sesión — FixCore',
    loginDescription:
      'Accede a tu cuenta de FixCore o crea una nueva para gestionar el mantenimiento de tu planta industrial.',
    termsTitle: 'Términos y Condiciones — FixCore',
    numberLocale: 'es-MX',
  },

  nav: {
    links: [
      { id: 'features', label: 'Características' },
      { id: 'solutions', label: 'Soluciones' },
      { id: 'pricing', label: 'Precios' },
      { id: 'faq', label: 'FAQ' },
    ],
    login: 'Iniciar Sesión',
    demo: 'Solicitar Demo',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    home: 'FixCore — inicio',
  },

  hero: {
    badge: '+50 plantas industriales ya optimizan sus operaciones',
    titleBefore: 'Elimina los ',
    titleHighlight: 'tiempos muertos',
    titleAfter: ' en tu planta industrial.',
    subtitle:
      'Digitaliza tus órdenes de trabajo, gestiona repuestos y recibe alertas en WhatsApp. La plataforma SaaS que técnicos y jefes de planta aman usar.',
    primaryCta: 'Prueba Gratis',
    secondaryCta: 'Ver Funcionamiento',
    rating: '4.9/5 de +120 reviews',
    ratingLabel: 'Calificación de 4.9 sobre 5',
    trustedBy: 'Confían en nosotros:',
    dashboardAlt: 'Dashboard FixCore - Gráficos de MTTR y disponibilidad de activos',
    phoneAlt: 'App móvil FixCore escaneando código QR industrial',
  },

  stats: [
    { value: 30, prefix: '', suffix: '%', label: 'Reducción de MTTR' },
    { value: 10000, prefix: '+', suffix: '', label: 'OTs Resueltas' },
    { value: 99, prefix: '', suffix: '%', label: 'Disponibilidad de Activos' },
    { value: 0, prefix: '', suffix: '', label: 'Papel Utilizado' },
  ],

  features: {
    badge: 'Funcionalidades',
    title: 'Una experiencia de mantenimiento sin fricción.',
    subtitle:
      'Cada módulo diseñado para eliminar papel, reducir errores y acelerar la resolución de fallas.',
    items: [
      {
        icon: 'qr',
        title: 'Reportes por QR',
        desc: 'Escanea y reporta fallas en menos de 3 clics desde cualquier smartphone. Sin descargar apps.',
      },
      {
        icon: 'zap',
        title: 'Alertas Automatizadas',
        desc: 'Recibe notificaciones de paradas críticas directamente en WhatsApp (vía n8n). En tiempo real.',
      },
      {
        icon: 'check-square',
        title: 'Gestión de OTs',
        desc: 'Asignación inteligente, check-lists de herramientas y cierre digital. Todo trazable.',
      },
      {
        icon: 'box',
        title: 'Control de Inventario',
        desc: 'Descuento de stock en tiempo real y alertas de reabastecimiento automáticas.',
      },
      {
        icon: 'building',
        title: 'Arquitectura Multi-Planta',
        desc: 'Portal unificado ideal para firmas contratistas que gestionan múltiples clientes.',
      },
      {
        icon: 'bar-chart',
        title: 'Reportes Gerenciales',
        desc: 'Cálculo automático de MTTR y disponibilidad a un clic. Decisiones basadas en datos.',
      },
    ] as { icon: IconName; title: string; desc: string }[],
  },

  howItWorks: {
    badge: 'Proceso Simple',
    title: 'Optimiza tu mantenimiento en 3 simples pasos.',
    subtitle:
      'De la falla reportada a la máquina reparada, sin papel y sin cuellos de botella.',
    steps: [
      {
        title: 'Escanea y Reporta',
        desc: 'El operario reporta la falla frente a la máquina con un simple escaneo QR desde su celular.',
      },
      {
        title: 'Asigna y Repara',
        desc: 'Notificación automática al técnico exacto con la herramienta y repuesto correcto.',
      },
      {
        title: 'Mide y Optimiza',
        desc: 'El jefe de planta visualiza reportes de tiempos de respuesta y toma mejores decisiones.',
      },
    ],
  },

  solutions: {
    badge: 'Soluciones',
    title: 'Diseñado para cada eslabón de tu operación.',
    subtitle: 'Cada rol tiene su propia vista y experiencia optimizada.',
    items: [
      {
        variant: 'orange',
        icon: 'gear',
        tag: 'Gestión Operativa',
        title: 'Para Jefes de Planta',
        desc: 'Historial unificado, control de presupuesto y cero ceguera operativa. Todo en un solo dashboard.',
      },
      {
        variant: 'blue',
        icon: 'monitor',
        tag: 'Multi-Tenant',
        title: 'Para Firmas Contratistas',
        desc: 'Reportes white-label, ruteo de técnicos y gestión multi-tenant para escalar tu operación B2B.',
      },
      {
        variant: 'dark',
        icon: 'wrench',
        tag: 'Baja Fricción',
        title: 'Para Técnicos de Piso',
        desc: 'Interfaz de baja fricción, login con PIN/OTP y visualización de stock en campo. Diseñado para guantes.',
      },
    ] as { variant: SolutionVariant; icon: IconName; tag: string; title: string; desc: string }[],
  },

  testimonials: {
    badge: 'Testimonios',
    title: 'Lo que dicen los líderes industriales.',
    subtitle: 'Empresas reales que transformaron su mantenimiento con FixCore.',
    items: [
      {
        quote:
          'Con FixCore dejé de hurgar en chats de WhatsApp a fin de mes. Todo está centralizado y las paradas se resuelven más rápido. Fue un antes y un después para nuestra operación.',
        name: 'Carla García',
        role: 'Jefa de Planta — InduPro México',
        avatar: 'assets/img/testimonial-carla.webp',
      },
      {
        quote:
          'El portal multi-cliente nos permitió escalar. Ahora enviamos reportes automáticos con nuestro propio logo a las fábricas que atendemos. FixCore es nuestra ventaja competitiva.',
        name: 'Víctor Salazar',
        role: 'Gerente de Operaciones B2B — SolMex Servicios',
        avatar: 'assets/img/testimonial-victor.webp',
      },
    ],
  },

  pricing: {
    badge: 'Precios Transparentes',
    title: 'Planes diseñados para escalar contigo.',
    subtitle:
      'Empieza gratis, crece cuando estés listo. Sin costos ocultos ni contratos de permanencia.',
    monthly: 'Mensual',
    annual: 'Anual',
    switchLabel: 'Facturación anual',
    save: 'Ahorra 20%',
    popular: '⭐ Más Popular',
    free: 'Gratis',
    freeNote: 'Para siempre • Sin tarjeta de crédito',
    guarantee:
      '14 días de prueba gratuita en todos los planes de pago • Sin tarjeta de crédito • Cancela cuando quieras',
    plans: [
      {
        id: 'free',
        icon: 'shield',
        name: 'Entrada',
        desc: 'Prueba sin fricción. Ideal para validar la plataforma en tu planta antes de escalar.',
        featured: false,
        price: null,
        period: '',
        monthlyNote: '',
        annualNote: '',
        features: [
          { text: 'Hasta 3 máquinas críticas', included: true },
          { text: 'Reportes QR ilimitados', included: true },
          { text: '1 usuario técnico', included: true },
          { text: 'Órdenes de Trabajo básicas', included: true },
          { text: 'Historial de 30 días', included: true },
          { text: 'Alertas WhatsApp', included: false },
          { text: 'Reportes gerenciales', included: false },
        ],
        cta: 'Comenzar Gratis',
      },
      {
        id: 'plant',
        icon: 'building',
        name: 'Planta',
        desc: 'Para fábricas individuales. Todo lo que tu jefatura y operarios necesitan.',
        featured: true,
        price: { monthly: 89, annual: 71 },
        period: 'USD / mes',
        monthlyNote: '≈ S/ 330 al mes • Facturación mensual',
        annualNote: 'Facturado anualmente ($852/año)',
        features: [
          { text: 'Máquinas ilimitadas', included: true, highlight: true },
          { text: 'Hasta 10 técnicos activos', included: true, highlight: true },
          { text: 'Usuarios gerenciales ilimitados', included: true },
          { text: 'Alertas WhatsApp en tiempo real', included: true },
          { text: 'Control de inventario y stock', included: true },
          { text: 'Reportes MTTR y disponibilidad', included: true },
          { text: 'Historial completo ilimitado', included: true },
          { text: 'Soporte prioritario', included: true },
        ],
        cta: 'Suscribirse Ahora',
      },
      {
        id: 'contractor',
        icon: 'users',
        name: 'Contratista',
        desc: 'Para firmas B2B de mantenimiento que gestionan múltiples fábricas. Escala sin límites.',
        featured: false,
        price: { monthly: 29, annual: 23 },
        period: 'USD / técnico / mes',
        monthlyNote: 'Clientes y plantas ilimitadas incluidas',
        annualNote: 'Facturado anualmente por técnico ($276/técnico/año)',
        features: [
          { text: 'Clientes/plantas ilimitadas', included: true, highlight: true },
          { text: 'Portal multi-tenant completo', included: true, highlight: true },
          { text: 'Reportes white-label con tu logo', included: true },
          { text: 'Ruteo y despacho de técnicos', included: true },
          { text: 'API REST + Webhooks', included: true },
          { text: 'Integración ERP (SAP, Oracle)', included: true },
          { text: 'Todo lo del Plan Planta', included: true },
          { text: 'Onboarding dedicado', included: true },
        ],
        cta: 'Suscribirse Ahora',
      },
    ] as PricingPlan[],
  },

  faq: {
    badge: 'Preguntas Frecuentes',
    title: '¿Tienes preguntas sobre FixCore?',
    subtitle: 'Respuestas rápidas a las dudas más comunes de nuestros clientes.',
    items: [
      {
        q: '¿Necesito instalar hardware especial?',
        a: 'No. FixCore es 100% SaaS y funciona en la nube. Solo necesitas un smartphone o tablet para escanear los códigos QR que puedes imprimir con cualquier impresora. No requieres sensores IoT ni infraestructura especial para comenzar.',
      },
      {
        q: '¿Cómo funciona el cobro por técnico en campo?',
        a: 'Nuestro modelo es por licencia de técnico activo en campo. Los operarios que solo reportan fallas (escanean QR) no cuentan como licencia. Solo pagas por los técnicos que reciben y cierran Órdenes de Trabajo. Incluimos usuarios gerenciales ilimitados.',
      },
      {
        q: '¿Es difícil que los operarios mayores aprendan a usarlo?',
        a: 'FixCore fue diseñado pensando en operarios de todas las edades. El flujo de reporte es de solo 3 clics: escanear, seleccionar tipo de falla y enviar. No requiere crear cuenta ni recordar contraseñas. Nuestros clientes reportan adopción completa en menos de una semana.',
      },
      {
        q: '¿Puedo integrar FixCore con mi ERP actual?',
        a: 'Sí. Ofrecemos una API REST documentada y webhooks configurables que puedes conectar a SAP, Oracle, Microsoft Dynamics o cualquier otro ERP. También soportamos integración vía n8n y Zapier para automatizaciones sin código.',
      },
    ],
  },

  bottomCta: {
    title: '¿Listo para proteger tus bienes de capital?',
    subtitle: 'Únete a las empresas que ya redujeron sus tiempos muertos con FixCore.',
    button: 'Comienza tu Prueba Gratuita',
    finePrint: 'Sin tarjeta de crédito requerida • Piloto en 3 máquinas • Cancela cuando quieras',
  },

  footer: {
    support: 'Soporte',
    api: 'API / Webhooks',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    rights: 'Todos los derechos reservados.',
  },

  auth: {
    tagline: 'Gestión de mantenimiento sin fricción.',
    desc: 'Digitaliza órdenes de trabajo, controla inventario y recibe alertas en WhatsApp. Todo desde una sola plataforma.',
    pills: ['Reportes por QR', 'Alertas WhatsApp', 'Multi-Planta', '99% Uptime', 'Cero Papel'],
    back: 'Volver al inicio',
    tabLogin: 'Iniciar Sesión',
    tabRegister: 'Crear Cuenta',
    showPassword: 'Mostrar contraseña',
    hidePassword: 'Ocultar contraseña',
    emailError: 'Ingresa un correo electrónico válido.',
    emailPlaceholder: 'tu@empresa.com',
    password: 'Contraseña',
    login: {
      title: 'Bienvenido de vuelta',
      subtitle: 'Ingresa tus credenciales para acceder a tu cuenta.',
      email: 'Correo electrónico',
      passwordError: 'La contraseña es obligatoria.',
      remember: 'Recordarme',
      forgot: '¿Olvidaste tu contraseña?',
      submit: 'Iniciar Sesión',
      invalid: 'Credenciales inválidas. Intenta de nuevo.',
      success: '¡Sesión iniciada! Redirigiendo al dashboard...',
      divider: 'o continúa con',
    },
    register: {
      title: 'Crea tu cuenta',
      subtitle: 'Empieza tu prueba gratuita de 14 días. Sin tarjeta de crédito.',
      name: 'Nombre completo',
      namePlaceholder: 'Ej: Carlos Mendoza',
      nameError: 'El nombre es obligatorio.',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de tu empresa',
      companyError: 'El nombre de empresa es obligatorio.',
      email: 'Correo corporativo',
      passwordPlaceholder: 'Mínimo 8 caracteres',
      passwordError: 'Mínimo 8 caracteres.',
      acceptPrefix: 'Acepto los ',
      termsLink: 'Términos de Servicio',
      acceptMiddle: ' y la ',
      privacyLink: 'Política de Privacidad',
      termsError: 'Debes aceptar los términos para continuar.',
      submit: 'Crear Cuenta Gratis',
      success: (firstName: string) =>
        `¡Bienvenido, ${firstName}! Tu cuenta ha sido creada exitosamente.`,
      divider: 'o regístrate con',
    },
    strength: ['Muy débil', 'Débil', 'Aceptable', 'Fuerte'],
    social: (provider: string) =>
      `Redirigiendo a ${provider} para autenticación... Esta funcionalidad requiere configuración de OAuth en producción.`,
  },

  terms: {
    title: 'Términos y Condiciones',
    updated: 'Última actualización: Septiembre de 2026',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        body: 'Al acceder y utilizar los servicios de FixCore, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestro servicio.',
      },
      {
        title: '2. Uso del Servicio',
        body: 'Nuestra plataforma está diseñada para la gestión del mantenimiento de plantas industriales. Usted se compromete a usar el servicio únicamente para los fines previstos y de acuerdo con las leyes aplicables.',
      },
      {
        title: '3. Privacidad y Datos',
        body: 'El uso de la plataforma está sujeto a nuestra Política de Privacidad, la cual detalla cómo recopilamos y protegemos sus datos operativos.',
      },
      {
        title: '4. Modificaciones',
        body: 'Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. Se le notificará de cualquier cambio significativo con antelación a su entrada en vigor.',
      },
    ],
    back: 'Volver',
  },
};

export type Translation = typeof es;
