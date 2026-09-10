import type { BlogPostMeta } from "@/types/content";

export interface BlogHeading {
  id: string;
  text: string;
  level: number;
}

export interface BlogStats {
  words: number;
  readTimeMinutes: number;
}

export interface ParsedBlogContent {
  html: string;
  headings: BlogHeading[];
  stats: BlogStats;
}

export interface EnrichedBlogPostMeta extends BlogPostMeta {
  readTimeMinutes: number;
  topic: string;
}

/**
 * Returns a human-friendly sentence-case topic category based on slug and title
 */
export function getBlogTopic(slug: string, title: string = ""): string {
  const combined = `${slug} ${title}`.toLowerCase();
  if (combined.includes("instagram") || combined.includes("dm")) return "Instagram DMs";
  if (combined.includes("facebook") || combined.includes("page") || combined.includes("ফেসবুক")) return "Facebook automation";
  if (combined.includes("free") || combined.includes("টপ 1") || combined.includes("ফ্রি")) return "Free tools & guides";
  if (
    combined.includes("cpa") ||
    combined.includes("marketing") ||
    combined.includes("মার্কেটিং") ||
    combined.includes("software")
  ) {
    return "Marketing strategy";
  }
  return "Automation guide";
}

/**
 * Safe date formatter
 */
export function formatBlogDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date);
  } catch {
    return dateString;
  }
}
