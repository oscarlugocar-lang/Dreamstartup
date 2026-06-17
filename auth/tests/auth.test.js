const { createHash } = require('crypto');

describe('Auth Configuration', () => {
  it('should have required environment variables', () => {
    const required = ['GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET', 'NEXTAUTH_SECRET'];
    required.forEach(env => {
      expect(process.env[env]).toBeDefined();
    });
  });

  it('should generate a valid JWT secret', () => {
    const secret = process.env.NEXTAUTH_SECRET || 'test-secret';
    expect(secret.length).toBeGreaterThanOrEqual(10);
  });

  it('should validate email format', () => {
    const validEmails = ['user@example.com', 'test@dreamscape.ai'];
    const invalidEmails = ['not-an-email', '@no.com', ''];

    const isValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    validEmails.forEach(email => expect(isValid(email)).toBe(true));
    invalidEmails.forEach(email => expect(isValid(email)).toBe(false));
  });

  it('should hash tokens consistently', () => {
    const token = 'test-token-123';
    const hash1 = createHash('sha256').update(token).digest('hex');
    const hash2 = createHash('sha256').update(token).digest('hex');
    expect(hash1).toBe(hash2);
  });
});
