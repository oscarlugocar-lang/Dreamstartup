const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateScript(prompt, options = {}) {
  const { temperature = 0.7, maxTokens = 1000 } = options;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Eres un asistente experto en creación de contenido para video. Genera guiones claros, estructurados y atractivos.' },
      { role: 'user', content: prompt },
    ],
    temperature,
    max_tokens: maxTokens,
  });

  return response.choices[0].message.content;
}

async function generateTags(description) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Genera 5 tags relevantes separados por coma para el siguiente contenido.' },
      { role: 'user', content: description },
    ],
    temperature: 0.3,
    max_tokens: 100,
  });

  return response.choices[0].message.content.split(',').map(t => t.trim());
}

module.exports = { generateScript, generateTags, openai };
