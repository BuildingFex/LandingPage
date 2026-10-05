# FixCore — Landing

Sitio de marketing de FixCore (CMMS para mantenimiento industrial), construido con **Angular 21** (componentes standalone, signals, sin zone.js). Responsive desde 320 px hasta escritorio.

## Requisitos

- Node.js 20.19+, 22.12+ o 24+
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm start
```

Abre `http://localhost:4200`.

## Producción

```bash
npm run build
```

La salida queda en `dist/fixcore-landing/browser` (configurado en `vercel.json`).

## Rutas

| Ruta | Página |
|------|--------|
| `/es`, `/en` | Landing |
| `/es/login`, `/en/login` | Iniciar sesión / crear cuenta (`#register` abre la pestaña de registro) |
| `/es/terms`, `/en/terms` | Términos y condiciones |

Las URLs del sitio estático anterior (`index.html`, `login-en.html`, `terms.html`, …) redirigen a su ruta equivalente.

## Enlaces a la app FixCore

`src/app/core/config/fixcore-app.ts` define la URL de la app Next.js: `https://fixcore-app.vercel.app` en producción y `http://localhost:3000` cuando la landing corre en local. Desde ahí salen los enlaces de "Iniciar Sesión" (`/login`), "Solicitar Demo" / "Prueba Gratis" (`/registro`) y la redirección al `/dashboard` tras el login.

## Estructura

```
src/app/
  core/
    config/      URL de la app FixCore
    i18n/        idioma activo (signal), guard de /:lang y textos es.ts / en.ts
    seo/         título y meta description por página/idioma
  shared/
    components/  icon, logo, selector de idioma
    directives/  appReveal (animación al hacer scroll), appCountUp (contadores)
  features/
    landing/     página principal y sus secciones
    auth/        login / registro
    legal/       términos y condiciones
```

Todos los textos están en `src/app/core/i18n/translations/` (el tipo de `en.ts` se deriva de `es.ts`, así que falta una clave = error de compilación).

## Licencia

Privado — FixCore.
