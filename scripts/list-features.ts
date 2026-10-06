import { platformData } from "../src/data/platform-data.js";
import { aiAgentData } from "../src/data/ai-agent-data.js";

console.log("=== Platform Slugs ===");
for (const p of platformData) {
  console.log(`\nSlug: ${p.slug}`);
  console.log(`  Title: "${p.featuresSectionTitle}"`);
  console.log(`  Sub: "${p.featuresSectionSubtitle}"`);
  p.features.forEach((f, i) => console.log(`    [${i+1}] ${f.iconName} | "${f.title}" | "${f.description}"`));
}

console.log("\n=== AI Agent Slugs ===");
for (const a of aiAgentData) {
  console.log(`\nSlug: ${a.slug}`);
  console.log(`  Title: "${a.featuresSectionTitle}"`);
  console.log(`  Sub: "${a.featuresSectionSubtitle}"`);
  a.features.forEach((f, i) => console.log(`    [${i+1}] ${f.iconName} | "${f.title}" | "${f.description}"`));
}
