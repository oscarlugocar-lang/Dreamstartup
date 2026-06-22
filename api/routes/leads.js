const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

async function checkDb() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch { return false; }
}

router.get('/', async (req, res, next) => {
  try {
    if (!(await checkDb())) {
      return res.json({ data: [], total: 0, totalBudget: 0, source: 'local' });
    }
    const { platform, status } = req.query;
    const where = {};
    if (platform) where.platform = platform;
    if (status) where.status = status;

    const leads = await prisma.client.findMany({
      where: { ...where, status: status || 'lead' },
      orderBy: { createdAt: 'desc' },
    });
    const total = leads.length;
    const totalBudget = leads.reduce((sum, l) => sum + (parseFloat(l.budget) || 0), 0);

    res.json({ data: leads, total, totalBudget });
  } catch (err) { next(err); }
});

router.get('/stats', async (req, res, next) => {
  try {
    if (!(await checkDb())) {
      return res.json({ total: 0, byPlatform: {}, byStatus: {}, totalBudget: 0, source: 'local' });
    }
    const [total, byPlatform, byStatus, allLeads] = await Promise.all([
      prisma.client.count({ where: { status: 'lead' } }),
      prisma.client.groupBy({ by: ['platform'], where: { status: 'lead' }, _count: true }),
      prisma.client.groupBy({ by: ['status'], _count: true }),
      prisma.client.findMany({ where: { status: 'lead' }, select: { budget: true, platform: true } }),
    ]);
    const totalBudget = allLeads.reduce((sum, l) => sum + (parseFloat(l.budget) || 0), 0);

    res.json({
      total,
      byPlatform: byPlatform.reduce((acc, p) => ({ ...acc, [p.platform || 'unknown']: p._count }), {}),
      byStatus: byStatus.reduce((acc, s) => ({ ...acc, [s.status]: s._count }), {}),
      totalBudget,
    });
  } catch (err) { next(err); }
});

module.exports = router;
