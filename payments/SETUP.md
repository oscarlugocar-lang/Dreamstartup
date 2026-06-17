# Stripe Setup Guide

## Prerequisites
- Stripe account
- Node.js 18+

## Setup
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and fill values
3. Create products in Stripe Dashboard
4. Run: `node api/checkout.js`

## Environment Variables
- `STRIPE_SECRET_KEY` — from Stripe Dashboard
- `STRIPE_WEBHOOK_SECRET` — from Stripe CLI / Dashboard
- `STRIPE_PRICE_BASIC` — Price ID for Basic plan
- `STRIPE_PRICE_PROFESSIONAL` — Price ID for Professional plan
- `DATABASE_URL` — PostgreSQL connection string

## Stripe Dashboard
1. Go to Stripe Dashboard > Products
2. Create "Dreamscape Basic" (€299/mo) and "Dreamscape Professional" (€799/mo)
3. Copy Price IDs to `.env`

## Webhooks (local dev)
```bash
stripe listen --forward-to localhost:3000/api/webhook
stripe trigger checkout.session.completed
```
