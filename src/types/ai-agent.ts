export interface AgentFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface AgentStep {
  step: string;
  title: string;
  description: string;
}

export interface AgentFaqItem {
  question: string;
  answer: string;
}

export interface AgentData {
  slug: string;
  name: string;
  category: "role" | "commerce";
  navTitle: string;
  navDescription: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroStats: {
    label: string;
    value: string;
  }[];
  heroVisualType:
    | "lead-qualification"
    | "customer-support"
    | "sales-agent"
    | "shopify-whatsapp"
    | "woocommerce-whatsapp";
  featuresSectionTitle: string;
  featuresSectionSubtitle: string;
  features: AgentFeature[];
  processTitle: string;
  processSubtitle: string;
  steps: AgentStep[];
  faqs: AgentFaqItem[];
}
