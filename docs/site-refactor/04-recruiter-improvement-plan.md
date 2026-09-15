# Plan de mejora de la web personal

## Contexto para el agente

Este documento define la siguiente iteración de `franbarahona.dev` después de revisar la web como recruiter para puestos de Product Engineer y Full-Stack Software Engineer.

La web debe seguir siendo generalista. No debe adaptarse a una oferta concreta ni incluir modalidad de trabajo, disponibilidad o mensajes de `open to work`.

Antes de escribir o modificar copy:

1. Leer y aplicar `.agents/skills/voz-fran/SKILL.md`.
2. Leer y aplicar `.agents/skills/no-ai-slop-es/SKILL.md` y su `eval.md` para español.
3. Leer y aplicar `.agents/skills/no-ai-slop/SKILL.md` y su `eval.md` para inglés.
4. Adaptar el inglés de forma idiomática. No traducir el español literalmente.

Preservar los cambios que ya existan en el worktree. En particular, hay un cambio local en `src/i18n/es.json` que sustituye «todo el web» por «todo el departamento web» y debe conservarse.

No publicar Product OS en esta iteración. My Potential sí debe publicarse.

No inventar cifras. Los efectos cualitativos confirmados pueden publicarse, pero cualquier porcentaje, duración, volumen o mejora numérica necesita una fuente aportada por Fran.

## Objetivo

Reforzar el posicionamiento de Fran como Product Engineer full stack que:

- construye y mantiene productos completos;
- tiene casi seis años de experiencia;
- lidera técnicamente el desarrollo;
- trabaja cerca de Producto;
- usa IA de forma intensiva dentro de un flujo propio con controles de contexto, calidad, pruebas y revisión.

La web debe resolver una duda importante: Fran sigue siendo un ingeniero hands-on. El trabajo con agentes aumenta su capacidad de implementación, pero no sustituye su criterio ni lo aleja del código.

## Fase 1. Rehacer el primer pantallazo

### 1.1. Actualizar el hero

Mantener `Product Engineer` como título y partir de este texto:

> Construyo productos web de principio a fin. En Webel llevo el departamento web; antes construí en Rails un producto completo para estudiantes, empresas y universidades. Trabajo con React, TypeScript y Ruby on Rails, cerca de Producto y con responsabilidad sobre arquitectura, entrega y mantenimiento.
>
> Programo con agentes de forma intensiva. Los encuadro con especificaciones, contexto, skills reutilizables, pruebas y revisiones para reducir fallos y mantener la calidad y la arquitectura del proyecto.

El agente puede ajustar ritmo y longitud al diseño, pero debe conservar estas ideas:

- construcción de productos completos;
- responsabilidad actual sobre el departamento web;
- base full stack en Rails;
- React y TypeScript;
- trabajo cercano a Producto;
- uso intensivo de agentes;
- guardrails concretos alrededor de la IA;
- responsabilidad humana sobre arquitectura, pruebas y resultado.

### 1.2. Convertir el diagrama lateral en una prueba del flujo con IA

Cambiar `Trace de construcción` por `Flujo de desarrollo con IA` o una formulación equivalente.

Pasos propuestos:

1. Problema
2. Especificación
3. Contexto y reglas
4. Implementación
5. Pruebas y revisión

El diagrama debe enseñar que los agentes trabajan dentro de un sistema definido, no que la IA sustituye el trabajo de ingeniería.

### 1.3. Ajustar los CTA

Usar como acciones principales:

- `Ver casos`
- `Descargar CV`

Contacto, LinkedIn y GitHub pueden aparecer como enlaces secundarios bajo los botones. El enlace del CV no debe publicarse hasta que exista el archivo definitivo.

## Fase 2. Mejorar el resumen profesional

Actualizar el bloque `En breve` para cubrir tres ideas sin repetir literalmente el hero:

1. Casi seis años construyendo producto en startups y scale-ups.
2. Responsabilidad actual sobre el departamento web de Webel y experiencia full stack previa.
3. Uso intensivo de agentes con controles propios de contexto, calidad, pruebas y revisión.

No añadir modalidad, disponibilidad ni una declaración de búsqueda activa.

## Fase 3. Corregir fechas, equipo y responsabilidades

### 3.1. Fechas

Actualizar en español e inglés:

- AuroraJobs: `principios de 2021 — mediados de 2024`.
- Webel: `finales de 2024 — actualidad`.
- Posicionamiento general: `casi seis años de experiencia`.

No hace falta añadir los trabajos breves que hubo entre ambas etapas.

### 3.2. AuroraJobs

Explicar la composición y el reparto real del equipo:

