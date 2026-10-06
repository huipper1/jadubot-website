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
    name: "Lead Qualification & Hot Lead Badge",
    src: "/assets/images/home/hero/card-4.webp",
    alt: "Smartphone mockup on studio pedestal displaying Jadubot AI chat qualifying a buyer with a large Hot Lead 98% badge and rising intent arrow",
    prompt: "A realistic modern smartphone held upright on a clean minimalist studio pedestal with soft dramatic side lighting, matching the photography aesthetic of card 1 and card 2. On the phone screen is a dark-mode Jadubot conversational AI chat where a buyer asks for corporate gift sets. Jadubot AI qualifies the buyer with a large prominent glowing badge: '🔥 Hot Lead (98%)' in emerald green and bright orange, with a rising green arrow pill '+48% Intent'. Soft dark graphite studio background with subtle depth of field and soft shadow below the phone.",
    defaultRotateY: 0,
    curveY: 0,
    scaleFactor: 1
  },
  {
    id: "card-5",
    name: "Abandoned Cart Recovery via WhatsApp",
    src: "/assets/images/home/hero/card-5.webp",
    alt: "Smartphone mockup on light studio pedestal showing WhatsApp cart reminder with sneaker photo, ৳ 3,450 price, and green Complete Order button",
    prompt: "A realistic modern smartphone on a bright clean studio pedestal with soft daylight reflections. The screen shows a verified WhatsApp store chat with an abandoned cart reminder featuring a sharp sneaker product photo, price in ৳ 3,450, free delivery tag, and a large green 'Complete Order' button. Light studio background with gentle depth of field.",
    defaultRotateY: -6,
    curveY: 6,
    scaleFactor: 0.99
  },
  {
    id: "card-6",
    name: "Bot-to-Human Handover on Support Desk",
    src: "/assets/images/home/hero/card-6.webp",
    alt: "Smartphone mockup on royal blue pedestal showing chat flow from bot message into human support agent avatar with Agent Joined pill",
    prompt: "A realistic modern smartphone on a radiant royal blue studio pedestal with soft rim lighting. The screen shows a live support desk chat where a Jadubot AI message transitions seamlessly into a human agent's reply with a friendly photo avatar of Tanvir Ahmed, an emerald 'Agent joined' status pill, and wholesale discount approval. Blue studio background.",
    defaultRotateY: -13,
    curveY: 18,
    scaleFactor: 0.96
  },
  {
    id: "card-7",
    name: "Live Parcel Order Tracking",
    src: "/assets/images/home/hero/card-7.webp",
    alt: "Smartphone mockup on warm studio pedestal showing delivery status card with motorbike rider icon, 4-step progress, and COD amount in ৳",
    prompt: "A realistic modern smartphone on a warm peach and terracotta studio pedestal with soft sunlit lighting. The screen shows an e-commerce order tracking card featuring a delivery rider on a motorbike icon, a 4-step progress line (Order, Packed, On Way, Done), and a Steadfast COD payment breakdown in ৳ 1,450. Warm light background.",
    defaultRotateY: -20,
    curveY: 36,
    scaleFactor: 0.92
  },
  {
    id: "card-8",
    name: "Unified Team Inbox on Modern Laptop",
    src: "/assets/images/home/hero/card-8.webp",
    alt: "Laptop mockup on dark workspace desk showing clean omnichannel inbox with WhatsApp, Messenger, and Instagram conversation rows and assigned agents",
    prompt: "A sleek modern laptop open on a clean dark studio desk with soft overhead key light. The laptop screen displays Jadubot's omnichannel team inbox with 3 large readable conversation rows tagged with green WhatsApp, blue Messenger, and pink Instagram channel badges, plus assigned human agent chips (Sadia, Nayeem) and live status.",
    defaultRotateY: -26,
    curveY: 54,
    scaleFactor: 0.88
  }
];
