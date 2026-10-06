import fs from "fs";
import path from "path";
import sharp from "sharp";

interface BentoSpec {
  folder: string; // e.g. "industry/ecommerce-chatbot-automation"
  a: {
    alt: string;
    prompt: string;
    svgContent: string;
  };
  b: {
    alt: string;
    prompt: string;
    svgContent: string;
  };
}

function makePhoneSvg(phoneWidth: number, phoneHeight: number, screenContent: string, phoneColor = "#0f172a", strokeColor = "#38bdf8") {
  const canvasW = 600;
  const canvasH = 750;
  const x = (canvasW - phoneWidth) / 2;
  const y = 25;

  return `<svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="phoneShadow" x="-25%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000000" flood-opacity="0.32"/>
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0172ff" flood-opacity="0.16"/>
      </filter>
    </defs>

    <!-- Outer Phone Container with 3D drop shadow -->
    <g filter="url(#phoneShadow)" transform="rotate(-3, ${canvasW / 2}, ${canvasH / 2})">
      <!-- Phone Bezel -->
      <rect x="${x}" y="${y}" width="${phoneWidth}" height="${phoneHeight}" rx="42" fill="${phoneColor}" stroke="${strokeColor}" stroke-width="3"/>
      <!-- Inner Screen Glass -->
      <rect x="${x + 9}" y="${y + 9}" width="${phoneWidth - 18}" height="${phoneHeight - 18}" rx="34" fill="#080e1c"/>
      <!-- Glass subtle gloss diagonal overlay -->
      <path d="M ${x + 9} ${y + 9} L ${x + phoneWidth - 9} ${y + 9} L ${x + 9} ${y + 350} Z" fill="#ffffff" opacity="0.04"/>

      <!-- Dynamic Island / Speaker notch -->
      <rect x="${canvasW / 2 - 42}" y="${y + 16}" width="84" height="18" rx="9" fill="#000000"/>
      <circle cx="${canvasW / 2 + 24}" cy="${y + 25}" r="3.5" fill="#1e293b"/>

      <!-- Screen UI Content -->
      <g transform="translate(${x + 12}, ${y + 44})">
        ${screenContent}
      </g>
    </g>
  </svg>`;
}

function makeClusterSvg(content: string) {
  const canvasW = 550;
  const canvasH = 420;

  return `<svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="clusterGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#000000" flood-opacity="0.25"/>
        <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#0172ff" flood-opacity="0.2"/>
      </filter>
    </defs>
    <g filter="url(#clusterGlow)">
      ${content}
    </g>
  </svg>`;
}

