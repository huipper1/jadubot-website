import fs from "fs";
import { platformUpdatedFeatures, aiAgentUpdatedFeatures } from "./update-feature-data.js";

// 1. Update platform-data.ts
import { platformData } from "../src/data/platform-data.js";

for (const p of platformData) {
  if (platformUpdatedFeatures[p.slug]) {
    p.featuresSectionTitle = platformUpdatedFeatures[p.slug].featuresSectionTitle;
    p.featuresSectionSubtitle = platformUpdatedFeatures[p.slug].featuresSectionSubtitle;
    p.features = platformUpdatedFeatures[p.slug].features;
  }
}

const pContent = `import type { PlatformData } from "@/types/platform";

export const platformData: PlatformData[] = ${JSON.stringify(platformData, null, 2)};

export function getPlatformBySlug(slug: string): PlatformData | undefined {
  return platformData.find((p) => p.slug === slug);
}
`;

fs.writeFileSync("src/data/platform-data.ts", pContent, "utf8");
console.log("Updated platform-data.ts!");

// 2. Update ai-agent-data.ts
import { aiAgentData } from "../src/data/ai-agent-data.js";

for (const a of aiAgentData) {
  if (aiAgentUpdatedFeatures[a.slug]) {
    a.featuresSectionTitle = aiAgentUpdatedFeatures[a.slug].featuresSectionTitle;
    a.featuresSectionSubtitle = aiAgentUpdatedFeatures[a.slug].featuresSectionSubtitle;
    a.features = aiAgentUpdatedFeatures[a.slug].features;
  }
}

const aContent = `import type { AgentData } from "@/types/ai-agent";

export const aiAgentData: AgentData[] = ${JSON.stringify(aiAgentData, null, 2)};

export function getAgentBySlug(slug: string): AgentData | undefined {
  return aiAgentData.find((a) => a.slug === slug);
}
`;

fs.writeFileSync("src/data/ai-agent-data.ts", aContent, "utf8");
console.log("Updated ai-agent-data.ts!");
