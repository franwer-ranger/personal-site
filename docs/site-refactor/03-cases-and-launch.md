# Plan 03 — Casos, confianza y salida a producción

Estado: implementado el 11 de septiembre de 2026. El registro de ejecución está en [03-launch-notes.md](./03-launch-notes.md).

Prioridad: 3  
Depende de: planes `01` y `02` terminados  
Resultado: casos coherentes, metadatos para compartir y una revisión final de contenido, accesibilidad y rendimiento

## Objetivo

Completar la segunda capa de información y cerrar los detalles que convierten una buena portada en una web publicable. Los casos deben demostrar cómo trabaja Fran sin revelar información confidencial ni atribuirle resultados del equipo que no pueda sostener.

## Leer antes de empezar

- `docs/site-refactor/00-north-star.md`
- `docs/site-refactor/claims-checklist.md`
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro routing](https://docs.astro.build/en/guides/routing/)
- [Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Open Graph protocol](https://ogp.me/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

## Decisiones que ya están tomadas

- Webel y AuroraJobs son los casos profesionales principales.
- Los casos profesionales y los proyectos del Lab pueden compartir primitives, pero no necesitan la misma plantilla ni profundidad.
- La portada enseña el resumen. El detalle guarda contexto, contribución, decisiones, resultados, stack y galería.
- Ningún claim `pendiente` llega a producción.
- Las rutas actuales de proyectos se conservan o redirigen de forma explícita.

## Trabajo

### 1. Cerrar la checklist de claims con Fran

Revisar cada entrada de `claims-checklist.md`. Para cerrar una:

- guardar la formulación aprobada;
- anotar si puede usarse en portada, detalle o solo en conversación privada;
- mantener la misma precisión en ES y EN;
- eliminar cualquier variante antigua del repositorio.

Si un dato no se puede validar, usar una formulación de escala o quitarlo. Ejemplos:

- `producto usado por miles de personas cada día` si esa escala está confirmada;
- `responsable técnico de las superficies web` si el título formal no fue lead;
- `coordiné y apoyé a otros developers` si no hubo gestión directa;
- `impacto directo en una línea B2B relevante` si no se puede publicar el GMV.

No convertir estas frases de ejemplo en hechos sin aprobación.

### 2. Rediseñar el caso profesional

Crear una plantilla o variante con este orden:

1. Resumen: empresa, periodo, papel, alcance y estado.
2. Problema y contexto del producto.
3. Responsabilidad de Fran y límites del equipo.
4. Dos o tres decisiones importantes.
5. Resultado y evidencia disponible.
6. Galería comentada.
7. Stack y enlaces como información secundaria.

Cada decisión debe contestar:

- qué situación había;
- qué decidió o propuso Fran;
- por qué tenía sentido;
- qué cambió después.

Evitar listas largas de responsabilidades. Agrupar el caso de Webel en dos o tres frentes con mayor señal, por ejemplo plataforma web, consolidación del stack y sistema de trabajo con IA. El resto puede aparecer en un inventario breve.

AuroraJobs debe reflejar la experiencia full stack y la colaboración estrecha con CTO y Product Owner. Revisar con cuidado `lideré`, `construí desde cero`, duración y tamaño de equipo.

### 3. Crear una variante ligera para el Lab

Los proyectos propios necesitan menos ceremonia. Usar:

1. Problema observado.
2. Idea y alcance elegido.
3. Qué construyó Fran.
4. Estado real.
5. Qué demuestra o qué aprendió.
6. Demo/código/capturas cuando existan.

No rellenar `outcomes` con frases como «prueba de que puede funcionar» si no hubo uso o validación. `Prototipo funcional`, `lo uso personalmente` o `archivado después de probar X` son estados válidos y más creíbles.

Si un proyecto no tiene suficiente material, su tarjeta puede vivir en el archivo sin página propia.

### 4. Mejorar navegación entre niveles

- Los CTA de portada deben decir `Ver caso`, `Cómo trabajé en Webel` o una etiqueta igual de específica.
- Cada detalle vuelve a la sección correcta: experiencia/trabajo o Lab.
- El siguiente contenido pertenece al mismo tipo; no saltar de un caso profesional a un experimento sin avisar.
- Conservar idioma al navegar.
- Añadir una ruta de archivo para proyectos si hay más de cuatro y aporta valor. No crearla solo para evitar descartar contenido.

Astro usa rutas por archivos y rutas dinámicas generadas en build. Mantener `getStaticPaths()` y el esquema de la colección alineados con las URLs localizadas, según la [documentación de routing](https://docs.astro.build/en/guides/routing/) e [i18n](https://docs.astro.build/en/guides/internationalization/).

### 5. Completar metadatos para compartir

Actualizar `Layout.astro` para aceptar metadatos por página:

- `title` y `description`;
- canonical absoluto;
- alternates `hreflang` ES/EN y `x-default` si encaja con el routing;
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image` y dimensiones;
- `twitter:card`, título, descripción e imagen;
- favicon y theme color coherentes con el nuevo sistema.

Crear al menos:

- una social card general;
- una variante para Webel;
- una variante para AuroraJobs.

Las imágenes deben incluir nombre, rol/caso y un gesto visual del sistema. Evitar capturas con texto pequeño. Comprobar el recorte en 1200 × 630.

Añadir sitemap si no existe y comprobar `robots.txt`. No bloquear indexación del dominio de producción. Evitar canonical de localhost en builds finales; usar `Astro.site`.

### 6. Afinar contacto y señales de confianza

El cierre debe permitir dos intenciones sin dos formularios distintos:

- oportunidades profesionales;
- proyectos o servicios.

Incluir email y LinkedIn visibles. GitHub puede apoyar la evaluación técnica. Añadir CV solo cuando exista un PDF actualizado y aprobado; hasta entonces no mostrar un enlace vacío.

No añadir calendario, formulario, analítica o tracking de terceros sin una decisión explícita. El `mailto:` actual basta para publicar.

Revisar todos los enlaces externos y marcar con claridad los que abren otra web. El icono no sustituye el texto accesible.

### 7. Revisar rendimiento y robustez

Objetivos:

- HTML útil desde la primera respuesta;
- cero JavaScript para leer hero, experiencia, trabajo y Lab;
- imágenes con dimensiones, formatos modernos y lazy loading fuera del primer viewport;
- ninguna dependencia grande sin uso;
- sin errores de consola ni peticiones 404;
- sin layout shift visible al cargar fuentes o imágenes.

No fijar una puntuación de Lighthouse como único criterio. Registrar peso de HTML, CSS, JS e imágenes principales antes y después, y explicar cualquier regresión.

### 8. QA final en ES y EN

Probar al menos estas rutas:

```text
/
/en/
/proyectos/webel
/en/projects/webel
/proyectos/aurorajobs
/en/projects/aurorajobs
```

Añadir las rutas del Lab seleccionadas. Para cada una comprobar:

- título y description;
- canonical y alternates;
- OG tags;
- headings;
- navegación de teclado;
- foco visible;
- alt text y captions;
- navegación entre idiomas;
- enlaces internos y externos;
- vista 390 × 844 y 1440 × 900;
- zoom al 200 %;
- reduced motion.

Hacer una lectura editorial final con las skills indicadas en `AGENTS.md`. Pasar completos los evals de español e inglés.

## Archivos que probablemente cambiarán

- `src/layouts/Layout.astro`
- `src/components/ProjectPage.astro` o nuevas variantes `ProfessionalCasePage` y `LabProjectPage`
- `src/components/ProjectGallery.astro`
- `src/components/ProjectCard.astro`
- rutas de `src/pages/proyectos/` y `src/pages/en/projects/`
- `src/content.config.ts`
- contenidos de `src/content/projects/{es,en}`
- `public/` para social cards y `robots.txt`
- `astro.config.mjs` y `package.json` si se añade sitemap

## Validación técnica

- `npm run build`
- `npm run check-assets`
- `npx astro check`
- revisión en navegador con el servidor iniciado mediante `astro dev --background`
- búsqueda de URLs, claims y textos antiguos con `rg`
- inspección del HTML generado para canonical, hreflang y OG

## Criterios de aceptación

- [x] Webel y AuroraJobs tienen casos completos y honestos.
- [x] Los proyectos del Lab usan una profundidad acorde con su estado.
- [x] No queda ningún claim `pendiente` en contenido público.
- [x] Las rutas existentes funcionan o tienen redirección.
- [x] ES y EN conservan idioma al navegar y enlazan a su equivalente.
- [x] Todas las páginas públicas tienen title, description, canonical y social metadata.
- [x] Las social cards se leen bien a 1200 × 630.
- [x] Email, LinkedIn y GitHub funcionan.
- [x] No hay enlaces de CV, demo o repositorio vacíos.
- [x] No hay errores de consola, 404 de recursos ni overflow horizontal.
- [x] `aurorajobs_hacks.avif` y el resto de assets quedan dentro de los límites del repositorio.
- [x] Teclado, foco, contraste, zoom y reduced motion están revisados.
- [x] Build, asset check y Astro check terminan sin errores.
- [ ] La web supera el test de lectura del north star con una persona que no haya participado en el refactor. **Pendiente: necesita a alguien de fuera; no lo puede cerrar quien la ha implementado.**

## Fuera de alcance

- Blog o sistema de publicación.
- CMS.
- Formularios con backend.
- Analítica o cookies.
- Nuevas features de los proyectos del Lab.
