import { platformUpdatedFeatures, aiAgentUpdatedFeatures } from "./update-feature-data.js";

function countWords(str: string): number {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

let failed = false;

console.log("=== Validating Platform Data Rewrites ===");
for (const [slug, data] of Object.entries(platformUpdatedFeatures)) {
  const tWords = countWords(data.featuresSectionTitle);
  const sWords = countWords(data.featuresSectionSubtitle);
  console.log(`\nSlug: ${slug}`);
  console.log(`  Title (${tWords}w): "${data.featuresSectionTitle}"`);
  console.log(`  Sub (${sWords}w): "${data.featuresSectionSubtitle}"`);
  if (tWords > 7) { console.error(`  [ERROR] Title > 7 words!`); failed = true; }
  if (sWords > 16) { console.error(`  [ERROR] Subtitle > 16 words!`); failed = true; }

  data.features.forEach((f, i) => {
    const tw = countWords(f.title);
    const dw = countWords(f.description);
    if (tw > 4 || tw < 2) { console.error(`  [ERROR] Card ${i+1} Title (${tw}w): "${f.title}" outside 2-4 words!`); failed = true; }
    if (dw > 10) { console.error(`  [ERROR] Card ${i+1} Desc (${dw}w): "${f.description}" > 10 words!`); failed = true; }
    console.log(`    Card ${i+1}: (${tw}w) "${f.title}" | (${dw}w) "${f.description}"`);
  });
}

console.log("\n=== Validating AI Agent Data Rewrites ===");
for (const [slug, data] of Object.entries(aiAgentUpdatedFeatures)) {
  const tWords = countWords(data.featuresSectionTitle);
  const sWords = countWords(data.featuresSectionSubtitle);
  console.log(`\nSlug: ${slug}`);
  console.log(`  Title (${tWords}w): "${data.featuresSectionTitle}"`);
  console.log(`  Sub (${sWords}w): "${data.featuresSectionSubtitle}"`);
  if (tWords > 7) { console.error(`  [ERROR] Title > 7 words!`); failed = true; }
  if (sWords > 16) { console.error(`  [ERROR] Subtitle > 16 words!`); failed = true; }

  data.features.forEach((f, i) => {
    const tw = countWords(f.title);
    const dw = countWords(f.description);
    if (tw > 4 || tw < 2) { console.error(`  [ERROR] Card ${i+1} Title (${tw}w): "${f.title}" outside 2-4 words!`); failed = true; }
    if (dw > 10) { console.error(`  [ERROR] Card ${i+1} Desc (${dw}w): "${f.description}" > 10 words!`); failed = true; }
    console.log(`    Card ${i+1}: (${tw}w) "${f.title}" | (${dw}w) "${f.description}"`);
  });
}

if (!failed) {
  console.log("\n>>> ALL 10 SLUGS FULLY COMPLIANT WITH TITLE (<=7w), SUB (<=16w), CARD TITLE (2-4w), CARD DESC (<=10w) <<<");
}
