const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

class RAGService {
  constructor() {
    this.documents = [];
    this.embeddings = [];
  }

  async addDocument(content, metadata = {}) {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: content,
    });

    this.documents.push({ content, metadata });
    this.embeddings.push(response.data[0].embedding);

    return { id: this.documents.length - 1, content };
  }

  cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (normA * normB);
  }

  async query(question, topK = 3) {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: question,
    });
    const questionEmbedding = response.data[0].embedding;

    const scored = this.embeddings
      .map((emb, i) => ({
        score: this.cosineSimilarity(questionEmbedding, emb),
        ...this.documents[i],
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return scored;
  }

  async answer(question) {
    const context = await this.query(question);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Responde la pregunta basándote únicamente en el contexto proporcionado.' },
        { role: 'user', content: `Contexto:\n${context.map(c => c.content).join('\n\n')}\n\nPregunta: ${question}` },
      ],
      temperature: 0.3,
      max_tokens: 500,
    });

    return {
      answer: completion.choices[0].message.content,
      sources: context.map(c => c.metadata),
    };
  }
}

module.exports = { RAGService };
