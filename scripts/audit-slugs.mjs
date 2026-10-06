import fs from "fs";

function extractSlugs(content) {
  const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  return matches.map((m) => m[1]);
}

const pFile = fs.readFileSync("src/data/platform-data.ts", "utf8");
console.log("Platform Slugs:", extractSlugs(pFile));

const aFile = fs.readFileSync("src/data/ai-agent-data.ts", "utf8");
console.log("AI Agent Slugs:", extractSlugs(aFile));

const iFile = fs.readFileSync("src/components/routes/industry/industry-data.ts", "utf8");
console.log("Industry Slugs:", extractSlugs(iFile));
