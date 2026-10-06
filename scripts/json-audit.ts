import { platformData } from "../src/data/platform-data.js";
import { aiAgentData } from "../src/data/ai-agent-data.js";
import { INDUSTRIES } from "../src/components/routes/industry/industry-data.js";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

const audit = {
  platforms: platformData.map(p => ({
    slug: p.slug,
    heroTitle: { text: p.heroTitle, words: countWords(p.heroTitle) },
    heroDescription: { text: p.heroDescription, words: countWords(p.heroDescription) },
    featuresTitle: { text: p.featuresSectionTitle, words: countWords(p.featuresSectionTitle) },
    featuresSubtitle: { text: p.featuresSectionSubtitle, words: countWords(p.featuresSectionSubtitle) },
    featuresCount: p.features.length,
    featuresTotalWords: p.features.reduce((acc, f) => acc + countWords(f.title) + countWords(f.description) + (f.bulletPoints?.reduce((b, c) => b + countWords(c), 0) || 0), 0),
    stepsCount: p.steps.length,
    stepsTotalWords: p.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0),
    faqsCount: p.faqs?.length || 0,
    faqsTotalWords: p.faqs?.reduce((acc, q) => acc + countWords(q.question) + countWords(q.answer), 0) || 0
  })),
  aiAgents: aiAgentData.map(a => ({
    slug: a.slug,
    heroTitle: { text: a.heroTitle, words: countWords(a.heroTitle) },
    heroDescription: { text: a.heroDescription, words: countWords(a.heroDescription) },
    featuresTitle: { text: a.featuresSectionTitle, words: countWords(a.featuresSectionTitle) },
    featuresSubtitle: { text: a.featuresSectionSubtitle, words: countWords(a.featuresSectionSubtitle) },
    featuresCount: a.features.length,
    featuresTotalWords: a.features.reduce((acc, f) => acc + countWords(f.title) + countWords(f.description) + (f.bulletPoints?.reduce((b, c) => b + countWords(c), 0) || 0), 0),
    stepsCount: a.steps.length,
    stepsTotalWords: a.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0),
    faqsCount: a.faqs?.length || 0,
    faqsTotalWords: a.faqs?.reduce((acc, q) => acc + countWords(q.question) + countWords(q.answer), 0) || 0
  })),
  industries: INDUSTRIES.map(ind => ({
    slug: ind.slug,
    heroSubtitle: { words: countWords(ind.hero.subtitle) },
    roiSubheading: { words: countWords(ind.roi.subheading) },
    showcasesCount: ind.showcases.length,
    showcasesTotalWords: ind.showcases.reduce((acc, s) => acc + countWords(s.title) + countWords(s.subtitle) + countWords(s.problem) + countWords(s.solution) + countWords(s.metrics) + (s.benefits?.reduce((b, c) => b + countWords(c), 0) || 0), 0),
    workflowTotalWords: countWords(ind.workflow.title) + countWords(ind.workflow.description) + ind.workflow.steps.reduce((acc, s) => acc + countWords(s.title) + countWords(s.description), 0),
    useCasesTotalWords: ind.useCases.reduce((acc, u) => acc + countWords(u.title) + countWords(u.trigger) + countWords(u.benefit) + u.dialogue.reduce((d, m) => d + countWords(m.message), 0), 0),
    faqsTotalWords: ind.faqs.reduce((acc, f) => acc + countWords(f.question) + countWords(f.answer), 0)
  }))
};

console.log(JSON.stringify(audit, null, 2));
