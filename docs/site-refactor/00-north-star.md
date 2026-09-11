# North star del refactor

Estado: decisión de producto y diseño  
Ámbito: portada, casos de trabajo, proyectos propios, copy ES/EN y salida a producción  
Orden de lectura: este documento antes de cualquiera de los planes `01`, `02` o `03`

Planes de ejecución:

1. [Posicionamiento, arquitectura y copy](./01-positioning-and-content.md)
2. [Sistema visual y nueva portada](./02-visual-system-and-home.md)
3. [Casos, confianza y salida a producción](./03-cases-and-launch.md)

## Qué tiene que conseguir la web

Esta web es el escaparate profesional de Fran. Debe servir para dos conversaciones:

- encontrar un puesto mejor como Product Engineer, Senior Full-Stack Engineer o Software Engineer con responsabilidad de producto;
- abrir proyectos de consultoría o desarrollo en los que haga falta convertir una idea poco definida en software que se pueda usar.

La visita debe dejar cuatro ideas claras sin entrar en una ficha de detalle:

1. Fran es un ingeniero de software con unos seis años de experiencia en producto digital. La cifra exacta se publicará cuando quede validada.
2. Ha tenido responsabilidad real sobre productos web en producción: Webel en la etapa actual y AuroraJobs como base full stack.
3. Trabaja cerca de producto. Participa en el problema, el alcance, la arquitectura y la entrega; no se limita a ejecutar tickets cerrados.
4. Usa agentes de IA como parte de un sistema de ingeniería: especificaciones, skills reutilizables, implementación, revisión y controles de calidad. El criterio y la validación final siguen siendo su responsabilidad.

El diseño, la navegación y el copy tienen que trabajar para esta lectura. Cualquier elemento que compita con ella necesita una razón concreta para quedarse.

## Diagnóstico del sitio actual

La base técnica ya resuelve rutas localizadas, contenido estructurado, páginas de proyecto, responsive y reducción de movimiento. El problema principal está en lo que se prioriza y en cómo se presenta.

- El hero añade 85 svh de scroll y fija una escena 3D antes de llegar al trabajo. La interacción tiene más peso que el mensaje.
- El título «La complejidad es un puente. La simplicidad, el destino» no explica el rol ni el tipo de trabajo que busca Fran.
- Webel aparece como una gran sección de proyecto y después llega otra sección titulada `Proyectos`. La experiencia profesional no aparece hasta el quinto bloque.
- `Proyectos propios` figura dentro de la cronología laboral entre Webel y AuroraJobs. Esa posición equipara experimentos personales con puestos remunerados.
- La repetición de serif, labels monoespaciados, índices y divisores hace que hero, proyectos, principios, skills y experiencia tengan un ritmo muy parecido.
- El fondo beige, el cobre y la estética editorial transmiten calma, pero no conectan bien con producto digital, sistemas y agentes de IA.
- En móvil desaparecen todos los enlaces principales de la navegación; solo quedan el símbolo y el selector de idioma.
- La IA se menciona en hero, principios, skills y experiencia, pero casi siempre como etiqueta. Falta una prueba visible de cómo cambia el trabajo.
- Varias afirmaciones públicas no coinciden con el candidate profile en años, títulos, coordinación o alcance. La revisión de claims forma parte del producto, no es una corrección final de copy.
- El build actual genera un chunk de 512 KB para `heroScene` y avisa al superar 500 KB. La escena concentra coste técnico en un elemento que retrasa el contenido.
- El asset check marca `aurorajobs_hacks.avif` con 240,9 KB frente al límite de 200 KB del repositorio.

La nueva versión puede reutilizar colecciones, rutas, imágenes y parte de los componentes. No conviene conservar la arquitectura de la portada ni el sistema visual solo porque ya estén implementados.

## Posicionamiento

### Formulación principal

> Ingeniero de software con mentalidad de producto. Construyo productos web completos y uso agentes de IA para convertir problemas poco definidos en software sencillo, mantenible y útil.

Esta frase fija el territorio. No es el hero definitivo, pero sí el significado que deben conservar las versiones ES y EN.

### Jerarquía de títulos

- Título principal: `Product Engineer` o `Software Engineer · Product & AI`.
- Alternativa para búsquedas y metadatos: `Senior Full-Stack / Product Engineer`.
- Contexto técnico: React, TypeScript y Ruby on Rails.
- Especialidad emergente: flujos de ingeniería con agentes de IA.

