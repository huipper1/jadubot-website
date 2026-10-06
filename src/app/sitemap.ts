import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import { getAllBlogPosts } from "@/lib/content";

import { aiAgentData } from "@/data/ai-agent-data";
import { platformData } from "@/data/platform-data";

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

  const platformRoutes: MetadataRoute.Sitemap = platformData.map((platform) => ({
    url: `${baseUrl}/platform/${platform.slug}/`,
    changeFrequency: "weekly",
    priority: 0.9
  }));

  const agentRoutes: MetadataRoute.Sitemap = aiAgentData.map((agent) => ({
    url: `${baseUrl}/ai-agents/${agent.slug}/`,
    changeFrequency: "weekly",
    priority: 0.9
  }));

  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...platformRoutes, ...agentRoutes, ...blogRoutes];
}
