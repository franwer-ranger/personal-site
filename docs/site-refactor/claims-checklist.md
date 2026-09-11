# Inventario de mensajes y claims

Estado: plan 01 implementado  
Fuente editorial: español  
Referencia contrastada: repositorio actual y `Candidate Profile — Fran Barahona V1.md`

Este documento registra lo que puede decir la web durante el refactor. El candidate profile sirve para contrastar el contenido existente, pero no valida por sí solo una cifra o un título discutido. Cuando las fuentes no coinciden, la web usa una formulación descriptiva o retira el dato.

## Posicionamiento elegido

`Product Engineer` es el título principal. `Software Engineer con mentalidad de producto` explica el perfil y `full stack` describe la base técnica. La responsabilidad actual en Webel se cuenta como propiedad del ecosistema web, sin convertir `Frontend Lead` en un título formal.

### Propuestas de hero

| Opción | Título | Texto | Evaluación |
| --- | --- | --- | --- |
| A | Product Engineer | Construyo software de producto de punta a punta. Mi base es full stack y uso agentes de IA para pasar de un problema poco definido a una solución que pueda mantener y validar. | La más clara. Nombra el rol, el alcance y la IA sin apropiarse de un cargo formal. Cabe en tres líneas cortas en móvil. |
| B | Software Engineer · Product & AI | Trabajo entre producto e ingeniería: aclaro el problema, decido el alcance y construyo la solución con React, TypeScript, Rails y agentes de IA. | Creíble, pero el stack compite con la propuesta y el título se lee peor en móvil. |
| C | Product Engineer | Soy software engineer con base Senior Full-Stack. Construyo productos web completos y preparo especificaciones y controles para trabajar con agentes de IA. | Aporta términos de búsqueda, pero `Senior` añade una promesa que necesita más contexto del que permite el hero. |

Se elige la opción A. Pasa las cinco comprobaciones del plan: se entiende aislada, encaja con las responsabilidades contrastadas, no presenta un título formal dudoso, mantiene una longitud razonable en móvil y deja sitio para `Ver experiencia` y `Contactar`.

## Mapa de mensajes de la portada

| Bloque | Pregunta que responde | Mensaje principal | Prueba cercana | Siguiente acción | Límite |
| --- | --- | --- | --- | --- | --- |
| Hero | ¿Quién es Fran y qué resuelve? | Product Engineer con base full stack que construye software de punta a punta y trabaja con agentes de IA. | React y TypeScript en Webel; Ruby on Rails en AuroraJobs; especificaciones, skills y validación en el flujo con agentes. | Ver experiencia / Contactar | Un título, 2–3 líneas y dos CTA. |
| Resumen | ¿Por qué merece la pena seguir? | Ha asumido superficies web completas, tiene experiencia full stack y convierte su forma de trabajar con IA en un proceso revisable. | Migraciones y librería compartida en Webel; producto completo en Rails en AuroraJobs; skills y documentación para agentes. | Ir a experiencia o trabajo. | Tres hechos, una línea por hecho. No publicar años totales hasta validarlos. |
| Experiencia | ¿Dónde ha trabajado y con qué alcance? | Webel y AuroraJobs son la experiencia profesional. | Ecosistema web actual en Webel; construcción full stack y colaboración con Producto y CTO en AuroraJobs. | Abrir cada caso. | Dos entradas. |
| Trabajo | ¿Cómo decide y qué ha entregado? | Los casos explican problema, contribución, una decisión y una consecuencia. | Webel y AuroraJobs, sin métricas pendientes. | Ver el caso completo. | Dos teasers. |
| Método | ¿Cómo une producto, ingeniería e IA? | Aclara el problema y el alcance, prepara contexto y criterios, delega partes acotadas y revisa código, pruebas y resultado. | Skills reutilizables; especificaciones con criterios de aceptación; documentación del design system preparada para agentes. | Ver una prueba o un caso relacionado. | Tres pasos y hasta dos artefactos visibles. |
| Lab | ¿Qué construye por iniciativa propia? | Proyectos propios con estado honesto y una señal profesional clara. | Postgram como prototipo de producto ligado a ubicación; Fountly como utilidad publicada y de alcance estrecho. | Abrir el proyecto. | Dos proyectos ahora; máximo cuatro cuando haya material suficiente. |
| Contacto | ¿Qué conversación busca? | Roles de Product Engineer o Software Engineer con responsabilidad de producto, y proyectos que necesiten convertir una idea en software usable. | Email y perfiles profesionales. | Escribir por email. | Un párrafo corto. |

