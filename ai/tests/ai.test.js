const { RAGService } = require('../rag/rag');

describe('RAG Service', () => {
  let rag;

  beforeEach(() => {
    rag = new RAGService();
  });

  it('should add a document', async () => {
    const doc = await rag.addDocument('Dreamscape es una agencia de edición de video con IA.', { source: 'brief' });
    expect(doc).toHaveProperty('id');
    expect(doc.content).toContain('Dreamscape');
  });

  it('should calculate cosine similarity', () => {
    const vecA = [1, 0, 0];
    const vecB = [1, 0, 0];
    const vecC = [0, 1, 0];

    expect(rag.cosineSimilarity(vecA, vecB)).toBeCloseTo(1, 2);
    expect(rag.cosineSimilarity(vecA, vecC)).toBeCloseTo(0, 2);
  });
});

describe('LLM Service', () => {
  it('should have OpenAI API key configured', () => {
    expect(process.env.OPENAI_API_KEY).toBeDefined();
  });
});
