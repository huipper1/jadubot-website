import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";

import { aiAgentData, getAgentBySlug } from "@/data/ai-agent-data";

import { AgentPageTemplate } from "@/components/routes/ai-agents";

interface AgentRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return aiAgentData.map((agent) => ({
    slug: agent.slug
  }));
}

export async function generateMetadata({ params }: AgentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return {
      title: "AI Agent Not Found | Jadubot"
    };
  }

  const pageUrl = `${siteConfig.url}/ai-agents/${agent.slug}/`;

  return {
    title: agent.metaTitle,
    description: agent.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: agent.metaTitle,
      description: agent.metaDescription,
      url: pageUrl,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
          width: 1200,
          height: 630,
          alt: `${agent.name} - Jadubot`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: agent.metaTitle,
      description: agent.metaDescription,
      images: [`${siteConfig.url}/assets/images/shared/jadubot-logo.png`]
    }
  };
}

export default async function AgentPage({ params }: AgentRouteProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Agents",
            item: `${siteConfig.url}/ai-agents/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: agent.name,
            item: `${siteConfig.url}/ai-agents/${agent.slug}/`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        name: `Jadubot ${agent.name}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: agent.metaDescription,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentPageTemplate agent={agent} />
    </>
  );
}
