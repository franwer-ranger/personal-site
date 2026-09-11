import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

/** Ruta al .png dentro de public/. El .avif y el .webp se derivan de ella, así
 *  que los tres formatos deben existir (npm run check-assets). */
const assetPath = z.string().regex(/^\/.+\.png$/);

const galleryShot = z.object({
  src: assetPath,
  alt: z.string(),
  caption: z.string(),
});

/** Lo que comparten un caso profesional y un proyecto del Lab: identidad,
 *  estado y los campos con los que la portada arma su teaser. Todo lo demás
 *  vive en la rama que le corresponde. */
const shared = {
  lang: z.enum(['es', 'en']),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  status: z.string(),
  prominence: z.enum(['featured', 'standard']),
  signal: z.enum(['product', 'fullstack', 'ai-workflow', 'architecture']),
  contribution: z.string(),
  proof: z.array(z.string()).min(1).max(3),
  technologies: z.array(z.string()),
  links: z.array(z.object({ label: z.string(), url: z.string().regex(/^https:\/\//) })).optional(),
  logo: assetPath.optional(),
  gallery: z.array(galleryShot).optional(),
  priority: z.number(),
  visualTheme: z.enum(['ink', 'slate', 'moss', 'plum']),
};

/** Caso profesional: empresa, periodo, responsabilidad con sus límites,
 *  decisiones razonadas y resultados con su evidencia. */
const professionalCase = z.object({
  ...shared,
  kind: z.literal('professional'),
  company: z.string(),
  period: z.string(),
  role: z.string(),
  scope: z.string(),
  /** Una frase: lo que la portada enseña como problema. */
  problemLine: z.string(),
  context: z.string(),
  audience: z.string(),
  responsibility: z.object({
    summary: z.string(),
    // Dos o tres frentes con señal, no una lista de responsabilidades.
    fronts: z.array(z.object({ title: z.string(), description: z.string() })).min(2).max(3),
    // El resto cabe en un inventario breve.
    inventory: z.array(z.string()),
    // Qué parte no es suya: equipo, producto, diseño.
    teamBoundary: z.string(),
  }),
  decisions: z
    .array(
      z.object({
        title: z.string(),
        situation: z.string(),
        decision: z.string(),
        rationale: z.string(),
        change: z.string(),
      }),
    )
    .min(2)
    .max(3),
  results: z.array(z.object({ statement: z.string(), evidence: z.string() })).min(1).max(4),
  confidentialityNote: z.string().optional(),
});

/** Proyecto del Lab: menos ceremonia. Problema observado, alcance elegido, qué
 *  construyó, estado honesto y qué demuestra. */
const labProject = z.object({
  ...shared,
  kind: z.literal('lab'),
  year: z.string(),
  problem: z.string(),
  scopeChoice: z.string(),
  built: z.array(z.string()),
  statusDetail: z.string(),
  demonstrates: z.array(z.string()),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  // La unión discriminada es lo que impide que un proyecto propio se cuele con
  // forma de experiencia profesional: sin `kind` correcto no valida.
  schema: z.discriminatedUnion('kind', [professionalCase, labProject]),
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
    kind: z.literal('professional'),
    stage: z.enum(['fullstack', 'frontend']),
    slug: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