> El equipo de tecnología lo formábamos el CTO, dos developers y yo. El CTO llevaba principalmente infraestructura y tareas administrativas; yo lideraba el desarrollo de producto, repartía el trabajo, revisaba las pull requests y mentoricé a los otros dos developers.

Actualizar tanto el resumen de experiencia como el caso completo. El mensaje es `liderazgo técnico del desarrollo`, sin convertirlo en un cargo formal que no existió.

La redacción no debe quitar valor al CTO ni insinuar que Fran dirigía toda la empresa. Debe delimitar con precisión que lideraba el desarrollo de producto y apoyaba técnicamente a los otros dos developers.

### 3.3. Webel

Mantener que Fran es responsable del departamento web. Integrar esa formulación en el hero, el resumen, la experiencia y el caso.

En inglés, usar una formulación natural que no invente un cargo formal. Candidatas:

- `Web Engineer responsible for the web department`.
- `Responsible for Webel's web department`.

La elección definitiva debe ser compatible con el cargo que aparezca en CV y LinkedIn.

### 3.4. Eliminar el dato de GMV

Quitar el porcentaje y los 500.000 € de:

- portada;
- experiencia;
- caso de Webel;
- versión española e inglesa.

Sustituirlos por una prueba del alcance operativo. Punto de partida:

> La plataforma B2B permite a las empresas gestionar equipos, servicios, calendarios, leads, chat, áreas de servicio, datos fiscales y cobros.

## Fase 4. Convertir las decisiones técnicas en resultados

No inventar métricas. Usar los efectos cualitativos ya confirmados y dejar preparada la estructura para incorporar cifras más adelante.

### 4.1. Webel

Reescribir `Resultados` para conectar decisiones con consecuencias:

- menos trabajo duplicado después de unificar Angular y React;
- menos inconsistencias y cambios repetidos gracias a la librería compartida;
- mejor rendimiento y publicación independiente de contenido gracias a Astro;
- menos errores y retrabajo mediante el flujo con agentes;
- mayor frecuencia de entrega;
- mantenimiento más sencillo de las aplicaciones existentes.

No presentar la migración o la librería como resultados por sí solas. Explicar qué cambió en el trabajo o en el producto.

### 4.2. AuroraJobs

Reforzar como resultados:

- filtros y formularios configurables sin desarrollo ni despliegues;
- ciclos de producto más cortos gracias al monolito;
- trabajo en paralelo de los tres developers;
- menor dependencia de una sola persona;
- liderazgo técnico, revisiones y mentoring;
- entrega completa desde modelado y backend hasta producción.

### 4.3. Pruebas de portada

Cambiar las pruebas genéricas por consecuencias concretas. Ejemplos que deben validarse contra el contenido final:

- `Una librería compartida sustituyó tres implementaciones distintas de los mismos componentes.`
- `Producto podía cambiar filtros y formularios sin abrir una tarea de desarrollo.`
- `El flujo con agentes aumentó la frecuencia de entrega y redujo errores y retrabajo.`

## Fase 5. Reducir la duplicación de la home

Mantener `Experiencia` y `Trabajo seleccionado`, pero darles funciones distintas.

### Experiencia

Convertirla en una cronología compacta con:

- empresa;
- fechas;
- función;
- una frase sobre el alcance;
- stack;
- enlace al caso.

Eliminar las listas largas de evidencias que ahora repiten el contenido de los casos.

### Trabajo seleccionado

Mantener Webel y AuroraJobs como casos principales. Cada teaser debe mostrar:

- problema;
- responsabilidad;
- una consecuencia;
- enlace al caso completo.

Orden de la home:

1. Hero
2. Resumen
3. Experiencia compacta
4. Casos profesionales
5. Flujo de desarrollo con IA
6. Lab
7. Contacto

## Fase 6. Publicar My Potential

### 6.1. Adaptar el contenido al esquema actual

Convertir los archivos `my-potential.json.hidden` en entradas públicas válidas para la colección de proyectos, tanto en español como en inglés.

El caso debe explicar:

- el problema de orientación académica;
- los cuestionarios;
- el catálogo de grados universitarios y FP;
- el pipeline que genera informes;
- Rails y Hotwire como base del producto;
- OpenAI y Qdrant para la parte de IA y RAG;
- las decisiones de privacidad;
- el estado real del producto.

No publicar afirmaciones sobre validación psicológica que no estén documentadas. No mostrar datos personales ni información identificable de menores.

### 6.2. Posicionarlo como proyecto principal del Lab

My Potential debe aparecer antes de Postgram y Fountly porque es la mejor prueba conjunta de:

- producto;
- full stack;
- IA aplicada;
- RAG;
- modelado de datos;
- privacidad;
- despliegue.

Ajustar la cuadrícula del Lab para que tres proyectos mantengan una buena jerarquía en escritorio y móvil.

