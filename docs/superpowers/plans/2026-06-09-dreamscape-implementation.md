# Dreamscape Agency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Dreamscape agency: brief, multi-page website, folder structure, and agent configuration

**Architecture:** Static multi-page website (HTML/CSS/JS) deployed on GitHub Pages, dual-purpose brief document in Markdown, agency folder structure for operations, agent configs with Dreamscape context

**Tech Stack:** HTML5, CSS3, Vanilla JS, FFmpeg (video), GitHub Pages (hosting)

---

### Task 1: Create Agency Directory Structure

**Files:**
- Create: `C:\Users\oscar\Dreamscape\leads\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\proposals\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\clients\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\deliveries\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\content\social\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\content\blog\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\analytics\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\web\blog\posts\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\web\assets\css\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\web\assets\js\.gitkeep`
- Create: `C:\Users\oscar\Dreamscape\web\assets\images\.gitkeep`

- [ ] **Step 1: Create all directories**

```powershell
$base = "C:\Users\oscar\Dreamscape"
$dirs = @(
    "$base\leads", "$base\proposals", "$base\clients", "$base\deliveries",
    "$base\content\social", "$base\content\blog", "$base\analytics",
    "$base\web\blog\posts", "$base\web\assets\css", "$base\web\assets\js",
    "$base\web\assets\images"
)
foreach ($d in $dirs) { New-Item -ItemType Directory -Path $d -Force }
```

- [ ] **Step 2: Create .gitkeep placeholder files**

```powershell
$base = "C:\Users\oscar\Dreamscape"
$gitkeeps = @(
    "$base\leads\.gitkeep", "$base\proposals\.gitkeep", "$base\clients\.gitkeep",
    "$base\deliveries\.gitkeep", "$base\content\social\.gitkeep",
    "$base\content\blog\.gitkeep", "$base\analytics\.gitkeep",
    "$base\web\blog\posts\.gitkeep", "$base\web\assets\css\.gitkeep",
    "$base\web\assets\js\.gitkeep", "$base\web\assets\images\.gitkeep"
)
foreach ($f in $gitkeeps) { New-Item -ItemType File -Path $f -Force }
```

---

### Task 2: Write BRIEF.md (Dual-Purpose Professional Brief)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\BRIEF.md`

- [ ] **Step 1: Create BRIEF.md with internal section**

```markdown
# Dreamscape — Brief Profesional

> Donde la creatividad humana se encuentra con el poder de la inteligencia artificial

## Información General

| Campo | Detalle |
|-------|---------|
| **Marca** | Dreamscape |
| **Eslogan** | Donde la creatividad humana se encuentra con el poder de la inteligencia artificial |
| **Email** | latamdreamscape@gmail.com |
| **Teléfono** | +57 301 182 2651 |
| **Instagram** | @dreamscape.ai |
| **LinkedIn** | Dreamscape IA |
| **Behance** | Highway43 — Oscar Lugo Productions |
| **Web** | oscarlugocar-lang.github.io/dreamscape-landing1 |
| **Target Geográfico** | LATAM + España |
| **Fundador** | Oscar Lugo |

## Propuesta de Valor

Dreamscape combina edición de video profesional con inteligencia artificial para ofrecer:

- **Automatización Inteligente** — Detección de escenas, corrección de color asistida, estabilización automática, reconocimiento facial
- **Flujo Acelerado** — Búsqueda visual por contenido, sugerencias contextuales, B-roll automático, render optimizado
- **Creatividad Potenciada** — Efectos desde prompts de texto, restauración de video, super-resolución, animación de fotos

## Target de Clientes

1. Creadores de contenido (YouTube, TikTok, Instagram)
2. Startups que necesitan video marketing
3. Agencias que tercerizan edición
4. Empresas que necesitan video corporativo
5. Músicos y artistas (videoclips)

## Planes

| Plan | Precio | Procesamiento | Ideal para |
|------|--------|---------------|------------|
| Básico | €299/mes | 50h/mes | Creadores individuales |
| Profesional | €799/mes | 200h/mes | Agencias y startups |
| Empresa | Personalizado | Ilimitado | Corporaciones |

## Voz y Tono

- **Personalidad:** Innovadora, precisa, confiable
- **Tono:** Profesional pero cercano, entusiasta sin ser estridente
- **Estilo:** Lenguaje claro, jerga técnica cuando suma, evitar tecnicismos innecesarios

---

## ⚙️ Brief Interno — Guía para la Agencia

### Stack Técnico

- **Edición:** FFmpeg (H.264, H.265, VP9, AV1)
- **Automatización:** Python, scripts FFmpeg, Playwright
- **Análisis:** ffprobe, detección de escenas, histogramas
- **Color:** Corrección asistida por IA, LUTs personalizados

### Proceso de Trabajo (Pipeline)

1. **Lead** → @client-hunter busca en Upwork/Fiverr/LinkedIn
2. **Briefing** → Entender necesidad del cliente, alcance, deadlines
3. **Propuesta** → @proposal-writer crea cotización personalizada
4. **Cierre** → Firma y pago inicial
5. **Edición** → @video-editor procesa con FFmpeg + automatizaciones
6. **QC** → @quality-reviewer verifica codec, resolución, audio, sincronía
7. **Entrega** → Export final + reporte QC
8. **Marketing** → @content-creator prepara caso de estudio y posts

### Nomenclatura de Archivos

```
Cliente_Proyecto_Version_YYYY-MM-DD.mp4
Ejemplo: ClienteX_IntroCorp_V2_2026-06-09.mp4
```

### Estructura de Proyecto por Cliente

```
clients/<cliente>/
├── brief.md          # Necesidades específicas del cliente
├── raw/              # Material original recibido
├── projects/         # Archivos de proyecto
├── exports/          # Videos terminados
└── assets/           # Recursos (música, fuentes, gráficos)
```

### Criterios de Calidad (QC Checklist)

- [ ] Resolución correcta según especificación
- [ ] Framerate consistente (sin drops)
- [ ] Codec y bitrate apropiados
- [ ] Sin artefactos visibles
- [ ] Color consistente
- [ ] Transiciones suaves
- [ ] Audio nivel consistente (-14 LUFS)
- [ ] Sin clipping o distorsión
- [ ] Lip sync correcto
- [ ] Formato de archivo correcto
- [ ] Metadatos completos

---

## 📋 Brief Externo — Para Clientes

### ¿Quiénes Somos?

Dreamscape es una agencia de edición de video que combina la precisión humana con el poder de la inteligencia artificial. Creamos contenido visual impactante en tiempo récord, manteniendo calidad de estudio.

### Nuestros Servicios

**1. Automatización Inteligente**
- Detección y corte automático de escenas
- Corrección de color asistida por IA
- Estabilización de video profesional
- Reconocimiento facial y tracking

**2. Flujo de Trabajo Acelerado**
- Edición con tiempos de render reducidos
- Sugerencias de edición contextual
- Generación automática de B-roll
- Optimización para cada plataforma

**3. Creatividad Potenciada**
- Efectos visuales desde descripciones de texto
- Restauración y mejora de video antiguo
- Escalado a 4K/8K con super-resolución
- Animación de fotos estáticas

### ¿Por Qué Dreamscape?

| Beneficio | Descripción |
|-----------|-------------|
| Innovación Constante | Algoritmos actualizados con lo último en IA |
| Velocidad Industrial | Horas de video procesadas en minutos |
| Precisión Profesional | Calidad de estudio con facilidad de uso |
| Seguridad Total | Archivos privados y protegidos |
| Equipo Especializado | Editores + Ingenieros en IA |

### Proceso de Trabajo

```
1. Cuéntanos tu proyecto → 2. Te damos una propuesta → 3. Envías tu material
4. Editamos con IA + criterio humano → 5. Revisas y apruebas → 6. Recibes tu video
```

### Planes y Precios

| Plan | Básico | Profesional | Empresa |
|------|--------|-------------|---------|
| Precio | €299/mes | €799/mes | Personalizado |
| Horas | 50h/mes | 200h/mes | Ilimitado |
| Automatización | ✓ | ✓ | ✓ |
| Análisis | Básico | Avanzado | Premium |
| Soporte | Email | Prioridad | 24/7 |
| Usuarios | 3 | 10 | Ilimitado |

*Prueba gratuita de 14 días disponible — sin tarjeta de crédito*

### Contáctanos

- **Email:** latamdreamscape@gmail.com
- **WhatsApp:** +57 301 182 2651
- **Instagram:** @dreamscape.ai
- **LinkedIn:** Dreamscape IA
- **Portfolio:** behance.net/highway43
```

