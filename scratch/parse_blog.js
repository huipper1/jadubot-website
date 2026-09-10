const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/mehed/.gemini/antigravity-ide/brain/9b513a26-40e4-460d-91a4-02804fdab6d4/.system_generated/steps/612/content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all articles
const articleRegex = /<article[\s\S]*?<\/article>/g;
const articles = content.match(articleRegex) || [];
console.log('Total articles found:', articles.length);

const results = [];
for (let i = 0; i < articles.length; i++) {
  const art = articles[i];
  
  // Extract title and link
  const linkMatch = art.match(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
  const titleMatch = art.match(/<h\d[^>]*class=["'][^"']*elementor-post__title[^"']*["'][^>]*>[\s\S]*?<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
  
  // Extract image
  const imgMatch = art.match(/<img[^>]+src=["']([^"']+)["']/i);
  const srcsetMatch = art.match(/srcset=["']([^"']+)["']/i);
  
  // Extract excerpt
  const excerptMatch = art.match(/class=["'][^"']*elementor-post__excerpt[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
  
  // Extract date
  const dateMatch = art.match(/class=["'][^"']*elementor-post-date[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);

  results.push({
    index: i + 1,
    url: titleMatch ? titleMatch[1] : (linkMatch ? linkMatch[1] : ''),
    title: titleMatch ? titleMatch[2].trim() : '',
    image: imgMatch ? imgMatch[1] : '',
    srcset: srcsetMatch ? srcsetMatch[1] : '',
    excerpt: excerptMatch ? excerptMatch[1].replace(/<[^>]+>/g, '').trim() : '',
    date: dateMatch ? dateMatch[1].trim() : ''
  });
}

console.log(JSON.stringify(results, null, 2));
