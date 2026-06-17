const request = require('supertest');
const app = require('../api/server');

describe('Health Check', () => {
  it('GET /api/health returns ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('Projects API', () => {
  it('GET /api/projects returns empty list', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it('POST /api/projects creates a project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({ name: 'Test Project', client: 'Test Client' });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Test Project');
  });

  it('POST /api/projects rejects missing fields', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({});
    expect(res.status).toBe(400);
  });
});

describe('Clients API', () => {
  it('POST /api/clients validates email', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({ name: 'Test', email: 'invalid-email' });
    expect(res.status).toBe(400);
  });

  it('POST /api/clients creates a client', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({ name: 'Test Client', email: 'test@example.com' });
    expect(res.status).toBe(201);
  });
});