- [ ] **Step 2: Verify BRIEF.md was created**

Run: `Get-Item "C:\Users\oscar\Dreamscape\BRIEF.md"`
Expected: File exists with content

---

### Task 3: Create CSS Foundation (style.css)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\assets\css\style.css`

- [ ] **Step 1: Write style.css with Dreamscape design system**

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #1a1a2e;
  --accent-violet: #8b5cf6;
  --accent-violet-light: #a78bfa;
  --accent-cyan: #06b6d4;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: #1e293b;
  --gradient-hero: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%);
  --gradient-accent: linear-gradient(135deg, #8b5cf6, #06b6d4);
  --shadow-glow: 0 0 30px rgba(139, 92, 246, 0.15);
  --radius: 12px;
  --radius-lg: 20px;
  --transition: all 0.3s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  min-height: 100vh;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.nav-links { display: flex; gap: 2rem; align-items: center; }

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}

.nav-links a:hover { color: var(--accent-violet-light); }

.nav-cta {
  padding: 0.5rem 1.25rem;
  background: var(--gradient-accent);
  border-radius: 999px;
  color: white !important;
  font-weight: 600;
}

/* Hero */
.hero {
  min-height: 100vh;
  background: var(--gradient-hero);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  top: -200px;
  right: -200px;
}

.hero::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
  bottom: -150px;
  left: -150px;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--accent-violet-light);
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  max-width: 800px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.hero h1 span {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin: 2rem 0;
}

.hero-stat { text-align: center; }

.hero-stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-violet-light);
}

.hero-stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.hero-tags {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

.hero-tag {
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--gradient-accent);
  color: white;
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.25);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent-violet);
  background: rgba(139, 92, 246, 0.05);
}

/* Sections */
section { padding: 5rem 2rem; }

.section-tag {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--accent-violet-light);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
}

.container { max-width: 1200px; margin: 0 auto; }

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  transition: var(--transition);
}

.service-card:hover {
  border-color: var(--accent-violet);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.service-card ul { list-style: none; }

.service-card ul li {
  color: var(--text-secondary);
  padding: 0.4rem 0;
  font-size: 0.9rem;
}

.service-card ul li::before {
  content: '▸ ';
  color: var(--accent-violet);
}

/* Portfolio */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.portfolio-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
}

.portfolio-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.portfolio-thumb {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-card));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.portfolio-info { padding: 1.5rem; }

.portfolio-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.portfolio-info p {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: var(--transition);
}

