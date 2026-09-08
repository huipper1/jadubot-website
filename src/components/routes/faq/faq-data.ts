export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "General & Platform Overview",
    items: [
      {
        question: "What is Jadubot and how does it automate social commerce?",
        answer:
          "Jadubot is Bangladesh's #1 AI-powered chatbot and marketing automation platform. It connects with your Facebook Pages and Instagram accounts to automatically answer customer inquiries, reply to post and reel comments, deliver instant private messages, showcase in-chat product stores, and process orders 24/7 without manual effort."
      },
      {
        question: "Do I need coding or technical knowledge to use Jadubot?",
        answer:
          "No technical or programming skills are needed. Jadubot provides an intuitive, non-technical dashboard with ready-to-use automation templates, visual keyword mappers, and one-click Facebook & Instagram integrations."
      },
      {
        question: "Does Jadubot understand the Bengali language and phonetic Banglish?",
        answer:
          "Yes. Jadubot was engineered specifically for Bangladeshi consumer behavior. It accurately parses standard Bengali script, phonetic Banglish (such as 'koto dam', 'delivery details janan', 'order korbo'), and English phrases to trigger natural, appropriate responses."
      }
    ]
  },
  {
    category: "Facebook & Instagram Automation",
    items: [
      {
        question: "How does the Comment-to-Inbox auto-reply system operate?",
        answer:
          "When an audience member comments on any of your organic posts, Instagram Reels, or boosted ads, Jadubot automatically likes their comment, posts a public reply to boost Facebook/Instagram algorithmic reach, and sends an immediate direct message into their inbox containing product links, price details, and checkout buttons."
      },
      {
        question: "Can Jadubot protect my ads and posts from competitor spam?",
        answer:
          "Yes. Jadubot features real-time auto-moderation. It automatically hides or removes competitor links, profanity, duplicate spam, or phone numbers posted in your comment section to protect your hard-earned customer leads."
      },
      {
        question: "Does Jadubot support Instagram Story mentions and reactions?",
        answer:
          "Yes. Whenever an Instagram user tags your handle in their Story or reacts to your Story posts, Jadubot immediately delivers a personalized direct message to open a conversation while their interest is highest."
      }
    ]
  },
  {
    category: "Inside Messenger Commerce (F-Commerce)",
    items: [
      {
        question: "How does the In-Messenger Commerce store function?",
        answer:
          "Jadubot allows you to create a complete online store directly inside Facebook Messenger. Shoppers browse your product catalog, select sizes and colors, add items to their cart, enter their shipping address and phone number, and confirm orders without ever leaving Messenger."
      },
      {
        question: "Can customers place Cash on Delivery (COD) orders in chat?",
        answer:
          "Yes. Cash on Delivery is natively supported alongside bKash and Nagad payment options. Once an order is placed, your team receives an instant notification with full customer delivery and phone details."
      },
      {
        question: "Does Jadubot require an external eCommerce website or Shopify store?",
        answer:
          "No external website is necessary. You can run your entire sales operation, inventory display, and checkout workflow solely through Facebook Messenger using Jadubot."
      }
    ]
  },
  {
    category: "CPA Marketing & Lead Generation",
    items: [
      {
        question: "What CPA marketing features does Jadubot provide?",
        answer:
          "Jadubot offers specialized CPA automation modules including server-to-server (S2S) postback pings, multi-account rotation, anti-spam delay scheduling, keyword-driven offer routing, and real-time lead tagging tailored for high-volume media buyers."
      },
      {
        question: "Can I manage multiple Facebook and Instagram accounts for CPA campaigns?",
        answer:
          "Yes. Our CPA Packages (Pack 1 to Pack 5) support anywhere from 2 to 30+ connected accounts with centralized campaign controls and high-volume pacing engines."
      },
      {
        question: "Can Jadubot send postback data to third-party tracking tools?",
        answer:
          "Yes. Jadubot can transmit lead capture events and conversion webhooks directly to tracking platforms like Voluum, RedTrack, Binom, or custom postback URLs."
      }
    ]
  },
  {
    category: "Safety, Compliance & Anti-Spam",
    items: [
      {
        question: "Is using Jadubot safe for my Facebook Page and Instagram account?",
        answer:
          "Yes. Jadubot connects via official Meta Graph APIs and strictly adheres to Meta Platform Terms. We enforce randomized anti-spam delays, spintax variations, and sensible frequency caps to ensure your accounts maintain maximum safety and integrity."
      },
      {
        question: "How does human live agent handoff work?",
        answer:
          "If a customer requests human assistance or asks a complex custom question, Jadubot pauses automated responses for that specific chat thread and alerts your human customer service team to take over seamlessly."
      }
    ]
  },
  {
    category: "Pricing, Payment Methods & 7-Day Refund Policy",
    items: [
      {
        question: "Is there a free trial to test Jadubot?",
        answer:
          "Yes. Jadubot offers a risk-free trial plan allowing you to test automated comments, Messenger replies, and core features before committing to a paid tier."
      },
      {
        question: "Which payment methods are accepted for Bangladeshi users?",
        answer:
          "We accept all major Bangladeshi payment options including bKash, Nagad, Rocket, local Visa/Mastercard, and direct bank transfers."
      },
      {
        question: "What is your refund policy?",
        answer:
          "Jadubot provides an unconditional 7-day money-back guarantee on all paid plans. If you are not completely satisfied with the platform, simply submit a ticket through our portal within 7 days for a prompt refund."
      }
    ]
  }
];
