# Go-Live Checklist — Stripe Payments

## Pre-Producción
- [ ] Crear productos en Stripe Dashboard (Dreamscape Basic €299, Professional €799)
- [ ] Configurar webhook endpoints en Stripe Dashboard
- [ ] Probar checkout con tarjeta de prueba (4242 4242 4242 4242)
- [ ] Verificar emails de confirmación de Stripe

## Producción
- [ ] Cambiar Stripe de modo test → live
- [ ] Actualizar STRIPE_SECRET_KEY en variables de entorno
- [ ] Actualizar STRIPE_WEBHOOK_SECRET
- [ ] Verificar que los Price IDs corresponden a productos live
- [ ] Probar flujo completo: checkout → webhook → database → portal
- [ ] Monitorear logs de webhook por 24h

## Post-Lanzamiento
- [ ] Configurar alertas de fallos de pago
- [ ] Revisar reportes mensuales de ingresos
- [ ] Backup de datos de suscripciones
