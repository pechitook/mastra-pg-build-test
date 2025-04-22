import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherAgent } from "./agents";
import { storage } from "./memory/pg";
import { weatherWorkflow } from "./workflows";

export const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
  storage,
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
