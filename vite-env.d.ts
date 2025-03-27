/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_ENV?: string;
    // Agregá más variables según necesites
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
