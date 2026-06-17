# Dreamscape — Documentación Técnica

## Arquitectura

```
dreamscape/
├── .github/workflows/     # CI/CD pipelines
├── api/                    # Backend API (Express)
│   ├── routes/
│   ├── middleware/
│   └── openapi.yaml
├── assets/                 # Frontend assets
│   ├── css/
│   ├── js/
│   └── images/
├── auth/                   # Autenticación (NextAuth)
├── ai/                     # AI/ML servicios
├── infra/                  # Infraestructura (Terraform)
├── mobile/                 # App React Native
├── payments/               # Stripe integración
├── video/                  # Pipeline de video
├── tests/                  # Tests de integración
└── memoria/                # Registro diario del proyecto
```

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Backend | Node.js, Express |
| Autenticación | NextAuth.js |
| Pagos | Stripe |
| Base de datos | PostgreSQL + Prisma |
| Infraestructura | Terraform + AWS (S3, CloudFront) |
| CI/CD | GitHub Actions |
| Mobile | React Native + Expo |
| AI/ML | OpenAI API + LangChain |
| Video | HyperFrames |

## Setup Local

```bash
# Clonar
git clone https://github.com/oscarlugocar-lang/Dreamstartup.git
cd Dreamstartup

# Instalar dependencias
npm install

# Variables de entorno
cp .env.example .env
# Editar .env con tus API keys

# Iniciar API
npm start

# Iniciar sitio web
npx http-server . -p 8080
```

## Variables de Entorno

```
# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_BASIC=
STRIPE_PRICE_PROFESSIONAL=

# Auth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Database
DATABASE_URL=

# AI
OPENAI_API_KEY=

# General
NODE_ENV=development
PORT=3001
```

## Deploy

El sitio se deploya automáticamente a GitHub Pages con cada push a `master`.

Para infraestructura AWS:
```bash
cd infra/terraform
terraform init
terraform apply -var="environment=prod"
```

## Tests

```bash
# Backend API tests
npm test

# Stripe tests
cd payments && npm test

# Auth tests
cd auth && npm test

# AI tests
cd ai && npm test
```
