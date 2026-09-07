import fs from 'node:fs';

const lazychatHtml = fs.readFileSync('C:/Users/mehed/.gemini/antigravity-ide/brain/153ed9aa-7853-42d5-92d1-4422d15ecf9a/.system_generated/steps/27/content.md', 'utf8');

const mp4s = new Set();
for (const m of lazychatHtml.matchAll(/https?:\/\/[^\s"'>]+(\.mp4|\.webm)/gi)) {
  mp4s.add(decodeURIComponent(m[0]));
}

console.log('LazyChat videos found:', mp4s.size);
for (const v of mp4s) {
  console.log(v);
}
