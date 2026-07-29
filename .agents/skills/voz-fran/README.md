# Skill de voz de Fran

Este paquete contiene:

- `SKILL.md`: definición principal de la voz, reglas, patrones y ejemplos.
- `EVALS.md`: pruebas para comprobar que un agente aplica bien la skill.

## Estructura recomendada

```text
skills/
└── voz-fran/
    ├── SKILL.md
    └── EVALS.md
```

`README.md` es solo documentación del paquete y no es necesario copiarlo al directorio de skills.

## Uso recomendado

Carga `SKILL.md` cuando quieras redactar o reescribir textos con la voz personal de Fran.

La skill distingue tres niveles:

1. profesional;
2. natural, usado por defecto;
3. chat espontáneo.

Para validar cambios futuros, ejecuta los casos de `EVALS.md` y comprueba que la voz sigue siendo reconocible sin convertirse en una caricatura.