export const INDUSTRY_BENTO_SPECS: BentoSpec[] = [
  // 1. E-Commerce
  {
    folder: "industry/ecommerce-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying automated e-commerce cart recovery and COD confirmation in BDT",
      prompt: "Isolated 3D smartphone on transparent background displaying an e-commerce WhatsApp chat with abandoned cart recovery, sneaker photo, ৳ 3,450 price, and green Confirm COD button.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#075e54"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🛍️</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">JaduCart Store</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#25d366">● Cart Recovery Bot</text>

        <rect x="10" y="45" width="265" height="54" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Apnar cart-e 1ti item ache!</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">Complete order with 10% off."</text>

        <rect x="10" y="112" width="265" height="235" rx="16" fill="#111c38" stroke="#2563eb" stroke-width="1.5"/>
        <rect x="25" y="126" width="70" height="70" rx="12" fill="#1e293b"/>
        <text x="60" y="168" font-size="34" text-anchor="middle">👟</text>
        <text x="105" y="148" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">Air Runner V2</text>
        <text x="105" y="166" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Size 42 · In Stock</text>
        <text x="105" y="190" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">৳ 3,450</text>

        <rect x="25" y="210" width="235" height="36" rx="10" fill="#064e3b" stroke="#059669" stroke-width="1"/>
        <text x="142" y="233" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#34d399" text-anchor="middle">✓ Address &amp; OTP Verified</text>

        <rect x="25" y="258" width="235" height="44" rx="14" fill="#25d366"/>
        <text x="142" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Confirm Cash on Delivery ⚡</text>

        <text x="142" y="326" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#60a5fa" text-anchor="middle">Pathao Courier Dispatched</text>
      `)
    },
    b: {
      alt: "3D e-commerce parcel and checkout card cluster with courier tracking pill",
      prompt: "Isolated 3D cluster with shopping bag, Pathao delivery parcel box, and verified checkout badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">📦</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Pathao / Steadfast</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant Consignment Sync</text>
          
          <rect x="20" y="80" width="220" height="42" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="32" y="106" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Tracking: #PTH-8924</text>
          <rect x="175" y="88" width="55" height="24" rx="6" fill="#dcfce7"/>
          <text x="202" y="104" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">Live</text>

          <rect x="20" y="134" width="220" height="44" rx="14" fill="#0172ff"/>
          <text x="130" y="161" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">One-Tap Order Confirmation ➔</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#f59e0b"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🛍️</text>
        </g>
      `)
    }
  },

  // 2. Retail B2C
  {
    folder: "industry/retail-b2c-ecommerce-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying GPS-powered store locator and live branch stock check",
      prompt: "Isolated 3D smartphone on transparent background showing WhatsApp store locator chat with map pin, Dhanmondi branch hours, and product stock check.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#0284c7"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">📍</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Outlet Finder</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#38bdf8">● GPS Live</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Dhanmondi outlet-e ki ei kurti</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">available ache?"</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="50" rx="12" fill="#0284c7" fill-opacity="0.2"/>
        <text x="40" y="145" font-size="18">📍</text>
        <text x="66" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#38bdf8">Dhanmondi 27 Branch</text>
        <text x="66" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8">Open till 9:30 PM · 3 In Stock</text>

        <rect x="25" y="180" width="235" height="70" rx="12" fill="#1e293b"/>
        <text x="38" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">VIP Flash Broadcast Sent</text>
        <text x="38" y="222" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">91% Open Rate · 28% CTR</text>
        <text x="38" y="240" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#22c55e">৳ 2,150 (20% Off Code: VIP26)</text>

        <rect x="25" y="262" width="235" height="42" rx="12" fill="#0284c7"/>
        <text x="142" y="288" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Directions on Google Maps 🗺️</text>
      `)
    },
    b: {
      alt: "3D map location pin and retail store card cluster with seasonal discount voucher",
      prompt: "Isolated 3D cluster with map location pin, VIP discount card, and store availability badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">🗺️</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Store Locator</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant WhatsApp Pin</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af">Banani Outlet · 0 sec wait</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#3b82f6">Stock confirmed by manager</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#f59e0b"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">VIP Broadcast (91% Open Rate) ✨</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#0284c7"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🏬</text>
        </g>
      `)
    }
  },

  // 3. Healthcare
  {
    folder: "industry/healthcare-chatbot-automation",
    a: {
      alt: "Smartphone mockup showing doctor slot booking and diagnostic test pricing in chat",
      prompt: "Isolated 3D smartphone on transparent background displaying clinical WhatsApp bot confirming specialist doctor booking with serial #14 and lab preparation instructions.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#0d9488"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🩺</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">MediCare AI Desk</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#2dd4bf">● 24/7 Slot Booking</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Dr. Farhana (Cardiology)-r serial</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">kobe pabo?"</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#042f2e" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="52" rx="12" fill="#134e4a"/>
        <text x="40" y="145" font-size="20">👨‍⚕️</text>
        <text x="70" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Dr. Farhana Ahmed</text>
        <text x="70" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#5eead4">Serial #14 · Room 402 · ৳ 1,200</text>

        <rect x="25" y="182" width="235" height="60" rx="12" fill="#0f172a"/>
        <text x="38" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Diagnostic: Lipid Profile Test</text>
        <text x="38" y="222" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#facc15">⚠️ 10-12 hrs fasting required</text>
        <text x="38" y="234" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#94a3b8">Fee: ৳ 850 · Report online 6 hrs</text>

        <rect x="25" y="254" width="235" height="44" rx="12" fill="#0d9488"/>
        <text x="142" y="281" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Confirm Appointment Ticket ✓</text>

        <text x="142" y="324" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#5eead4" text-anchor="middle">Automated SMS &amp; WhatsApp Reminder Set</text>
      `)
    },
    b: {
      alt: "3D medical calendar and clinic appointment badge cluster with stethoscope icon",
      prompt: "Isolated 3D cluster with appointment confirmation ticket, stethoscope icon, and 75% time cut badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">🏥</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Doctor Appointment</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant HMIS Calendar Sync</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#f0fdfa" stroke="#99f6e4"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f766e">Confirmed: Tomorrow 5:30 PM</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#14b8a6">75% Admin Work Reduced</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#0d9488"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">60% Reduction in No-Shows ✓</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#14b8a6"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🩺</text>
        </g>
      `)
    }
  },

  // 4. Real Estate
  {
    folder: "industry/real-estate-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying automated budget qualification and site visit scheduling for apartment buyers",
      prompt: "Isolated 3D smartphone on transparent background displaying real estate WhatsApp chat with property photo, ৳ 1.8 Cr price, budget qualification, and weekend site visit confirmation.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#b45309"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🏢</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">JaduProperties BD</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#fbbf24">● Lead Qualification</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Looking for 3BHK in Uttara,</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">budget around 1.5 - 2 Crore."</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#1c1917" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="120" width="70" height="70" rx="12" fill="#292524"/>
        <text x="60" y="165" font-size="36" text-anchor="middle">🏙️</text>
        <text x="105" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Green Valley Luxury</text>
        <text x="105" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#d6d3d1">1,850 sqft · Sector 11, Uttara</text>
        <text x="105" y="184" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#fbbf24">৳ 1.85 Crore</text>

        <rect x="25" y="202" width="235" height="40" rx="10" fill="#451a03" stroke="#b45309" stroke-width="1"/>
        <text x="142" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fde68a" text-anchor="middle">🔥 High Intent · Pre-Qualified</text>

        <rect x="25" y="252" width="235" height="44" rx="12" fill="#d97706"/>
        <text x="142" y="279" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Book Saturday Model Visit 📅</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fed7aa" text-anchor="middle">+44% Weekend Visit Attendance</text>
      `)
    },
    b: {
      alt: "3D architectural floorplan blueprint and site visit calendar cluster",
      prompt: "Isolated 3D cluster with property model icon, blueprint badge, and scheduled visit ticket on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">📐</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Brochure &amp; Visit</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant WhatsApp Delivery</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#fef3c7" stroke="#fcd34d"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e">Saturday Site Tour Booked</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#b45309">Handed over to Area Broker</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#d97706"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">21x Qualification Speed ⚡</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#f59e0b"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🏗️</text>
        </g>
      `)
    }
  },

  // 5. Restaurant
  {
    folder: "industry/restaurant-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying WhatsApp digital food menu ordering and table reservation",
      prompt: "Isolated 3D smartphone on transparent background displaying restaurant WhatsApp chat with Kacchi biryani photo, ৳ 480 price, and Table for 4 reservation confirmation.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#dc2626"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🍽️</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">DineSmart Bot</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#f87171">● Zero Commission Ordering</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Ajker special menu ki? 4 joner</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">table book korte chai."</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#1c1917" stroke="#ef4444" stroke-width="1.5"/>
        <rect x="25" y="120" width="70" height="70" rx="12" fill="#292524"/>
        <text x="60" y="166" font-size="36" text-anchor="middle">🍲</text>
        <text x="105" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Mutton Kacchi Biryani</text>
        <text x="105" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a8a29e">Special Borhani &amp; Salad</text>
        <text x="105" y="184" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#f87171">৳ 480</text>

        <rect x="25" y="202" width="235" height="40" rx="10" fill="#450a0a" stroke="#991b1b" stroke-width="1"/>
        <text x="142" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fca5a5" text-anchor="middle">Table #8 Confirmed · 8:00 PM (4 Guests)</text>

        <rect x="25" y="252" width="235" height="44" rx="12" fill="#dc2626"/>
        <text x="142" y="279" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Order Food Directly in Chat ⚡</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fca5a5" text-anchor="middle">0% Aggregator Commission Paid</text>
      `)
    },
    b: {
      alt: "3D dining table reservation card and delivery food cloche cluster",
      prompt: "Isolated 3D cluster with food cloche icon, confirmed table booking ticket, and 30% savings badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">🛎️</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Table Reservation</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant POS Webhook Sync</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#fee2e2" stroke="#fca5a5"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#991b1b">Table Booked (No Errors)</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ef4444">SMS reminder 2 hrs prior</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#dc2626"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">30% Third-Party Fees Saved 💰</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#ef4444"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🍕</text>
        </g>
      `)
    }
  },

  // 6. Finance
  {
    folder: "industry/finance-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying interactive loan EMI calculator and document collection in chat",
      prompt: "Isolated 3D smartphone on transparent background displaying bank WhatsApp chat with interactive home loan calculator, monthly EMI in ৳, and NID verification card.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#059669"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">💳</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">SmartLoan AI</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#34d399">● Instant EMI Desk</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Home loan 20 lakh taka 10 bochore</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">monthly EMI koto ashbe?"</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="66" rx="12" fill="#065f46"/>
        <text x="38" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a7f3d0">Calculated Monthly EMI:</text>
        <text x="38" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">৳ 24,330 <tspan font-size="12" font-weight="600" fill="#6ee7b7">/ month</tspan></text>

        <rect x="25" y="196" width="235" height="46" rx="12" fill="#022c22"/>
        <text x="40" y="218" font-size="16">📄</text>
        <text x="64" y="217" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">NID &amp; Salary Slip Verified</text>
        <text x="64" y="233" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#34d399">Bank statement processed instantly</text>

        <rect x="25" y="252" width="235" height="44" rx="12" fill="#059669"/>
        <text x="142" y="279" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Pre-Approved Application Sent ✓</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#6ee7b7" text-anchor="middle">Processing Time: 14 Days ➔ 4 Days</text>
      `)
    },
    b: {
      alt: "3D loan calculator and verified bank security badge cluster",
      prompt: "Isolated 3D cluster with calculator, verified document checkmark, and 52% completion rate badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">📊</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">EMI Calculator</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Instant Eligibility Check</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#ecfdf5" stroke="#a7f3d0"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#065f46">Cycle Reduced to 4 Days</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#059669">NID / TIN Verified Securely</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#059669"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">+52% Completed Applications 📈</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#10b981"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🔒</text>
        </g>
      `)
    }
  },

  // 7. Education
  {
    folder: "industry/education-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying university admission eligibility, fee guidance, and counseling scheduling in chat",
      prompt: "Isolated 3D smartphone on transparent background displaying educational WhatsApp chat answering CSE tuition fee waiver in ৳, syllabus download, and 1-on-1 counseling slot confirmation.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#4f46e5"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🎓</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">UniAdmissions AI</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#a5b4fc">● Spring 2026 Open</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"CSE admission fee koto? HSC GPA</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">5-e ki scholarship ache?"</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="54" rx="12" fill="#312e81"/>
        <text x="40" y="146" font-size="20">🏆</text>
        <text x="68" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">50% Merit Waiver Granted</text>
        <text x="68" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#c7d2fe">Total Semester Fee: ৳ 42,500</text>

        <rect x="25" y="184" width="235" height="56" rx="12" fill="#0f172a"/>
        <text x="38" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Counseling Session Booked</text>
        <text x="38" y="224" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#818cf8">📅 Thursday 3:00 PM · Zoom Call</text>

        <rect x="25" y="250" width="235" height="44" rx="12" fill="#4f46e5"/>
        <text x="142" y="277" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Download Syllabus PDF 📥</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a5b4fc" text-anchor="middle">95% Repetitive Inquiries Automated</text>
      `)
    },
    b: {
      alt: "3D academic graduation cap and counseling appointment card cluster",
      prompt: "Isolated 3D cluster with graduation cap icon, admission prospectus card, and 48% counseling boost badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">📚</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">1-on-1 Counseling</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Live Admission Calendar</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#eef2ff" stroke="#c7d2fe"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#3730a3">Waiver Checked Instantly</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#4f46e5">Prospectus Sent in WhatsApp</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#4f46e5"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">+48% Completed Sessions 🎓</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#6366f1"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🎓</text>
        </g>
      `)
    }
  },

  // 8. SaaS
  {
    folder: "industry/saas-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying B2B SaaS lead enrichment and automated product demo scheduling",
      prompt: "Isolated 3D smartphone on transparent background displaying SaaS sales bot qualifying team size 50+, enriching CRM, and booking 30m demo call.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#0284c7"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">⚡</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">SaaS Bot SDR</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#38bdf8">● HubSpot / CRM Sync</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"We are 60 engineers looking</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">for an enterprise workflow bot."</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#082f49" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="54" rx="12" fill="#0c4a6e"/>
        <text x="40" y="146" font-size="20">🔥</text>
        <text x="68" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Enterprise SQL Qualified</text>
        <text x="68" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#7dd3fc">Budget: $1,200/mo · Team 60+</text>

        <rect x="25" y="184" width="235" height="56" rx="12" fill="#0f172a"/>
        <text x="38" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Demo Booked with Account Exec</text>
        <text x="38" y="224" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#38bdf8">📅 Friday 4:00 PM · Tanvir Ahmed</text>

        <rect x="25" y="250" width="235" height="44" rx="12" fill="#0284c7"/>
        <text x="142" y="277" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Trial Account Activated 🚀</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#7dd3fc" text-anchor="middle">3.5x Demo Completion Acceleration</text>
      `)
    },
    b: {
      alt: "3D cloud server webhook and interactive product demo calendar cluster",
      prompt: "Isolated 3D cluster with cloud database icon, demo meeting calendar, and 38% trial activation boost badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">💻</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Demo Acceleration</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Bi-directional CRM Sync</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#f0f9ff" stroke="#bae6fd"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1">3.5x Demo Booking Speed</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0284c7">38% Trial-to-Paid Lift</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#0284c7"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">80% L1 Support Deflection 🛡️</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#0284c7"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">⚙️</text>
        </g>
      `)
    }
  },

  // 9. Logistics
  {
    folder: "industry/logistics-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying live parcel tracking and delivery rescheduling via WhatsApp",
      prompt: "Isolated 3D smartphone on transparent background displaying courier WhatsApp bot tracking consignment #PTH-9821, showing rider phone number, and COD amount in ৳.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#ea580c"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🚚</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Express Track</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#fb923c">● Under 2s Lookup</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Amar parcel #PTH-9821 kothay?</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">Ajke ki deliver hobe?"</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="54" rx="12" fill="#7c2d12"/>
        <text x="40" y="146" font-size="20">🏍️</text>
        <text x="68" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Out for Delivery (Rider: Rafiq)</text>
        <text x="68" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fed7aa">Phone: 01712-XXXXXX · COD ৳ 1,450</text>

        <rect x="25" y="184" width="235" height="56" rx="12" fill="#1e293b"/>
        <text x="38" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">Pre-Delivery Alert Triggered</text>
        <text x="38" y="224" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fb923c">Estimated arrival: Today 2:30 PM</text>

        <rect x="25" y="250" width="235" height="44" rx="12" fill="#ea580c"/>
        <text x="142" y="277" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Confirm Available / Reschedule 📦</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fdba74" text-anchor="middle">+28% First-Attempt Delivery Success</text>
      `)
    },
    b: {
      alt: "3D delivery truck and real-time GPS tracking consignment card cluster",
      prompt: "Isolated 3D cluster with courier truck, GPS pin, and 2-second resolution speed badge on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">📦</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Real-Time Tracking</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Under 2s Lookup Speed</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#fff7ed" stroke="#fed7aa"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9a3412">First-Attempt Success: +28%</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ea580c">Call Center Load Down 82%</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#ea580c"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">Live GPS &amp; Rescheduling ⚡</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#f97316"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">🚚</text>
        </g>
      `)
    }
  },

  // 10. Agencies
  {
    folder: "industry/agency-chatbot-automation",
    a: {
      alt: "Smartphone mockup displaying multi-client marketing agency dashboard and click-to-WhatsApp ad triage",
      prompt: "Isolated 3D smartphone on transparent background displaying agency portal with 50+ managed accounts, click-to-message leads, and 50% cost-per-lead reduction card.",
      svgContent: makePhoneSvg(310, 600, `
        <circle cx="20" cy="18" r="14" fill="#7c3aed"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🏢</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Agency Hub Master</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#c4b5fd">● 50+ Workspaces Active</text>

        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="20" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Client ad campaign-er CPL 50%</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">kome geche click-to-WhatsApp-e."</text>

        <rect x="10" y="105" width="265" height="240" rx="16" fill="#2e1065" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="54" rx="12" fill="#4c1d95"/>
        <text x="40" y="146" font-size="20">📈</text>
        <text x="68" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">50% Lower Cost Per Lead</text>
        <text x="68" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ddd6fe">Meta Ads ➔ WhatsApp Instant Triage</text>

        <rect x="25" y="184" width="235" height="56" rx="12" fill="#0f172a"/>
        <text x="38" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">White-Label Client Portal</text>
        <text x="38" y="224" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a78bfa">Custom agency branding &amp; domains</text>

        <rect x="25" y="250" width="235" height="44" rx="12" fill="#7c3aed"/>
        <text x="142" y="277" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">Deploy Client Bot in 48 Hours ⚡</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#c4b5fd" text-anchor="middle">70%+ Retainer Margin Protected</text>
      `)
    },
    b: {
      alt: "3D marketing analytics chart and white-label client workspace card cluster",
      prompt: "Isolated 3D cluster with multi-client dashboard icon, white-label badge, and 50+ clients managed card on transparent background.",
      svgContent: makeClusterSvg(`
        <g transform="translate(60, 40)">
          <rect width="260" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="30" y="44" font-size="34">💼</text>
          <text x="74" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">Agency Scale Hub</text>
          <text x="74" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Unified Multi-Account Portal</text>

          <rect x="20" y="80" width="220" height="48" rx="12" fill="#f5f3ff" stroke="#ddd6fe"/>
          <text x="32" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#5b21b6">50+ Accounts Managed</text>
          <text x="32" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#7c3aed">70%+ Agency Gross Margin</text>

          <rect x="20" y="140" width="220" height="40" rx="12" fill="#7c3aed"/>
          <text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">Click-to-WhatsApp Leads (50% Off CPL) 🚀</text>
        </g>
        <g transform="translate(280, 160)">
          <circle cx="45" cy="45" r="45" fill="#8b5cf6"/>
          <text x="45" y="55" font-size="38" text-anchor="middle">👥</text>
        </g>
      `)
    }
  }
];

async function run() {
  const publicDir = path.resolve("public/assets/images");

  for (const spec of INDUSTRY_BENTO_SPECS) {
    const targetDir = path.join(publicDir, spec.folder);
    fs.mkdirSync(targetDir, { recursive: true });

    // Render A
    const fileA = path.join(targetDir, "bento-a.webp");
    await sharp(Buffer.from(spec.a.svgContent))
      .resize(600, 750)
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(fileA);
    const statA = fs.statSync(fileA);
    console.log(`Generated: ${spec.folder}/bento-a.webp (${Math.round(statA.size / 1024)} KB)`);

    // Render B
    const fileB = path.join(targetDir, "bento-b.webp");
    await sharp(Buffer.from(spec.b.svgContent))
      .resize(550, 420)
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(fileB);
    const statB = fs.statSync(fileB);
    console.log(`Generated: ${spec.folder}/bento-b.webp (${Math.round(statB.size / 1024)} KB)`);
  }
  console.log("All 20 Industry Bento images successfully created!");
}

run().catch(console.error);
