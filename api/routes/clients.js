const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.get('/', async (req, res, next) => {
  try {
    const clients = await prisma.client.findMany({
      include: { projects: true },
      orderBy: { createdAt: 'desc' },
    });
    const total = clients.length;
    const totalBudget = clients.reduce((sum, c) => sum + (parseFloat(c.budget) || 0), 0);
    res.json({ data: clients, total, totalBudget });
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const client = await prisma.client.findUnique({
      where: { id: req.params.id },
      include: { projects: true },
    });
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json({ data: client });
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, email, company, phone, platform, source, budget, notes, status } = req.body;
    if (!name) return res.status(400).json({ error: 'Client name is required' });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const client = await prisma.client.create({
      data: { name, email, company, phone, platform, source, budget, notes, status: status || 'lead' },
    });
    res.status(201).json({ data: client });
  } catch (err) {
    if (err.code === 'P2002') return res.status(409).json({ error: 'A client with this email already exists' });
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const existing = await prisma.client.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Client not found' });

    const { name, email, company, phone, platform, source, budget, notes, status } = req.body;
    const client = await prisma.client.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(company !== undefined && { company }),
        ...(phone !== undefined && { phone }),
        ...(platform !== undefined && { platform }),
        ...(source !== undefined && { source }),
        ...(budget !== undefined && { budget }),
        ...(notes !== undefined && { notes }),
        ...(status && { status }),
      },
      include: { projects: true },
    });
    res.json({ data: client });
  } catch (err) { next(err); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const existing = await prisma.client.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Client not found' });
    await prisma.client.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (err) { next(err); }
});

module.exports = router;
