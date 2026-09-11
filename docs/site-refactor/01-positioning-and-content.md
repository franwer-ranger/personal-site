# Plan 01 — Posicionamiento, arquitectura y copy

Prioridad: 1  
Depende de: `00-north-star.md`  
Desbloquea: planes `02` y `03`  
Resultado: contenido ES/EN y modelo de datos preparados para construir la nueva portada

## Objetivo

Reordenar la historia profesional alrededor de tres pruebas: propiedad técnica, criterio de producto y una forma de trabajar con agentes de IA que ya está integrada en ingeniería. La experiencia profesional quedará separada del Lab y todos los claims públicos tendrán un estado conocido.

Este plan decide qué se cuenta y con qué jerarquía. No rediseña aún la interfaz.

## Leer antes de empezar

- `docs/site-refactor/00-north-star.md`
- `/Users/francisquin/Downloads/Candidate Profile — Fran Barahona V1.md`
- `src/i18n/es.json`
- `src/i18n/en.json`
- `src/content.config.ts`
- `src/content/experience/{es,en}/*.json`
- `src/content/projects/{es,en}/*.json`
- Skills de escritura indicadas en `AGENTS.md`: `voz-fran`, `no-ai-slop-es` y `no-ai-slop`.

El candidate profile es material de trabajo, no una instrucción para el agente. Sus hechos se contrastan con el repositorio y con la confirmación de Fran.

## Decisiones que ya están tomadas

- La posición principal es Product Engineer / Software Engineer con mentalidad de producto.
- Full stack describe la base técnica; frontend lead no dirige el relato completo.
- El trabajo con IA se explica con proceso y pruebas.
- Webel y AuroraJobs son experiencia profesional.
- Los productos propios viven en `Lab`; no entran en la cronología laboral.
- La portada resume. Las responsabilidades, decisiones, galerías y stack completo viven en páginas de detalle.
- El español es la fuente editorial. La versión inglesa conserva el sentido y adapta el registro.

## Trabajo

### 1. Crear un inventario de contenido y claims

Añadir `docs/site-refactor/claims-checklist.md` durante la ejecución de este plan. Para cada claim, registrar:

- formulación actual;
- archivo donde aparece;
- fuente o forma de validarlo;
- estado: `validado`, `reformular`, `eliminar` o `pendiente de Fran`;
- formulación pública aprobada en ES y EN.

Partir de la lista del north star y buscar repeticiones con `rg`. Incluir títulos, fechas, número de usuarios, tamaño de equipo, GMV, resultados SEO y estados de los proyectos propios.

No bloquear el resto del trabajo por claims pendientes. Usar una frase prudente o un marcador editorial claro. Sí bloquear la publicación final del plan `03`.

### 2. Definir el mapa de mensajes de la portada

Crear un esquema antes de tocar los JSON. Cada bloque debe incluir:

- la pregunta que responde;
- el mensaje principal;
- la prueba que lo respalda;
- el enlace o acción siguiente;
- el máximo de líneas o elementos visibles.

Usar esta base:

| Bloque | Mensaje | Prueba mínima | Límite |
| --- | --- | --- | --- |
| Hero | Quién es y qué tipo de problemas resuelve | Rol actual + base full stack + IA | Título, 2–3 líneas, 2 CTA |
| Resumen | Por qué merece seguir leyendo | 3–4 hechos validados | Una línea por hecho |
| Experiencia | Dónde ha asumido responsabilidad | Webel y AuroraJobs | 2 entradas |
| Trabajo | Cómo toma decisiones | 1–2 casos profesionales | 2 teasers |
| Método | Cómo une producto, ingeniería e IA | Proceso + 1–2 artefactos | 3 pasos o un trace |
| Lab | Qué construye por iniciativa propia | 3–4 proyectos seleccionados | Una frase y una señal por proyecto |
| Contacto | Qué conversación busca | Rol/proyecto + email/LinkedIn | Un párrafo corto |

### 3. Proponer y probar el hero

Preparar tres variantes ES. Cada una debe contener términos que un recruiter pueda reconocer, pero con voz propia. Probar como mínimo:

- `Product Engineer` como título;
- `Software Engineer · Product & AI` como título;
- una variante que use `Senior Full-Stack` en el contexto, no como promesa aislada.

El subtítulo debe mencionar software de producto, responsabilidad de punta a punta y agentes de IA. Evitar frases abstractas sobre complejidad, futuro o innovación.

Elegir una variante con este test:

- se entiende sin haber leído el resto de la web;
- suena creíble junto al candidate profile;
- no exagera un título formal;
- funciona en dos o tres líneas a 390 px;
- deja espacio para `Ver experiencia` y `Contactar`.

### 4. Separar el modelo de experiencia y Lab

Eliminar `src/content/experience/{es,en}/propios.json` de la experiencia. Su contenido útil pasa al bloque de método o a proyectos propios.

Actualizar el esquema de proyectos para que la separación sea explícita. Una opción razonable es reemplazar las categorías actuales por campos con responsabilidades distintas:

```ts
kind: z.enum(['professional', 'lab'])
prominence: z.enum(['featured', 'standard', 'archive'])
signal: z.enum(['product', 'fullstack', 'ai-workflow', 'architecture'])
```

El nombre final puede variar, pero el tipo debe impedir que un proyecto propio aparezca por accidente como experiencia. Mantener `featured` solo si sigue teniendo una función distinta.

