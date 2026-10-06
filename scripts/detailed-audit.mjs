import fs from "fs";

function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Check platform data
const platformFile = fs.readFileSync("src/data/platform-data.ts", "utf8");
// Let's do a simple inspection or import
console.log("Analyzing file sizes:");
console.log("platform-data.ts size:", platformFile.length);
