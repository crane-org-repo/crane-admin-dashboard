export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_USER: string;
      ENV: "test" | "dev" | "prod";
      BASE_PATH: string;
      APPLICANTS_PATH: string;
      ACCESS_TOKEN: string;
    }
  }
}
