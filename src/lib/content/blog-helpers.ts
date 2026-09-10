import { Marked } from "marked";
import { getAllBlogPosts } from "./get-blog-posts";
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

/**
 * Parses markdown into accessible HTML with anchor IDs for headings (H2, H3),
 * extracts structured headings for Table of Contents, and calculates reading stats.
 */
export function parseBlogMarkdown(rawContent: string): ParsedBlogContent {
  const headings: BlogHeading[] = [];
  let headingIndex = 0;

  const markedInstance = new Marked({
    gfm: true,
    breaks: false,
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        // Only index H2 and H3 for Table of Contents navigation
        if (depth === 2 || depth === 3) {
          headingIndex++;
          const id = `section-${headingIndex}`;
          // Clean text for TOC without HTML tags or markdown markers
          const cleanText = text.replace(/<[^>]*>?/gm, "").trim();
          headings.push({ id, text: cleanText, level: depth });
          return `<h${depth} id="${id}" class="scroll-mt-28 group relative flex items-baseline justify-between">${text}<a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-[#0172ff] hover:text-[#38bdf8] text-sm font-normal select-none" aria-label="Link to this section">#</a></h${depth}>\n`;
        }
        return `<h${depth}>${text}</h${depth}>\n`;
      }
    }
  });

  const html = markedInstance.parse(rawContent, { async: false }) as string;

  // Calculate dynamic reading time based on total words (both Latin & Bengali words)
  const words = rawContent.trim().split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.ceil(words / 180));

  return {
    html,
    headings,
    stats: {
      words,
      readTimeMinutes
    }
  };
}

/**
 * Returns related blog posts excluding the active post
 */
export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  return allPosts
    .filter(
      (post) =>
        post.fileSlug !== currentSlug &&
        post.slug !== currentSlug &&
        post.canonicalSlug !== currentSlug
    )
    .slice(0, limit);
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
