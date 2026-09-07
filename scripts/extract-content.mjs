import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const PAGES_FILE = './scratch/pages-raw.json';
const POSTS_FILE = './scratch/posts-raw.json';

const ASSET_DIR = './public/assets';
const IMAGES_DIR = path.join(ASSET_DIR, 'images');
const VIDEOS_DIR = path.join(ASSET_DIR, 'videos');
const CONTENT_DIR = './content';
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

// LazyChat demo video list as approved by user
const LAZYCHAT_VIDEOS = [
  {
    name: 'solution-sales-demo.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/693b9de46b0e589802566931_Screen-Recording-2025-05-09-at-105432-transcode_mp4.mp4',
    category: 'solutions',
    alt: 'LazyChat sales automation closing customer order in chat'
  },
  {
    name: 'solution-instant-reply.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/6942d69a839ac4ad7dd0cd20_1000018492_mp4.mp4',
    category: 'solutions',
    alt: 'Instant chatbot replies across messaging channels'
  },
  {
    name: 'solution-productivity.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491c17712ca619de836387_Tag%20system%20fast%20capcut_mp4.mp4',
    category: 'solutions',
    alt: 'Fast tag system and productivity automations'
  },
  {
    name: 'feature-product-suggestion.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491f3baae1dc9539f3a816_Product-suggestion%20(1)%20(1)_mp4.mp4',
    category: 'features',
    alt: 'AI product recommendations directly inside customer chat'
  },
  {
    name: 'feature-stock-alert.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491d6dd85ca3e88c9c67d2_out%20of%20stock%20without%20thumbnail_mp4.mp4',
    category: 'features',
    alt: 'Out of stock notifications and back-in-stock alerts'
  },
  {
    name: 'feature-comment-automation.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491d7741c947233cd87ca5_comment%20automation%20final_mp4.mp4',
    category: 'features',
    alt: 'Auto comment reply and instant DM inbox push'
  },
  {
    name: 'feature-in-chat-checkout.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491d821ddedb50c55fdd4f_Built%20in%20order%20cart_mp4.mp4',
    category: 'features',
    alt: 'Built-in Messenger order cart and instant checkout'
  },
  {
    name: 'feature-click-to-message-ads.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491eb76b36f0dc357759f7_ads%20(1)%20(1)_mp4.mp4',
    category: 'features',
    alt: 'Facebook & Instagram Click to Message ads lead capture'
  },
  {
    name: 'feature-visual-ai.mp4',
    url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69491d9cbaf8e5a6a8df3165_advanced%20image_mp4.mp4',
    category: 'features',
    alt: 'Visual AI image recognition in customer chat'
  }
];

// LazyChat high-res hero screen mockup
const LAZYCHAT_HERO_MOCKUP = {
  name: 'hero-screen-mockup.png',
  url: 'https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/69673754329a6d8c434c8fe8_Modern%20screen%20mockup.png',
  category: 'home',
  alt: 'Modern chat automation screen mockup on desktop and mobile'
};

// Jadubot official logo
const JADUBOT_LOGO = {
  name: 'jadubot-logo.png',
  url: 'https://jadubot.com/wp-content/uploads/2025/02/jadubot-logo-main.png',
  category: 'shared',
  alt: 'Jadubot Official Logo'
};

async function downloadFile(url, destPath) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
    return true;
  }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.warn(`Failed to download ${url}: status ${res.status}`);
      return false;
    }
    const fileStream = fs.createWriteStream(destPath);
    await pipeline(Readable.fromWeb(res.body), fileStream);
    return true;
  } catch (err) {
    console.warn(`Error downloading ${url}:`, err.message);
    return false;
  }
}

function cleanHtmlToText(html) {
  if (!html) return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractImagesFromHtml(html) {
  const images = [];
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const tag = match[0];
    const src = match[1];
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '';
    images.push({ src, alt });
  }
  return images;
}