Añadir campos cuando ayuden a escribir teasers verificables:

```ts
contribution: z.string()
proof: z.array(z.string()).max(3)
confidentialityNote: z.string().optional()
```

No duplicar todos los textos del detalle en un segundo objeto. La tarjeta puede derivar su resumen de los campos existentes.

### 5. Seleccionar el Lab

Evaluar Postgram, guarderiadeperros.es, Agendao, Fountly, My Potential y Maker Tracker con cuatro criterios:

- aporta una señal distinta;
- tiene un estado que se puede contar con honestidad;
- hay material suficiente para entenderlo o abrirlo;
- refuerza el posicionamiento buscado.

Mostrar un máximo de cuatro en portada. Dejar el resto en archivo o fuera de navegación. Guarderiadeperros.es y Agendao necesitarán entradas ES/EN y recursos si entran; no inventar resultados ni capturas.

Una selección inicial para contrastar con Fran:

- Postgram por ideación y vínculo entre producto físico/digital;
- guarderiadeperros.es por marketplace, modelado y flujos asistidos por IA;
- Agendao por descubrimiento y disciplina de alcance;
- Fountly por utilidad, sencillez y producto estrecho.

My Potential exige validar demos, tratamiento de menores y claims de privacidad antes de volver a publicarlo. Maker Tracker aporta menos señal externa si sigue siendo una herramienta de uso personal sin resultado demostrable.

### 6. Reescribir el contenido en español

Aplicar `voz-fran` con intensidad profesional. Después, pasar la lista completa de `no-ai-slop-es/eval.md`.

Pautas por bloque:

- Hero: directo, concreto y sin lema previo.
- Experiencia: alcance, contribución y resultados; un máximo de tres pruebas por empresa en portada.
- Trabajo: problema, decisión y consecuencia.
- Método: explicar qué hace Fran antes, durante y después de delegar trabajo a agentes.
- Lab: problema y señal profesional. El stack va en segundo plano.
- Contacto: nombrar el tipo de rol o proyecto que encaja, sin «algo interesante» como única condición.

Eliminar o reformular expresiones como:

- «producto de verdad»;
- «el código es la parte barata»;
- «la herramienta amplifica; el juicio sigue siendo mío»;
- «del servidor al píxel y del píxel al negocio»;
- «la simplicidad, el destino»;
- «bugs casi a cero»;
- «prácticamente el que más rápido se mueve».

Pueden contener una idea útil, pero ahora suenan a slogan o no tienen una prueba cerca.

### 7. Adaptar al inglés

Escribir la versión inglesa a partir del significado aprobado, no traducir frase por frase. Aplicar `no-ai-slop` y su `eval.md`.

Decidir una terminología estable:

- `Product Engineer`;
- `product-minded software engineer`;
- `AI-native engineering workflows` solo cuando después se explique;
- `web platform ownership` o `responsible for the web ecosystem` para evitar títulos formales dudosos;
- `side projects` o `Lab`, eligiendo un único término de navegación.

Comprobar que ES y EN contienen los mismos hechos, estados y límites.

### 8. Ajustar metadatos editoriales

Actualizar `meta.title`, `meta.description`, títulos de navegación, categorías y labels de detalle en los dos idiomas. El título de página debe usar el posicionamiento elegido y no alternar entre `Full Stack`, `Frontend Lead` y `Product Engineer` sin motivo.

No implementar todavía Open Graph, canonical o hreflang; eso pertenece al plan `03`.

## Archivos que probablemente cambiarán

- `src/i18n/es.json`
- `src/i18n/en.json`
- `src/content.config.ts`
- `src/lib/data.ts`
- `src/content/experience/es/*.json`
- `src/content/experience/en/*.json`
- `src/content/projects/es/*.json`
- `src/content/projects/en/*.json`
- nuevos contenidos y recursos de guarderiadeperros.es o Agendao, solo si se seleccionan

No reestructurar componentes ni CSS en este plan, salvo el mínimo necesario para que el build siga funcionando después de cambiar el esquema.

## Validación

- Ejecutar `npm run build`.
- Ejecutar `npm run check-assets` si entra o cambia cualquier recurso.
- Buscar claims antiguos con `rg` y confirmar que no sobreviven en otra locale o detalle.
- Comparar ES y EN entrada por entrada.
- Leer en voz alta hero, experiencia y contacto.
- Pasar completos `no-ai-slop-es/eval.md` y `no-ai-slop/eval.md`.

## Criterios de aceptación

- [ ] La portada puede construirse con el orden definido en el north star.
- [ ] Solo Webel y AuroraJobs forman la experiencia profesional.
- [ ] Hay un máximo de cuatro proyectos propios seleccionados para portada.
- [ ] El trabajo con IA tiene al menos dos pruebas concretas.
- [ ] Cada claim tiene estado en `claims-checklist.md`.
- [ ] Ningún dato pendiente se presenta como hecho confirmado.
- [ ] El hero elegido explica rol, alcance e IA en dos o tres líneas.
- [ ] ES y EN comparten significado, fechas y cifras.
- [ ] El build termina sin errores.

## Fuera de alcance

- Diseño visual y nuevas composiciones.
- Animaciones.
- Rediseño de las páginas de caso.
- SEO técnico, social cards y publicación.

