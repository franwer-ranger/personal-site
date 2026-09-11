import type { APIRoute } from 'astro';
import { getProjects } from '../lib/data';
import { homePath, projectPath, locales, type Locale } from '../i18n/ui';

type PathsByLocale = Record<Locale, string>;

/**
 * Sitemap escrito a mano en lugar de con una integración: son diez URLs y así
 * cada entrada puede declarar sus alternates hreflang, que es lo que importa en
 * un sitio bilingüe.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://franbarahona.dev');

  const entries: PathsByLocale[] = [{ es: homePath('es'), en: homePath('en') }];

  // Las dos locales comparten slug, así que basta con recorrer una.
  for (const project of await getProjects('es')) {
    entries.push({
      es: projectPath('es', project.data.slug),
      en: projectPath('en', project.data.slug),
    });
  }

  const absolute = (path: string) => new URL(path, base).href;

  const urls = entries
    .flatMap((paths) =>
      locales.map((locale) => {
        const alternates = locales
          .map(
            (target) =>
              `    <xhtml:link rel="alternate" hreflang="${target}" href="${absolute(paths[target])}" />`,
          )
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(paths.es)}" />`,
          )
          .join('\n');

        return `  <url>\n    <loc>${absolute(paths[locale])}</loc>\n${alternates}\n  </url>`;
      }),
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
