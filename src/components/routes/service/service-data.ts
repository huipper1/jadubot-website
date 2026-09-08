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
