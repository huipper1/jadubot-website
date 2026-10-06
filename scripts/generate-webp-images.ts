import fs from "fs";
import path from "path";
import sharp from "sharp";
import { SECTION_IMAGES } from "../src/lib/section-images.js";

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSvg({ title, subtitle, tag, themeColor = "#0172ff", accentColor = "#38bdf8", detailSnippet = "" }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeTag = escapeXml(tag);
  const safeDetail = escapeXml(detailSnippet);

  return `<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1226"/>
        <stop offset="40%" stop-color="#0f1f3d"/>
        <stop offset="100%" stop-color="#070c1a"/>
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#182c52" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0f1f3a" stop-opacity="0.95"/>
      </linearGradient>

      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${themeColor}"/>
        <stop offset="100%" stop-color="${accentColor}"/>
      </linearGradient>

      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>

      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="1200" height="750" fill="url(#bgGrad)"/>

    <!-- Subtle Grid -->
    <g opacity="0.08" stroke="#ffffff" stroke-width="1">
      <path d="M0 75 H1200 M0 150 H1200 M0 225 H1200 M0 300 H1200 M0 375 H1200 M0 450 H1200 M0 525 H1200 M0 600 H1200 M0 675 H1200" />
      <path d="M120 0 V750 M240 0 V750 M360 0 V750 M480 0 V750 M600 0 V750 M720 0 V750 M840 0 V750 M960 0 V750 M1080 0 V750" />
    </g>

    <!-- Glowing Orbs in Jadubot Blue -->
    <circle cx="280" cy="220" r="220" fill="${themeColor}" opacity="0.25" filter="url(#glow)"/>
    <circle cx="950" cy="500" r="260" fill="${accentColor}" opacity="0.2" filter="url(#glow)"/>

    <!-- Main SaaS Showcase Card -->
    <g filter="url(#cardShadow)">
      <rect x="110" y="80" width="980" height="590" rx="28" fill="url(#cardGrad)" stroke="#2b4778" stroke-width="1.5"/>

      <!-- Window Header Bar -->
      <path d="M 110 108 A 28 28 0 0 1 138 80 L 1062 80 A 28 28 0 0 1 1090 108 L 1090 145 L 110 145 Z" fill="#142444"/>
      <line x1="110" y1="145" x2="1090" y2="145" stroke="#2b4778" stroke-width="1"/>

      <!-- Window Dots -->
      <circle cx="150" cy="112" r="7" fill="#ef4444" opacity="0.85"/>
      <circle cx="172" cy="112" r="7" fill="#f59e0b" opacity="0.85"/>
      <circle cx="194" cy="112" r="7" fill="#10b981" opacity="0.85"/>

      <!-- Window Address / Status -->
      <rect x="230" y="98" width="340" height="28" rx="8" fill="#0d1930" stroke="#253a60" stroke-width="1"/>
      <text x="245" y="117" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#93c5fd" font-weight="600">jadubot.ai • 24/7 autonomous runtime</text>

      <!-- Verified Cloud Status Pill -->
      <rect x="915" y="98" width="145" height="28" rx="8" fill="#059669" fill-opacity="0.2" stroke="#10b981" stroke-width="1"/>
      <circle cx="933" cy="112" r="4.5" fill="#10b981"/>
      <text x="946" y="117" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#34d399" font-weight="700">ACTIVE &amp; ONLINE</text>

      <!-- Main Visual Body: Left Info, Right Interactive Mockup -->
      <!-- Left Info Area -->
      <g transform="translate(160, 190)">
        <!-- Tag Pill -->
        <rect x="0" y="0" width="190" height="32" rx="16" fill="url(#accentGrad)" fill-opacity="0.15" stroke="${accentColor}" stroke-width="1.2"/>
        <text x="16" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="${accentColor}" font-weight="700" letter-spacing="1">${safeTag}</text>

        <!-- Section Title -->
        <text x="0" y="80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" fill="#ffffff" font-weight="800">
          ${safeTitle}
        </text>

        <!-- Subtitle -->
        <text x="0" y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" fill="#94a3b8" font-weight="400">
          ${safeSubtitle}
        </text>

        <!-- Context Pill / BD Context Tag -->
        <g transform="translate(0, 185)">
          <rect x="0" y="0" width="370" height="68" rx="16" fill="#0f1b33" stroke="#273e6b" stroke-width="1"/>
          <text x="20" y="30" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#38bdf8" font-weight="700">BANGLADESH LOCALIZED COMMERCE</text>
          <text x="20" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#f8fafc" font-weight="500">৳ BDT • bKash • COD • 24/7 Instant Reply</text>
        </g>

        <!-- Performance / Latency Badge -->
        <g transform="translate(0, 275)">
          <rect x="0" y="0" width="175" height="58" rx="14" fill="#091426" stroke="#253a60" stroke-width="1"/>
          <text x="16" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#64748b" font-weight="600">AVG RESPONSE</text>
          <text x="16" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#38bdf8" font-weight="800">&lt; 1.8 sec</text>

          <rect x="190" y="0" width="180" height="58" rx="14" fill="#091426" stroke="#253a60" stroke-width="1"/>
          <text x="206" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#64748b" font-weight="600">AUTOMATION RATE</text>
          <text x="206" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#10b981" font-weight="800">85%+</text>
        </g>
      </g>

      <!-- Right Column: Interactive Chat & Dashboard Visual Mockup -->
      <g transform="translate(600, 175)">
        <!-- Phone Device Frame -->
        <rect x="0" y="0" width="430" height="450" rx="24" fill="#070f1e" stroke="#233a63" stroke-width="1.5"/>

        <!-- Header of phone chat -->
        <rect x="0" y="0" width="430" height="60" rx="24" fill="#101e38"/>
        <circle cx="35" cy="30" r="16" fill="${themeColor}"/>
        <text x="35" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#ffffff" font-weight="800" text-anchor="middle">J</text>
        <text x="65" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#ffffff" font-weight="700">Jadubot AI Assistant</text>
        <text x="65" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#10b981" font-weight="600">Verified Business • Online</text>

        <!-- Message 1 (Customer incoming) -->
        <g transform="translate(20, 80)">
          <rect x="140" y="0" width="250" height="52" rx="14" fill="#1e293b"/>
          <text x="155" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#f8fafc">Bhaiya, price koto? Order kivabe korbo?</text>
          <text x="155" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">Customer • 10:41 AM</text>
        </g>

        <!-- Message 2 (Jadubot AI instant response) -->
        <g transform="translate(20, 146)">
          <rect x="0" y="0" width="370" height="155" rx="16" fill="#0b2347" stroke="#0284c7" stroke-width="1.2"/>
          
          <text x="18" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#bae6fd" font-weight="700">Apnar order confirm hoyeche! 🎉</text>
          <text x="18" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#e2e8f0">Amount: ৳ 1,450 (Cash on Delivery)</text>
          <text x="18" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#94a3b8">Delivery: Dhaka (24-48 hrs) • Pathao / Steadfast</text>
          
          <!-- Tracking Pill -->
          <rect x="18" y="92" width="220" height="26" rx="6" fill="#0369a1" fill-opacity="0.4"/>
          <text x="28" y="109" font-family="monospace" font-size="11" fill="#7dd3fc" font-weight="600">Tracking: BD-JADU-98421</text>

          <!-- Interactive Action Buttons -->
          <rect x="18" y="126" width="150" height="22" rx="6" fill="${themeColor}"/>
          <text x="93" y="141" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#ffffff" font-weight="700" text-anchor="middle">Track Live Delivery</text>

          <rect x="178" y="126" width="130" height="22" rx="6" fill="#1e293b"/>
          <text x="243" y="141" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8" font-weight="600" text-anchor="middle">Talk to Human</text>
        </g>

        <!-- Live Snippet Callout -->
        <g transform="translate(20, 318)">
          <rect x="0" y="0" width="390" height="110" rx="14" fill="#0b172d" stroke="#253f6d" stroke-width="1"/>
          <text x="18" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="${accentColor}" font-weight="700" letter-spacing="0.5">SECTION HIGHLIGHT</text>
          <text x="18" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#ffffff" font-weight="600">
            ${safeDetail || "Automated conversation pipeline with live status synchronization"}
          </text>
          <text x="18" y="78" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#94a3b8">
            Zero latency • Meta Graph API compliant • Instant Human Handover
          </text>
        </g>
      </g>
    </g>
  </svg>`;
}

