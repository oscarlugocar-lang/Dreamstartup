const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.get('/', async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      include: { client: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: projects, total: projects.length });
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
      include: { client: true },
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ data: project });
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, clientId, client: clientName, status, deadline, budget, description, deliverables, platforms, notes } = req.body;
    if (!name) return res.status(400).json({ error: 'Project name is required' });

    let client;
    if (clientId) {
      client = await prisma.client.findUnique({ where: { id: clientId } });
      if (!client) return res.status(404).json({ error: 'Client not found' });
    } else if (clientName) {
      const existing = await prisma.client.findFirst({
        where: { name: { contains: clientName, mode: 'insensitive' } },
      });
      if (existing) {
        client = existing;
      } else {
        client = await prisma.client.create({ data: { name: clientName } });
      }
    }

    const project = await prisma.project.create({
      data: {
        name,
        clientId: client?.id,
        status: status || 'pending',
        deadline: deadline ? new Date(deadline) : null,
        budget,
        description,
        deliverables,
        platforms,
        notes,
      },
      include: { client: true },
    });
    res.status(201).json({ data: project });
  } catch (err) { next(err); }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const existing = await prisma.project.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Project not found' });

    const { name, status, deadline, budget, description, deliverables, platforms, notes } = req.body;
    const project = await prisma.project.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(status && { status }),
        ...(deadline && { deadline: new Date(deadline) }),
        ...(budget && { budget }),
        ...(description !== undefined && { description }),
        ...(deliverables !== undefined && { deliverables }),
        ...(platforms !== undefined && { platforms }),
        ...(notes !== undefined && { notes }),
      },
      include: { client: true },
    });
    res.json({ data: project });
  } catch (err) { next(err); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const existing = await prisma.project.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Project not found' });
    await prisma.project.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (err) { next(err); }
});

module.exports = router;
