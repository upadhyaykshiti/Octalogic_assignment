/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // ✅ match .env key
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
