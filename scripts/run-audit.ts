import { platformData } from "../src/data/platform-data.js";
import { aiAgentData } from "../src/data/ai-agent-data.js";
import { INDUSTRIES } from "../src/components/routes/industry/industry-data.js";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

console.log("=== PLATFORM DATA AUDIT ===");
for (const p of platformData) {
  const fWords = p.features.reduce((acc, f) => acc + countWords(f.title) + countWords(f.description) + (f.bulletPoints ? f.bulletPoints.reduce((bAcc, b) => bAcc + countWords(b), 0) : 0), 0);
  const sWords = p.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0);
  const qWords = (p.faqs || []).reduce((acc, q) => acc + countWords(q.question) + countWords(q.answer), 0);
  console.log(`Platform: ${p.slug} | Hero: ${countWords(p.heroTitle) + countWords(p.heroDescription)} words | Features: ${fWords} words | Steps: ${sWords} words | FAQ: ${qWords} words`);
}

console.log("\n=== AI AGENTS DATA AUDIT ===");
for (const a of aiAgentData) {
  const fWords = a.features.reduce((acc, f) => acc + countWords(f.title) + countWords(f.description) + (f.bulletPoints ? f.bulletPoints.reduce((bAcc, b) => bAcc + countWords(b), 0) : 0), 0);
  const sWords = a.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0);
  const qWords = (a.faqs || []).reduce((acc, q) => acc + countWords(q.question) + countWords(q.answer), 0);
  console.log(`Agent: ${a.slug} | Hero: ${countWords(a.heroTitle) + countWords(a.heroDescription)} words | Features: ${fWords} words | Steps: ${sWords} words | FAQ: ${qWords} words`);
}

console.log("\n=== INDUSTRY DATA AUDIT ===");
for (const ind of INDUSTRIES) {
  const heroWords = countWords(ind.hero.titleStart) + countWords(ind.hero.titleHighlight) + countWords(ind.hero.titleEnd || "") + countWords(ind.hero.subtitle);
  const roiWords = countWords(ind.roi.heading) + countWords(ind.roi.subheading) + countWords(ind.roi.formula) + countWords(ind.roi.exampleMath) + ind.roi.metrics.reduce((acc, m) => acc + countWords(m.label) + countWords(m.detail), 0);
  const scWords = ind.showcases.reduce((acc, s) => acc + countWords(s.title) + countWords(s.subtitle) + countWords(s.problem) + countWords(s.solution) + countWords(s.metrics) + s.benefits.reduce((bAcc, b) => bAcc + countWords(b), 0), 0);
  const wfWords = countWords(ind.workflow.title) + countWords(ind.workflow.description) + ind.workflow.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0);
  const ucWords = ind.useCases.reduce((acc, u) => acc + countWords(u.title) + countWords(u.trigger) + countWords(u.benefit) + u.dialogue.reduce((dAcc, d) => dAcc + countWords(d.message), 0), 0);
  const faqWords = ind.faqs.reduce((acc, f) => acc + countWords(f.question) + countWords(f.answer), 0);
  console.log(`Industry: ${ind.slug} | Hero: ${heroWords} | ROI: ${roiWords} | Showcase: ${scWords} | Workflow: ${wfWords} | UseCases: ${ucWords} | FAQ: ${faqWords}`);
}
