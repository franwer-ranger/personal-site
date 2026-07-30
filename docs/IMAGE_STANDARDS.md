# Estándar de imágenes

> Proceso y convenciones para gestionar los assets de imagen en `public/`.

Las imágenes de contenido viven en una subcarpeta por proyecto (`public/webel/`,
`public/aurorajobs/`, …). La raíz de `public/` queda para favicons y SVGs del
sitio: los scripts la ignoran a propósito.

## Formatos aceptados

| Formato | Uso |
|---------|-----|
| `.avif` | Fuente principal — mejor compresión |
| `.webp` | Fallback |
| `.png` | Fallback final — nunca `.jpg` |
| `.svg` | Iconos e ilustraciones vectoriales únicamente |

**Regla**: toda imagen de contenido debe existir en los 3 formatos (avif + webp + png). No se aceptan `.jpg` ni `.jpeg`.

## Límites de peso

| Tipo | AVIF | WebP | PNG |
|------|------|------|-----|
| Hero / fondo | ≤ 150 KB | ≤ 250 KB | ≤ 500 KB |
| Contenido (cards, secciones) | ≤ 80 KB | ≤ 150 KB | ≤ 300 KB |

## Patrón `<picture>` en el código

Siempre este orden: avif → webp → img (con src en png).

```astro
<picture>
  <source srcset='/webel/business_calendar.avif' type='image/avif' />
  <source srcset='/webel/business_calendar.webp' type='image/webp' />
  <img loading='lazy' src='/webel/business_calendar.png' alt={t('...')} />
</picture>
```

## Proceso para añadir una imagen nueva

### 1. Obtener la fuente correcta

Producto debe entregar siempre un **PNG sin comprimir** exportado desde Figma a 2x.
Nunca usar un `.jpg` como fuente — ya tiene pérdida y degradar la calidad al convertir.

### 2. Colocar la fuente en `public/[proyecto]/`

```
public/
├── webel/image.png         ← fuente
├── aurorajobs/image.png
```

**Guarda una copia del PNG original fuera del repo hasta comprobar el resultado.** El script reescribe el PNG en su sitio.

### 3. Ejecutar el script de optimización

```bash
npm run optimize-images              # todo lo pendiente
npm run optimize-images -- --dry-run # ver qué haría, sin escribir
npm run optimize-images -- webel     # sólo una carpeta o imagen
npm run optimize-images -- --force   # reencodear aunque esté al día
```

El script (`scripts/optimize-images.js`, sobre `sharp`) genera los 3 formatos y reporta el peso de cada salida. Salta lo que ya está al día, así que es barato repetirlo.

Parámetros: AVIF `q80` con croma `4:4:4` y WebP `q92` con `smartSubsample` — medido sobre capturas reales del proyecto da PSNR > 45 dB, o sea sin diferencia perceptible, y el croma sin submuestrear mantiene nítidos el texto fino y los bordes de 1px. El PNG se recomprime **sin pérdida** y el script verifica píxel a píxel que la salida es idéntica antes de pisar el original.

> Cuidado si tocas los parámetros del PNG: en `sharp` basta con pasar `effort` o `quality` dentro de `png()` para que se active `palette` por su cuenta y cuantice la imagen a 256 colores. Por eso va `palette: false` explícito.

### 4. Verificar los outputs

```bash
npm run check-assets
```

Comprueba que existen los 3 formatos y que su peso está dentro de los límites. Si alguno se pasa, el problema suele estar en las dimensiones de la fuente: redimensionarla y volver a optimizar.

### 5. Commitear los 3 formatos

```bash
git add public/webel/business_calendar.{avif,webp,png}
```

Las imágenes optimizadas se versionan en el repo — no se generan en build time.

### 6. Usar el patrón `<picture>` en el componente

Ver sección [Patrón `<picture>` en el código](#patrón-picture-en-el-código).

## Lo que NO hacer

- No commitear `.jpg` — `check-assets` falla si detecta alguno en `public/`
- No usar `<img src='image.jpg'>` directo sin `<picture>`
- No pasar el script en cada build ni en el prebuild — se ejecuta una sola vez al añadir/cambiar imágenes
- No entregar fotos de stock sin redimensionar (las fuentes originales no deben superar el ancho máximo de display × 2)
