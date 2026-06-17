# Developer Onboarding Guide

## Primeros pasos
1. Clonar el repo
2. Copiar `.env.example` a `.env`
3. Instalar dependencias: `npm install`
4. Iniciar API: `npm run dev`

## Estructura del proyecto
Ver `docs/architecture.md` para la visión general.

## Convenciones

### Commits
- Usar prefijos: `feat:`, `fix:`, `docs:`, `chore:`
- Mantener commits atómicos

### Código
- JavaScript vanilla para frontend
- Node.js + Express para API
- TypeScript para auth y mobile
- Tests obligatorios para nuevas funcionalidades

### Branching
- `master` — producción
- `develop` — integración
- `feature/*` — nuevas funcionalidades

## API Keys necesarias
1. Stripe — Dashboard > Developers > API Keys
2. GitHub OAuth — Settings > Developer Settings
3. Google OAuth — Cloud Console > Credentials
4. OpenAI — platform.openai.com/api-keys
5. Database — PostgreSQL connection string

## Contacto
- Email: latamdreamscape@gmail.com
- WhatsApp: +57 301 182 2651
