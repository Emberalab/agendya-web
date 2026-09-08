# Agendya — Landing

Landing de Agendya. React 19 + TypeScript + Vite, **pre-renderizado a HTML
estático** e hidratado en el cliente.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR (render 100% en cliente). |
| `npm run build` | `tsc -b` + `vite build` + `scripts/prerender.mjs` → `dist/`. |
| `npm run build:nocheck` | Igual sin type-check (útil en iteración). |
| `npm run preview` | Sirve el build de producción en `localhost:4173`. |
| `npm run lint` | Oxlint. |
| `npm test` | Vitest (una pasada). |
| `npm run test:watch` | Vitest en watch. |
| `npm run typecheck:test` | Type-check de los tests. |

### Pre-render / SEO

`scripts/prerender.mjs` corre tras `vite build`:

- renderiza `<App />` con `react-dom/server` e inyecta el HTML en `#root`
  (contenido, titulares y FAQ rastreables sin ejecutar JS; mejor LCP/FCP);
- inserta el CSS crítico inline y precarga las fuentes woff2 latinas;
- inyecta JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`,
  `FAQPage`) generado desde las constantes de `src/constants/`.

`src/main.tsx` hidrata ese marcado (`hydrateRoot`); en `dev` el contenedor
está vacío y se usa `createRoot`.

El dominio de producción se toma de `VITE_SITE_URL`
(por defecto `https://agendya.co`). Metadatos, canonical,
`robots.txt`, `sitemap.xml`, iconos, `og-image.jpg` y `site.webmanifest`
viven en `public/` / `index.html`.

## Deploy a GoDaddy (cPanel)

El workflow `.github/workflows/deploy.yml` en push a `dev`: lint, tests, build
y sube el contenido de `dist/` por FTP a `public_html`.

### Secrets de GitHub (`Settings` → `Secrets and variables` → `Actions`)

| Secret | Ejemplo |
| --- | --- |
| `FTP_SERVER` | `ftp.agendya.co` (o el host que muestre cPanel) |
| `FTP_USERNAME` | usuario FTP |
| `FTP_PASSWORD` | contraseña FTP |

El workflow sube a `./` (raíz de esa cuenta FTP). Por eso el home FTP debe ser `public_html`.

### En el servidor (cPanel)

1. Crea una cuenta FTP con directorio **solo** `public_html` (no el home completo).
2. Activa SSL (Let's Encrypt / AutoSSL) para `agendya.co`.
3. El Document Root del dominio debe ser `public_html`.
4. No instales Node en GoDaddy: se sube HTML/JS/CSS estático.
5. No borres `.well-known` (renovación SSL). El workflow la excluye.
6. `public/.htaccess` viaja en el build (HTTPS, `index.html`, caché de assets).

Primer deploy: vacía `public_html` de la página por defecto de GoDaddy (`default.html`, etc.) para que no tape `index.html`.

Las fuentes (Outfit + Plus Jakarta Sans, variables, subconjunto latino) están
**self-hosted** en `src/assets/fonts/` — sin peticiones a Google Fonts.

Los tests viven junto al código (`src/**/*.test.ts[x]`), Vitest + Testing
Library sobre `jsdom` (setup en `src/test/setup.ts`).

---

This project started from Vite's React + TypeScript template.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
