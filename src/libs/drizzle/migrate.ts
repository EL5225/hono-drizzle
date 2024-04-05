import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, connection } from "./connection";

const migrateDb = async () => {
  await migrate(db, {
    migrationsFolder: "src/libs/drizzle/models/migrations",
  });

  await connection.end();
};

migrateDb();
