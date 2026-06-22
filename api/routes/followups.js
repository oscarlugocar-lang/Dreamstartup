const express = require('express');
const router = express.Router();
const prisma = require('../../prisma');

router.get('/', async (req, res, next) => {
  try {
    const followUps = await prisma.followUp.findMany({ orderBy: { followUpAt: 'asc' } });
    const now = new Date();
    const formatted = followUps.map(f => ({
      ...f,
      daysSinceSent: Math.floor((now - f.sentAt) / (1000 * 60 * 60 * 24)),
      daysUntilFollowUp: Math.ceil((f.followUpAt - now) / (1000 * 60 * 60 * 24)),
      isOverdue: f.followUpAt < now && f.status === 'pending',
      isDueSoon: f.followUpAt > now && (f.followUpAt - now) < (1000 * 60 * 60 * 24),
    }));
    res.json({ data: formatted, total: formatted.length });
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const { clientName, platform, proposalFile, sentAt, followUpAt } = req.body;
    if (!clientName) return res.status(400).json({ error: 'clientName is required' });
    const followUp = await prisma.followUp.create({
      data: {
        clientName,
        platform,
        proposalFile,
        sentAt: sentAt ? new Date(sentAt) : new Date(),
        followUpAt: followUpAt ? new Date(followUpAt) : new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
        status: 'pending',
      },
    });
    res.status(201).json({ data: followUp });
  } catch (err) { next(err); }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { status, notes } = req.body;
    const followUp = await prisma.followUp.update({
      where: { id: req.params.id },
      data: { ...(status && { status }), ...(notes && { notes }) },
    });
    res.json({ data: followUp });
  } catch (err) { next(err); }
});

module.exports = router;
