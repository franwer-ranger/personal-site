import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;
export type ProjectData = Project['data'];
export type ProfessionalCaseData = Extract<ProjectData, { kind: 'professional' }>;
export type LabProjectData = Extract<ProjectData, { kind: 'lab' }>;
export type ProfessionalCase = Project & { data: ProfessionalCaseData };
export type LabProject = Project & { data: LabProjectData };

export function isProfessional(project: Project): project is ProfessionalCase {
  return project.data.kind === 'professional';
}

export function isLab(project: Project): project is LabProject {
  return project.data.kind === 'lab';
}

export async function getProjects(locale: Locale) {
  const all = await getCollection('projects', ({ data }) => data.lang === locale);
  return all.sort((a, b) => a.data.priority - b.data.priority);
}

/** Casos profesionales, en el orden en que se leen en la portada. */
export async function getProfessionalCases(locale: Locale) {
  return (await getProjects(locale)).filter(isProfessional);
}

/** Proyectos propios seleccionados para el Lab. */
export async function getLabProjects(locale: Locale) {
  return (await getProjects(locale)).filter(isLab).filter((p) => p.data.prominence === 'featured');
}

/**
 * El detalle enlaza siempre con otra pieza del mismo tipo: un caso profesional
 * no manda a un experimento personal sin avisar.
 */
export function nextOfSameKind(projects: Project[], current: Project) {
  const siblings = projects.filter((project) => project.data.kind === current.data.kind);
  if (siblings.length < 2) return undefined;
  const index = siblings.findIndex((project) => project.data.slug === current.data.slug);
  return siblings[(index + 1) % siblings.length];
}

export async function getExperience(locale: Locale) {
  const all = await getCollection(
    'experience',
    ({ data }) => data.lang === locale && data.kind === 'professional',
  );
  return all.sort((a, b) => a.data.order - b.data.order);
}
