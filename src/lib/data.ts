import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/ui';

export async function getProjects(locale: Locale) {
  const all = await getCollection('projects', ({ data }) => data.lang === locale);
  return all.sort((a, b) => a.data.priority - b.data.priority);
}

export async function getProject(locale: Locale, slug: string) {
  const projects = await getProjects(locale);
  return projects.find((p) => p.data.slug === slug);
}

export async function getExperience(locale: Locale) {
  const all = await getCollection('experience', ({ data }) => data.lang === locale);
  return all.sort((a, b) => a.data.order - b.data.order);
}
