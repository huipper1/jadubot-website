import fs from "fs";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Read all 3 files
const pPath = "src/data/platform-data.ts";
const aPath = "src/data/ai-agent-data.ts";
const iPath = "src/components/routes/industry/industry-data.ts";

let pContent = fs.readFileSync(pPath, "utf8");
let aContent = fs.readFileSync(aPath, "utf8");
let iContent = fs.readFileSync(iPath, "utf8");

console.log("Analyzing current text lengths...");
