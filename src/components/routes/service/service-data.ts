export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  layout: "content-left" | "content-right";
  iconType: "messenger" | "instagram" | "lead" | "store" | "gps" | "ai";
}

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "facebook-messenger-automation",
    number: "01",
    title: "Facebook Messenger Automation",
    description:
      "AI-powered automation tools to answer queries, engage customers, qualify leads and drive sales, all within Messenger.",
    benefits: [
      "Instant replies & engagement",
      "Lead capture & qualification",
      "Seamless human handoff",
      "Boost conversions effortlessly"
    ],
    image: "/assets/images/service/facebook.png",
    imageAlt: "Facebook Messenger Automation chat inbox interface",
    imageWidth: 762,
    imageHeight: 367,
    layout: "content-left",
    iconType: "messenger"
  },
  {
    id: "instagram-dm-story-automation",
    number: "02",
    title: "Instagram DM & Story Automation",
    description:
      "Automate replies to DMs, story interactions, and comments. Turn your Instagram into a 24/7 sales engine.",
    benefits: [
      "Auto-reply to DMs & comments",
      "Story mention & reply automation",
      "Lead nurturing and conversion",
      "Increase reach and engagement"
    ],
    image: "/assets/images/service/instagram.png",
    imageAlt: "Instagram DM & Story Automation smartphone mockup",
    imageWidth: 765,
    imageHeight: 377,
    layout: "content-right",
    iconType: "instagram"
  },
  {
    id: "content-ai-sales-lead-generator",
    number: "03",
    title: "Content, AI & Sales Lead Generator",
    description:
      "Automatically identify & engage with potential customers, create personalized outreach, and generate high-quality leads using AI.",
    benefits: [
      "Find relevant leads automatically",
      "AI-powered personalized messaging",
      "Multi-platform outreach support",
      "Track and manage leads easily"
    ],
    image: "/assets/images/service/lead.png",
    imageAlt: "AI Lead Generator dashboard and performance metrics",
    imageWidth: 764,
    imageHeight: 336,
    layout: "content-left",
    iconType: "lead"
  },
  {
    id: "messenger-store-cart-system",
    number: "04",
    title: "Messenger Store & Cart System",
    description:
      "Turn conversations into sales with our built-in store and cart system. Let customers browse products, add to cart, and checkout directly in Messenger.",
    benefits: [
      "Product catalog in chat",
      "Add to cart & secure checkout",
      "Order tracking & notifications",
      "Easy returns & support"
    ],
    image: "/assets/images/service/store.png",
    imageAlt: "Messenger Store & Cart System eCommerce catalog",
    imageWidth: 763,
    imageHeight: 333,
    layout: "content-right",
    iconType: "store"
  },
  {
    id: "gps-marketing-automation",
    number: "05",
    title: "GPS Marketing Automation",
    description:
      "Reach local customers with GPS-based marketing. Send targeted messages, offers, and updates to people in specific locations.",
    benefits: [
      "Location-based audience targeting",
      "Send offers & updates automatically",
      "Ideal for local businesses & events",
      "Increase foot traffic and sales"
    ],
    image: "/assets/images/service/gps-marketing.png",
    imageAlt: "GPS Marketing Automation radius target radar map",
    imageWidth: 765,
    imageHeight: 302,
    layout: "content-left",
    iconType: "gps"
  },
  {
    id: "enterprise-custom-ai-training",
    number: "06",
    title: "Enterprise & Custom AI Training",
    description:
      "Tailored AI solutions for large businesses and unique use-cases. Train custom AI models on your data to deliver intelligent, brand-aligned experiences.",
    benefits: [
      "Custom AI model development",
      "Train on your business data",
      "Seamless integration with existing tools",
      "Dedicated support & consulting"
    ],
    image: "/assets/images/service/ai.png",
    imageAlt: "Enterprise & Custom AI Training with glowing 3D AI neural core",
    imageWidth: 763,
    imageHeight: 301,
    layout: "content-left",
    iconType: "ai"
  }
];

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export const SERVICE_FAQS: ServiceFaqItem[] = [
  {
    question: "How fast does Jadubot respond to Messenger and Instagram inquiries?",
    answer:
      "Jadubot replies within 2 seconds of a user sending a message, commenting on a post, or replying to a Story. This immediate response prevents lead drop-off and significantly boosts conversion rates compared to manual customer support."
  },
  {
    question: "Does the Comment-to-Inbox auto-reply feature comply with Meta policies?",
    answer:
      "Yes, 100%. Jadubot operates strictly through official Meta Graph APIs and adheres to all platform terms of service. Our system includes built-in anti-spam delay pacing and randomized response rotation so your Facebook and Instagram accounts remain safe from restrictions."
  },
  {
    question: "Can customers order products directly inside Facebook Messenger?",
    answer:
      "Yes. Jadubot includes an in-chat Messenger Commerce store. Shoppers can view your product catalog, choose attributes such as size and color, submit their delivery address and phone number, and choose Cash on Delivery (COD) or mobile payment options like bKash and Nagad."
  },
  {
    question: "Does Jadubot understand Bangla and phonetic Banglish?",
    answer:
      "Yes. Jadubot was built specifically for the Bangladeshi market. Its natural language processing engine recognizes standard Bengali script, phonetic Banglish (e.g., 'dam koto', 'delivery charge koto'), and English keywords to ensure accurate, natural responses."
  },
  {
    question: "Can human support agents take over conversations from the AI bot?",
    answer:
      "Absolutely. Whenever a customer asks for a live representative or a question requires manual intervention, Jadubot pauses the automated flow for that user and notifies your support team so an agent can seamlessly reply."
  },
  {
    question: "How does Jadubot support CPA marketing and affiliate campaigns?",
    answer:
      "Jadubot provides dedicated CPA automation tools including instant S2S (server-to-server) postback triggers, automated comment-to-DM funnels, multi-account routing, and affiliate lead tagging designed for high-volume performance marketing."
  }
];

