# Auth Setup Guide

## Environment Variables
- `GITHUB_CLIENT_ID` — GitHub OAuth App
- `GITHUB_CLIENT_SECRET` — GitHub OAuth App
- `GOOGLE_CLIENT_ID` — Google Cloud Console
- `GOOGLE_CLIENT_SECRET` — Google Cloud Console
- `EMAIL_SERVER` — SMTP server (smtp://user:pass@smtp.example.com:587)
- `EMAIL_FROM` — From address for magic links
- `NEXTAUTH_SECRET` — Random string for JWT encryption
- `NEXTAUTH_URL` — Deployment URL
- `DATABASE_URL` — PostgreSQL connection string

## OAuth Setup
1. GitHub: Settings > Developer Settings > OAuth Apps > New OAuth App
2. Google: Cloud Console > APIs & Services > Credentials > OAuth 2.0 Client
3. Add callback URLs: `https://your-domain.com/api/auth/callback/github`

## Email (Magic Link)
- Configure SMTP provider (SendGrid, Resend, etc.)
- Set `EMAIL_SERVER` and `EMAIL_FROM` in .env
