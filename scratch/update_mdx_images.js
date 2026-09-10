const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'content', 'blog');
const indexData = JSON.parse(fs.readFileSync(path.join(blogDir, 'index.json'), 'utf8'));

for (const post of indexData) {
  const mdxFile = path.join(blogDir, `${post.fileSlug}.mdx`);
  if (!fs.existsSync(mdxFile)) {
    console.warn(`File not found: ${mdxFile}`);
    continue;
  }
  let content = fs.readFileSync(mdxFile, 'utf8');
  content = content.replace(/featuredImage:\s*["'][^"']*["']/, `featuredImage: "${post.featuredImage}"`);
  fs.writeFileSync(mdxFile, content, 'utf8');
  console.log(`Updated frontmatter in ${post.fileSlug}.mdx -> ${post.featuredImage}`);
}
