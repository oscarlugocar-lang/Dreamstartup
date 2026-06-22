# Dreamscape — Board de Proyectos

> Última actualización: 2026-06-22

## 🎯 Dispatch Queue (Priorizado)
| # | Prioridad | Cliente | Plataforma | Valor | Propuesta | Estado |
|---|-----------|---------|------------|-------|-----------|--------|
| 1 | 🔴 Alta | Brand ropa (foto+video) | PeoplePerHour | $696 | [ver](proposals/2026-06-17-pph-brand-ropa-propuesta.md) | ⏳ Pendiente |
| 2 | 🔴 Alta | Upwork — SaaS Demo Video | Upwork | $25/hr | [ver](proposals/2026-06-17-upwork-saas-demo-propuesta.md) | ⏳ Pendiente |
| 3 | 🟡 Media | Upwork — Reel Editor (12 reels) | Upwork | $400 | [ver](proposals/2026-06-09-upwork-reel-editor-propuesta.md) | ⏳ Pendiente |
| 4 | 🟡 Media | Upwork — True Crime Documentaries | Upwork | $200 | [ver](proposals/2026-06-17-upwork-true-crime-propuesta.md) | ⏳ Pendiente |
| 5 | 🟢 Baja | Upwork — Viral Shorts Editor | Upwork | $20 | [ver](proposals/2026-06-17-upwork-viral-shorts-propuesta.md) | ⏳ Pendiente |

## Leads
| Fecha | Cliente | Servicio | Presupuesto | Estado |
|-------|---------|----------|-------------|--------|
| 2026-06-09 | Upwork — Viral Shorts | Short-form viral editing | $20 fixed | ⏳ Pendiente |
| 2026-06-09 | Upwork — YouTube Editor | YouTube video editing | $100 fixed | ⏳ Pendiente |
| 2026-06-09 | Upwork — SaaS Demo | SaaS demo video | Hourly | ⏳ Pendiente |
| 2026-06-09 | Upwork — Reel Editor (12) | Vertical reel editing | $400 fixed | ⏳ Pendiente |
| 2026-06-09 | PPH — Brand ropa | Marketing + video | $696 fixed | ⏳ Pendiente |
| 2026-06-09 | PPH — Video Editor | Edición general | $100/semana | ⏳ Pendiente |
| 2026-06-09 | Freelancer — NLP Coach | Reels retreat | $75 avg | ⏳ Pendiente |
| 2026-06-09 | Freelancer — Boxing Champ | Promo video evento | $75 avg | ⏳ Pendiente |

## Propuestas
| Fecha | Cliente | Plan | Valor | Estado | Enviada |
|-------|---------|------|-------|--------|---------|
| 2026-06-17 | PPH — Brand ropa (foto+video) | Personalizado | $696 | Lista para enviar | ❌ |
| 2026-06-17 | Upwork — SaaS Demo Video | Hourly ($25/hr) | — | Lista para enviar | ❌ |
| 2026-06-17 | Upwork — Viral Shorts Editor | Prueba | $20 | Lista para enviar | ❌ |
| 2026-06-17 | Upwork — True Crime Documentaries | Edición narrativa | $200 | Lista para enviar | ❌ |
| 2026-06-09 | Upwork — Reel Editor (12 reels) | Básico (por proyecto) | $400 | Lista para enviar | ❌ |

## Plan 15 Días — Progreso
| Día | Área | Estado | Fecha |
|-----|------|--------|-------|
| 1 | DevOps v1 — GH Actions + deploy | ✅ | 2026-06-16 |
| 2 | DevOps v2 — Terraform + AWS infra | ✅ | 2026-06-16 |
| 3 | Stripe — Checkout + suscripciones | ✅ | 2026-06-16 |
| 4 | Stripe — Schema + testing + go-live | ✅ | 2026-06-16 |
| 5 | Auth — NextAuth.js + providers | ✅ | 2026-06-16 |
| 6 | Proposals system — dispatch.md + queue en dashboard | ✅ | 2026-06-17 |
| 7 | Propuestas escritas — 5 propuestas para leads top | ✅ | 2026-06-17 |
| 8 | DB Schema — Prisma + Client/Project models + relaciones | ✅ | 2026-06-22 |
| 9 | DB Migración + seed — schema unificado con 8 leads | ✅ | 2026-06-22 |
| 10 | API routes — proyectos + clientes migrados a Prisma CRUD | ✅ | 2026-06-22 |
| 11 | API leads — /api/leads + /api/leads/stats con filtros | ✅ | 2026-06-22 |
| 12 | Tests API — 28 tests: CRUD, edge cases, rate limiting, security | ✅ | 2026-06-22 |
| 13 | CI/CD — 4 workflows: quality, ci-cd, deploy, security | ✅ | 2026-06-22 |
| 14 | Test suites — auth (4), payments (3), ai (3) — todos pasan | ✅ | 2026-06-22 |
| 15 | Dashboard conectado a API — live data con fallback local | ✅ | 2026-06-22 |

