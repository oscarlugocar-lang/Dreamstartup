# AI/ML Setup

## Requisitos
- OpenAI API Key
- Node.js 18+

## Variables de entorno
- `OPENAI_API_KEY` — de platform.openai.com/api-keys

## Servicios

### LLM
- `api/llm.js` — Generación de guiones y tags con GPT-4
- Endpoints:
  - `POST /api/ai/generate-script` — Genera guiones para video
  - `POST /api/ai/generate-tags` — Genera tags para contenido

### RAG
- `rag/rag.js` — Retrieval Augmented Generation
- Añade documentos y haz preguntas sobre ellos
- Usa embeddings de OpenAI para búsqueda semántica

## Uso

```javascript
const { generateScript } = require('./api/llm');
const script = await generateScript('Crea un guion para un video de 30s sobre Dreamscape');
```

```javascript
const { RAGService } = require('./rag/rag');
const rag = new RAGService();
await rag.addDocument('Dreamscape es una agencia...', { source: 'brief' });
const answer = await rag.answer('¿Qué es Dreamscape?');
```
