# Inventario de mensajes y claims

Estado: plan 03 implementado  
Fuente editorial: español  
Referencia contrastada: repositorio actual, `Candidate Profile — Fran Barahona V1.md` y la validación de Fran del 11 de septiembre de 2026

Este documento registra lo que puede decir la web. El candidate profile sirve para contrastar el contenido existente, pero no valida por sí solo una cifra o un título discutido. Cuando las fuentes no coinciden, la web usa una formulación descriptiva o retira el dato.

## Validación de Fran · 11 de septiembre de 2026

Fran cerró este bloque de claims por escrito. Todos están publicados con la formulación de la última columna de la checklist.

| Dato | Qué confirmó | Cómo se publica |
| --- | --- | --- |
| Encuadre del perfil | Es ingeniero con mentalidad de producto, no un perfil de producto que programa. Su responsabilidad ha sido siempre la técnica, tanto en Webel como en AuroraJobs. En AuroraJobs trabajaba más cerca de producto: ideación, revisión de UX/UI, propuestas de funcionalidad. | El hero abre con `Mi responsabilidad es técnica`. Producto aparece como forma de trabajar, no como puesto. |
| Alcance en Webel | Es responsable de todo el departamento web: app B2C, plataforma B2B, dashboard interno, SEO, emails y la librería compartida del design system, cuya extracción y refactor hizo él. | `Responsable del ecosistema web`, con las seis superficies enumeradas. |
| Uso de la app B2C de Webel | Miles de usuarios diarios. | `La app B2C la usan miles de personas al día.` |
| Plataforma B2B de Webel | La usan los perfiles de empresa, que generan cerca del 25 % del GMV de Webel, más de 500.000 € al año. Fran es responsable de la aplicación, no de ese ingreso. | `Los perfiles de empresa que trabajan sobre la plataforma B2B generan cerca del 25 % del GMV, más de 500.000 € al año.` El sujeto del verbo son los perfiles, nunca Fran. |
| Alcance en AuroraJobs | Responsable de toda la aplicación de principio a fin: paneles con candidatos priorizados para B2B, filtros y formularios dinámicos para B2C y un dashboard interno para configurar lo anterior. | Tres frentes en el caso, más el inventario breve. |
| Equipo en AuroraJobs | Mentorizó, lideró y gestionó un equipo de dos personas: un junior y un mid. | `Mentoricé, coordiné y gestioné a un equipo de dos developers: un junior y un mid.` |

## Posicionamiento elegido

`Product Engineer` es el título principal. `Ingeniero de software con mentalidad de producto` explica el perfil y `full stack` describe la base técnica. La responsabilidad actual en Webel se cuenta como propiedad del ecosistema web, sin convertir `Frontend Lead` en un título formal.

El hero abierto en el plan 01 se mantuvo en estructura, pero el subtítulo cambió tras la validación: la primera frase declara ahora que la responsabilidad es técnica, y producto queda como forma de trabajar. El motivo está en la tabla anterior.

## Mapa de mensajes de la portada

| Bloque | Pregunta que responde | Mensaje principal | Prueba cercana | Siguiente acción | Límite |
| --- | --- | --- | --- | --- | --- |
| Hero | ¿Quién es Fran y qué resuelve? | Ingeniero con responsabilidad técnica sobre superficies web completas, que trabaja cerca de producto y con agentes. | Webel y AuroraJobs nombrados en la línea de contexto. | Ver experiencia / Contactar | Un título, 2–3 líneas y dos CTA. |
| Resumen | ¿Por qué merece la pena seguir? | Alcance en Webel, producto completo en AuroraJobs y un flujo con agentes que él revisa. | Miles de usuarios al día, equipo de dos developers, especificaciones y skills. | Ir a experiencia o trabajo. | Tres hechos, una línea por hecho. No publicar años totales. |
| Experiencia | ¿Dónde ha trabajado y con qué alcance? | Webel y AuroraJobs son la experiencia profesional. | Tres pruebas por empresa. | Abrir cada caso. | Dos entradas. |
| Trabajo | ¿Cómo decide y qué ha entregado? | Los casos explican problema, contribución, decisiones y consecuencia. | Webel y AuroraJobs, sin métricas pendientes. | Ver el caso completo. | Dos teasers. |
| Método | ¿Cómo une producto, ingeniería e IA? | Aclara el problema y el alcance, prepara contexto y criterios, delega partes acotadas y revisa código, pruebas y resultado. | Skills reutilizables y especificaciones con criterios de aceptación. | Ver un caso relacionado. | Tres pasos y dos artefactos. |
| Lab | ¿Qué construye por iniciativa propia? | Proyectos propios con estado honesto y una señal profesional clara. | Postgram como prototipo; Fountly como utilidad publicada. | Abrir el proyecto. | Dos proyectos; máximo cuatro cuando haya material. |
| Contacto | ¿Qué conversación busca? | Dos vías: ofertas y procesos, o proyectos y consultoría. | Email, LinkedIn y GitHub. | Escribir por email con el asunto ya puesto. | Un párrafo y dos tarjetas. |