## Proyectos Activos
| Cliente | Proyecto | Inicio | Entrega | Estado |
|---------|----------|--------|---------|--------|
| — | — | — | — | — |

## Mundial 2026
- Dashboard actualizado con calendario de partidos
- Simulación H2H con probabilidades en tiempo real
- Sección "Partidos de Hoy" con auto-actualización cada 5 min
- 48 equipos · 24 partidos · 14 grupos (A-N)
- Ver en: https://oscarlugocar-lang.github.io/web-mundial/

## Métricas Semanales
| Métrica | Valor |
|---------|-------|
| Leads nuevos | 8 |
| Propuestas listas | 5 |
| Propuestas enviadas | 0 (dashboard: marcar manual) |
| Clientes cerrados | 0 |
| Valor total propuestas | $1,316+ |
| Videos entregados | 0 |
| CVs VA creados | 2 (asistente-virtual + oscar-lugo) |
| Plantillas VA | 3 (Upwork perfil, propuesta, cold email) |
| Tests totales | 38 (4 suites: api 28, auth 4, payments 3, ai 3) |
| API status | Express :3001 · Prisma + SQLite · CORS habilitado |
| Dashboard | Conectado a API con fallback a datos locales |
| Deploy API | Dockerfile + Procfile + railway.json listos |
| DB produccion | Railway PostgreSQL (reseau.proxy.rlwy.net) |
| API URL | https://dreamstartup-production.up.railway.app |
| Dashboard API | Apunta a Railway por defecto (con fallback local) |
| Video pipeline | HyperFrames v0.7.0 · Chrome + FFmpeg · render 15s en 34s |
| Intro showreel | `dreamscape-video/` — 4 escenas, logo+tagline+servicios+CTA |
| TTS | ✅ PowerShell SAPI (Helena Desktop ES) · 13.4s · WAV |
| BGM | ✅ FFmpeg ambient drone · 15s · C minor chord + pink noise |
| Plantillas | 3: product-demo, testimonial, social-reel (variables) |
| Dashboard pipeline | ✅ Sección Video Pipeline con templates + render |

## Deploy a Producción
| Archivo | Propósito |
|---------|-----------|
| `Dockerfile` | Build de contenedor Node.js 20 + Prisma |
| `railway.json` | Config para Railway.app |
| `Procfile` | Config para Render/Heroku |
| `.github/workflows/deploy-api.yml` | Auto-deploy en push a master (paths: api/ prisma/ Dockerfile) |

## Cómo Deployar
1. Ir a [Railway.app](https://railway.app) → New Project → Deploy from GitHub repo
2. Conectar repo `oscarlugocar-lang/dreamscape-landing1`
3. Agregar variable `DATABASE_URL=file:./data/prod.db` (persistente)
4. Agregar volume persistente montado en `/app/data/`
5. El `Dockerfile` + `railway.json` se detectan automáticamente

## Pipeline de Video (HyperFrames)
| Componente | Estado |
|------------|--------|
| HyperFrames CLI | ✅ v0.7.0 instalado |
| FFmpeg | ✅ 8.1.1 |
| Chrome headless | ✅ cacheado |
| Intro showreel (15s) | ✅ renderizado — 4 escenas con GSAP |
| TTS + BGM | ✅ Voz en off (Helena ES) + música ambiente |
| Flujo: HTML → lint → validate → inspect → render | ✅ probado |
| Plantillas variables | 3 templates con data-composition-variables |
| Dashboard pipeline | ✅ Sección en dashboard con enlaces |

## Envío de Propuestas
### Prioritarias (5 existentes)
1. Brand ropa — PeoplePerHour ($696) → [propuesta](proposals/2026-06-17-pph-brand-ropa-propuesta.md)
2. SaaS Demo — Upwork ($25/hr) → [propuesta](proposals/2026-06-17-upwork-saas-demo-propuesta.md)
3. Reel Editor — Upwork ($400) → [propuesta](proposals/2026-06-09-upwork-reel-editor-propuesta.md)
4. True Crime — Upwork ($200) → [propuesta](proposals/2026-06-17-upwork-true-crime-propuesta.md)
5. Viral Shorts — Upwork ($20) → [propuesta](proposals/2026-06-17-upwork-viral-shorts-propuesta.md)

### Nuevas (3 creadas hoy)
6. Creator PAK — Upwork ($100) → [propuesta](proposals/2026-06-22-upwork-creator-pak-propuesta.md)
7. NLP Coach Portugal — Freelancer ($75) → [propuesta](proposals/2026-06-22-freelancer-nlp-coach-propuesta.md)
8. Boxing Championship Suiza — Freelancer ($75) → [propuesta](proposals/2026-06-22-freelancer-boxing-champ-propuesta.md)