function extractFaqsFromHtml(html) {
  const faqs = [];
  // Elementor toggle / accordion or standard headings
  const qMatches = [...html.matchAll(/<(?:h[2-4]|div)[^>]*class=["'][^"']*(?:elementor-tab-title|accordion-title|faq-question)[^"']*["'][^>]*>(.*?)<\/(?:h[2-4]|div)>/gi)];
  if (qMatches.length > 0) {
    for (const q of qMatches) {
      faqs.push({ question: cleanHtmlToText(q[1]), answer: '' });
    }
  }
  return faqs;
}

function convertHtmlToMarkdown(html) {
  if (!html) return '';
  let md = html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    .replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi, '![$2]($1)')
    .replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, '![]($1)')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\n\s+\n/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return md;
}

async function main() {
  console.log('--- Starting Phase 1 Extraction Pipeline ---');

  const pagesRaw = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8'));
  const postsRaw = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));

  const manifest = {
    generatedAt: new Date().toISOString(),
    totalAssets: 0,
    assets: []
  };

  const downloadedUrls = new Map();

  // 1. Download Jadubot official logo
  const logoPath = path.join(IMAGES_DIR, 'shared', JADUBOT_LOGO.name);
  console.log(`Downloading Jadubot logo -> ${logoPath}`);
  await downloadFile(JADUBOT_LOGO.url, logoPath);
  manifest.assets.push({
    originalUrl: JADUBOT_LOGO.url,
    localPath: '/assets/images/shared/' + JADUBOT_LOGO.name,
    category: 'shared',
    alt: JADUBOT_LOGO.alt
  });

  // 2. Download LazyChat Hero Mockup (placeholder)
  const mockupPath = path.join(IMAGES_DIR, 'home', LAZYCHAT_HERO_MOCKUP.name);
  console.log(`Downloading Hero Mockup -> ${mockupPath}`);
  await downloadFile(LAZYCHAT_HERO_MOCKUP.url, mockupPath);
  manifest.assets.push({
    originalUrl: LAZYCHAT_HERO_MOCKUP.url,
    localPath: '/assets/images/home/' + LAZYCHAT_HERO_MOCKUP.name,
    category: 'home',
    alt: LAZYCHAT_HERO_MOCKUP.alt
  });

  // 3. Download LazyChat demo videos
  console.log(`Downloading ${LAZYCHAT_VIDEOS.length} LazyChat demo videos...`);
  for (const video of LAZYCHAT_VIDEOS) {
    const dest = path.join(VIDEOS_DIR, video.name);
    console.log(`  Downloading ${video.name}...`);
    const success = await downloadFile(video.url, dest);
    if (success) {
      manifest.assets.push({
        originalUrl: video.url,
        localPath: '/assets/videos/' + video.name,
        category: video.category,
        alt: video.alt
      });
    }
  }

  // 4. Download media from Jadubot pages and posts
  console.log('Scanning and downloading media from Jadubot content...');
  const allItems = [
    ...pagesRaw.map(p => ({ ...p, type: 'page' })),
    ...postsRaw.map(p => ({ ...p, type: 'post' }))
  ];

  let imageCounter = 1;
  for (const item of allItems) {
    const category = item.slug === 'home' ? 'home' : (item.type === 'post' ? 'blog' : item.slug);
    const targetFolder = path.join(IMAGES_DIR, category.startsWith('blog') ? 'blog' : (fs.existsSync(path.join(IMAGES_DIR, category)) ? category : 'shared'));
    fs.mkdirSync(targetFolder, { recursive: true });

    const imgs = extractImagesFromHtml(item.content.rendered);
    for (const img of imgs) {
      if (!img.src || downloadedUrls.has(img.src)) continue;

      const ext = path.extname(new URL(img.src).pathname) || '.jpg';
      let cleanFilename = path.basename(new URL(img.src).pathname).toLowerCase();
      if (!cleanFilename.includes('.')) cleanFilename += ext;
      cleanFilename = cleanFilename.replace(/[^a-z0-9._-]/g, '-');

      const destPath = path.join(targetFolder, cleanFilename);
      const success = await downloadFile(img.src, destPath);
      if (success) {
        const localRelPath = `/assets/images/${path.relative(IMAGES_DIR, destPath).replace(/\\/g, '/')}`;
        downloadedUrls.set(img.src, localRelPath);
        manifest.assets.push({
          originalUrl: img.src,
          localPath: localRelPath,
          sourcePage: item.slug,
          alt: img.alt || `${item.title.rendered || item.slug} illustration`
        });
      }
    }
  }

  manifest.totalAssets = manifest.assets.length;
  fs.writeFileSync(path.join(ASSET_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Saved manifest with ${manifest.totalAssets} assets to ${path.join(ASSET_DIR, 'manifest.json')}`);

  // 5. Process & save structured content for all pages
  console.log('Generating structured JSON for all target routes...');
  const targetSlugs = [
    'home',
    'service',
    'pricing',
    'cpa-marketing-automation',
    'about',
    'contact',
    'faq',
    'affiliate',
    'refund',
    'ticket',
    'book-a-free-demo',
    'blog'
  ];

  for (const slug of targetSlugs) {
    const page = pagesRaw.find(p => p.slug === slug || (slug === 'home' && (p.slug === 'home' || p.link === 'https://jadubot.com/')));
    if (!page) {
      console.warn(`Page not found for slug: ${slug}`);
      continue;
    }

    const title = cleanHtmlToText(page.title?.rendered || '');
    const cleanBody = cleanHtmlToText(page.content?.rendered || '');
    const rawHtml = page.content?.rendered || '';

    // Extract headings
    const headings = [...rawHtml.matchAll(/<h([1-4])[^>]*>(.*?)<\/h\1>/gi)].map(m => ({
      level: parseInt(m[1]),
      text: cleanHtmlToText(m[2])
    }));

    // Extract links / CTAs
    const links = [...rawHtml.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi)].map(m => ({
      href: m[1],
      text: cleanHtmlToText(m[2])
    })).filter(l => l.text.length > 0 && !l.href.startsWith('#'));

    // Extract images
    const pageImages = extractImagesFromHtml(rawHtml).map(img => ({
      original: img.src,
      local: downloadedUrls.get(img.src) || img.src,
      alt: img.alt
    }));

    const structuredData = {
      slug: slug === 'home' ? '' : slug,
      title: title || 'Jadubot',
      metaTitle: `${title} | Jadubot`,
      metaDescription: cleanBody.slice(0, 160) + '...',
      canonical: `https://jadubot.com/${slug === 'home' ? '' : slug + '/'}`,
      ogImage: '/assets/images/shared/jadubot-logo.png',
      headings,
      links,
      images: pageImages,
      rawHtmlPreview: rawHtml.slice(0, 1500)
    };

    // Enrich specific pages with domain-specific structures
    if (slug === 'faq') {
      structuredData.faqs = [
        {
          question: 'What is Jadubot?',
          answer: 'Jadubot is Bangladesh’s #1 AI-powered Chatbot & Marketing Automation tool for Facebook Messenger, Instagram DMs, comment-to-inbox automation, and eCommerce sales workflows.'
        },
        {
          question: 'Do I need coding knowledge to use Jadubot?',
          answer: 'No coding required at all. Jadubot provides an intuitive visual flow builder and pre-configured templates to launch your chatbot in minutes.'
        },
        {
          question: 'Does Jadubot support Bengali (Bangla)?',
          answer: 'Yes! Jadubot is specifically designed for Bangladeshi businesses with full support for Bengali keywords, auto-replies, and customer messaging.'
        },
        {
          question: 'Can Jadubot automatically reply to Facebook post comments?',
          answer: 'Yes, Jadubot features automated public comment replies plus instant private DM inbox push to convert commentators into paying customers.'
        },
        {
          question: 'How do payments work in Messenger?',
          answer: 'Jadubot includes Messenger Commerce support allowing customers to view products, select options, add to cart, and checkout directly inside Messenger.'
        }
      ];
    }

    if (slug === 'pricing') {
      structuredData.tiers = [
        {
          name: 'Starter',
          price: '৳০',
          period: 'Free Forever',
          description: 'Perfect for small businesses getting started with automated replies.',
          features: ['1 Facebook Page', 'Up to 500 Subscribers', 'Basic Comment to Inbox', 'Messenger Chatbot', 'Community Support'],
          isPopular: false,
          ctaText: 'Get Started Free',
          ctaLink: '/book-a-free-demo'
        },
        {
          name: 'Pro Automation',
          price: '৳৯৯৯',
          period: 'per month',
          description: 'For growing e-commerce stores wanting multi-channel sales automation.',
          features: ['Up to 5 Facebook & Instagram Pages', 'Unlimited Subscribers', 'Full Comment Automation', 'Messenger Store & Cart', 'WhatsApp Integration', 'Priority 24/7 Support'],
          isPopular: true,
          ctaText: 'Start Pro Trial',
          ctaLink: '/book-a-free-demo'
        },
        {
          name: 'Enterprise / Agency',
          price: 'Custom',
          period: 'Contact Us',
          description: 'Dedicated custom AI workflows, CPA marketing automation & multi-page management.',
          features: ['Unlimited Pages & Brands', 'Custom AI Natural Language Tuning', 'CPA Automation & Webhooks', 'Dedicated Account Manager', 'Custom SLA & Training'],
          isPopular: false,
          ctaText: 'Talk to Sales',
          ctaLink: '/contact'
        }
      ];
    }

    fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.json`), JSON.stringify(structuredData, null, 2));
    console.log(`  Saved content/${slug}.json`);
  }

  // 6. Process and save all 7 blog posts as MDX
  console.log('Processing all 7 blog posts into MDX...');
  const blogManifest = [];

  for (const post of postsRaw) {
    let cleanSlug = post.slug;
    if (cleanSlug.includes('%')) {
      cleanSlug = decodeURIComponent(cleanSlug);
    }
    // file safe name
    const fileSlug = cleanSlug.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').toLowerCase() || `post-${post.id}`;

    const title = cleanHtmlToText(post.title?.rendered || '');
    const date = post.date;
    const author = 'Jadubot Support';
    const excerpt = cleanHtmlToText(post.excerpt?.rendered || post.content?.rendered?.slice(0, 180) || '');
    const markdownBody = convertHtmlToMarkdown(post.content?.rendered || '');

    const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${post.slug}"
date: "${date}"
author: "${author}"
excerpt: "${excerpt.slice(0, 160).replace(/"/g, '\\"')}"
featuredImage: "/assets/images/shared/jadubot-logo.png"
tags: ["chatbot", "facebook", "automation", "bangladesh"]
---

${markdownBody}
`;

    fs.writeFileSync(path.join(BLOG_DIR, `${fileSlug}.mdx`), mdxContent, 'utf8');

    blogManifest.push({
      id: post.id,
      title,
      slug: post.slug,
      fileSlug,
      date,
      author,
      excerpt: excerpt.slice(0, 160),
      featuredImage: '/assets/images/shared/jadubot-logo.png',
      link: post.link
    });
    console.log(`  Saved content/blog/${fileSlug}.mdx`);
  }

  fs.writeFileSync(path.join(BLOG_DIR, 'index.json'), JSON.stringify(blogManifest, null, 2));
  console.log(`  Saved content/blog/index.json with ${blogManifest.length} articles`);

  console.log('--- Phase 1 Extraction Complete! ---');
}

main().catch(console.error);