## Selección del Lab

| Proyecto | Decisión | Señal | Motivo |
| --- | --- | --- | --- |
| Postgram | `featured` | Producto | Tiene prototipo y galería. Explica una mecánica poco habitual que une ubicación física y experiencia digital. |
| Fountly | `featured` | Arquitectura | Está publicado, tiene una utilidad concreta y enseña integración de datos y control de alcance. |
| Maker Tracker | Fuera de la web | Flujo con IA | Su estado y sus resultados siguen sin validar. La entrada pasó a `maker-tracker.json.hidden` en los dos idiomas. |
| My Potential | Fuera de la web | Flujo con IA | La demo, el uso en colegios, la privacidad con menores y los tests siguen sin validar. La entrada pasó a `my-potential.json.hidden`. |
| Agendao | Fuera de la web | Producto | La entrada sigue oculta y no hay material público suficiente. |
| guarderiadeperros.es | Fuera de la web | Arquitectura | El candidate profile aporta contexto, pero faltan entrada bilingüe, estado comprobable y recursos. |

El esquema de proyectos dejó de tener `prominence: archive`: un proyecto que no se publica vive en un `.json.hidden`, que es la convención que ya usaba el repositorio.

## Checklist de claims públicos

`Ubicación` usa rutas relativas al repositorio. La última columna es lo que publica el sitio.

