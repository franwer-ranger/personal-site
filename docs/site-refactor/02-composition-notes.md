# Bocetos de composición para la portada

Estado: opción elegida antes de implementar el plan 02  
Contenido: entregables del plan 01, sin claims pendientes

## Opción A — Trace como columna vertebral

### Escritorio · 1440 × 900

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Fran / Product Engineer       Experiencia  Trabajo  Lab  Contacto          │
├────────────────────────────────────────────────────────────────────────────┤
│ Software Engineer con mentalidad de producto   │ problema ─ especificación │
│                                                │    ─ construcción          │
│ PRODUCT ENGINEER                               │    ─ revisión ─ entrega    │
│ Construyo software de producto de punta a      │                            │
│ punta…                                         │                            │
│ [Ver experiencia] [Contactar]                  │                            │
├────────────────────────────────────────────────────────────────────────────┤
│ Webel: ecosistema web  │ AuroraJobs: base full stack │ IA: specs y revisión │
└────────────────────────────────────────────────────────────────────────────┘
```

Después del primer viewport: experiencia en dos fichas comparables; dos casos profesionales con captura; método en un trace horizontal con artefactos; Lab en tarjetas compactas; contacto.

### Móvil · 390 × 844

```text
┌──────────────────────────┐
│ Fran             Menú    │
├──────────────────────────┤
│ Product Engineer         │
│                          │
│ Construyo software…      │
│ [Ver experiencia]        │
│ [Contactar]              │
│                          │
│ 01 problema              │
│ 02 especificación        │
│ 03 construcción          │
│ 04 revisión              │
│ 05 entrega               │
├──────────────────────────┤
│ Primer hecho             │
└──────────────────────────┘
```

## Opción B — Pruebas primero

### Escritorio · 1440 × 900

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Fran / Product Engineer       Experiencia  Trabajo  Lab  Contacto          │
├────────────────────────────────────────────────────────────────────────────┤
│ PRODUCT ENGINEER                                                           │
│ Construyo software de producto de punta a punta…     [Ver experiencia]     │
│                                                     [Contactar]             │
├────────────────────────────────────────────────────────────────────────────┤
│ WEBEL                 │ AURORAJOBS             │ TRABAJO CON AGENTES       │
│ Ecosistema web        │ Producto full stack    │ Specs, skills y revisión  │
├────────────────────────────────────────────────────────────────────────────┤
│ problema → especificación → construcción → revisión → entrega              │
└────────────────────────────────────────────────────────────────────────────┘
```

### Móvil · 390 × 844

```text
┌──────────────────────────┐
│ Fran             Menú    │
├──────────────────────────┤
│ Product Engineer         │
│ Construyo software…      │
│ [Ver experiencia]        │
│ [Contactar]              │
├──────────────────────────┤
│ Webel                    │
│ AuroraJobs               │
│ Trabajo con agentes      │
├──────────────────────────┤
│ trace vertical           │
└──────────────────────────┘
```

## Comparación

| Criterio | Opción A | Opción B |
| --- | --- | --- |
| Lectura del primer viewport | El rol y la propuesta conviven con el gesto visual; asoma el primer hecho. | Los hechos entran antes, pero el hero pierde identidad. |
| Jerarquía profesional | El trace acompaña al mensaje y la experiencia abre el contenido. | Muy clara, aunque se parece más a una ficha de perfil. |
| Personalidad | La retícula asimétrica y el trace tienen una presencia reconocible. | Correcta, pero más convencional. |
| Adaptación móvil | El trace pasa a vertical y mantiene el orden de lectura. | Sencilla, aunque concentra demasiadas tarjetas seguidas. |
| Coste de mantenimiento | Un único trace reutilizable y bloques con responsabilidades claras. | Bajo, pero obliga a duplicar pruebas entre hero y resumen. |

## Decisión

Se implementa la opción A. Explica el perfil antes de enseñar pruebas, deja ver el comienzo del resumen en una pantalla de 900 px y convierte el trace en una pieza reconocible que también funciona en vertical. La opción B queda descartada porque repite demasiado pronto la misma información y aporta menos personalidad.

## Prueba tipográfica

La comparación usa el hero elegido, el párrafo de Webel y las fechas `2024 — hoy` y `2021 — 2024`.

- Instrument Sans mantiene el título compacto sin volver rígidos los párrafos. Sus cifras se distinguen bien y encaja con la retícula sin parecer una interfaz genérica.
- Manrope funciona bien en cuerpo, pero abre más el hero y tiene un dibujo más geométrico. En esta composición resta contraste entre el texto editorial y los labels de IBM Plex Mono.

Se elige Instrument Sans variable para títulos y cuerpo. IBM Plex Mono queda limitada al trace, fechas, estados y labels breves. Las fuentes se sirven desde el propio proyecto para evitar dependencias remotas y cambios de layout durante la carga.
