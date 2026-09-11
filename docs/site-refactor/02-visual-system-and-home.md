# Plan 02 — Sistema visual y nueva portada

Prioridad: 2  
Depende de: `00-north-star.md` y plan `01` terminado  
Resultado: nueva portada responsive, sin 3D y con jerarquía clara entre experiencia, trabajo y Lab

## Objetivo

Construir la dirección «estudio técnico con una parte lúdica» definida en el north star. La primera pantalla debe explicar el perfil. La personalidad aparecerá en la retícula, el color y el trace de construcción, con movimiento corto y funcional.

## Leer antes de empezar

- `docs/site-refactor/00-north-star.md`
- entregables del plan `01`, incluido `claims-checklist.md`
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Astro styles](https://docs.astro.build/en/guides/styling/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [You Don't Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)

## Resultado visual esperado

- Base fría clara, tinta con contraste alto y un acento ultramar.
- Tipografía sans con personalidad, sin Fraunces.
- Hero compacto y con altura natural. En un escritorio de 900 px debe asomar el inicio del resumen de credibilidad.
- Bloques con composiciones distintas según su función.
- Un trace estático que conecte problema, especificación, construcción, revisión y entrega.
- Proyectos profesionales con más espacio y contraste que las tarjetas del Lab.
- Información secundaria disponible en detalle, no repetida en la portada.

No hay que conservar la estética actual por compatibilidad. Sí hay que conservar accesibilidad, locales, rutas y lectura sin JavaScript.

## Trabajo

### 1. Preparar dos composiciones antes de implementar

Crear dos bocetos de baja fidelidad, en HTML/CSS temporal o en un documento del repo, para 1440 × 900 y 390 × 844. No hace falta Figma.

Ambas opciones deben usar el contenido real del plan `01` y resolver:

- hero;
- resumen de credibilidad;
- experiencia;
- trabajo seleccionado;
- método de producto e IA;
- Lab;
- contacto.

Comparar las opciones con cinco criterios: lectura del primer viewport, jerarquía profesional, personalidad, adaptación móvil y coste de mantenimiento. Elegir una y dejar una nota breve con el motivo. No mezclar las dos por miedo a descartar trabajo.

### 2. Definir los tokens

Rehacer `src/styles/global.css` alrededor de tokens semánticos. Usar esta dirección como punto de partida, no como valores cerrados:

```css
:root {
  --canvas: #f7f8fb;
  --surface: #ffffff;
  --surface-subtle: #eef1f6;
  --text: #11131a;
  --text-muted: #596171;
  --border: #d9dee8;
  --accent: #4b57e8;
  --accent-strong: #303bc4;
  --play: #c7f36b;
}
```

Medir el contraste de cada combinación real. El lima no se usa para texto pequeño sobre blanco.

Definir como mínimo:

- color y estados interactivos;
- tipografía y escalas fluidas;
- ancho de contenido y retícula;
- espacio;
- radios;
- bordes y elevación;
- duraciones y curvas;
- foco visible.

Mantener pocos niveles. Un portfolio no necesita un sistema de producto con decenas de tokens.

### 3. Cambiar la tipografía

Probar `Instrument Sans` en peso variable para títulos y cuerpo. Compararla con una opción de reserva como `Manrope` usando hero, párrafos y cifras reales. Elegir por legibilidad y carácter, no por novedad.

Conservar `IBM Plex Mono` solo para fechas, estado, pequeños labels y el trace. Reducir el uso de mayúsculas y letter-spacing. Eliminar `Fraunces` y su paquete cuando ya no tenga referencias.

Comprobar carga, fallbacks y layout shift. No depender de una fuente remota en tiempo de ejecución.

### 4. Sustituir el hero

Eliminar:

- `<canvas>` y `heroScene.ts`;
- `.hero-pin` y el extra de scroll;
- la instrucción «desliza para ordenar el sistema»;
- el arranque dinámico de Three.js;
- el lema serif actual.

El nuevo hero debe contener:

- nombre y rol;
- propuesta elegida en el plan `01`;
- una línea de contexto profesional;
- `Ver experiencia` y `Contactar`;
- el trace de construcción como apoyo visual estático.

El trace tiene texto real y semántica. Si se usa SVG, incluir título accesible o marcarlo decorativo cuando la misma información ya esté en HTML. No usar canvas.

La primera pantalla debe funcionar con CSS desactivado parcialmente, JavaScript desactivado y `prefers-reduced-motion`.

### 5. Recomponer la portada

Actualizar `HomePage.astro` y dividir componentes por intención, no por decoración. Una estructura probable:

```text
Hero
ProofSnapshot
ProfessionalExperience
SelectedWork
ProductAiMethod
LabProjects
Contact
```

Se pueden reutilizar componentes existentes si el nombre y la responsabilidad siguen encajando. Evitar wrappers sin lógica o estilo propio.

#### Resumen de credibilidad

Usar entre tres y cuatro señales cortas. No convertirlas en contadores animados. Una cifra necesita contexto y validación.

#### Experiencia

Webel y AuroraJobs deben poder compararse: fecha, papel, alcance y una o dos pruebas. Evitar una cronología con `Proyectos propios` entre empleos.

#### Trabajo seleccionado

Usar teasers más ricos que la tarjeta actual: una captura, problema, contribución y señal de resultado. Webel y AuroraJobs pueden enlazar a sus casos.

#### Método de producto e IA

Representar el ciclo del north star. En cada paso, explicar qué decide Fran y qué puede delegar. Añadir uno o dos artefactos concretos. No incluir logos de herramientas como sustituto de proceso.

#### Lab

Usar tarjetas más compactas y con otro tratamiento visual. El estado (`prototipo`, `en uso`, `piloto`) debe verse. El Lab puede usar el segundo acento y una composición algo más libre, sin competir con el trabajo profesional.

### 6. Simplificar navegación y pie

Actualizar la navegación al nuevo orden. En móvil debe existir un acceso evidente; ocultar todos los enlaces y dejar solo el selector de idioma no es suficiente.

Opciones válidas:

- botón de menú accesible con panel corto;
- navegación horizontal con scroll si caben cuatro enlaces;
- menú nativo con `details/summary`, bien estilizado y probado.

Mantener siempre visible el contacto o una acción equivalente.

El pie no necesita anunciar Three.js ni Motion después de retirarlos. Puede cerrar con nombre, disponibilidad, email, LinkedIn, GitHub y cambio de idioma.

### 7. Reducir JavaScript y movimiento

Eliminar `three` y `motion` de `package.json` cuando no queden imports. Revisar también `src/lib/reveal.ts`:

- retirar los reveal on scroll si ocultan contenido hasta que arranca JS;
- sustituir microinteracciones sencillas por CSS;
- mantener JS solo cuando la interacción lo exige.

Duraciones orientativas:

- pulsación: 100–140 ms;
- hover/foco: 140–180 ms;
- entrada de panel: 180–220 ms;
- ningún movimiento continuo.

### 8. Responsive y accesibilidad

Probar como mínimo:

- 390 × 844;
- 768 × 1024;
- 1440 × 900;
- zoom de texto al 200 %;
- teclado completo;
- `prefers-reduced-motion: reduce`;
- contenido ES y EN, porque el inglés cambia longitudes.

Comprobar:

- orden de encabezados;
- foco visible sobre todos los fondos;
- contraste 4,5:1 para texto normal;
- targets táctiles cómodos;
- ausencia de overflow horizontal;
- alt text útil en imágenes informativas;
- que ningún hover sea obligatorio para leer información.

## Archivos que probablemente cambiarán

- `src/styles/global.css`
- `src/components/HomePage.astro`
- `src/components/Hero.astro`
- `src/components/Nav.astro`
- `src/components/Footer.astro`
- `src/components/Experience.astro`
- `src/components/ProjectsSection.astro`
- `src/components/ProjectCard.astro`
- `src/components/Principles.astro` y `src/components/Skills.astro`, que pueden desaparecer o transformarse
- `src/components/WebelFeature.astro`, que debe integrarse en experiencia o trabajo seleccionado
- nuevos componentes de resumen, método y Lab
- `src/lib/heroScene.ts`, que se elimina
- `src/lib/reveal.ts`, si deja de hacer falta
- `package.json` y lockfile

## Validación

- Ejecutar `npm run build`.
- Ejecutar `npm run check-assets`.
- Arrancar con `astro dev --background` y revisar las dos locales en navegador real.
- Verificar que no quedan imports de `three`, `motion`, `heroScene` o selectores del hero antiguo con `rg`.
- Comparar capturas del primer viewport y de la sección Lab en móvil y escritorio.
- Revisar la consola sin errores.

## Criterios de aceptación

- [ ] Nombre, rol, propuesta y CTA caben en el primer viewport en móvil y escritorio.
- [ ] No existe canvas, escena 3D, hero fijado ni scroll añadido.
- [ ] La paleta ya no usa beige/marrón como base.
- [ ] La tipografía principal no es Fraunces.
- [ ] Webel y AuroraJobs tienen una jerarquía visual superior al Lab.
- [ ] El Lab está separado y etiquetado.
- [ ] El trabajo con IA se entiende a partir del proceso y ejemplos.
- [ ] La navegación móvil permite llegar a las secciones principales.
- [ ] El contenido principal es visible sin JavaScript.
- [ ] Se cumplen los controles responsive y de accesibilidad.
- [ ] `three` y `motion` se eliminan si no tienen otro uso real.
- [ ] El build ya no genera el chunk de 512 KB de `heroScene` ni su aviso de tamaño.
- [ ] Build y asset check terminan sin errores.

## Fuera de alcance

- Reescritura profunda de todos los casos.
- Social cards y SEO técnico.
- Publicación o cambios de dominio.
- Analítica.
