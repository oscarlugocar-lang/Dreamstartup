# Dreamscape Video Pipeline

## Plantillas disponibles

| Plantilla | Descripción |
|-----------|-------------|
| `explicador.html` | Hero scene con branding Dreamscape |
| `producto.html` | Tarjeta de precio para plan Profesional |
| `captions.html` | Captions animados con highlight |

## Uso

```bash
# Render con HyperFrames (recomendado)
npx hyperframes render templates/explicador.html -o output/explicador.mp4

# O usando el script
bash scripts/render.sh explicador dreamscape-intro
```

## Requisitos
- [HyperFrames](https://hyperframes.dev) — `npx hyperframes init`
- O navegador Chromium para screenshots

## Output
Los videos renderizados se guardan en `output/`.
