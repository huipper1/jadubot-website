export interface HeroCardImageConfig {
  id: string;
  name: string;
  src: string;
  alt: string;
  prompt: string;
  defaultRotateY: number; // In degrees (-22 to +22)
  curveY: number; // In px along parabolic arc
  scaleFactor: number;
}

export const HERO_CARDS_LIST: HeroCardImageConfig[] = [
  {
    id: "card-1",
    name: "WhatsApp Order Confirmation",
    src: "/assets/images/home/hero/card-1.webp",
    alt: "WhatsApp verified business chat showing automated Jadubot order confirmation with ৳ 2,450 amount and REDX courier tracking ID",
    prompt: "Clean modern 3D UI smartphone screen mockup of a verified WhatsApp Business chat interface. Jadubot AI bot confirms an online delivery order: shows 'Order #JB-9842 Confirmed', total '৳ 2,450', Cash on Delivery COD badge, and tracking ID 'REDX-88219'. Bright vibrant electric blue and WhatsApp emerald green accents, crisp clean white card surfaces, soft shadows, Bangladesh ecommerce context.",
    defaultRotateY: 20,
    curveY: 36,
    scaleFactor: 0.92
  },
  {
    id: "card-2",
    name: "Facebook Comment to Messenger DM",
    src: "/assets/images/home/hero/card-2.webp",
    alt: "Facebook post comment 'PRICE?' flowing directly into a Messenger DM with product card and ৳ 1,850 checkout button",
    prompt: "Clean modern UI mockup of a dark navy mode social commerce flow. A Facebook post showing a fashionable apparel item with customer comment 'PRICE?'. A bright glowing blue connector line points directly to an incoming Facebook Messenger DM card where Jadubot auto-replies instantly with a crisp product photo, '৳ 1,850 only', and a sleek 'Order Now' button.",
    defaultRotateY: 13,
    curveY: 18,
    scaleFactor: 0.96
  },
  {
    id: "card-3",
    name: "Instagram Story Reply to DM Catalog",
    src: "/assets/images/home/hero/card-3.webp",
    alt: "Instagram story reply triggering auto-DM with multi-item product catalog preview and Explore Collection button",
    prompt: "Clean modern mobile UI mockup of Instagram Reels and Story auto-reply DM. A stylish Instagram story frame on top with a viewer sticker reply 'Send catalog!', transitioning seamlessly into an Instagram Direct Message bubble card below containing a 3-item carousel product catalog preview with prices and an 'Explore Collection' link button.",
    defaultRotateY: 6,
    curveY: 6,
    scaleFactor: 0.99
  },
  {
    id: "card-4",
    name: "Sales Radar & Lead Conversion",
    src: "/assets/images/home/hero/card-4.webp",
    alt: "Sales analytics dashboard with rising conversion chart and hot, warm, cold lead badges in Bangladesh ecommerce",
    prompt: "Clean high-tech dark SaaS sales dashboard UI card mockup. Prominent smooth rising glowing neon blue and cyan conversion graph line showing +42% growth. Bold status badges: 'Hot Leads (84%)' in vibrant emerald green, 'Warm Leads' in amber, and 'Closed Won' in electric blue. Clean dark navy graphite card with subtle glassmorphism border.",
    defaultRotateY: 0,
    curveY: 0,
    scaleFactor: 1
  },
  {
    id: "card-5",
    name: "Cart Rescue & WhatsApp Nudge",
    src: "/assets/images/home/hero/card-5.webp",
    alt: "Abandoned cart recovery flow with ৳ 3,250 Panjabi item and automated WhatsApp checkout reminder with free shipping",
    prompt: "Clean minimal SaaS cart recovery card showing an abandoned cart with a Panjabi product, paired with an automated WhatsApp reminder offering free shipping and one-tap checkout button. Crisp light aesthetic with emerald green recovery indicators.",
    defaultRotateY: -6,
    curveY: 6,
    scaleFactor: 0.99
  },
  {
    id: "card-6",
    name: "Bot-to-Human Live Handover",
    src: "/assets/images/home/hero/card-6.webp",
    alt: "Chat interface showing seamless bot-to-human agent escalation with avatar takeover and custom quote actions",
    prompt: "Vibrant electric blue SaaS card illustrating seamless bot-to-human agent escalation. Jadubot bot notifies customer of handoff, followed by a human support specialist avatar taking over with 0-second delay and action buttons for invoices and scheduling.",
    defaultRotateY: -13,
    curveY: 18,
    scaleFactor: 0.96
  },
  {
    id: "card-7",
    name: "Courier Sync & Parcel Tracking",
    src: "/assets/images/home/hero/card-7.webp",
    alt: "Real-time delivery tracking card with rider timeline and automated Bangla SMS notification for Steadfast and Pathao",
    prompt: "Warm-accented e-commerce parcel tracking card featuring delivery rider icon, step-by-step progress timeline (Placed, Packed, On Way, Delivered), and automated Bangla/English customer notification with COD amount in ৳.",
    defaultRotateY: -20,
    curveY: 36,
    scaleFactor: 0.92
  },
  {
    id: "card-8",
    name: "Unified Team Inbox & Multichannel",
    src: "/assets/images/home/hero/card-8.webp",
    alt: "Omnichannel inbox aggregating WhatsApp, Facebook, Instagram, and Telegram conversations with agent assignments",
    prompt: "High-contrast dark indigo SaaS card showing unified team inbox with synchronized conversations across WhatsApp, Messenger, Instagram, and Telegram, assigned agent tags, and 14-second average response time badge.",
    defaultRotateY: -26,
    curveY: 54,
    scaleFactor: 0.88
  }
];
