import { Workflow } from "@mastra/core/workflows";
import { Agent } from "@mastra/core/agent";
import { Step } from "@mastra/core/workflows";
import { openai } from "@ai-sdk/openai";
import { postgresMemory } from "../memory/pg";

const manageMeetingTypesAgent = new Agent({
  name: "manageMeetingTypesAgent",
  instructions: `
    Say Hi
  `,
  model: openai("gpt-4"),
  memory: postgresMemory,
  tools: {},
});

export const manageMeetingTypes = new Step({
  id: "manageMeetingTypes",
  execute: async ({ context }) => {
    const { emailBody } = context.triggerData;
    const advisor = context.getStepResult("findAdvisor").advisor;

    const result = await manageMeetingTypesAgent.generate([
      `your advisorid is ${advisor.id}`,
      `advisor is ${advisor.name}`,
      `advisor email is ${advisor.email}`,
      emailBody,
    ]);

    return { result: result.text };
  },
});

const sampleWorkflow = new Workflow({
  name: "sampleWorkflow",
});

sampleWorkflow.step(manageMeetingTypes).commit();

export { sampleWorkflow };
