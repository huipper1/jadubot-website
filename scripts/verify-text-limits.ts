import { platformData } from "../src/data/platform-data.js";
import { aiAgentData } from "../src/data/ai-agent-data.js";
import { INDUSTRIES } from "../src/components/routes/industry/industry-data.js";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function checkLimits() {
  console.log("--- Checking Platform Data ---");
  for (const p of platformData) {
    const hWords = countWords(p.heroTitle);
    const dWords = countWords(p.heroDescription);
    const sWords = countWords(p.featuresSectionTitle);
    const subWords = countWords(p.featuresSectionSubtitle);
    console.log(`${p.slug}:`);
    console.log(`  Hero Title (${hWords}w): "${p.heroTitle}"`);
    console.log(`  Hero Desc (${dWords}w): "${p.heroDescription}"`);
    console.log(`  Feat Title (${sWords}w): "${p.featuresSectionTitle}"`);
    console.log(`  Feat Sub (${subWords}w): "${p.featuresSectionSubtitle}"`);
    p.features.forEach((f, i) => {
      const ftw = countWords(f.title);
      const fdw = countWords(f.description);
      if (ftw > 4 || fdw > 14) {
        console.log(`  Feature ${i + 1} EXCEEDS: Title (${ftw}w): "${f.title}" | Desc (${fdw}w): "${f.description}"`);
      }
    });
  }
}

checkLimits();
