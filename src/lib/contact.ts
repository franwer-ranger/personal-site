import { profile } from '../config/profile';

/** Enlace de correo con el asunto ya escrito. */
export function mailtoHref(subject: string): string {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
}
