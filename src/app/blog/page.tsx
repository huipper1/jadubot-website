import type { Metadata } from "next";
import { BlogHero, BlogGrid } from "@/components/routes/blog";
import { getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog - Jadubot",
  description:
    "Jadubot-এর ব্লগে পড়ুন AI, চ্যাটবট, মার্কেটিং এবং অটোমেশন সম্পর্কিত ইনসাইটস এবং স্ট্র্যাটেজি। Level up your digital presence!",
  keywords: [
    "Banglaeshi AI-powered chatbot service provider",
    "marketing automation services",
    "Facebook Messenger automation",
    "Instagram DM automation",
    "চ্যাটবট",
    "e-commerce workflow automation",
    "SMS marketing",
    "জাদুবট",
    "email marketing",
    "জাদুবট.কম",
    "auto-comments",
    "auto-replies",
    "sales assistance",
    "customer engagement",
    "e-commerce integration",
    "chatbot marketing",
    "automated marketing campaigns",
    "AI marketing tools",
    "business automation",
    "social media automation",
    "comment automation",
    "customer support automation",
    "অটোমেশন টুল",
    "lead generation automation",
    "predictive analytics in marketing",
    "marketing workflow automation",
    "automate for small businesses",
    "মার্কেটিং টুল",
    "AI-driven marketing",
    "automated customer interactions",
    "marketing automate tools for businesses",
    "automated chatbots for sales"
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large"
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/`
  },
  openGraph: {
    title: "Blog Jadubot – AI Automation Tips, Tutorials & Marketing Tricks",
    description:
      "Explore Jadubot-এর ব্লগ যেখানে আপনি পাবেন AI chatbot, automation tools, Facebook Messenger marketing এবং digital growth নিয়ে টিপস ও ট্রিকস! Stay ahead in smart business with Jadubot.",
    url: `${siteConfig.url}/blog/`,
    siteName: "Jadubot",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/assets/images/blog/Jadubot-Social-Preview-blog.jpg`,
        width: 1200,
        height: 628,
        alt: "Blog Jadubot",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Jadubot – AI Automation Tips, Tutorials & Marketing Tricks",
    description:
      "Explore Jadubot-এর ব্লগ যেখানে আপনি পাবেন AI chatbot, automation tools, Facebook Messenger marketing এবং digital growth নিয়ে টিপস ও ট্রিকস! Stay ahead in smart business with Jadubot.",
    site: "@jadubot",
    images: [`${siteConfig.url}/assets/images/blog/Jadubot-Social-Preview-blog.jpg`]
  }
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": "Jadubot",
        "url": siteConfig.url,
        "sameAs": [
          "https://www.facebook.com/jadubotbd/",
          "https://twitter.com/jadubot"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/assets/images/shared/jadubot-logo.png`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": "Jadubot",
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/blog/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": siteConfig.url,
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": `${siteConfig.url}/blog/`,
              "name": "Blog"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/blog/#webpage`,
        "url": `${siteConfig.url}/blog/`,
        "name": "Blog - Jadubot",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`
        },
        "inLanguage": "en-US",
        "breadcrumb": {
          "@id": `${siteConfig.url}/blog/#breadcrumb`
        },
        "description":
          "Jadubot-এর ব্লগে পড়ুন AI, চ্যাটবট, মার্কেটিং এবং অটোমেশন সম্পর্কিত ইনসাইটস এবং স্ট্র্যাটেজি। Level up your digital presence!",
        "hasPart": posts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `${siteConfig.url}/blog/${post.fileSlug}/`,
          "datePublished": post.date,
          "image": `${siteConfig.url}${post.featuredImage}`
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
