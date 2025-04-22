import { Memory } from "@mastra/memory";
import { PostgresStore, PgVector } from "@mastra/pg";

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_USE_SSL || false,
};

const host = dbConfig.host;
const port = dbConfig.port;
const user = dbConfig.user;
const database = "workflows_memory";
const password = dbConfig.password;
const connectionString = `postgresql://${user}:${password}@${host}:${port}`;

export const storage = new PostgresStore({
  host,
  port,
  user,
  database,
  password,
});

export const postgresMemory = new Memory({
  storage,
  vector: new PgVector(connectionString),
  options: {
    lastMessages: 10,
    semanticRecall: {
      topK: 3,
      messageRange: 2,
    },
  },
});