## Selección del Lab

| Proyecto | Decisión | Señal | Motivo |
| --- | --- | --- | --- |
| Postgram | `featured` | Producto | Tiene prototipo y galería. Explica una mecánica poco habitual que une ubicación física y experiencia digital. |
| Fountly | `featured` | Arquitectura | Está publicado, tiene una utilidad concreta y enseña integración de datos y control de alcance. |
| Maker Tracker | `archive` | Flujo con IA | Hay capturas, pero los resultados de uso y su estado necesitan validación. Aporta menos señal externa que los dos seleccionados. |
| My Potential | `archive` | Flujo con IA | La demo, el uso en colegios, la privacidad con menores y los tests necesitan validación antes de volver a navegarse. |
| Agendao | Fuera de la web | Producto | La entrada sigue oculta y no hay material público suficiente. Su candidatura se conserva para una revisión futura. |
| guarderiadeperros.es | Fuera de la web | Arquitectura | El candidate profile aporta contexto, pero faltan entrada bilingüe, estado comprobable y recursos. |

## Checklist de claims públicos

`Ubicación` usa rutas relativas al repositorio. Las formulaciones de la última columna son las que puede publicar el sitio tras este plan.

| Claim actual o relevante | Ubicación | Fuente o validación | Estado | Formulación pública ES / EN |
| --- | --- | --- | --- | --- |
| Unos cinco años de experiencia. | `src/i18n/{es,en}.json` | El candidate profile habla de unos seis; las fechas no permiten cerrar la cifra sin aclaración. | pendiente de Fran | Se elimina la cifra. / Remove the figure. |
| Product Engineer como posición principal. | North star, candidate profile y metadatos ES. | Coincide en los dos documentos de referencia y es una decisión cerrada del refactor. | validado | `Product Engineer`. / `Product Engineer`. |
| Base full stack con React, TypeScript y Ruby on Rails. | Hero, skills y experiencia. | Coincide entre contenido, casos y candidate profile. | validado | `Mi base es full stack.` / `I have a full-stack foundation.` |
| Frontend Lead o líder técnico frontend en Webel. | Hero, experiencia y caso Webel. | El candidate profile no confirma un título formal de lead. | reformular | `Responsable del ecosistema web en Webel.` / `Responsible for Webel's web platform.` |
| Web Engineer / Frontend Engineer como título formal en Webel. | Candidate profile. | Hay dos alternativas y ninguna está confirmada como título público definitivo. | pendiente de Fran | La web usa una descripción de responsabilidad, no un cargo. / The site describes the responsibility rather than a formal title. |
| Responsable del ecosistema web de Webel. | Experiencia y caso Webel. | El repositorio y el candidate profile enumeran B2C, B2B, dashboard, SEO, email y librería compartida. | validado | `Responsable del ecosistema web.` / `Responsible for the web platform.` |
| Webel es experiencia actual desde 2024. | Experiencia y caso Webel. | Las dos entradas públicas coinciden; la aplicación pública sigue operativa. | validado | `2024 — hoy`. / `2024 — present`. |
| Webel tiene millones de usuarios. | Hero de Webel, experiencia y caso. | El north star registra conflicto con `miles de usuarios al día`. | pendiente de Fran | Se elimina cualquier cifra. / Remove all user figures. |
| Productos web usados por miles de personas al día. | Candidate profile y north star. | Falta fuente y alcance exacto. | pendiente de Fran | Se elimina hasta confirmación. / Remove until confirmed. |
| Business Profile asociado a unos 500 k€ de GMV anual. | Candidate profile. | El propio documento pide validar la redacción. | pendiente de Fran | Se elimina hasta confirmación. / Remove until confirmed. |
| Más de 50.000 plantillas SEO. | Hero de Webel y caso. | Aparece en el repositorio, pero el north star exige validación. | pendiente de Fran | `Migré la superficie de SEO a Astro.` / `Moved the SEO surface to Astro.` |
| Primer resultado orgánico para una búsqueda concreta. | Hero de Webel y caso. | Resultado variable, sin fecha ni evidencia guardada. | pendiente de Fran | Se elimina. / Remove. |
| Migración completa del marketplace de Angular a React. | Experiencia, caso y candidate profile. | Las fuentes coinciden. | validado | `Migré la aplicación B2C de Angular a React.` / `Migrated the B2C application from Angular to React.` |
| Librería React compartida y bases del design system. | Experiencia, caso y candidate profile. | Las fuentes coinciden. | validado | `Extraje una librería de componentes compartida.` / `Extracted a shared component library.` |
| Más de 100 emails migrados a React Email. | Experiencia y caso Webel. | El candidate profile confirma la migración, pero no la cantidad. | pendiente de Fran | `Migré el desarrollo de emails a React Email.` / `Moved email development to React Email.` |
| Bugs casi a cero. | Caso Webel. | No hay medida ni periodo. | eliminar | Se elimina. / Remove. |
| Web pasó a ser el departamento que más rápido se mueve. | Caso Webel. | Comparativa interna sin medida. | eliminar | Se elimina. / Remove. |
| Liderazgo o formación de dos developers mid-senior en Webel. | Experiencia Webel. | El candidate profile habla de coordinación y apoyo a un junior. | pendiente de Fran | `Revisé trabajo y apoyé a otro developer web.` / `Reviewed work and supported another web developer.` |
| Skills, agentes y documentación del design system preparada para agentes. | Experiencia y caso Webel; candidate profile. | Las fuentes coinciden en el proceso y los artefactos. | validado | `Preparé skills reutilizables y documentación del design system para trabajar con agentes.` / `Created reusable skills and agent-ready design-system documentation.` |
| Uso de especificaciones, criterios de aceptación, revisión y validación final con agentes. | Candidate profile y bloque de método. | El proceso está descrito de forma consistente, sin atribuir resultados automáticos. | validado | `Defino problema, alcance y criterios; delego partes acotadas; reviso código, pruebas y resultado.` / `I define the problem, scope, and acceptance criteria; delegate bounded work; then review code, tests, and outcome.` |
| AuroraJobs, 2021–2024. | Experiencia y caso. | Coincide en todas las entradas públicas y no contradice el candidate profile. | validado | `2021–2024`. / `2021–2024`. |
| Más de cinco años en AuroraJobs. | Caso AuroraJobs. | Contradice 2021–2024 y los aproximadamente cuatro años del candidate profile. | eliminar | Se elimina. / Remove. |
| Lideré la ingeniería en AuroraJobs. | Caso AuroraJobs. | No hubo título formal; el candidate profile describe autonomía y coordinación progresivas. | reformular | `Construí el producto full stack y asumí más decisiones técnicas y coordinación con el tiempo.` / `Built the full-stack product and gradually took on more technical decisions and coordination.` |
| Único developer en AuroraJobs. | Experiencia actual. | Contradice la coordinación de otros developers. | eliminar | Se elimina. / Remove. |
| Equipo de hasta cuatro ingenieros / coordinación de dos developers. | Caso, experiencia y candidate profile. | Las cifras describen cosas distintas y necesitan contexto. | pendiente de Fran | `Apoyé la coordinación, el reparto de trabajo y las revisiones.` / `Helped coordinate work, distribute tasks, and review code.` |
| Más de 20.000 usuarios y varias rondas de financiación. | Caso AuroraJobs. | No consta una fuente en el repositorio; el north star lo marca como pendiente. | pendiente de Fran | Se elimina hasta confirmación. / Remove until confirmed. |
| Infraestructura completa de producción con Kubernetes. | Caso AuroraJobs. | El repositorio lo afirma, pero el candidate profile no delimita el alcance. | pendiente de Fran | `Trabajé en la aplicación, sus despliegues y la infraestructura del producto.` / `Worked on the application, its deployments, and product infrastructure.` |
| Paso por Lanzadera en 2022. | Experiencia y caso AuroraJobs. | Solo aparece en el repositorio actual. | pendiente de Fran | Se retira de la web por ahora. / Remove from the site for now. |
| Postgram fue diseño y desarrollo individual. | Caso Postgram. | El candidate profile indica que se construyó con el antiguo CTO y Product Owner de AuroraJobs. | reformular | `Trabajé en producto e ingeniería dentro de un equipo de tres.` / `Worked on product and engineering in a three-person team.` |
| Postgram tiene un prototipo funcional. | Caso y galería Postgram. | Las capturas respaldan el flujo de creación y apertura. | validado | `Prototipo funcional.` / `Working prototype.` |
| Postgram figura como prototipo de 2024. | Caso Postgram. | El estado y la fecha coinciden en las dos versiones y la galería muestra el prototipo. | validado | `Prototipo · 2024`. / `Prototype · 2024`. |
| Fountly está publicado y se usa personalmente. | Caso Fountly y enlace público. | El candidate profile confirma el uso personal; el lugar exacto varía entre fuentes. | reformular | `Proyecto personal publicado para encontrar fuentes cercanas.` / `A published personal project for finding nearby drinking fountains.` |
| Fountly figura como proyecto publicado de 2026. | Caso Fountly y `fountly.app`. | La fecha coincide en ES/EN y la aplicación pública responde con la búsqueda de fuentes. | validado | `Publicado · 2026`. / `Published · 2026`. |
| Datos del Ayuntamiento con estado real de cada fuente de Madrid. | Caso Fountly. | No está documentado en el candidate profile. | pendiente de Fran | `Combina OpenStreetMap con datos públicos locales cuando están disponibles.` / `Combines OpenStreetMap with local public data where available.` |
| Maker Tracker se usa a diario, pierde menos ideas y termina más proyectos. | Caso Maker Tracker. | No hay fuente adicional y el north star pide validar estado y resultados. | pendiente de Fran | Proyecto archivado y fuera de navegación. / Archived and removed from navigation. |
| My Potential tiene demos activas en varios colegios. | Caso My Potential. | El north star pide validar demos y estado. | pendiente de Fran | Proyecto archivado y fuera de navegación. / Archived and removed from navigation. |
| My Potential usa tests psicológicos validados y cumple privacidad con menores. | Caso My Potential. | Faltan referencias de validación, alcance legal y revisión del tratamiento de menores. | pendiente de Fran | Proyecto archivado y fuera de navegación. / Archived and removed from navigation. |
| Agendao tiene un producto funcional y ciclo de reserva completo. | Entrada oculta. | No hay material o recurso suficiente para publicarlo. | pendiente de Fran | Se mantiene fuera de la web. / Keep off the site. |
| guarderiadeperros.es es un marketplace con flujos asistidos por IA. | Candidate profile; no hay entrada pública. | Faltan estado, contenido bilingüe y recursos. | pendiente de Fran | Se documenta como candidato y no se publica. / Document as a candidate and do not publish. |

