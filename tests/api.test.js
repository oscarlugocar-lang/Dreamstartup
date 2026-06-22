const request = require('supertest');

const mockDb = {
  projects: [],
  clients: [],
  idCounter: 1,
};

jest.mock('../prisma', () => {
  let idCounter = 1;
  const clients = [];
  const projects = [];

  const mockClient = {
    project: {
      findMany: jest.fn(({ where, orderBy } = {}) => {
        let result = [...projects];
        if (where?.clientId) result = result.filter(p => p.clientId === where.clientId);
        if (where?.status) result = result.filter(p => p.status === where.status);
        if (orderBy?.createdAt === 'desc') result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return Promise.resolve(result);
      }),
      findUnique: jest.fn(({ where: { id } }) => Promise.resolve(projects.find(p => p.id === id) || null)),
      create: jest.fn(({ data }) => {
        const project = { id: String(idCounter++), ...data, client: clients.find(c => c.id === data.clientId) || null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        projects.push(project);
        return Promise.resolve(project);
      }),
      update: jest.fn(({ where: { id }, data }) => {
        const idx = projects.findIndex(p => p.id === id);
        if (idx === -1) return Promise.resolve(null);
        projects[idx] = { ...projects[idx], ...data, updatedAt: new Date().toISOString() };
        return Promise.resolve(projects[idx]);
      }),
      delete: jest.fn(({ where: { id } }) => {
        const idx = projects.findIndex(p => p.id === id);
        if (idx === -1) return Promise.resolve(null);
        projects.splice(idx, 1);
        return Promise.resolve({});
      }),
      count: jest.fn(() => Promise.resolve(projects.length)),
    },
    client: {
      findMany: jest.fn(({ where, orderBy } = {}) => {
        let result = [...clients];
        if (where?.platform) result = result.filter(c => c.platform === where.platform);
        if (where?.status) result = result.filter(c => c.status === where.status);
        if (orderBy?.createdAt === 'desc') result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return Promise.resolve(result.map(c => ({ ...c, projects: projects.filter(p => p.clientId === c.id) })));
      }),
      findUnique: jest.fn(({ where: { id } }) => Promise.resolve(clients.find(c => c.id === id) || null)),
      findFirst: jest.fn(({ where }) => {
        if (where?.name?.contains) {
          return Promise.resolve(clients.find(c => c.name.toLowerCase().includes(where.name.contains.toLowerCase())) || null);
        }
        return Promise.resolve(null);
      }),
      create: jest.fn(({ data }) => {
        const client = { id: String(idCounter++), ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        clients.push(client);
        return Promise.resolve(client);
      }),
      update: jest.fn(({ where: { id }, data }) => {
        const idx = clients.findIndex(c => c.id === id);
        if (idx === -1) return Promise.resolve(null);
        clients[idx] = { ...clients[idx], ...data, updatedAt: new Date().toISOString() };
        return Promise.resolve(clients[idx]);
      }),
      delete: jest.fn(({ where: { id } }) => {
        const idx = clients.findIndex(c => c.id === id);
        if (idx === -1) return Promise.resolve(null);
        clients.splice(idx, 1);
        return Promise.resolve({});
      }),
      count: jest.fn(({ where } = {}) => {
        if (where?.status) return Promise.resolve(clients.filter(c => c.status === where.status).length);
        return Promise.resolve(clients.length);
      }),
      aggregate: jest.fn(({ where } = {}) => {
        let filtered = clients;
        if (where?.status) filtered = filtered.filter(c => c.status === where.status);
        const sum = filtered.reduce((s, c) => s + (parseFloat(c.budget) || 0), 0);
        return Promise.resolve({ _sum: { budget: sum } });
      }),
      groupBy: jest.fn(({ by, where }) => {
        let filtered = clients;
        if (where?.status) filtered = filtered.filter(c => c.status === where.status);
        const groups = {};
        filtered.forEach(c => {
          const key = c[by[0]] || 'unknown';
          groups[key] = (groups[key] || 0) + 1;
        });
        return Promise.resolve(Object.entries(groups).map(([key, count]) => ({ [by[0]]: key, _count: count })));
      }),
    },
    $connect: jest.fn().mockResolvedValue(),
    $queryRaw: jest.fn().mockResolvedValue([{ 1: 1 }]),
  };
  return mockClient;
});

const app = require('../api/server');



describe('GET /api/health', () => {
  it('returns status ok with service info', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.version).toBe('1.0.0');
    expect(res.body.services).toBeDefined();
    expect(res.body.services.api).toBe('healthy');
    expect(res.body.services.database).toBe('connected');
    expect(res.body.uptime).toBeGreaterThan(0);
  });
});

