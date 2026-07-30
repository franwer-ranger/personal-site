import path from 'node:path';
import sharp from 'sharp';

export interface ImageSize {
  width: number;
  height: number;
}

const cache = new Map<string, ImageSize>();

/**
 * Reads the intrinsic size of an image in public/ at build time, so the markup
 * can carry width/height and the browser reserves the space before loading.
 * Keeping it out of the content files means the numbers can't drift from the
 * actual file. Results are cached: the same shot appears in both locales.
 */
export async function getImageSize(src: string): Promise<ImageSize> {
  const cached = cache.get(src);
  if (cached) return cached;

  const file = path.join(process.cwd(), 'public', src.replace(/^\//, ''));
  const { width, height } = await sharp(file).metadata();

  if (!width || !height) {
    throw new Error(`No se pudieron leer las dimensiones de ${src}`);
  }

  const size = { width, height };
  cache.set(src, size);
  return size;
}
