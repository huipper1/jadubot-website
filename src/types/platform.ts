export interface PlatformFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface PlatformStep {
  step: string;
  title: string;
  description: string;
}

export interface PlatformFaqItem {
  question: string;
  answer: string;
}

export interface PlatformData {
  slug: string;
  name: string;
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
  heroVisualType: "whatsapp" | "facebook" | "instagram" | "telegram" | "webchat";
  featuresSectionTitle: string;
  featuresSectionSubtitle: string;
  features: PlatformFeature[];
  processTitle: string;
  processSubtitle: string;
  steps: PlatformStep[];
  faqs: PlatformFaqItem[];
}
