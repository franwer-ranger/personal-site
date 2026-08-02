import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const localizedString = z.string();

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    title: localizedString,
    slug: z.string(),
    summary: localizedString,
    problem: localizedString,
    audience: localizedString,
    role: localizedString,
    status: localizedString,
    year: z.string(),
    technologies: z.array(z.string()),
    responsibilities: z.array(z.string()),
    decisions: z.array(z.string()),
    outcomes: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    // Icono de la app (opcional). Misma regla de formatos que la galería:
    // .png + .avif + .webp en public/ (npm run check-assets).
    logo: z.string().regex(/^\/.+\.png$/).optional(),
    gallery: z
      .array(
        z.object({
          // Ruta al .png dentro de public/. El .avif y el .webp se derivan de
          // ella, así que los tres formatos deben existir (npm run check-assets).
          src: z.string().regex(/^\/.+\.png$/),
          alt: z.string(),
          caption: z.string(),
        }),
      )
      .optional(),
    featured: z.boolean(),
    priority: z.number(),
    visualTheme: z.enum(['ink', 'copper', 'moss', 'slate', 'sand', 'plum']),
    category: z.enum(['webel', 'product-os', 'maker', 'side', 'legacy']),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/experience',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    stage: z.enum(['fullstack', 'frontend', 'product']),
    summary: z.string(),
    highlights: z.array(z.string()),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
