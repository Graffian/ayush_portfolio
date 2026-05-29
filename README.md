# Across — Browser Memory

ChatGPT for your browser history and open tabs. Index, search, and chat with everything you've viewed.

## Description

Chrome extension that continuously indexes open tab content, stores semantic embeddings in PostgreSQL with pgvector, and provides a chat interface for querying viewed tabs using RAG. Works free with Jina AI embeddings and Groq Llama 3, or upgrade to OpenAI/Anthropic.

Tracks tab lifecycle, extracts page content via Mozilla Readability, splits into heading-aware chunks, and stores vector embeddings server-side. Ask natural language questions with source citations.

## Tech Stack

- **Frontend**: TypeScript, React, Tailwind CSS, Mozilla Readability
- **Backend**: Node.js, Express, PostgreSQL, pgvector
- **LLM Providers**: Groq, OpenAI, Anthropic, Hugging Face
- **Embedding Providers**: Jina AI, OpenAI, Hugging Face
- **Infrastructure**: Chrome Extensions API (Manifest V3), Service Workers

[GitHub](https://github.com/Graffian/Across)
