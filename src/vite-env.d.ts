/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_APP_NAME?: string;
  readonly VITE_DEBUG?: string;
  readonly VITE_IS_LAB_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
