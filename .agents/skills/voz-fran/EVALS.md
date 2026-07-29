# Evaluaciones de la skill `voz-fran`

Estas pruebas sirven para comprobar que la skill reproduce la voz de Fran sin caricaturizarla ni copiar el estilo de sus meta-prompts.

## Criterios generales

Puntúa cada salida de 0 a 2 en cada criterio:

- **Naturalidad:** parece escrito por una persona concreta, no por una IA.
- **Voz:** conserva el tono directo, contextual, práctico y crítico de Fran.
- **Fidelidad:** no inventa datos, opiniones ni restricciones.
- **Ritmo:** mezcla frases breves y desarrollo sin una simetría artificial.
- **Utilidad:** llega a una duda, decisión o siguiente paso claro.
- **Control:** no introduce faltas deliberadas, jerga de barrio impostada ni muletillas excesivas.

Una salida sólida debería obtener al menos 10/12.

## Eval 1 — Duda técnica

### Entrada

Reescribe como Fran:

> Me gustaría saber cuál es el mejor enfoque para compartir especificaciones entre un repositorio central de producto y varios repositorios de implementación.

### Debe aparecer

- Entrada directa.
- El conflicto entre fuente de verdad y duplicación de contexto.
- Una o dos preguntas concretas.
- Lenguaje técnico sencillo.

### Debe evitar

- “arquitectura robusta y escalable”;
- una lista formal de alternativas;
- resolver el problema sin tener suficiente información;
- tono académico.

## Eval 2 — Corrección de rumbo

### Entrada

El asistente ha explicado cómo construir una vista kanban, pero Fran quería decidir el modelo de información. Redacta su respuesta.

### Debe aparecer

- Corrección clara sin agresividad.
- Una frase similar en función a “te has ido a la implementación”.
- Reformulación del problema real.
- Prioridad explícita: primero modelo, después implementación.

## Eval 3 — Mensaje profesional

### Entrada

Redacta un mensaje para preguntar en una entrevista por teletrabajo, autonomía y forma de medir el rendimiento.

### Debe aparecer

- Tono profesional, pero humano.
- Preferencia por objetivos frente a control horario.
- Interés real por la forma de trabajo.
- Sin criticar directamente a una empresa anterior.

### Debe evitar

- “cultura de alto rendimiento”;
- “alineación con los valores de la compañía”;
- exceso de coloquialismos.

## Eval 4 — Reflexión personal

### Entrada

Fran duda entre usar su email personal, lleno de spam, o crear uno nuevo para su portfolio profesional. Escribe la reflexión como él.

### Debe aparecer

- Contexto concreto: cuenta personal saturada y usada para todo.
- El coste real de mantener otra cuenta.
- Duda sobre separación entre vida personal y profesional.
- Pregunta práctica o conclusión provisional.

## Eval 5 — Texto de producto

### Entrada

Explica la idea de una aplicación parecida a Linear que lanza agentes de programación y QA, dejando al humano revisar antes de crear y antes de hacer merge.

### Debe aparecer

- Comparación con Linear en lenguaje natural.
- Idea de “factoría de software automatizada con IA” sin vender humo.
- Papel humano en specs y revisión de pull requests.
- Reconocimiento de que el sistema todavía necesita ordenarse.

### Debe evitar

- tono de pitch de startup;
- claims grandilocuentes;
- “revolucionar el desarrollo de software”.

## Eval 6 — Chat corto

### Entrada

El asistente acaba de entender correctamente la idea después de dos intentos fallidos. Responde como Fran en una o dos frases.

### Respuestas válidas aproximadas

> Vale, perfecto. Justo a eso me refería.

> Eso sí me cuadra más. La duda ahora es cómo lo bajamos a algo que pueda ejecutar de verdad.

### Debe evitar

- párrafo largo;
- entusiasmo exagerado;
- emojis añadidos sin motivo.

## Eval 7 — Resistencia a la caricatura

### Entrada

Escribe una propuesta seria para el CTO usando la voz de Fran.

### Fallo esperado

La salida no debe llenar el texto de:

- “vale”;
- “justo”;
- “tío”;
- frases sin tildes;
- preguntas encadenadas;
- fragmentos propios de WhatsApp.

La voz debe reconocerse por la franqueza, el contexto y el criterio práctico, no por copiar tics superficiales.

## Eval 8 — Separación del meta-prompting

### Entrada

A partir de una conversación donde Fran pide “genera un SKILL.md con frontmatter, reglas, ejemplos y evals”, escribe una presentación personal con su voz.

### Debe evitar

- convertir la presentación en una especificación;
- encabezados como “Objetivo”, “Restricciones” y “Formato de salida”;
- imperativos de sistema;
- listas exhaustivas.

### Debe conservar

- precisión;
- claridad sobre lo que busca;
- lenguaje directo;
- opinión personal.

## Eval 9 — No darle siempre la razón

### Entrada

Fran propone una arquitectura demasiado compleja para un MVP. Responde en su voz explicando su propia duda.

### Debe aparecer

- Reconocimiento del atractivo de la idea.
- Crítica concreta a la complejidad.
- Riesgo de resolver problemas que todavía no existen.
- Búsqueda de un límite o versión más simple.

## Eval 10 — Edición mínima

### Entrada

> Vale, la idea me gusta bastante pero creo que estamos intentando solucionar a la vez el issue tracker, la documentación de producto y también la ejecución de agentes. Igual tiene sentido, pero no se si antes deberíamos cerrar bien una sola parte.

### Salida esperada aproximada

> Vale, la idea me gusta bastante, pero creo que estamos intentando solucionar a la vez el issue tracker, la documentación de producto y la ejecución de agentes. Igual tiene sentido, pero no sé si antes deberíamos cerrar bien una sola parte.

### Regla evaluada

No reescribir por completo un texto que ya contiene la voz correcta. Corregir solo lo necesario.
