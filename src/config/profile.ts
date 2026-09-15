export const profile = {
  name: 'Fran Barahona',
  email: 'franbaraguz98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/francisco-barahona-a9b3a3218/',
  github: 'https://github.com/franwer-ranger',
  cv: {
    es: '/cv/CV_Francisco_Barahona.pdf',
    en: '/cv/CV_Francisco_Barahona.pdf',
  } as Record<'es' | 'en', string | null>,
  /** Bloque preparado; requiere texto, autoría y autorización antes de mostrarse. */
  recommendation: null as null | {
    quote: Record<'es' | 'en', string>;
    author: string;
    relationship: Record<'es' | 'en', string>;
  },
};