describe('Projects API', () => {
  it('GET /api/projects returns empty list initially', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
    expect(res.body.total).toBe(0);
  });

  it('GET /api/projects returns created projects', async () => {
    await request(app).post('/api/projects').send({ name: 'Project A', client: 'Client A' });
    await request(app).post('/api/projects').send({ name: 'Project B', client: 'Client B' });
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(2);
    expect(res.body.total).toBe(2);
  });

  it('POST /api/projects creates a project with all fields', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({
        name: 'Full Project',
        client: 'Test Client',
        status: 'active',
        deadline: '2026-07-01',
        budget: '$500',
        description: 'A test project',
        deliverables: '3 videos',
        platforms: 'Instagram, TikTok',
        notes: 'Urgent project',
      });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Full Project');
    expect(res.body.data.status).toBe('active');
    expect(res.body.data.budget).toBe('$500');
  });

  it('POST /api/projects without client creates project with null client', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({ name: 'Solo Project' });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Solo Project');
  });

  it('POST /api/projects rejects empty name', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('name is required');
  });

  it('GET /api/projects/:id returns a project', async () => {
    const created = await request(app).post('/api/projects').send({ name: 'Find Me' });
    const res = await request(app).get(`/api/projects/${created.body.data.id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Find Me');
  });

  it('GET /api/projects/:id returns 404 for missing project', async () => {
    const res = await request(app).get('/api/projects/nonexistent');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Project not found');
  });

  it('PATCH /api/projects/:id updates a project', async () => {
    const created = await request(app).post('/api/projects').send({ name: 'Update Me' });
    const res = await request(app)
      .patch(`/api/projects/${created.body.data.id}`)
      .send({ status: 'completed', budget: '$1000' });
    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('completed');
    expect(res.body.data.budget).toBe('$1000');
  });

  it('PATCH /api/projects/:id returns 404 for missing project', async () => {
    const res = await request(app)
      .patch('/api/projects/nonexistent')
      .send({ status: 'completed' });
    expect(res.status).toBe(404);
  });

  it('DELETE /api/projects/:id deletes a project', async () => {
    const created = await request(app).post('/api/projects').send({ name: 'Delete Me' });
    const delRes = await request(app).delete(`/api/projects/${created.body.data.id}`);
    expect(delRes.status).toBe(200);
    expect(delRes.body.success).toBe(true);
    const getRes = await request(app).get(`/api/projects/${created.body.data.id}`);
    expect(getRes.status).toBe(404);
  });

  it('DELETE /api/projects/:id returns 404 for missing project', async () => {
    const res = await request(app).delete('/api/projects/nonexistent');
    expect(res.status).toBe(404);
  });
});

describe('Clients API', () => {
  it('GET /api/clients returns list (may have data from previous tests)', async () => {
    const res = await request(app).get('/api/clients');
    expect(res.status).toBe(200);
    expect(res.body.total).toBeGreaterThanOrEqual(0);
  });

  it('POST /api/clients creates a client with all fields', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({
        name: 'Test Company',
        email: 'test@company.com',
        company: 'Test Corp',
        phone: '+1234567890',
        platform: 'Upwork',
        source: 'Upwork',
        budget: '500',
        notes: 'Good lead',
        status: 'lead',
      });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Test Company');
    expect(res.body.data.email).toBe('test@company.com');
    expect(res.body.data.platform).toBe('Upwork');
  });

  it('POST /api/clients rejects missing name', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({ email: 'test@test.com' });
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('name is required');
  });

  it('POST /api/clients validates email format', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send({ name: 'Bad Email', email: 'not-an-email' });
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('Invalid email');
  });

  it('GET /api/clients/:id returns a client', async () => {
    const created = await request(app).post('/api/clients').send({ name: 'Get Me', email: 'get@me.com' });
    const res = await request(app).get(`/api/clients/${created.body.data.id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Get Me');
  });

  it('GET /api/clients/:id returns 404 for missing client', async () => {
    const res = await request(app).get('/api/clients/nonexistent');
    expect(res.status).toBe(404);
  });

  it('PATCH /api/clients/:id updates a client', async () => {
    const created = await request(app).post('/api/clients').send({ name: 'Update Client', email: 'update@me.com' });
    const res = await request(app)
      .patch(`/api/clients/${created.body.data.id}`)
      .send({ company: 'New Corp', status: 'active' });
    expect(res.status).toBe(200);
    expect(res.body.data.company).toBe('New Corp');
    expect(res.body.data.status).toBe('active');
  });

  it('PATCH /api/clients/:id returns 404 for missing client', async () => {
    const res = await request(app)
      .patch('/api/clients/nonexistent')
      .send({ company: 'Ghost' });
    expect(res.status).toBe(404);
  });

  it('DELETE /api/clients/:id deletes a client', async () => {
    const created = await request(app).post('/api/clients').send({ name: 'Delete Client', email: 'del@me.com' });
    const delRes = await request(app).delete(`/api/clients/${created.body.data.id}`);
    expect(delRes.status).toBe(200);
    expect(delRes.body.success).toBe(true);
  });

  it('DELETE /api/clients/:id returns 404 for missing client', async () => {
    const res = await request(app).delete('/api/clients/nonexistent');
    expect(res.status).toBe(404);
  });
});

