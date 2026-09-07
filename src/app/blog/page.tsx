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

  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
