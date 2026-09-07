import fs from 'node:fs';

const pages = JSON.parse(fs.readFileSync('./scratch/pages-raw.json', 'utf8'));
const posts = JSON.parse(fs.readFileSync('./scratch/posts-raw.json', 'utf8'));

const all = [...pages, ...posts];
const jaduImgs = new Set();
const otherImgs = new Set();

for (const item of all) {
  const matches = item.content.rendered.matchAll(/https?:\/\/[^\s"'>]+\.(png|jpg|jpeg|svg|webp|gif)/gi);
  for (const m of matches) {
    if (m[0].includes('jadubot.com')) {
      jaduImgs.add(m[0]);
    } else {
      otherImgs.add(m[0]);
    }
  }
}

console.log('Jadubot domain images:', jaduImgs.size);
console.log('Sample Jadubot domain images:', [...jaduImgs].slice(0, 10));
console.log('Other images:', otherImgs.size);
console.log('Sample other images:', [...otherImgs].slice(0, 5));