## Preguntas pendientes de Fran

1. ¿Cuántos años de experiencia quieres publicar y desde qué fecha los cuentas?
2. ¿Qué título formal debe aparecer para Webel, si quieres mostrar uno, y qué formulación describe mejor tu responsabilidad actual?
3. ¿Qué cifra de uso de Webel puedes publicar y con qué periodo: usuarios totales, activos o diarios?
4. ¿Se puede publicar la relación del Business Profile con unos 500 k€ de GMV anual?
5. ¿Puedes respaldar las 50.000 plantillas SEO, la posición orgánica citada y el periodo al que corresponden?
6. ¿Cuántos emails se migraron y qué evidencia permite describir la reducción de errores?
7. ¿A cuántos developers coordinaste en Webel, con qué seniority y durante cuánto tiempo?
8. ¿Cuáles fueron las fechas exactas de AuroraJobs y cuánto duró la etapa?
9. ¿Qué nivel de responsabilidad y coordinación quieres atribuirte públicamente en AuroraJobs, sin usar un título formal que no tuviste?
10. ¿Se pueden publicar los usuarios, las rondas, Lanzadera y el alcance concreto de infraestructura de AuroraJobs?
11. ¿Cuál es el estado actual y el resultado comprobable de Maker Tracker?
12. ¿Qué demos de My Potential ocurrieron, con quién, y qué revisión respalda las afirmaciones sobre tests y privacidad de menores?
13. ¿Qué estado, contenido y recursos puedes aportar para Agendao y guarderiadeperros.es antes de valorar su entrada en el Lab?
