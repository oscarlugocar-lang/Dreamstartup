# Dreamscape — Agencia de Edición de Video con IA

## Resumen

Dreamscape es una agencia de edición de video profesional impulsada por inteligencia artificial. Combina edición tradicional con automatización IA para ofrecer resultados rápidos y de alta calidad. Este spec define la configuración completa de la agencia: brief profesional, sitio web, y operativa con agentes de opencode.

## 1. Brief Profesional Dual-Purpose

### Cara Interna (para agentes de opencode)

- **Misión:** Transformar la edición de video combinando IA con criterio humano
- **Propuesta de valor:** Automatización, velocidad y creatividad impulsados por IA
- **Servicios:**
  - Automatización Inteligente (detección de escenas, corrección de color, estabilización, reconocimiento facial)
  - Flujo de Trabajo Acelerado (búsqueda visual, sugerencias contextuales, B-roll automático, render rápido)
  - Creatividad Potenciada (efectos por texto, restauración de video, super-resolución, animación de fotos)
- **Target:** Creadores de contenido, startups, agencias, empresas (Latam + España)
- **Planes:** Básico (€299/mes), Profesional (€799/mes), Empresa (personalizado)
- **Proceso interno:**
  1. Lead → 2. Briefing → 3. Propuesta → 4. Cierre → 5. Edición (con agentes) → 6. QC → 7. Entrega → 8. Reporte
- **Voice & Tone:** Profesional pero cercano, innovador, preciso, confiable
- **Stack técnico:** FFmpeg, Python, herramientas de IA, Playwright para automatización web
- **Brand:** Dreamscape — "Donde la creatividad humana se encuentra con el poder de la inteligencia artificial"
- **Redes:** @dreamscape.ai (Instagram), Dreamscape IA (LinkedIn), Highway43 / Oscar Lugo Productions (Behance)
- **Contacto:** latamdreamscape@gmail.com, +57 301 182 2651

### Cara Externa (para clientes, formato web + PDF)

- Quiénes somos + propuesta de valor
- Servicios detallados con ejemplos visuales
- Planes y precios (Básico €299, Pro €799, Empresa)
- Portfolio destacado (conexión Behance)
- Proceso de trabajo
- Testimonios / Casos de estudio
- FAQ
- CTA: Cotizar o agendar llamada

## 2. Arquitectura del Sitio Web

### Stack
- HTML + CSS + JS vanilla
- Despliegue en GitHub Pages
- Diseño responsive, dark theme, futurista

### Estructura de páginas

```
dreamscape-web/
├── index.html              # Home con hero, servicios, stats, testimonios, CTA
├── servicios.html           # Servicios detallados con iconos y descripciones
├── portfolio.html          # Grid de trabajos con filtros + enlace a Behance
├── precios.html            # Tabla comparativa de planes + FAQ + prueba gratis
├── blog/
│   ├── index.html          # Listado de artículos
│   └── posts/              # Artículos individuales
├── caso-de-estudio.html    # Template para estudios de caso
├── contacto.html           # Formulario + WhatsApp + redes + QR
├── brief-cliente.html      # Versión pública del brief (descargable)
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
```

### Paleta de colores
- Fondo oscuro (#0a0a0f, #12121a)
- Acento principal: violeta/neón (#8b5cf6, #a78bfa)
- Acento secundario: cian (#06b6d4)
- Texto: blanco (#f8fafc) y gris claro (#94a3b8)

## 3. Estructura de la Agencia

```
C:\Users\oscar\Dreamscape\
├── BRIEF.md                    # Brief profesional
├── board.md                    # Tablero de proyectos (board)
├── leads/                      # Leads de client-hunter
├── proposals/                  # Propuestas de proposal-writer
├── clients/                    # Clientes activos
│   └── <cliente>/
│       ├── brief.md
│       ├── raw/                # Material crudo
│       ├── projects/           # Proyectos de edición
│       ├── exports/            # Videos terminados
│       └── assets/             # Recursos gráficos
├── deliveries/                 # Entregas + QC reports
│   └── <cliente>/
│       └── qc-report.md
├── content/                    # Marketing
│   ├── social/
│   └── blog/
├── web/                        # Código del sitio web
└── analytics/                  # Dashboards y reportes
```

## 4. Pipeline de Operación con Agentes

1. `@client-hunter` → Busca leads en Upwork, Fiverr, LinkedIn (servicios de video/edición/IA)
2. `@proposal-writer` → Crea propuesta personalizada con paquetes Dreamscape
3. `@project-manager` → Organiza proyecto y estructura carpetas
4. `@video-editor` → Ejecuta edición con FFmpeg + automatización
5. `@quality-reviewer` → QC técnico antes de entrega
6. `@content-creator` → Prepara contenido para redes y blog
7. `@data-analyst` → Reportes y métricas de campañas

## 5. Entregables del Proyecto

1. Brief profesional (BRIEF.md + web + PDF)
2. Sitio web completo multi-página desplegado en GitHub Pages
3. Estructura de agencia operativa con carpetas
4. Configuración de agentes con contexto Dreamscape
5. Pipeline de prospección → edición → entrega