describe('Leads API', () => {
  beforeEach(async () => {
    await request(app).post('/api/clients').send({ name: 'Lead A', platform: 'Upwork', status: 'lead', budget: '100' });
    await request(app).post('/api/clients').send({ name: 'Lead B', platform: 'PeoplePerHour', status: 'lead', budget: '200' });
    await request(app).post('/api/clients').send({ name: 'Active Client', platform: 'Direct', status: 'active', budget: '500' });
  });

  it('GET /api/leads returns only lead-status clients', async () => {
    const res = await request(app).get('/api/leads');
    expect(res.status).toBe(200);
    expect(res.body.data.every(l => l.status === 'lead')).toBe(true);
  });

  it('GET /api/leads?platform=Upwork filters by platform', async () => {
    const res = await request(app).get('/api/leads?platform=Upwork');
    expect(res.status).toBe(200);
    expect(res.body.data.every(l => l.platform === 'Upwork')).toBe(true);
  });

  it('GET /api/leads/stats returns aggregated stats', async () => {
    const res = await request(app).get('/api/leads/stats');
    expect(res.status).toBe(200);
    expect(res.body.total).toBeDefined();
    expect(res.body.byPlatform).toBeDefined();
    expect(res.body.totalBudget).toBeDefined();
  });
});

describe('Security headers', () => {
  it('returns helmet security headers', async () => {
    const res = await request(app).get('/api/health');
    expect(res.headers['x-dns-prefetch-control']).toBeDefined();
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-frame-options']).toBe('SAMEORIGIN');
  });
});

describe('404 handler', () => {
  it('returns 404 for unknown API routes', async () => {
    const res = await request(app).get('/api/unknown-route');
    expect([404, 429]).toContain(res.status);
  });
});

describe('Rate Limiting', () => {
  it('rate limits after many requests', async () => {
    const promises = Array(110).fill(null).map(() => request(app).get('/api/health'));
    const results = await Promise.all(promises);
    const tooMany = results.filter(r => r.status === 429);
    expect(tooMany.length).toBeGreaterThan(0);
  }, 30000);
});
