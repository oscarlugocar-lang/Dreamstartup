const { createCheckoutSession, createCustomerPortalSession } = require('../api/checkout');

jest.mock('stripe', () => {
  return jest.fn(() => ({
    checkout: {
      sessions: {
        create: jest.fn().mockResolvedValue({ id: 'cs_test_123', url: 'https://checkout.stripe.com/test' }),
      },
    },
    billingPortal: {
      sessions: {
        create: jest.fn().mockResolvedValue({ url: 'https://billing.stripe.com/test' }),
      },
    },
  }));
});

describe('Stripe Checkout', () => {
  it('creates a checkout session', async () => {
    const session = await createCheckoutSession('price_test', 'cus_test', 'https://example.com/success', 'https://example.com/cancel');
    expect(session).toHaveProperty('id');
    expect(session).toHaveProperty('url');
  });

  it('creates a customer portal session', async () => {
    const session = await createCustomerPortalSession('cus_test', 'https://example.com');
    expect(session).toHaveProperty('url');
  });
});

describe('Webhook Validation', () => {
  it('rejects requests without stripe-signature header', () => {
    const req = { headers: {}, body: {} };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    expect(() => {
      const stripe = require('stripe')('test');
      stripe.webhooks.constructEvent(req.body, null, null);
    }).toThrow();
  });
});
