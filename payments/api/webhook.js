const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

async function handleWebhook(req, res) {
  let event;
  try {
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      await handleCheckoutCompleted(session);
      break;
    case 'invoice.payment_succeeded':
      await handleInvoicePaid(event.data.object);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object);
      break;
  }

  res.json({ received: true });
}

async function handleCheckoutCompleted(session) {
  console.log(`Checkout completed: ${session.id} for customer ${session.customer}`);
}

async function handleInvoicePaid(invoice) {
  console.log(`Invoice paid: ${invoice.id}`);
}

async function handleSubscriptionUpdated(subscription) {
  console.log(`Subscription updated: ${subscription.id}`);
}

async function handleSubscriptionDeleted(subscription) {
  console.log(`Subscription cancelled: ${subscription.id}`);
}

module.exports = { handleWebhook };