`Frontend Lead` no debe ser el rótulo principal. Describe una parte de la etapa en Webel y puede generar una expectativa que el candidate profile matiza. Hasta validar el título público, es más preciso hablar de responsabilidad sobre web, liderazgo técnico o coordinación.

### Qué lo diferencia

- Puede moverse entre frontend, backend, arquitectura y producto.
- Ha asumido superficies completas, no solo funcionalidades sueltas.
- Reduce alcance y complejidad antes de escribir código.
- Aprende stacks nuevos con rapidez y sabe apoyarse en documentación, experimentación y agentes.
- Convierte su forma de trabajar en sistemas repetibles para que los agentes produzcan trabajo revisable.

La web debe demostrar estos puntos con decisiones, artefactos y resultados. Una lista de tecnologías por sí sola no los prueba.

## Audiencias y recorrido

### Hiring manager o fundador

Quiere saber qué nivel de autonomía puede asumir Fran, cómo razona y qué ha entregado. En la portada debe encontrar posicionamiento, alcance profesional, dos pruebas fuertes y una vía de contacto. Los casos de Webel y AuroraJobs aportan el detalle.

### Recruiter

Necesita encajar el perfil con un título, años de experiencia, stack, ubicación/forma de trabajo y empresas. Esa información debe aparecer pronto y con lenguaje fácil de buscar. El copy creativo no puede esconderla.

### Cliente potencial

Busca una señal clara de que Fran puede entender un problema, proponer un alcance razonable y construir el producto. Debe poder llegar a un caso relevante y contactar sin recorrer toda la web.

## Arquitectura de información

La portada seguirá este orden:

1. **Hero.** Nombre, rol, propuesta concreta, disponibilidad o intención y dos acciones: ver experiencia/trabajo y contactar.
2. **Resumen de credibilidad.** Entre tres y cuatro hechos breves: años, responsabilidad sobre web en Webel, base full stack en AuroraJobs y práctica de ingeniería con agentes. Solo se publican hechos validados.
3. **Experiencia profesional.** Webel y AuroraJobs, separadas y con jerarquía superior a cualquier proyecto propio.
4. **Trabajo seleccionado.** Uno o dos casos profesionales con problema, papel, decisión relevante y resultado. La portada enseña la síntesis; cada caso guarda el desarrollo completo.
5. **Cómo construyo.** Producto, arquitectura y trabajo con IA explicados como un proceso con ejemplos, no como principios abstractos.
6. **Lab / proyectos propios.** Una sección secundaria y claramente etiquetada. Enseña iniciativa y curiosidad sin presentarlas como experiencia remunerada.
7. **Sobre mí y contacto.** Un cierre corto, humano y accionable. Puede incluir ubicación, modalidad y enlaces profesionales cuando estén confirmados.

La navegación puede reducirse a `Experiencia`, `Trabajo`, `Lab` y `Contacto`. `Cómo trabajo` puede vivir dentro de `Trabajo` si la portada queda demasiado larga.

## Qué se ve y qué se guarda para el detalle

| Contenido | Portada | Vista de detalle |
| --- | --- | --- |
| Rol y empresa | Sí | Sí |
| Problema en una frase | Sí | Sí, con contexto |
| Papel de Fran | Sí | Sí, con límites y colaboradores |
| Una decisión importante | Sí | Sí, con alternativas y motivo |
| Uno o dos resultados | Sí, si están validados | Sí, con fuente o contexto |
| Lista completa de responsabilidades | No | Sí |
| Stack completo | No; tres tecnologías como máximo si aportan | Sí |
| Galería completa | No; una imagen fuerte | Sí |
| Proceso, restricciones y aprendizajes | No | Sí |

