import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherAgent } from "./agents";
import { storage } from "./memory/pg";
import { sampleWorkflow } from "./workflows/sampleWorkflow";

export const mastra = new Mastra({
  workflows: { sampleWorkflow },
  agents: { weatherAgent },
  // storage,
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
