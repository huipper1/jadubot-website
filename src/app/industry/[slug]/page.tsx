import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  INDUSTRIES,
  getIndustryBySlug,
  IndustryHero,
  IndustrySplitShowcase,
  IndustryRoiSection,
  IndustryWorkflow,
  IndustryUseCases,
  IndustryFaq,
  IndustryCta
} from "@/components/routes/industry";
import { siteConfig } from "@/config/site";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    slug: ind.slug
  }));
}

export async function generateMetadata({
  params
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Jadubot"
    };
  }

  const pageUrl = `${siteConfig.url}/industry/${industry.slug}/`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: industry.hero.image,
          width: 1200,
          height: 630,
          alt: `${industry.name} AI Chatbot Automation`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: [industry.hero.image]
    }
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": `${siteConfig.url}/industry/${industry.slug}/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": industry.name,
            "item": `${siteConfig.url}/industry/${industry.slug}/`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": `Jadubot for ${industry.name}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-based SaaS",
        "description": industry.metaDescription,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": industry.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#0c0e12] text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryHero industry={industry} />
      <IndustrySplitShowcase industry={industry} />
      <IndustryRoiSection industry={industry} />
      <IndustryWorkflow industry={industry} />
      <IndustryUseCases industry={industry} />
      <IndustryFaq industry={industry} />
      <IndustryCta industry={industry} />
    </div>
  );
}
