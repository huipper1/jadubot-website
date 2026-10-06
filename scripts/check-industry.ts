import { INDUSTRIES } from "../src/components/routes/industry/industry-data.js";

function countWords(str: string | undefined): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

console.log("=== Checking Industry Data ===");
for (const ind of INDUSTRIES) {
  const heroTitle = `${ind.hero.titleStart} ${ind.hero.titleHighlight} ${ind.hero.titleEnd || ""}`.trim();
  const htWords = countWords(heroTitle);
  const hsWords = countWords(ind.hero.subtitle);
  const wfTitleWords = countWords(ind.workflow.title);
  const wfDescWords = countWords(ind.workflow.description);
  const roiHeadWords = countWords(ind.roi.heading);
  const roiSubWords = countWords(ind.roi.subheading);

  console.log(`\nIndustry: ${ind.slug}`);
  console.log(`  Hero Title (${htWords}w): "${heroTitle}"`);
  console.log(`  Hero Subtitle (${hsWords}w): "${ind.hero.subtitle}"`);
  console.log(`  ROI Heading (${roiHeadWords}w): "${ind.roi.heading}"`);
  console.log(`  Workflow Title (${wfTitleWords}w): "${ind.workflow.title}"`);

  ind.showcases.forEach((sc, i) => {
    const scTW = countWords(sc.title);
    const probW = countWords(sc.problem);
    const solW = countWords(sc.solution);
    console.log(`  Showcase ${i + 1} (${scTW}w): "${sc.title}" | Prob (${probW}w) | Sol (${solW}w)`);
  });
}
