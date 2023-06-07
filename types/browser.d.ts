/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_APP_ENV: 'development' | 'production' | 'local';
    readonly NEXT_PUBLIC_ORIGIN_URL: string;
    readonly NEXT_PUBLIC_API_BASE: string;
    readonly ZENN_ARTICLES_JSON_URL: string;
    readonly NEWT_CDN_API_BASE: string;
    readonly NEWT_FORM_API_BASE: string;
    readonly NEWT_API_TOKEN: string;
  }
}
