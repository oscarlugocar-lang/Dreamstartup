const express = require('express');
const router = express.Router();

let projects = [];

router.get('/', (req, res) => {
  res.json({ data: projects, total: projects.length });
});

router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json({ data: project });
});

router.post('/', (req, res) => {
  const { name, client, status, deadline } = req.body;
  if (!name || !client) {
    return res.status(400).json({ error: 'Name and client are required' });
  }
  const project = {
    id: String(projects.length + 1),
    name,
    client,
    status: status || 'pending',
    deadline: deadline || null,
    createdAt: new Date().toISOString(),
  };
  projects.push(project);
  res.status(201).json({ data: project });
});

router.patch('/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  Object.assign(project, req.body, { id: project.id });
  res.json({ data: project });
});

router.delete('/:id', (req, res) => {
  const idx = projects.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Project not found' });
  projects.splice(idx, 1);
  res.json({ success: true });
});

module.exports = router;
