const express = require('express');
const router = express.Router();

let clients = [];

router.get('/', (req, res) => {
  res.json({ data: clients, total: clients.length });
});

router.post('/', (req, res) => {
  const { name, email, company } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  const client = {
    id: String(clients.length + 1),
    name,
    email,
    company: company || null,
    createdAt: new Date().toISOString(),
  };
  clients.push(client);
  res.status(201).json({ data: client });
});

module.exports = router;
