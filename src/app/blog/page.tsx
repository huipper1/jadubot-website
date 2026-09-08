import type { Metadata } from "next";
import { BlogHero, BlogGrid } from "@/components/routes/blog";
import { getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog & Insights – Facebook & Instagram Chatbot Guides | Jadubot",
  description:
    "Explore actionable guides, marketing automation tips, and tutorials on setting up Facebook Messenger bots, auto-reply comments, and eCommerce flows in Bangladesh.",
  alternates: {
    canonical: "/blog/"
  },
  openGraph: {
    title: "Blog & Insights | Jadubot",
    description: "Marketing automation guides, chatbot setup tips, and tutorials for Bangladesh businesses.",
    url: `${siteConfig.url}/blog/`
  }
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

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
            "name": "Blog",
            "item": `${siteConfig.url}/blog/`
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Jadubot Blog & Insights",
        "description":
          "Marketing automation guides, social media bot tutorials, and conversational commerce strategies for Bangladeshi businesses.",
        "url": `${siteConfig.url}/blog/`,
        "hasPart": posts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `${siteConfig.url}/blog/${post.fileSlug}/`,
          "datePublished": post.date
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