.pricing-card.featured {
  border-color: var(--accent-violet);
  position: relative;
  transform: scale(1.05);
}

.pricing-card.featured::before {
  content: 'MÁS POPULAR';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-accent);
  padding: 0.25rem 1.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.pricing-card:hover { border-color: var(--accent-violet); box-shadow: var(--shadow-glow); }

.pricing-name {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.pricing-price {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.pricing-price span {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
}

.pricing-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.pricing-features { list-style: none; margin-bottom: 2rem; }

.pricing-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.pricing-features li:last-child { border-bottom: none; }

/* About / Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.feature-card:hover { border-color: var(--accent-violet); }

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Contact */
.contact-section { background: var(--bg-secondary); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value { color: var(--text-secondary); }

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}

.form-group { margin-bottom: 1.5rem; }

.form-group label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: inherit;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-violet);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-group textarea { resize: vertical; min-height: 120px; }

/* Footer */
footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 3rem 2rem 1.5rem;
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand .footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 300px;
}

.footer-col h5 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.footer-col a {
  display: block;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.35rem 0;
  transition: var(--transition);
}

.footer-col a:hover { color: var(--accent-violet-light); }

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-social { display: flex; gap: 1rem; }

.footer-social a {
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition);
}

.footer-social a:hover { color: var(--accent-violet-light); }

/* Page Header */
.page-header {
  padding: 8rem 2rem 4rem;
  text-align: center;
  background: var(--gradient-hero);
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .services-grid,
  .portfolio-grid,
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .pricing-card.featured { transform: none; }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2.5rem; }
  .hero h2 { font-size: 1.2rem; }
  .hero-stats { flex-direction: column; gap: 1.5rem; }
  .hero-tags { flex-wrap: wrap; justify-content: center; }
  .hero-buttons { flex-direction: column; align-items: center; }
  .services-grid,
  .portfolio-grid,
  .features-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .nav-links { display: none; }
  .section-title { font-size: 2rem; }
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate { animation: fadeInUp 0.6s ease forwards; }
```

---

### Task 4: Create JavaScript Foundation (main.js)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\assets\js\main.js`

- [ ] **Step 1: Write main.js**

```javascript
// Navigation scroll effect
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const mobileToggle = document.createElement('button');
  mobileToggle.className = 'mobile-toggle';
  mobileToggle.innerHTML = '☰';
  mobileToggle.style.cssText = 'display:none;background:none;border:none;color:#f8fafc;font-size:1.5rem;cursor:pointer;';

  const navLinks = document.querySelector('.nav-links');
  nav.insertBefore(mobileToggle, navLinks);

  if (window.innerWidth <= 768) {
    mobileToggle.style.display = 'block';
    navLinks.style.display = 'none';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      mobileToggle.style.display = 'block';
    } else {
      mobileToggle.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  });

  mobileToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
      navLinks.style.padding = '1rem 2rem 2rem';
      navLinks.style.borderBottom = '1px solid var(--border)';
    } else {
      navLinks.style.display = 'none';
    }
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .pricing-card, .portfolio-item, .feature-card').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form handling
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = '✓ Mensaje Enviado';
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.textContent = 'Enviar Mensaje';
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }
});
```

---

### Task 5: Build Home Page (index.html)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\index.html`

- [ ] **Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dreamscape — Edición de Video Profesional con IA</title>
  <meta name="description" content="Dreamscape combina edición de video profesional con inteligencia artificial. Automatización, velocidad y creatividad para tu contenido.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-badge">⚡ IA + Edición Profesional</div>
  <h1>Donde la <span>creatividad humana</span> se encuentra con la IA</h1>
  <h2>Automatización, velocidad y creatividad impulsados por inteligencia artificial para llevar tu edición al siguiente nivel</h2>
  <div class="hero-tags">
    <span class="hero-tag">⚡ Automatización</span>
    <span class="hero-tag">🎨 Creatividad</span>
    <span class="hero-tag">🚀 Velocidad</span>
  </div>
  <div class="hero-stats">
    <div class="hero-stat">
      <div class="hero-stat-number">500+</div>
      <div class="hero-stat-label">Videos Editados</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-number">50+</div>
      <div class="hero-stat-label">Clientes</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-number">15min</div>
      <div class="hero-stat-label">Tiempo Promedio</div>
    </div>
  </div>
  <div class="hero-buttons">
    <a href="portfolio.html" class="btn btn-primary">Ver Portfolio →</a>
    <a href="contacto.html" class="btn btn-secondary">Cotizar Ahora</a>
  </div>
</section>

