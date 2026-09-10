const fs = require('fs');
const path = require('path');
const https = require('https');

const blogImgDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');

// Download a URL to a local destination
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  // Download social preview image
  const socialPreviewDest = path.join(blogImgDir, 'Jadubot-Social-Preview-blog.jpg');
  console.log('Downloading social preview image...');
  try {
    await download('https://jadubot.com/wp-content/uploads/2025/08/Jadubot-Social-Preview-blog.jpg', socialPreviewDest);
    console.log('Downloaded Jadubot-Social-Preview-blog.jpg successfully!');
  } catch (err) {
    console.error('Error downloading social preview:', err.message);
  }

  // Create clean, unambiguous filenames for the 7 blog posts:
  const mappings = [
    {
      slug: 'facebook-chatbot',
      source: 'facebook-chatbot-2026-1200x630.jpg',
      clean: 'facebook-chatbot.jpg'
    },
    {
      slug: 'facebook-and-instagram-chatbot',
      source: 'facebook-and-instagram-chatbot-2026-1-1200x630.jpg',
      clean: 'facebook-and-instagram-chatbot.jpg'
    },
    {
      slug: 'bangladesh-automation-tools',
      source: 'automation-tools-in-bangladesh-2025--e2-80-93-facebook-and-instagram-chatbots-auto-comment-reply.jpg',
      clean: 'bangladesh-automation-tools.jpg'
    },
    {
      slug: 'set-up-auto-reply-dms-on-instagram-step-by-step-in-bangladesh',
      source: 'how-to-set-up-auto-reply-dms-on-instagram-step-by-step-in-bangladesh-2025-guide-with-jadubot-chatbot-1200x630.jpg',
      clean: 'set-up-auto-reply-dms-on-instagram.jpg'
    },
    {
      slug: 'best-automation-software-in-bangladesh',
      source: 'best-automation-software-in-bangladesh-2025--e2-80-93-facebook-instagram-chatbot-auto-comment-reply-1200x630.png',
      clean: 'best-automation-software-in-bangladesh.png'
    },
    {
      slug: 'best-bangladeshi-top-1-free-ai-chatbot',
      source: 'whatsapp-image-2025-08-07-at-01.57.36_aa903fa1.jpg',
      clean: 'best-bangladeshi-top-1-free-ai-chatbot.jpg'
    },
    {
      slug: 'marketing-automation-tool-in-bangladesh',
      source: 'jadubot-the-game-changer-marketing-automation-tool-1-1024x538.png',
      clean: 'marketing-automation-tool-in-bangladesh.png'
    }
  ];

  for (const m of mappings) {
    const srcPath = path.join(blogImgDir, m.source);
    const cleanPath = path.join(blogImgDir, m.clean);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, cleanPath);
      console.log(`Copied ${m.source} -> ${m.clean}`);
    } else {
      console.warn(`Source not found: ${m.source}`);
    }
  }
}

main();
