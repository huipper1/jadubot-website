import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";

import { getPlatformBySlug, platformData } from "@/data/platform-data";

import { PlatformPageTemplate } from "@/components/routes/platform";

interface PlatformRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return platformData.map((platform) => ({
    slug: platform.slug
  }));
}

export async function generateMetadata({ params }: PlatformRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return {
      title: "Platform Not Found | Jadubot"
    };
  }

  const pageUrl = `${siteConfig.url}/platform/${platform.slug}/`;

  return {
    title: platform.metaTitle,
    description: platform.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: platform.metaTitle,
      description: platform.metaDescription,
      url: pageUrl,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
          width: 1200,
          height: 630,
          alt: `${platform.name} - Jadubot`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: platform.metaTitle,
      description: platform.metaDescription,
      images: [`${siteConfig.url}/assets/images/shared/jadubot-logo.png`]
    }
  };
}

export default async function PlatformPage({ params }: PlatformRouteProps) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
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
            name: "Platforms",
            item: `${siteConfig.url}/platform/${platform.slug}/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: platform.name,
            item: `${siteConfig.url}/platform/${platform.slug}/`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        name: `Jadubot ${platform.name}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: platform.metaDescription,
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
      <PlatformPageTemplate platform={platform} />
    </>
  );
}