<section id="servicios">
  <div class="container">
    <div class="section-tag">Servicios</div>
    <h2 class="section-title">Triple Poder de la IA</h2>
    <p class="section-subtitle">Automatización, velocidad y creatividad impulsados por inteligencia artificial para llevar tu edición al siguiente nivel.</p>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🤖</div>
        <h3>Automatización Inteligente</h3>
        <ul>
          <li>Detección automática de escenas</li>
          <li>Corrección de color asistida por IA</li>
          <li>Estabilización de video automática</li>
          <li>Reconocimiento facial inteligente</li>
        </ul>
      </div>
      <div class="service-card">
        <div class="service-icon">⚡</div>
        <h3>Flujo de Trabajo Acelerado</h3>
        <ul>
          <li>Búsqueda visual por contenido</li>
          <li>Sugerencias de edición contextual</li>
          <li>Generación automática de B-roll</li>
          <li>Optimización para render rápido</li>
        </ul>
      </div>
      <div class="service-card">
        <div class="service-icon">🎨</div>
        <h3>Creatividad Potenciada</h3>
        <ul>
          <li>Efectos desde prompts de texto</li>
          <li>Restauración de video antiguo</li>
          <li>Super-resolución con IA</li>
          <li>Animación de fotos estáticas</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="nosotros" style="background: var(--bg-secondary);">
  <div class="container">
    <div class="section-tag">Nosotros</div>
    <h2 class="section-title">¿Por Qué Dreamscape?</h2>
    <p class="section-subtitle">Combinamos edición profesional con inteligencia artificial para ofrecer resultados que marcan la diferencia.</p>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h4>Innovación Constante</h4>
        <p>Algoritmos actualizados con lo último en IA</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h4>Velocidad Industrial</h4>
        <p>Horas de video procesadas en minutos</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h4>Precisión Profesional</h4>
        <p>Calidad de estudio con facilidad de uso</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h4>Seguridad Total</h4>
        <p>Archivos privados y protegidos siempre</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h4>Equipo Especializado</h4>
        <p>Editores + Ingenieros en IA</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌎</div>
        <h4>Presencia Global</h4>
        <p>Clientes en LATAM, España y USA</p>
      </div>
    </div>
  </div>
</section>

<section id="precios">
  <div class="container">
    <div class="section-tag">Planes</div>
    <h2 class="section-title">Flexibles para Tu Negocio</h2>
    <p class="section-subtitle">Elige el plan que mejor se adapte a tu volumen de trabajo y necesidades.</p>
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-name">Básico</div>
        <div class="pricing-price">€299<span>/mes</span></div>
        <div class="pricing-desc">Perfecto para empezar</div>
        <ul class="pricing-features">
          <li>50h de procesamiento</li>
          <li>Automatización básica</li>
          <li>Análisis básico</li>
          <li>Soporte email</li>
          <li>3 usuarios</li>
        </ul>
        <a href="contacto.html" class="btn btn-secondary">Elegir Plan</a>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-name">Profesional</div>
        <div class="pricing-price">€799<span>/mes</span></div>
        <div class="pricing-desc">Para agencias y equipos</div>
        <ul class="pricing-features">
          <li>200h de procesamiento</li>
          <li>Automatización avanzada</li>
          <li>Análisis avanzado</li>
          <li>Soporte prioritario</li>
          <li>10 usuarios</li>
        </ul>
        <a href="contacto.html" class="btn btn-primary">Elegir Plan</a>
      </div>
      <div class="pricing-card">
        <div class="pricing-name">Empresa</div>
        <div class="pricing-price">Personalizado</div>
        <div class="pricing-desc">Para grandes volúmenes</div>
        <ul class="pricing-features">
          <li>Procesamiento ilimitado</li>
          <li>Automatización total</li>
          <li>Análisis premium</li>
          <li>Soporte 24/7</li>
          <li>Usuarios ilimitados</li>
        </ul>
        <a href="contacto.html" class="btn btn-secondary">Contactar</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 6: Build Servicios Page (servicios.html)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\servicios.html`

- [ ] **Step 1: Write servicios.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Servicios — Dreamscape IA para Edición de Video</title>
  <meta name="description" content="Servicios de edición de video profesional con IA: automatización inteligente, flujo acelerado y creatividad potenciada.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="page-header">
  <div class="section-tag">Servicios</div>
  <h1>Todo lo que Necesitas para tu Video</h1>
  <p>Desde la captura hasta la entrega final, cubrimos cada etapa con el poder de la inteligencia artificial.</p>
</section>

<section>
  <div class="container">
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🤖</div>
        <h3>Automatización Inteligente</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">Procesa horas de metraje en minutos con detección automática de escenas, corrección de color asistida por IA y estabilización inteligente.</p>
        <ul>
          <li>Detección y corte automático de escenas</li>
          <li>Corrección de color con IA</li>
          <li>Estabilización de video profesional</li>
          <li>Reconocimiento facial y tracking</li>
          <li>Transcripción automática</li>
          <li>Etiquetado inteligente de clips</li>
        </ul>
      </div>
      <div class="service-card">
        <div class="service-icon">⚡</div>
        <h3>Flujo de Trabajo Acelerado</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">Optimiza cada etapa del proceso con herramientas que reducen drásticamente los tiempos de edición y renderizado.</p>
        <ul>
          <li>Búsqueda visual por contenido</li>
          <li>Sugerencias de edición contextual</li>
          <li>Generación automática de B-roll</li>
          <li>Render optimizado (hasta 5x más rápido)</li>
          <li>Exportación multi-plataforma</li>
          <li>Cola de procesamiento por lotes</li>
        </ul>
      </div>
      <div class="service-card">
        <div class="service-icon">🎨</div>
        <h3>Creatividad Potenciada</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">Efectos visuales generados por IA, restauración de material antiguo y animaciones que antes requerían horas de trabajo manual.</p>
        <ul>
          <li>Efectos desde descripciones de texto</li>
          <li>Restauración de video antiguo</li>
          <li>Super-resolución 4K/8K</li>
          <li>Animación de fotos estáticas</li>
          <li>Eliminación de ruido y artefactos</li>
          <li>Color grading cinematográfico</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section style="background: var(--bg-secondary);">
  <div class="container" style="text-align: center;">
    <h2 class="section-title">¿Listo para Transformar tu Contenido?</h2>
    <p class="section-subtitle">Cuéntanos tu proyecto y te daremos una propuesta en 24 horas.</p>
    <a href="contacto.html" class="btn btn-primary" style="margin-top: 1rem;">Solicitar Cotización →</a>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 7: Build Portfolio Page (portfolio.html)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\portfolio.html`

