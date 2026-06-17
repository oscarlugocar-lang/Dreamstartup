module.exports = {
  prices: {
    basic: process.env.STRIPE_PRICE_BASIC || 'price_basic',
    professional: process.env.STRIPE_PRICE_PROFESSIONAL || 'price_professional',
    enterprise: null,
  },
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  successUrl: process.env.SUCCESS_URL || 'https://oscarlugocar-lang.github.io/Dreamstartup/success.html',
  cancelUrl: process.env.CANCEL_URL || 'https://oscarlugocar-lang.github.io/Dreamstartup/precios.html',
};