La portada no usará acordeones para esconder bloques largos. Los enlaces a casos aplican una separación más clara y funcionan bien con URL propia, navegación del navegador y SEO. La [divulgación progresiva](https://www.nngroup.com/articles/progressive-disclosure/) exige que la primera capa contenga lo que la mayoría necesita y que el enlace anticipe con claridad qué hay después.

## Separación entre experiencia y proyectos propios

### Experiencia profesional

- Webel y AuroraJobs viven en la colección y en la sección de experiencia.
- Se ordenan por fecha y responsabilidad.
- Pueden incluir alcance, colaboración, decisiones y resultados verificables.
- Reciben más espacio, contraste y prioridad en navegación.

### Lab / proyectos propios

- Postgram, guarderiadeperros.es, Agendao, Fountly y otros proyectos propios viven en `Lab`.
- La portada muestra entre tres y cuatro. El criterio es la señal profesional que aporta cada uno, no la cantidad de trabajo invertida.
- Cada tarjeta explica el problema y qué demuestra: criterio de producto, modelado, alcance, IA aplicada o ejecución full stack.
- No entran en la cronología laboral ni usan rótulos que parezcan un puesto.
- El estado debe ser honesto: idea, prototipo, en uso, piloto o archivado.

Guarderiadeperros.es y Agendao aparecen en el candidate profile, pero todavía no están en el contenido público del repositorio. El plan de contenido decidirá si sustituyen a Maker Tracker o My Potential en la portada. No se añadirán por completar una cuadrícula.

## Cómo hacer visible la mentalidad de producto e IA

La IA no puede quedar reducida a una etiqueta en una lista de skills. Debe aparecer en tres capas:

1. **Posicionamiento.** Una mención breve en el hero.
2. **Proceso.** Un bloque que enseñe el ciclo `problema → alcance → especificación → agentes → revisión → validación`.
3. **Prueba.** Uno o dos ejemplos concretos: skills de arquitectura, documentación de un design system preparada para agentes, especificaciones con criterios de aceptación o revisiones automatizadas.

No se enseñarán conversaciones con chatbots, logos de modelos en fila ni una terminal falsa. Esos recursos hablan de herramientas. Aquí interesa enseñar criterio, sistema y responsabilidad.

## Dirección visual: estudio técnico con una parte lúdica

El nuevo sistema debe sentirse como una mesa de trabajo bien ordenada: claro, preciso y con pequeños detalles que invitan a mirar. La personalidad viene de una composición reconocible y de cómo se enseña el trabajo, no de mantener la pantalla en movimiento.

### Base

- Fondo frío casi blanco, superficies blancas y tinta oscura. Se elimina la familia beige/marrón actual.
- Un azul eléctrico o ultramar como acento principal. Un segundo acento más juguetón, lima o coral, se reserva para estados, pequeños gráficos o detalles del Lab.
- Tipografía sans variable, limpia y con carácter. `Instrument Sans` es el primer candidato para títulos y texto; `IBM Plex Mono` puede quedarse solo para metadatos y fragmentos de sistema. Se prueba antes de cerrar la elección.
- Escala tipográfica menos editorial. El hero necesita una frase directa, no un manifiesto enorme en serif.
- Radios medios, bordes nítidos y pocas sombras. Las tarjetas deben parecer piezas de una interfaz bien construida, no una plantilla de portfolio ni una colección de hojas de papel.
- Retícula de doce columnas en escritorio y una columna clara en móvil. Se permiten composiciones asimétricas cuando ayuden a distinguir secciones.

Los tokens se definen en un único lugar. Como referencia de disciplina, [Geist](https://vercel.com/geist/introduction) separa color, tipografía, retícula y componentes; no se copiará su estética monocroma ni su librería.

### Gesto propio

El motivo visual será un pequeño **trace de construcción**: problema, especificación, implementación, revisión y entrega. Puede aparecer en el hero como diagrama estático y reaparecer en los casos para señalar qué parte lideró Fran. Esto conecta producto, ingeniería e IA sin convertir la web en una demo de Three.js.

Debe funcionar sin JavaScript. En hover o foco puede revelar una nota corta o cambiar de estado. En móvil se lee en vertical sin interacción obligatoria.

### Movimiento

- Se elimina el canvas 3D, el hero fijado y el scroll extra.
- No hay scroll hijacking ni revelados que retrasen la lectura.
- Los cambios de hover, foco y pulsación duran entre 120 y 220 ms.
- Una animación solo se acepta si explica una relación o confirma una acción.
- `prefers-reduced-motion` sigue teniendo una experiencia completa.

La pauta coincide con el criterio de [Emil Kowalski sobre animación con propósito](https://emilkowal.ski/ui/you-dont-need-animations): la animación debe ayudar a entender o responder, y puede desaparecer cuando no aporta.

### Lo que no vamos a hacer

- Otro clon oscuro de Linear o Vercel.
- Gradientes difusos, glassmorphism o brillos que intenten decir «IA».
- Monoespaciada en todos los rótulos.
- Un hero abstracto que ocupe más de una pantalla.
- Tarjetas idénticas para experiencia, casos y proyectos propios.
- Métricas grandes usadas como decoración.
- Efectos de cursor, sonido o movimiento continuo.

## Referencias y qué tomar de cada una

- [Emil Kowalski](https://emilkowal.ski/): posición profesional entendible en dos frases, selección corta y una relación coherente entre lo que dice y lo que construye. Tomar la claridad y la contención del movimiento.
- [Rauno Freiberg](https://rauno.me/): una idea visual propia puede hacer memorable un portfolio. Tomar la consistencia del gesto, no la interfaz de sistema operativo ni su nivel de experimentación.
- [Josh W. Comeau](https://www.joshwcomeau.com/about-josh/): los detalles interactivos demuestran oficio y personalidad porque están ligados al contenido. Tomar la idea de sorpresa puntual, no la densidad ni el tono docente.
- [Brittany Chiang](https://brittanychiang.com/): rol, experiencia y proyectos se pueden escanear con rapidez. Tomar la jerarquía y la separación de bloques, no replicar su layout.
- [Geist Design System](https://vercel.com/geist/introduction): usar tokens y fundamentos explícitos mantiene la interfaz coherente. Tomar la disciplina del sistema, no la marca.

## Principios de copy

1. El título dice qué hace Fran. La personalidad entra después.
2. Cada afirmación importante lleva una prueba cerca.
3. Se explica el problema antes que el stack.
4. Se usan verbos en primera persona cuando la contribución fue propia y `trabajamos` cuando fue del equipo.
5. Se distingue responsabilidad, colaboración y resultado. No se atribuye a una persona lo que produjo un equipo.
6. Las tecnologías aparecen donde ayudan a interpretar el trabajo.
7. El español se escribe primero con la voz profesional de Fran. El inglés se adapta; no se calca.
8. No se usan slogans abstractos como sustituto de información.

Frases como «producto de verdad», «millones de usuarios», «bugs casi a cero» o «el departamento que más rápido se mueve» necesitan contexto. Si no se puede respaldar o explicar, se recortan.

## Claims pendientes de validar

La siguiente lista es un bloqueo de publicación, no de diseño. Un agente puede usar marcadores provisionales, pero no dar estos datos por aprobados.

- Años totales: el sitio dice unos cinco y el candidate profile, unos seis.
- Título público en Webel: `Frontend Lead`, `Web Engineer`, `Frontend Engineer` o una formulación descriptiva sin título formal.
- Alcance en Webel: «millones de usuarios» frente a «miles de usuarios al día».
- Responsabilidad sobre el Business Profile asociado a unos 500 k€ de GMV anual.
- Más de 50.000 plantillas de SEO y la posición orgánica citada.
- Migración de más de 100 emails y formulaciones como «bugs casi a cero».
- Número, seniority y tipo de coordinación de otros developers en Webel.
- Duración de AuroraJobs: las fechas públicas son 2021–2024, mientras el contenido habla de más de cinco años y el candidate profile de unos cuatro.
- «Lideré la ingeniería» en AuroraJobs frente a coordinación y responsabilidad técnica sin título formal.
- Más de 20.000 usuarios, rondas de financiación y alcance exacto de la infraestructura de AuroraJobs.
- Estados y resultados de My Potential y Maker Tracker.

Cuando un dato sea confidencial, se reemplaza por una escala honesta (`miles de usuarios al día`, `una superficie con impacto directo en GMV`) o se elimina.

## Reglas para decidir si algo entra

Un bloque nuevo debe contestar al menos una de estas preguntas:

- ¿Ayuda a entender qué tipo de ingeniero es Fran?
- ¿Demuestra una capacidad importante con un hecho?
- ¿Ayuda a elegir el caso de detalle correcto?
- ¿Facilita contactar o evaluar encaje?

Si la respuesta es no, no entra en la portada.

## Criterios de éxito del refactor

- En el primer viewport, a 1440 × 900 y 390 × 844, se leen nombre, rol, propuesta y una acción sin esperar una animación.
- Una persona que solo lea hero, resumen y títulos de sección puede explicar el perfil con las cuatro ideas del inicio.
- Webel y AuroraJobs tienen más jerarquía que cualquier proyecto propio.
- Ningún proyecto propio aparece dentro de experiencia profesional.
- La práctica con IA incluye al menos una prueba concreta y no depende de nombres de herramientas.
- Las páginas de detalle contienen el contexto que sale de la portada.
- Todo claim público está validado o formulado con prudencia.
- ES y EN conservan el mismo significado sin sonar traducidos.
- La interfaz cumple WCAG 2.2 AA en contraste, foco, teclado y reducción de movimiento. La [especificación de contraste](https://www.w3.org/TR/WCAG22/#contrast-minimum) exige 4,5:1 para texto normal y 3:1 para texto grande.
- El sitio compila sin errores, conserva sus rutas públicas y no necesita JavaScript para leer el contenido principal.