- [ ] **Step 1: Write portfolio.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio — Dreamscape Trabajos</title>
  <meta name="description" content="Portfolio de Dreamscape. Proyectos de edición de video profesional con IA realizados por nuestro equipo, incluyendo Highway43 — Oscar Lugo Productions.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="page-header">
  <div class="section-tag">Portfolio</div>
  <h1>Trabajos Destacados</h1>
  <p>Proyectos realizados por nuestro equipo, incluyendo el talento de <strong>Highway43</strong> — Oscar Lugo Productions.</p>
</section>

<section>
  <div class="container">
    <div class="portfolio-grid">
      <div class="portfolio-item">
        <div class="portfolio-thumb">🎬</div>
        <div class="portfolio-info">
          <h4>Video Corporativo</h4>
          <p>Empresa de tecnología — Brand film con IA</p>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-thumb">🎵</div>
        <div class="portfolio-info">
          <h4>Videoclip Musical</h4>
          <p>Artista independiente — Efectos visuales AI</p>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-thumb">📱</div>
        <div class="portfolio-info">
          <h4>Contenido Redes</h4>
          <p>Influencer — Reels y TikTok automation</p>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-thumb">🎥</div>
        <div class="portfolio-info">
          <h4>Documental Corto</h4>
          <p>Documental 15min — Restauración y color grading</p>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-thumb">📺</div>
        <div class="portfolio-info">
          <h4>Intro Animada</h4>
          <p>Streamer — Motion graphics con IA</p>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-thumb">🏢</div>
        <div class="portfolio-info">
          <h4>Video Institucional</h4>
          <p>Startup — Pitch video con automatización</p>
        </div>
      </div>
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a href="https://behance.net/highway43" target="_blank" class="btn btn-primary">Ver todos en Behance →</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 8: Build Precios Page (precios.html)

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\precios.html`

- [ ] **Step 1: Write precios.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Precios — Dreamscape Planes</title>
  <meta name="description" content="Planes flexibles de edición de video con IA desde €299/mes. Básico, Profesional y Empresa. Prueba gratuita 14 días.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="page-header">
  <div class="section-tag">Planes</div>
  <h1>Inversión Clara, Sin Sorpresas</h1>
  <p>Elige el plan que mejor se adapte a tu volumen de trabajo. Todos incluyen prueba gratuita de 14 días.</p>
</section>

<section>
  <div class="container">
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-name">Básico</div>
        <div class="pricing-price">€299<span>/mes</span></div>
        <div class="pricing-desc">Perfecto para creadores individuales</div>
        <ul class="pricing-features">
          <li>50h de procesamiento mensual</li>
          <li>Automatización básica</li>
          <li>Detección de escenas</li>
          <li>Corrección de color básica</li>
          <li>Soporte por email</li>
          <li>Hasta 3 usuarios</li>
        </ul>
        <a href="contacto.html" class="btn btn-secondary">Comenzar Prueba</a>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem;">14 días gratis. Sin compromiso.</p>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-name">Profesional</div>
        <div class="pricing-price">€799<span>/mes</span></div>
        <div class="pricing-desc">Para agencias y equipos</div>
        <ul class="pricing-features">
          <li>200h de procesamiento mensual</li>
          <li>Automatización avanzada</li>
          <li>IA generativa + efectos</li>
          <li>Color grading profesional</li>
          <li>Soporte prioritario</li>
          <li>Hasta 10 usuarios</li>
        </ul>
        <a href="contacto.html" class="btn btn-primary">Comenzar Prueba</a>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem;">14 días gratis. Sin compromiso.</p>
      </div>
      <div class="pricing-card">
        <div class="pricing-name">Empresa</div>
        <div class="pricing-price">Personalizado</div>
        <div class="pricing-desc">Para grandes volúmenes</div>
        <ul class="pricing-features">
          <li>Procesamiento ilimitado</li>
          <li>Todas las funciones</li>
          <li>API y automatización total</li>
          <li>Análisis y reportes premium</li>
          <li>Soporte 24/7 dedicado</li>
          <li>Usuarios y proyectos ilimitados</li>
        </ul>
        <a href="contacto.html" class="btn btn-secondary">Contactar</a>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem;">Solicita una demo personalizada.</p>
      </div>
    </div>
  </div>
</section>

<section style="background: var(--bg-secondary);">
  <div class="container">
    <h2 class="section-title">Preguntas Frecuentes</h2>
    <div style="max-width: 700px; margin: 0 auto;">
      <div style="padding: 1.5rem 0; border-bottom: 1px solid var(--border);">
        <h4 style="margin-bottom: 0.5rem;">¿Cómo funciona la prueba gratuita?</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Regístrate y obtén 14 días de acceso completo al plan Profesional. Sin tarjeta de crédito. Cancela cuando quieras.</p>
      </div>
      <div style="padding: 1.5rem 0; border-bottom: 1px solid var(--border);">
        <h4 style="margin-bottom: 0.5rem;">¿Qué significa "horas de procesamiento"?</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Es el tiempo total de metraje que procesamos por ti. Si tienes 50 horas de video raw, las procesamos en ese plan.</p>
      </div>
      <div style="padding: 1.5rem 0; border-bottom: 1px solid var(--border);">
        <h4 style="margin-bottom: 0.5rem;">¿Puedo cambiar de plan?</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Sí, puedes subir o bajar de plan en cualquier momento. El cambio se aplica al siguiente ciclo de facturación.</p>
      </div>
      <div style="padding: 1.5rem 0;">
        <h4 style="margin-bottom: 0.5rem;">¿Qué formatos aceptan?</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Todos los formatos comunes: MP4, MOV, AVI, MKV, WebM. También aceptamos archivos de proyecto de Premiere, DaVinci y Final Cut.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 9: Build Contacto + Brief Cliente Pages

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\contacto.html`
- Create: `C:\Users\oscar\Dreamscape\web\brief-cliente.html`

