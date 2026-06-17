const express = require('express');
const router = express.Router();
const { generateScript, generateTags } = require('./llm');

router.post('/generate-script', async (req, res) => {
  try {
    const { prompt, options } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
    const script = await generateScript(prompt, options);
    res.json({ data: script });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/generate-tags', async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) return res.status(400).json({ error: 'Description is required' });
    const tags = await generateTags(description);
    res.json({ data: tags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
