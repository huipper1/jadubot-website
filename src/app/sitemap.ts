import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/service/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pricing/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cpa-marketing-automation/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/affiliate/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/refund/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/book-a-free-demo/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog/`, changeFrequency: "daily", priority: 0.8 }
  ];

  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.fileSlug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
