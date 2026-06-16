# Día 5 — Auth Skill
**Fecha:** 2026-06-16

## Objetivo
NextAuth.js + providers (GitHub/Google/Email) + middleware + session management.

## Logro
- Config NextAuth.js con 3 providers (GitHub, Google, Email Magic Link)
- JWT strategy con callbacks (role + id en token/session)
- Middleware de protección de rutas (públicas, autenticadas, admin)
- Prisma schema para Auth (Account, Session, User, VerificationToken)
- Página de login con botones OAuth + Magic Link
- Tests de autenticación y autorización

## Archivos creados
- `auth/auth.ts` — Config NextAuth
- `auth/middleware.ts` — Route protection
- `auth/prisma/schema.prisma` — User/session models
- `auth/app/auth/login/page.tsx` — Login UI
- `auth/app/api/auth/[...nextauth]/route.ts` — API handlers
- `auth/lib/prisma.ts` — Prisma client singleton
- `auth/tests/auth.test.js` — Tests
- `auth/SETUP.md` — Guía de configuración

## Estado
✅ Completado
