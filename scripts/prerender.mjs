/**
 * Pre-render del landing tras `vite build`.
 *
 *  - Renderiza <App /> a HTML estático y lo inyecta en #root, de modo que
 *    el contenido (titulares, FAQ, enlaces…) esté en el HTML inicial:
 *    mejor LCP/FCP y totalmente rastreable sin ejecutar JS.
 *  - Inserta el CSS crítico inline (elimina 1 request bloqueante).
 *  - Precarga las fuentes woff2 latinas.
 *  - Inyecta JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage)
 *    generado desde las mismas constantes que usa la UI.
 *
 * El cliente hidrata este marcado (src/main.tsx).
 */
import { readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer, loadEnv } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const env = loadEnv('production', root, 'VITE_');
const SITE_URL = (
  process.env.VITE_SITE_URL ||
  env.VITE_SITE_URL ||
  'https://emberalab.github.io/agendya-web'
).replace(/\/$/, '');

const esc = (s) => String(s).replace(/</g, '\\u003c');

function buildJsonLd(FAQ_ITEMS, PRICING_PLANS) {
  const org = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Agendya',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      'Agendya es un software de agenda y reservas online para negocios de servicios en América Latina.',
    areaServed: 'América Latina',
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'Agendya',
    inLanguage: 'es',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const free = PRICING_PLANS.find((p) => p.id === 'free');
  const basic = PRICING_PLANS.find((p) => p.id === 'basic');
  const softwareApp = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: 'Agendya',
    url: `${SITE_URL}/`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Appointment Scheduling',
    operatingSystem: 'Web',
    inLanguage: 'es',
    description:
      'Agenda y reservas online para barberías, salones, spa, estudios de uñas y consultas. Los clientes reservan solos 24/7 desde un enlace público, sin apps y sin dobles reservas.',
    featureList: [
      'Agenda de citas',
      'Página pública de reservas',
      'Gestión de servicios, precios y duración',
      'Horarios semanales y bloqueo de fechas',
      'Servicios a domicilio',
      'Recordatorios y confirmaciones por correo',
      'Reprogramación y cancelación de citas',
    ],
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: [
      free && {
        '@type': 'Offer',
        name: `Plan ${free.name}`,
        price: '0',
        priceCurrency: 'COP',
        description: free.features.join(', '),
      },
      basic && {
        '@type': 'Offer',
        name: `Plan ${basic.name}`,
        price: '19900',
        priceCurrency: 'COP',
        description: basic.features.join(', '),
      },
    ].filter(Boolean),
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return { '@context': 'https://schema.org', '@graph': [org, website, softwareApp, faqPage] };
}

async function main() {
  const vite = await createServer({
    root,
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const [{ default: App }, { FAQ_ITEMS }, { PRICING_PLANS }] = await Promise.all([
      vite.ssrLoadModule('/src/App.tsx'),
      vite.ssrLoadModule('/src/constants/faq.ts'),
      vite.ssrLoadModule('/src/constants/pricing.ts'),
    ]);

    const appHtml = renderToString(createElement(App));
    if (!appHtml.includes('<h1')) {
      throw new Error('prerender: el HTML resultante no contiene <h1>, algo falló al renderizar.');
    }

    let html = await readFile(path.join(dist, 'index.html'), 'utf8');

    // 1) Contenido pre-renderizado
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // 2) CSS crítico inline (quita el <link rel=stylesheet> bloqueante)
    const cssLink = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
    if (cssLink) {
      const cssPath = path.join(dist, cssLink[1].replace('/agendya-web/', ''));
      const css = await readFile(cssPath, 'utf8');
      html = html.replace(cssLink[0], `<style>${css}</style>`);
      // El CSS ya va inline: el archivo suelto sería peso muerto en el deploy.
      await rm(cssPath, { force: true });
    }

    // 3) Precarga solo de las fuentes latinas base (no latin-ext: el
    //    contenido en español no la necesita y precargarla sería peso muerto)
    const assets = await readdir(path.join(dist, 'assets'));
    const preloads = assets
      .filter(
        (f) =>
          /^(outfit|plus-jakarta-sans)-latin-[^.]+\.woff2$/.test(f) && !f.includes('-latin-ext-'),
      )
      .map(
        (f) =>
          `<link rel="preload" as="font" type="font/woff2" crossorigin href="/agendya-web/assets/${f}" />`,
      )
      .join('\n    ');

    // 4) modulepreload explícito del bundle de entrada (acorta la cadena
    //    de dependencias de red que detecta Lighthouse)
    const entryMatch = html.match(/<script type="module"[^>]*src="([^"]+\.js)"/);
    const modulePreload = entryMatch
      ? `<link rel="modulepreload" href="${entryMatch[1]}" />`
      : '';

    // 5) JSON-LD
    const jsonLd = buildJsonLd(FAQ_ITEMS, PRICING_PLANS);
    const ld = `<script type="application/ld+json">${esc(JSON.stringify(jsonLd))}</script>`;

    html = html.replace(
      '<!-- prerender:head -->',
      [modulePreload, preloads, ld].filter(Boolean).join('\n    '),
    );

    await writeFile(path.join(dist, 'index.html'), html);
    console.log('prerender: dist/index.html actualizado (contenido estático + CSS inline + JSON-LD)');
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