| Claim actual o relevante | Ubicación | Fuente o validación | Estado | Formulación pública ES / EN |
| --- | --- | --- | --- | --- |
| Unos cinco años de experiencia. | Retirado de `src/i18n/{es,en}.json`. | El candidate profile habla de unos seis; las fechas no permiten cerrar la cifra. | pendiente de Fran | La cifra no aparece. / The figure does not appear. |
| Product Engineer como posición principal. | Hero y metadatos ES/EN. | Coincide en north star y candidate profile. | validado | `Product Engineer`. / `Product Engineer`. |
| Su responsabilidad es técnica, con mentalidad de producto. | Hero, resumen y los dos casos. | Confirmado por Fran el 11/09/2026. | validado | `Mi responsabilidad es técnica.` / `My responsibility is technical.` |
| Base full stack con React, TypeScript y Ruby on Rails. | Hero, experiencia y casos. | Coincide entre contenido, casos y candidate profile. | validado | `Base full stack con Ruby on Rails en AuroraJobs.` / `Full-stack foundation in Ruby on Rails at AuroraJobs.` |
| Frontend Lead o líder técnico frontend en Webel. | Retirado. | El candidate profile no confirma un título formal de lead. | reformular | `Responsable del ecosistema web.` / `Responsible for the web platform.` |
| Web Engineer / Frontend Engineer como título formal en Webel. | Candidate profile. | Hay dos alternativas y ninguna confirmada. | pendiente de Fran | La web describe la responsabilidad, no el cargo. / The site describes the responsibility, not the title. |
| Responsable de todo el departamento web de Webel. | Experiencia, resumen y caso Webel. | Confirmado por Fran el 11/09/2026: B2C, B2B, dashboard, SEO, emails y librería compartida. | validado | `Soy responsable de todo el web de Webel: …` / `I am responsible for all of Webel's web: …` |
| Webel es experiencia actual desde 2024. | Experiencia y caso Webel. | Las dos entradas públicas coinciden. | validado | `2024 — hoy`. / `2024 — present`. |
| Webel tiene millones de usuarios. | Retirado. | Contradicho por la escala que confirma Fran. | eliminar | No aparece. / Does not appear. |
| La app B2C la usan miles de personas al día. | Resumen, experiencia y caso Webel. | Confirmado por Fran el 11/09/2026. | validado | `La app B2C la usan miles de personas al día.` / `The B2C app is used by thousands of people every day.` |
| Los perfiles de empresa de la plataforma B2B generan cerca del 25 % del GMV, más de 500.000 € al año. | Experiencia, caso Webel y proof. | Confirmado por Fran el 11/09/2026, con la condición de no atribuirse el ingreso. | validado | `Los perfiles de empresa que trabajan sobre la plataforma B2B generan cerca del 25 % del GMV, más de 500.000 € al año.` / `The company profiles working on the B2B platform generate close to 25% of GMV, over €500k a year.` |
| El dashboard interno cubre la gestión completa del marketplace. | Caso Webel. | Confirmado por Fran el 11/09/2026. | validado | `El dashboard interno con el que el equipo opera el marketplace completo.` / `The internal dashboard the team uses to run the whole marketplace.` |
| Más de 50.000 plantillas SEO. | Retirado. | Sigue sin respaldo. | pendiente de Fran | `Monté la superficie de SEO en Astro.` / `I built the SEO surface in Astro.` |
| Primer resultado orgánico para una búsqueda concreta. | Retirado. | Resultado variable, sin fecha ni evidencia. | eliminar | No aparece. / Does not appear. |
| Migración completa del marketplace de Angular a React. | Experiencia y caso Webel. | Las fuentes coinciden. | validado | `Migré el marketplace B2C de Angular a React.` / `I migrated the B2C marketplace from Angular to React.` |
| Librería compartida del design system, extraída y refactorizada por Fran. | Experiencia, caso Webel y proof. | Confirmado por Fran el 11/09/2026. | validado | `Extraje el design system a una librería compartida por B2C, B2B y dashboard.` / `I extracted the design system into a library shared by B2C, B2B, and the dashboard.` |
| Más de 100 emails migrados a React Email. | Retirado. | El candidate profile confirma la migración, no la cantidad. | pendiente de Fran | `Llevé los emails a React Email.` / `I moved email to React Email.` |
| Bugs casi a cero. | Retirado. | No hay medida ni periodo. | eliminar | No aparece. / Does not appear. |
| Web pasó a ser el departamento que más rápido se mueve. | Retirado. | Comparativa interna sin medida. | eliminar | No aparece. / Does not appear. |
| Liderazgo o formación de dos developers mid-senior en Webel. | Caso Webel. | El candidate profile habla de coordinación y apoyo a un developer. Fran no lo corrigió. | pendiente de Fran | `Dentro de web reviso el trabajo y las pull requests de otro developer.` / `Inside web, I review another developer's work and pull requests.` |
| Skills, agentes y documentación del design system preparada para agentes. | Resumen, caso Webel y método. | Las fuentes coinciden. | validado | `Escribo las especificaciones y las skills con las que trabajan los agentes.` / `I write the specifications and skills the agents work from.` |
| Especificaciones, criterios de aceptación, revisión y validación final con agentes. | Método y casos. | Proceso descrito de forma consistente. | validado | `El código, las pruebas y la decisión final los reviso yo.` / `The code, the tests, and the final call are mine.` |
| AuroraJobs, 2021–2024. | Experiencia y caso. | Coincide en todas las entradas públicas. | validado | `2021 — 2024`. / `2021 — 2024`. |
| Más de cinco años en AuroraJobs. | Retirado. | Contradice 2021–2024. | eliminar | No aparece. / Does not appear. |
| Responsable de la aplicación de AuroraJobs de principio a fin. | Experiencia y caso. | Confirmado por Fran el 11/09/2026. | validado | `Fui responsable de la aplicación de principio a fin, en un monolito Ruby on Rails.` / `I was responsible for the application end to end, in a Ruby on Rails monolith.` |
| Paneles de candidatos priorizados, filtros y formularios dinámicos y dashboard de configuración. | Experiencia, caso y proof. | Confirmado por Fran el 11/09/2026. | validado | Los tres frentes del caso. / The three fronts in the case. |
| Lideré la ingeniería en AuroraJobs. | Retirado. | No hubo título formal. | reformular | `Mentoricé, coordiné y gestioné a un equipo de dos developers.` / `I mentored, coordinated, and managed a team of two developers.` |
| Único developer en AuroraJobs. | Retirado. | Contradice la coordinación del equipo. | eliminar | No aparece. / Does not appear. |
| Equipo de hasta cuatro ingenieros en AuroraJobs. | Retirado. | Sustituido por la cifra que confirma Fran. | eliminar | `Un equipo de dos developers: un junior y un mid.` / `A team of two developers: one junior and one mid.` |
| Más de 20.000 usuarios y varias rondas de financiación. | Retirado. | Sin fuente. | pendiente de Fran | No aparece; el caso lo declara en la nota de confidencialidad. / Does not appear; the case says so in its confidentiality note. |
| Infraestructura completa de producción con Kubernetes. | Caso AuroraJobs. | El repositorio lo afirmaba; el alcance exacto sigue sin delimitar. | pendiente de Fran | `Despliegues e infraestructura del producto.` / `Deployments and product infrastructure.` |
| Paso por Lanzadera en 2022. | Retirado. | Solo aparecía en el repositorio. | pendiente de Fran | No aparece. / Does not appear. |
| Postgram fue diseño y desarrollo individual. | Retirado. | Se construyó con el antiguo CTO y Product Owner de AuroraJobs. | reformular | `Producto e ingeniería dentro de un equipo de tres.` / `Product and engineering inside a three-person team.` |
| Postgram tiene un prototipo funcional. | Caso Postgram. | Las capturas respaldan el flujo. | validado | `Prototipo funcional… pero no llegó a publicarse.` / `Working prototype… but it never shipped.` |
| Postgram figura como prototipo de 2024. | Caso Postgram. | Coincide en ES/EN. | validado | `Prototipo · 2024`. / `Prototype · 2024`. |
| Fountly está publicado y se usa personalmente. | Caso Fountly. | El candidate profile confirma el uso personal; el lugar exacto varía entre fuentes, así que no se nombra. | validado | `Publicado en fountly.app. Lo uso cuando viajo.` / `Published at fountly.app. I use it when I travel.` |
| Fountly figura como proyecto publicado de 2026. | Caso Fountly. | La fecha coincide y la app responde. | validado | `Publicado · 2026`. / `Published · 2026`. |
| Datos del Ayuntamiento con estado real de cada fuente de Madrid. | Retirado. | Sin documentar. | pendiente de Fran | `Combina OpenStreetMap con datos públicos locales cuando están disponibles.` / `It combines OpenStreetMap with local public data where that exists.` |
| Maker Tracker se usa a diario y mejora resultados. | Fuera de la web. | Sin fuente. | pendiente de Fran | El proyecto no se publica. / The project is not published. |
| My Potential tiene demos activas en colegios y usa tests validados. | Fuera de la web. | Sin validación de demos, tests ni tratamiento de menores. | pendiente de Fran | El proyecto no se publica. / The project is not published. |
| Agendao tiene un producto funcional. | Fuera de la web. | Sin material suficiente. | pendiente de Fran | El proyecto no se publica. / The project is not published. |
| guarderiadeperros.es es un marketplace con flujos asistidos por IA. | Fuera de la web. | Faltan estado, contenido bilingüe y recursos. | pendiente de Fran | El proyecto no se publica. / The project is not published. |

Ningún claim con estado `pendiente de Fran` aparece publicado. En todos los casos la web usa la formulación de la última columna o retira el dato. Las cifras internas que no se publican quedan declaradas en `confidentialityNote` dentro de cada caso profesional.

## Preguntas que siguen abiertas

1. ¿Cuántos años de experiencia quieres publicar y desde qué fecha los cuentas?
2. ¿Qué título formal debe aparecer para Webel, si quieres mostrar uno?
3. ¿Puedes respaldar las 50.000 plantillas SEO y la posición orgánica citada, y de qué periodo son?
4. ¿Cuántos emails se migraron a React Email?
5. ¿A cuántos developers coordinas en Webel, con qué seniority y desde cuándo? Ahora mismo la web dice «otro developer».
6. ¿Cuáles fueron las fechas exactas de AuroraJobs?
7. ¿Se pueden publicar los usuarios, las rondas, Lanzadera y el alcance concreto de infraestructura de AuroraJobs?
8. ¿Cuál es el estado actual y el resultado comprobable de Maker Tracker?
9. ¿Qué demos de My Potential ocurrieron y qué revisión respalda lo de los tests y la privacidad de menores?
10. ¿Qué estado, contenido y recursos puedes aportar para Agendao y guarderiadeperros.es?
