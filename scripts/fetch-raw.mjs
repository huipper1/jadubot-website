import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('Fetching pages and posts metadata...');
  const [pagesRes, postsRes] = await Promise.all([
    fetch('https://jadubot.com/wp-json/wp/v2/pages?per_page=100'),
    fetch('https://jadubot.com/wp-json/wp/v2/posts?per_page=100')
  ]);

  const pages = await pagesRes.json();
  const posts = await postsRes.json();

  console.log(`Found ${pages.length} pages and ${posts.length} posts.`);

  fs.mkdirSync('./scratch', { recursive: true });
  fs.writeFileSync('./scratch/pages-raw.json', JSON.stringify(pages, null, 2));
  fs.writeFileSync('./scratch/posts-raw.json', JSON.stringify(posts, null, 2));
  console.log('Saved raw pages and posts to ./scratch/');
}

main().catch(console.error);
