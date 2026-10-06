import fs from "fs";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// 1. Process platform-data.ts
let pData = fs.readFileSync("src/data/platform-data.ts", "utf8");

// We can inspect and apply targeted replacements for all platforms in platform-data.ts
console.log("Original platform-data word counts checking...");