- [ ] **Step 1: Write contacto.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto — Dreamscape</title>
  <meta name="description" content="Contacta con Dreamscape. Cotiza tu proyecto de edición de video con IA. WhatsApp, email y formulario.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="page-header">
  <div class="section-tag">Contacto</div>
  <h1>Conecta con Nosotros</h1>
  <p>Estamos listos para transformar tu flujo de trabajo. Háblanos de tu proyecto.</p>
</section>

<section class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <div>
        <div class="contact-info-item">
          <div class="contact-icon">📧</div>
          <div>
            <div class="contact-label">Email</div>
            <div class="contact-value"><a href="mailto:latamdreamscape@gmail.com" style="color: var(--accent-violet-light); text-decoration: none;">latamdreamscape@gmail.com</a></div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon">📱</div>
          <div>
            <div class="contact-label">WhatsApp</div>
            <div class="contact-value"><a href="https://wa.me/573011822651" style="color: var(--accent-violet-light); text-decoration: none;">+57 301 182 2651</a></div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon">📸</div>
          <div>
            <div class="contact-label">Instagram</div>
            <div class="contact-value"><a href="https://instagram.com/dreamscape.ai" target="_blank" style="color: var(--accent-violet-light); text-decoration: none;">@dreamscape.ai</a></div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon">💼</div>
          <div>
            <div class="contact-label">LinkedIn</div>
            <div class="contact-value"><a href="https://linkedin.com/company/dreamscape" target="_blank" style="color: var(--accent-violet-light); text-decoration: none;">Dreamscape IA</a></div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon">🌐</div>
          <div>
            <div class="contact-label">Web</div>
            <div class="contact-value">oscarlugocar-lang.github.io/dreamscape-landing1</div>
          </div>
        </div>
        <div style="margin-top: 2rem; text-align: center;">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://oscarlugocar-lang.github.io/dreamscape-landing1/" alt="QR Dreamscape" style="border-radius: var(--radius);">
          <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.5rem;">Escanea para ver el sitio</p>
        </div>
      </div>
      <div class="contact-form">
        <h3 style="margin-bottom: 1.5rem;">Solicita una Cotización</h3>
        <form>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" required placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required placeholder="tu@email.com">
          </div>
          <div class="form-group">
            <label for="service">Servicio de Interés</label>
            <select id="service">
              <option>Automatización Inteligente</option>
              <option>Flujo de Trabajo Acelerado</option>
              <option>Creatividad Potenciada</option>
              <option>Plan Completo</option>
              <option>Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Cuéntanos tu Proyecto</label>
            <textarea id="message" required placeholder="Describe tu proyecto, duración del video, plazo deseado..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; border: none; cursor: pointer;">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write brief-cliente.html** (same nav/footer as other pages, embed the brief content)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brief Cliente — Dreamscape</title>
  <meta name="description" content="Brief profesional de Dreamscape. Conoce nuestros servicios, planes y proceso de trabajo.">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .brief-content { max-width: 800px; margin: 0 auto; }
    .brief-content h2 { margin-top: 3rem; margin-bottom: 1rem; font-size: 1.75rem; }
    .brief-content h3 { margin-top: 2rem; margin-bottom: 0.75rem; color: var(--accent-violet-light); }
    .brief-content p, .brief-content li { color: var(--text-secondary); line-height: 1.7; }
    .brief-content ul, .brief-content ol { margin: 1rem 0; padding-left: 1.5rem; }
    .brief-content li { margin-bottom: 0.5rem; }
    .brief-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
    .brief-content th, .brief-content td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid var(--border); }
    .brief-content th { color: var(--accent-violet-light); font-weight: 600; }
    .brief-content td { color: var(--text-secondary); }
    .brief-cta { text-align: center; margin: 3rem 0; padding: 2rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); }
  </style>
</head>
<body>

<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>

<section class="page-header">
  <div class="section-tag">Brief</div>
  <h1>Dreamscape — Brief Profesional</h1>
  <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial</p>
</section>

