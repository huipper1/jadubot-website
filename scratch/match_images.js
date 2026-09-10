const fs = require('fs');
const path = require('path');

const localBlogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
const localFiles = fs.readdirSync(localBlogDir);
console.log('Local files in public/assets/images/blog:', localFiles);

const posts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'content', 'blog', 'index.json'), 'utf8'));

// Remote images from jadubot.com/blog/
const remoteMapping = {
  "facebook-chatbot": "https://jadubot.com/wp-content/uploads/2025/08/facebook-chatbot-2026.jpg",
  "facebook-and-instagram-chatbot": "https://jadubot.com/wp-content/uploads/2025/08/facebook-and-instagram-chatbot-2026-1.jpg",
  "bangladesh-automation-tools": "https://jadubot.com/wp-content/uploads/2025/08/Automation-Tools-in-Bangladesh-2025-–-Facebook-and-Instagram-Chatbots-Auto-Comment-Reply.jpg",
  "set-up-auto-reply-dms-on-instagram-step-by-step-in-bangladesh": "https://jadubot.com/wp-content/uploads/2025/08/How-to-Set-Up-Auto-Reply-DMs-on-Instagram-Step-by-Step-in-Bangladesh-2025-Guide-with-Jadubot-Chatbot.jpg",
  "best-automation-software-in-bangladesh": "https://jadubot.com/wp-content/uploads/2025/08/Best-Automation-Software-in-Bangladesh-2025-–-Facebook-Instagram-Chatbot-Auto-Comment-Reply.png",
  "best-bangladeshi-top-1-free-ai-chatbot": "https://jadubot.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-07-at-01.57.36_aa903fa1.jpg",
  "marketing-automation-tool-in-bangladesh": "https://jadubot.com/wp-content/uploads/2025/02/Jadubot-The-Game-Changer-Marketing-Automation-Tool-1.png"
};

posts.forEach(p => {
  console.log(`\nPost: ${p.fileSlug}`);
  console.log(`Remote: ${remoteMapping[p.fileSlug]}`);
  // Check if matching local file exists
  const matches = localFiles.filter(f => {
    const slugKey = p.fileSlug.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const fileKey = f.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return fileKey.includes(slugKey.substring(0, 15));
  });
  console.log(`Matching local files:`, matches);
});
