import { aiAgentData } from "../src/data/ai-agent-data.js";

function countWords(str: string | undefined): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

console.log("=== Checking AI Agent Data ===");
for (const a of aiAgentData) {
  const hWords = countWords(a.heroTitle);
  const dWords = countWords(a.heroDescription);
  const fTitleWords = countWords(a.featuresSectionTitle);
  const fSubWords = countWords(a.featuresSectionSubtitle);

  console.log(`\nAgent: ${a.slug}`);
  console.log(`  Hero Title (${hWords}w): "${a.heroTitle}"`);
  console.log(`  Hero Desc (${dWords}w): "${a.heroDescription}"`);
  console.log(`  Feat Title (${fTitleWords}w): "${a.featuresSectionTitle}"`);
  console.log(`  Feat Sub (${fSubWords}w): "${a.featuresSectionSubtitle}"`);

  a.features.forEach((f, i) => {
    const tw = countWords(f.title);
    const dw = countWords(f.description);
    if (tw > 4 || dw > 14) {
      console.log(`  [OVER LIMIT] Feature ${i + 1}: Title (${tw}w) "${f.title}" | Desc (${dw}w) "${f.description}"`);
    }
  });
}
