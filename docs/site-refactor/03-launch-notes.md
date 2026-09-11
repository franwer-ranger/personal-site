# Notas de salida del plan 03

Estado: plan 03 implementado el 11 de septiembre de 2026  
Alcance: casos, metadatos para compartir, contacto, rendimiento y QA bilingüe

## Qué cambió en el modelo de datos

`src/content.config.ts` pasó de un único objeto a una unión discriminada por `kind`. Un caso profesional y un proyecto del Lab comparten identidad, estado y los campos con los que la portada arma su teaser; lo demás vive en su rama.

```ts
schema: z.discriminatedUnion('kind', [professionalCase, labProject])
```

Caso profesional: `company`, `period`, `role`, `scope`, `problemLine`, `context`, `audience`, `responsibility` (`summary`, `fronts`, `inventory`, `teamBoundary`), `decisions` (2–3, cada una con `situation`, `decision`, `rationale`, `change`), `results` (`statement` + `evidence`) y `confidentialityNote`.

Proyecto del Lab: `year`, `problem`, `scopeChoice`, `built`, `statusDetail` y `demonstrates`.

Con esto un proyecto propio ya no puede colarse con forma de experiencia: sin el `kind` correcto no valida, y la página de detalle elige plantilla con los type guards `isProfessional` / `isLab` de `src/lib/data.ts`.

`prominence` perdió el valor `archive`. Un proyecto que no se publica vive en un `.json.hidden`, que es la convención que ya usaba el repositorio para Agendao. Maker Tracker y My Potential pasaron a ese estado.

La paleta de acentos de proyecto se quedó en `ink`, `slate`, `moss` y `plum`. `copper` y `sand` desaparecieron con la familia beige que el north star retiró.

## Plantillas

- `ProfessionalCasePage.astro`: resumen, problema y contexto, responsabilidad con sus frentes y sus límites, decisiones, resultado con evidencia, galería comentada y, al final, stack y enlaces.
- `LabProjectPage.astro`: problema observado, idea y alcance, qué construyó, estado real, qué demuestra y galería.
- `CaseNext.astro`: el enlace final siempre lleva a otra pieza del mismo tipo (`nextOfSameKind`). Un caso profesional no manda a un experimento personal sin avisar.
- `ExternalLink.astro`: los enlaces que abren otra web llevan `↗` decorativo y un texto solo para lectores de pantalla. El icono no sustituye al texto.

`ProjectPage.astro` desapareció. Los alias de compatibilidad de `global.css` (`--paper`, `--ink`, `--line`, `--coal`…) también: ya no quedaba nadie usándolos.

## Rutas

Sin cambios ni redirecciones. Las ocho URL públicas de proyecto siguen siendo las mismas:

```text
/proyectos/{webel,aurorajobs,postgram,fountly}
/en/projects/{webel,aurorajobs,postgram,fountly}
```

Maker Tracker y My Potential ya estaban fuera de navegación antes del plan, así que no había ruta que redirigir.

## Metadatos

`Layout.astro` acepta `title`, `description`, `ogImage`, `ogImageAlt` y `ogType`, y calcula el resto desde `Astro.site`: canonical absoluto sin barra final, `hreflang` es/en, `x-default` apuntando al español, Open Graph completo con dimensiones, Twitter `summary_large_image`, `og:locale` y `theme-color`.

`src/pages/sitemap.xml.ts` genera el sitemap a mano en vez de con una integración: son diez URL y así cada entrada declara sus `xhtml:link` alternates, que es lo que importa en un sitio bilingüe. `public/robots.txt` permite todo y apunta al sitemap.

Las social cards se generan con `npm run social-cards` (`scripts/social-cards.js`, sharp sobre SVG) en `public/og-{default,webel,aurorajobs}-{es,en}.png`, a 1200 × 630. Viven en la raíz de `public/` porque `check-assets.js` solo exige el triplete `.png/.avif/.webp` en las subcarpetas.

Las fuentes del proyecto no están instaladas en el sistema, así que el texto de las cards cae en la grotesca del sistema. Para una imagen estática es una sustitución aceptable y evita depender de fontconfig en el build.

## Contacto

