# Día 8 — Backend API REST
**Fecha:** 2026-06-17

## Objetivo
API REST con Express, validación, rate limiting, health check, y documentación OpenAPI.

## Logro
- `api/server.js` — Servidor Express con helmet, cors, rate limiting
- `api/routes/health.js` — Health check con información de servicios
- `api/routes/projects.js` — CRUD de proyectos
- `api/routes/clients.js` — CRUD de clientes con validación de email
- `api/middleware/validate.js` — Middleware de validación
- `api/openapi.yaml` — Documentación OpenAPI 3.0
- `tests/api.test.js` — Tests de integración con supertest
- `package.json` — Scripts de start, dev, test

## Archivos creados
- `api/` (7 archivos)
- `tests/api.test.js`
- `package.json`

## Estado
✅ Completado
