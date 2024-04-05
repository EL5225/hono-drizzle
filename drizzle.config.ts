import type { Config } from "drizzle-kit";

export default {
  schema: "./src/libs/drizzle/models/schema/index.ts",
  out: "./src/libs/drizzle/models/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
