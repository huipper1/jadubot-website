export interface ContentHeading {
  level: number;
  text: string;
}

export interface ContentLink {
  href: string;
  text: string;
}

export interface ContentImage {
  original: string;
  local: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface PageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  ogImage: string;
  headings: ContentHeading[];
  links: ContentLink[];
  images: ContentImage[];
  rawHtmlPreview: string;
  faqs?: FaqItem[];
  tiers?: PricingTier[];
}

export interface BlogPostMeta {
  id: number;
  title: string;
  slug: string;
  fileSlug: string;
  canonicalSlug?: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  link?: string;
}

export interface AssetItem {
  originalUrl: string;
  localPath: string;
  category: string;
  alt: string;
  sourcePage?: string;
}

export interface AssetManifest {
  generatedAt: string;
  totalAssets: number;
  assets: AssetItem[];
}