<section>
  <div class="container brief-content">
    <h2>¿Quiénes Somos?</h2>
    <p>Dreamscape es una agencia de edición de video que combina la precisión humana con el poder de la inteligencia artificial. Creamos contenido visual impactante en tiempo récord, manteniendo calidad de estudio.</p>

    <h2>Nuestros Servicios</h2>

    <h3>🤖 Automatización Inteligente</h3>
    <ul>
      <li>Detección y corte automático de escenas</li>
      <li>Corrección de color asistida por IA</li>
      <li>Estabilización de video profesional</li>
      <li>Reconocimiento facial y tracking</li>
    </ul>

    <h3>⚡ Flujo de Trabajo Acelerado</h3>
    <ul>
      <li>Edición con tiempos de render reducidos</li>
      <li>Sugerencias de edición contextual</li>
      <li>Generación automática de B-roll</li>
      <li>Optimización para cada plataforma</li>
    </ul>

    <h3>🎨 Creatividad Potenciada</h3>
    <ul>
      <li>Efectos visuales desde descripciones de texto</li>
      <li>Restauración y mejora de video antiguo</li>
      <li>Escalado a 4K/8K con super-resolución</li>
      <li>Animación de fotos estáticas</li>
    </ul>

    <h2>¿Por Qué Dreamscape?</h2>
    <table>
      <tr><th>Beneficio</th><th>Descripción</th></tr>
      <tr><td>Innovación Constante</td><td>Algoritmos actualizados con lo último en IA</td></tr>
      <tr><td>Velocidad Industrial</td><td>Horas de video procesadas en minutos</td></tr>
      <tr><td>Precisión Profesional</td><td>Calidad de estudio con facilidad de uso</td></tr>
      <tr><td>Seguridad Total</td><td>Archivos privados y protegidos</td></tr>
      <tr><td>Equipo Especializado</td><td>Editores + Ingenieros en IA</td></tr>
    </table>

    <h2>Proceso de Trabajo</h2>
    <ol>
      <li><strong>Cuéntanos tu proyecto</strong> — Háblanos de tus necesidades</li>
      <li><strong>Te damos una propuesta</strong> — Presupuesto y plazo en 24h</li>
      <li><strong>Envías tu material</strong> — Sube tu metraje de forma segura</li>
      <li><strong>Editamos</strong> — IA + criterio humano para el mejor resultado</li>
      <li><strong>Revisas y apruebas</strong> — Cambios incluidos</li>
      <li><strong>Recibes tu video</strong> — Formato optimizado para tu plataforma</li>
    </ol>

    <h2>Planes y Precios</h2>
    <table>
      <tr><th>Plan</th><th>Básico</th><th>Profesional</th><th>Empresa</th></tr>
      <tr><td>Precio</td><td>€299/mes</td><td>€799/mes</td><td>Personalizado</td></tr>
      <tr><td>Horas</td><td>50h/mes</td><td>200h/mes</td><td>Ilimitado</td></tr>
      <tr><td>Automatización</td><td>✓</td><td>✓</td><td>✓</td></tr>
      <tr><td>Análisis</td><td>Básico</td><td>Avanzado</td><td>Premium</td></tr>
      <tr><td>Soporte</td><td>Email</td><td>Prioridad</td><td>24/7</td></tr>
      <tr><td>Usuarios</td><td>3</td><td>10</td><td>Ilimitado</td></tr>
    </table>

    <div class="brief-cta">
      <p style="font-size: 1.25rem; margin-bottom: 1.5rem; color: var(--text-primary);"><strong>¿Listo para empezar?</strong></p>
      <p style="margin-bottom: 1.5rem;">Prueba gratuita de 14 días disponible — sin tarjeta de crédito</p>
      <a href="contacto.html" class="btn btn-primary">Solicitar Cotización →</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>

<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 10: Build Blog + Caso de Estudio Pages

**Files:**
- Create: `C:\Users\oscar\Dreamscape\web\blog\index.html`
- Create: `C:\Users\oscar\Dreamscape\web\caso-de-estudio.html`

- [ ] **Step 1: Write blog/index.html** (same nav/footer pattern)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog — Dreamscape</title>
  <meta name="description" content="Blog de Dreamscape. Artículos sobre edición de video, IA, automatización y marketing de contenido.">
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .blog-list { max-width: 800px; margin: 0 auto; }
    .blog-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; margin-bottom: 1.5rem; transition: var(--transition); }
    .blog-card:hover { border-color: var(--accent-violet); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
    .blog-date { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; }
    .blog-card h3 { margin-bottom: 0.75rem; }
    .blog-card h3 a { color: var(--text-primary); text-decoration: none; }
    .blog-card h3 a:hover { color: var(--accent-violet-light); }
    .blog-card p { color: var(--text-secondary); font-size: 0.9rem; }
    .blog-tag { display: inline-block; padding: 0.2rem 0.75rem; background: rgba(139, 92, 246, 0.1); border-radius: 999px; font-size: 0.75rem; color: var(--accent-violet-light); margin-top: 0.75rem; }
  </style>
</head>
<body>
<nav>
  <a href="../index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="../index.html">Inicio</a>
    <a href="../servicios.html">Servicios</a>
    <a href="../portfolio.html">Portfolio</a>
    <a href="../precios.html">Precios</a>
    <a href="../contacto.html">Contacto</a>
    <a href="../contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>
<section class="page-header">
  <div class="section-tag">Blog</div>
  <h1>Contenido y Recursos</h1>
  <p>Tutoriales, guías y análisis sobre edición de video con inteligencia artificial.</p>
</section>
<section>
  <div class="container blog-list">
    <div class="blog-card">
      <div class="blog-date">9 junio, 2026</div>
      <h3><a href="#">Cómo la IA está transformando la edición de video en 2026</a></h3>
      <p>Descubre las tendencias más importantes en edición de video con inteligencia artificial y cómo están cambiando la industria.</p>
      <span class="blog-tag">IA</span>
      <span class="blog-tag">Tendencias</span>
    </div>
    <div class="blog-card">
      <div class="blog-date">2 junio, 2026</div>
      <h3><a href="#">Guía para crear contenido viral con automatización de video</a></h3>
      <p>Aprende a usar herramientas de automatización para producir contenido optimizado para TikTok, Reels y Shorts.</p>
      <span class="blog-tag">Automatización</span>
      <span class="blog-tag">Redes</span>
    </div>
    <div class="blog-card">
      <div class="blog-date">26 mayo, 2026</div>
      <h3><a href="#">Restauración de video antiguo con super-resolución IA</a></h3>
      <p>Cómo recuperar material de archivo y mejorar su calidad hasta 4K usando técnicas de super-resolución.</p>
      <span class="blog-tag">Restauración</span>
      <span class="blog-tag">4K</span>
    </div>
  </div>
</section>
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="../servicios.html">Automatización</a>
      <a href="../servicios.html">Flujo Acelerado</a>
      <a href="../servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="../portfolio.html">Portfolio</a>
      <a href="../precios.html">Precios</a>
      <a href="../contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write caso-de-estudio.html** (template)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Caso de Estudio — Dreamscape</title>
  <meta name="description" content="Caso de estudio de Dreamscape. Resultados reales de edición de video con IA.">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .case-study { max-width: 800px; margin: 0 auto; }
    .case-study h2 { margin-top: 3rem; margin-bottom: 1rem; }
    .case-study p, .case-study li { color: var(--text-secondary); line-height: 1.7; }
    .case-study ul { margin: 1rem 0; padding-left: 1.5rem; }
    .case-study li { margin-bottom: 0.5rem; }
    .case-results { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0; }
    .case-result { text-align: center; padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); }
    .case-result-number { font-size: 2rem; font-weight: 700; color: var(--accent-violet-light); }
    .case-result-label { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem; }
  </style>