### 6.3. Añadir evidencia visual y enlaces

Preparar:

- logo;
- capturas sin información personal;
- demo pública, si sigue funcionando;
- enlace a GitHub, si el repositorio puede enseñarse;
- imagen Open Graph propia.

Si todavía no hay capturas utilizables, el caso puede publicarse inicialmente sin galería. No se deben crear pantallas ficticias para presentarlas como producto real.

## Fase 7. Hacer tangible el flujo con IA

Mantener la sección actual, pero hacerla más concreta. Debe explicar:

- cómo se define el problema;
- cómo se prepara una especificación;
- qué contexto y reglas recibe el agente;
- cómo se divide el trabajo;
- qué pruebas y validaciones se ejecutan;
- cómo revisa Fran el código;
- cuándo se para al agente o se corrige una decisión;
- cómo se reutilizan skills y criterios entre proyectos.

Los `Artefactos que uso` deben dejar de ser dos frases abstractas. Mostrar ejemplos sanitizados o fragmentos reales de:

- una especificación;
- criterios de aceptación;
- una skill;
- una checklist de revisión;
- una prueba o validación automatizada.

Esto no debe convertirse en una página de Product OS ni enlazar ese proyecto.

## Fase 8. Mejorar conversión y credibilidad

### Contacto

- Dar prioridad visual a `Ofertas y procesos`.
- Convertir consultoría en una opción secundaria o en un enlace más discreto.
- Mantener el texto generalista.

### Navegación y enlaces

- Añadir acceso visible al CV.
- Acercar LinkedIn y GitHub al hero.
- Añadir enlaces a código o demos dentro de cada proyecto cuando existan.
- Mantener el contacto por email.

### Validación externa

Dejar preparado un bloque opcional para una recomendación breve del antiguo CTO o Product Owner. No publicar una cita hasta tener el texto y su autorización.

## Fase 9. SEO y acabado técnico

Después de cerrar el contenido:

- añadir JSON-LD `Person` o `ProfilePage`;
- incluir LinkedIn y GitHub en `sameAs`;
- incluir casi seis años, Product Engineering, React, TypeScript y Rails en los metadatos;
- añadir datos estructurados apropiados para proyectos publicados;
- crear la imagen Open Graph de My Potential;
- comprobar sitemap, canonical y `hreflang`;
- revisar enlaces rotos;
- validar accesibilidad y navegación con teclado;
- comprobar la home y todos los casos en escritorio y móvil;
- ejecutar `npm run check-assets`;
- ejecutar `npm run build`;
- revisar el español con `voz-fran` y `no-ai-slop-es`;
- revisar el inglés con `no-ai-slop`.

Si se inicia el servidor de desarrollo, seguir `AGENTS.md` y usar `astro dev --background`.

## Criterios de aceptación

- En diez segundos se entiende que Fran es Product Engineer, full stack y hands-on.
- La IA aparece como una capacidad central respaldada por un proceso concreto.
- My Potential está publicado y demuestra IA aplicada a producto.
- Las fechas y la composición del equipo de AuroraJobs son coherentes en toda la web.
- No queda ninguna referencia pública al GMV.
- Experiencia y casos ya no cuentan dos veces lo mismo.
- Los resultados hablan de efectos, no solo de tecnologías o migraciones.
- La web sigue sirviendo para ofertas distintas.
- Español e inglés transmiten el mismo perfil sin ser traducciones literales.
- No hay enlaces, imágenes ni CTA rotos.
- El build y la comprobación de assets terminan correctamente.

## Deberes de Fran

Estas tareas dependen de información o archivos que el agente no debe inventar:

1. Subir el CV definitivo al repositorio, idealmente en PDF. Si existen versiones española e inglesa, subir ambas.
2. Proporcionar los enlaces de GitHub que se quieran enseñar para:
   - My Potential;
   - Fountly;
   - Postgram;
   - cualquier otro proyecto público.
3. Confirmar si la demo actual de My Potential puede enlazarse públicamente.
4. Proporcionar capturas de My Potential sin datos personales o confirmar que el agente puede obtenerlas de la demo pública.
5. Confirmar el cargo exacto que aparece en contrato, LinkedIn y CV para Webel. La responsabilidad sobre el departamento web se mostrará aparte si el cargo formal es distinto.
6. Aportar, cuando sea posible, referencias aproximadas para concretar resultados:
   - frecuencia de entrega antes y después;
   - tiempos de build;
   - número aproximado de componentes o aplicaciones migradas;
   - errores o incidencias reducidas;
   - trabajo manual eliminado.
7. Pedir autorización al antiguo CTO o Product Owner si se quiere incluir una recomendación.
8. Decidir si se quiere crear un correo bajo `franbarahona.dev`. No bloquea el resto del trabajo.