Un solo buzón y dos intenciones. Cada tarjeta abre un `mailto:` con el asunto ya puesto: `Oferta para Fran Barahona` o `Proyecto con Fran Barahona`. Email, LinkedIn y GitHub visibles. No hay enlace de CV porque no hay PDF aprobado. Sin formulario, sin calendario y sin analítica.

## Rendimiento

Medido sobre `npm run build` con el plan 03 terminado.

| Recurso | Peso |
| --- | --- |
| HTML de la portada (ES / EN) | 25,2 KB / 24,8 KB |
| HTML del caso más largo (AuroraJobs ES) | 32,8 KB |
| CSS de la portada | 32,7 KB en dos hojas |
| CSS de un caso | 31,0 KB en dos hojas |
| JavaScript total del sitio | 15,7 KB (`ClientRouter`) |
| AVIF más pesado | 180,5 KB (`aurorajobs_hacks`) |
| Social card | entre 41,8 y 47,1 KB |

Dos cambios respecto al estado anterior:

- `aurorajobs_hacks` pesaba 240,9 KB en AVIF y superaba el límite de 200 KB del repositorio. La fuente estaba a 2708 px de ancho; se redujo a 2200 px y volvió a pasar por `npm run optimize-images`. Quedó en 180,5 KB sin pérdida visible en la galería ni en el lightbox. `npm run check-assets` ya no da avisos.
- El script de la galería estaba en `Layout.astro` y se inlineaba en todas las páginas, incluida la portada, que no tiene galería. Ahora vive en `ProjectGallery.astro`, así que solo lo cargan los detalles. Con `ClientRouter` el listener de `astro:page-load` sobrevive a las navegaciones y sigue inicializando la galería de cada caso; está comprobado tanto en carga directa como navegando desde la portada.

El chunk de 512 KB de `heroScene` que registraba el north star ya no existe: el plan 02 retiró la escena 3D. El único JavaScript que queda es el router de vistas, y el contenido se lee entero sin él.

Queda una deuda conocida: `public/maker_tracker/` y `public/my_potential/` siguen en el repositorio aunque sus entradas están ocultas. Son unos 2 MB que se despliegan sin que ninguna página los pida. No se han borrado porque los dos proyectos siguen como candidatos a volver al Lab en cuanto Fran valide su estado.

## QA

Comprobado en las diez rutas públicas más `sitemap.xml` y `robots.txt`, con Chrome headless por CDP.

- Sin errores de consola, sin excepciones y sin respuestas 4xx ni 5xx en ninguna ruta.
- `document.documentElement.scrollWidth === window.innerWidth` a 390 × 844, 720 × 450 (equivalente a zoom 200 % sobre 1440) y 1440 × 900. La tira de la galería desborda a propósito dentro de su contenedor con scroll horizontal.
- Nombre, rol, propuesta y las dos acciones caben en el primer viewport en los dos idiomas: los CTA terminan en 608 px (ES) y 563 px (EN) sobre 844 de alto en móvil, y en 674 / 658 px sobre 900 en escritorio.
- Recorrido de teclado en la portada: enlace de salto, marca, navegación, selector de idioma, CTA, casos, Lab, contacto y pie. Los 22 primeros tabuladores tienen anillo de foco visible.
- Contraste: los 26 pares de tokens en uso pasan 4,5:1, incluidos los acentos de proyecto sobre el degradado del hero y las etiquetas sobre el bloque oscuro del método.
- `prefers-reduced-motion: reduce` mantiene el contenido completo; no hay nada que dependa de una animación para aparecer.
- El selector de idioma conserva la página: `/proyectos/webel` → `/en/projects/webel`, comprobado con navegación real.
- Jerarquía de encabezados: un `h1` por página, `h2` por bloque y `h3` para frentes y decisiones.
- Ningún enlace vacío, sin `href`, con `#` ni con `undefined` en las diez rutas.

`npm run build`, `npm run check-assets` y `npx astro check` terminan sin errores ni avisos.

## Lo que sigue bloqueado

Las preguntas abiertas están en [claims-checklist.md](./claims-checklist.md). Ninguna bloquea el despliegue: lo que no está validado no se publica, y las cifras internas quedan declaradas en la nota de confidencialidad de cada caso.
