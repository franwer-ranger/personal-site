# francisquin.dev

Sitio personal de Francis Quin — Product Engineer especializado en frontend.

## Stack

- **Astro** (arquitectura de islas, salida estática)
- **TypeScript** estricto
- **Three.js** — escena WebGL del hero (caos → orden con el scroll), cargada en chunk diferido
- **Motion** — animaciones de interfaz (scroll reveals)
- **Astro Content Collections** — proyectos y experiencia, en ES y EN
- CSS moderno con custom properties, sin framework

## Desarrollo

```sh
npm run dev        # servidor de desarrollo
npm run build      # build de producción en ./dist
npm run preview    # previsualizar el build
npx astro check    # verificación de tipos
```

## Estructura

```text
src/
├── components/        # Secciones y piezas de UI (.astro)
├── content/           # projects/ y experience/ en es/ y en/ (JSON)
├── i18n/              # es.json, en.json y helpers (ui.ts)
├── layouts/           # Layout base (nav, footer, ClientRouter)
├── lib/               # heroScene.ts (Three.js), reveal.ts (Motion), data.ts
├── pages/             # index, /en, /proyectos/[slug], /en/projects/[slug]
└── styles/            # Sistema de diseño (global.css)
```

## Internacionalización

- Español por defecto (`/`), inglés en `/en`.
- Textos de interfaz en `src/i18n/{es,en}.json`; contenido largo en las colecciones.
- El selector de idioma preserva la página actual (incluidas las fichas de proyecto).
