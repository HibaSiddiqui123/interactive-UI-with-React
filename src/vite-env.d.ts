/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly APP_GITHUB_ACCESS_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }