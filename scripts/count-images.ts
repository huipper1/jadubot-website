import { SECTION_IMAGES } from "../src/lib/section-images.js";

let total = 0;
const report = {};
for (const [group, slugs] of Object.entries(SECTION_IMAGES)) {
  report[group] = {};
  for (const [slug, sections] of Object.entries(slugs)) {
    report[group][slug] = Object.keys(sections);
    total += Object.keys(sections).length;
  }
}
console.log("Total registered section images:", total);
console.log(JSON.stringify(report, null, 2));
