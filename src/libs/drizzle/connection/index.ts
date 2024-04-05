import * as schema from "../models";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});

export const db = drizzle(connection, {
  schema,
});
