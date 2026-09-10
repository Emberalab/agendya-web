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
(por defecto `https://launch.agendya.co`). Metadatos, canonical,
`robots.txt`, `sitemap.xml`, iconos, `og-image.jpg` y `site.webmanifest`
viven en `public/` / `index.html`.

## Deploy a GoDaddy (cPanel)

El workflow `.github/workflows/deploy.yml` en push a `main`: lint, tests, build
y sube el contenido de `dist/` por FTP a la carpeta del addon `launch.agendya.co`.
Los PR a `main` solo corren CI; no despliegan.

### Secrets de GitHub (`Settings` → `Secrets and variables` → `Actions`)

| Secret | Ejemplo |
| --- | --- |
| `FTP_SERVER` | IP del servidor (la de cPanel) |
| `FTP_USERNAME` | usuario FTP de esa carpeta |
| `FTP_PASSWORD` | contraseña FTP |

El workflow sube a `./` (raíz de esa cuenta FTP). El home FTP debe ser el
Document Root de `launch.agendya.co`.

### En el servidor (cPanel)

1. Cuenta FTP cuyo directorio sea el Document Root de `launch.agendya.co` (no `agendya.co`).
2. Activa SSL (AutoSSL) para `launch.agendya.co`.
3. No instales Node: se sube HTML/JS/CSS estático.
4. No borres `.well-known`. El workflow la excluye.
5. `public/.htaccess` viaja en el build.

## Lista de espera (GoDaddy, sin Railway)

El formulario POSTea a `/api/waitlist.php` en el mismo `launch.agendya.co`.
PHP guarda en MySQL de cPanel y manda un correo a `info@agendya.co`.

1. cPanel → **MySQL® Databases**: crea base y usuario, asígnalo a la base.
2. phpMyAdmin: importa `public/api/waitlist.sql`.
3. File Manager, carpeta del addon `launch.agendya.co/api/`: copia
   `waitlist.secrets.example.php` a `waitlist.secrets.php` y pon host/usuario/
   contraseña reales. `notify_to` / `notify_from` = `info@agendya.co`.
4. El buzón `info@agendya.co` ya debe existir (cPanel → Email). PHP usa
   `mail()` del hosting; no hace falta Railway ni Resend.

El deploy FTP **no** debe borrar `waitlist.secrets.php` (está en `exclude`).

Primer deploy: que `index.html` quede en esa carpeta, no en un subdirectorio del usuario FTP.

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