</head>
<body>
<nav>
  <a href="index.html" class="nav-brand">DREAMSCAPE</a>
  <div class="nav-links">
    <a href="index.html">Inicio</a>
    <a href="servicios.html">Servicios</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="precios.html">Precios</a>
    <a href="contacto.html">Contacto</a>
    <a href="contacto.html" class="nav-cta">Cotizar</a>
  </div>
</nav>
<section class="page-header">
  <div class="section-tag">Caso de Estudio</div>
  <h1>Nombre del Cliente</h1>
  <p>Breve descripción del proyecto y los resultados obtenidos.</p>
</section>
<section>
  <div class="container case-study">
    <h2>El Desafío</h2>
    <p>Describe el problema o necesidad del cliente. ¿Qué buscaban lograr? ¿Cuáles eran sus limitaciones (tiempo, presupuesto, recursos)?</p>

    <h2>La Solución</h2>
    <p>Explica cómo Dreamscape abordó el proyecto. ¿Qué servicios se utilizaron? ¿Cómo la IA aceleró el proceso?</p>

    <div class="case-results">
      <div class="case-result">
        <div class="case-result-number">-60%</div>
        <div class="case-result-label">Tiempo de edición</div>
      </div>
      <div class="case-result">
        <div class="case-result-number">4.2x</div>
        <div class="case-result-label">Más engagement</div>
      </div>
      <div class="case-result">
        <div class="case-result-number">€X</div>
        <div class="case-result-label">Ahorro vs método tradicional</div>
      </div>
    </div>

    <h2>Resultados</h2>
    <ul>
      <li>Resultado clave 1</li>
      <li>Resultado clave 2</li>
      <li>Resultado clave 3</li>
    </ul>

    <div style="text-align: center; margin: 3rem 0;">
      <a href="contacto.html" class="btn btn-primary">¿Quieres resultados similares? →</a>
    </div>
  </div>
</section>
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">DREAMSCAPE</div>
      <p>Donde la creatividad humana se encuentra con el poder de la inteligencia artificial.</p>
    </div>
    <div class="footer-col">
      <h5>Servicios</h5>
      <a href="servicios.html">Automatización</a>
      <a href="servicios.html">Flujo Acelerado</a>
      <a href="servicios.html">Creatividad IA</a>
    </div>
    <div class="footer-col">
      <h5>Compañía</h5>
      <a href="portfolio.html">Portfolio</a>
      <a href="precios.html">Precios</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h5>Legal</h5>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dreamscape. Todos los derechos reservados.</span>
    <div class="footer-social">
      <a href="https://instagram.com/dreamscape.ai" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/dreamscape" target="_blank">LinkedIn</a>
      <a href="https://behance.net/highway43" target="_blank">Behance</a>
    </div>
  </div>
</footer>
<script src="assets/js/main.js"></script>
</body>
</html>
```

---

### Task 11: Create board.md

**Files:**
- Create: `C:\Users\oscar\Dreamscape\board.md`

- [ ] **Step 1: Write board.md**

```markdown
# Dreamscape — Board de Proyectos

> Última actualización: 2026-06-09

## Leads
| Fecha | Cliente | Servicio | Presupuesto | Estado |
|-------|---------|----------|-------------|--------|
| — | — | — | — | Sin leads aún |

## Propuestas
| Fecha | Cliente | Plan | Valor | Estado |
|-------|---------|------|-------|--------|
| — | — | — | — | Sin propuestas aún |

## Proyectos Activos
| Cliente | Proyecto | Inicio | Entrega | Estado |
|---------|----------|--------|---------|--------|
| — | — | — | — | — |

## Métricas Semanales
| Métrica | Valor |
|---------|-------|
| Leads nuevos | 0 |
| Propuestas enviadas | 0 |
| Clientes cerrados | 0 |
| Ingresos estimados | €0 |
| Videos entregados | 0 |
```

---

### Task 12: Verify Complete File Structure

**Files:**
- Check: full directory tree

- [ ] **Step 1: Verify all files exist**

```powershell
Get-ChildItem -Path "C:\Users\oscar\Dreamscape" -Recurse -File | ForEach-Object { $_.FullName }
```

Expected output lists all created files: BRIEF.md, board.md, web/index.html, web/servicios.html, web/portfolio.html, web/precios.html, web/contacto.html, web/brief-cliente.html, web/blog/index.html, web/caso-de-estudio.html, web/assets/css/style.css, web/assets/js/main.js, all .gitkeep files
