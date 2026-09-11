import es from './es.json';
import en from './en.json';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const dictionaries = { es, en } as const;
export type Translations = (typeof dictionaries)[typeof defaultLocale];

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en';
}

export function getTranslations(locale: string | undefined): Translations {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

/**
 * Given the current path and the target locale, returns the equivalent
 * localized path. Handles the home page and project detail routes.
 */
export function getLocalizedPath(currentPath: string, target: Locale): string {
  const clean = currentPath.replace(/\/+$/, '') || '/';

  // Project detail pages
  for (const [esPrefix, enPrefix] of [[ '/proyectos', '/en/projects' ]] as const) {
    if (clean.startsWith(`${esPrefix}/`)) {
      const slug = clean.slice(esPrefix.length);
      return target === 'en' ? `${enPrefix}${slug}` : `${esPrefix}${slug}`;
    }
    if (clean.startsWith(`${enPrefix}/`)) {
      const slug = clean.slice(enPrefix.length);
      return target === 'en' ? `${enPrefix}${slug}` : `${esPrefix}${slug}`;
    }
  }

  return target === 'en' ? '/en' : '/';
}

export function projectPath(locale: Locale, slug: string): string {
  return locale === 'en' ? `/en/projects/${slug}` : `/proyectos/${slug}`;
}

export function homePath(locale: Locale): string {
  return locale === 'en' ? '/en' : '/';
}

/** Rellena marcadores `{clave}` en una cadena del diccionario. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}

/** Enlace a una sección de la portada del idioma actual. */
export function sectionPath(locale: Locale, anchor: string): string {
  return `${homePath(locale)}#${anchor}`;
}