async function generateAllImages() {
  console.log("Starting WebP image generation for all registered sections...");
  let count = 0;

  for (const [groupKey, slugObj] of Object.entries(SECTION_IMAGES)) {
    for (const [slugKey, sectionObj] of Object.entries(slugObj)) {
      for (const [secKey, config] of Object.entries(sectionObj)) {
        // Destination path: e.g. public/assets/images/platform/whatsapp-automation/hero.webp
        const relPath = config.src.replace(/^\//, "");
        const fullPath = path.resolve(process.cwd(), "public", relPath);
        const dir = path.dirname(fullPath);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        const titleText = `${slugKey.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}`;
        const sectionTitle = `${secKey.toUpperCase()}: ${config.alt.split(" ").slice(0, 6).join(" ")}`;

        const svgContent = generateSvg({
          title: sectionTitle,
          subtitle: `${titleText} AI Automation`,
          tag: `${groupKey.toUpperCase()} • ${secKey.toUpperCase()}`,
          detailSnippet: config.alt.slice(0, 80)
        });

        // Render to WebP with Sharp (1200x750, high quality, compressed < 150KB)
        await sharp(Buffer.from(svgContent))
          .webp({ quality: 85 })
          .toFile(fullPath);

        const stats = fs.statSync(fullPath);
        count++;
        if (count % 10 === 0 || count === 1) {
          console.log(`Generated (${count}/110): ${relPath} (${Math.round(stats.size / 1024)} KB)`);
        }
      }
    }
  }

  console.log(`Successfully generated all ${count} section images in high quality WebP!`);
}

generateAllImages().catch(err => {
  console.error("Error generating images:", err);
  process.exit(1);
});
