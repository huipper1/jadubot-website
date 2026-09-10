import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";
import { getAllBlogPosts } from "./get-blog-posts";
import type { BlogPostMeta } from "@/types/content";
import {
  BlogHeading,
  BlogStats,
  ParsedBlogContent,
  EnrichedBlogPostMeta,
  getBlogTopic,
  formatBlogDate
} from "./blog-utils";

export * from "./blog-utils";

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
 * Retrieves all blog posts enriched with calculated reading time and topic classification
 */
export function getAllBlogPostsWithStats(): EnrichedBlogPostMeta[] {
  const posts = getAllBlogPosts();
  return posts.map((post) => {
    let readTimeMinutes = 6;
    try {
      const mdxPath = path.join(process.cwd(), "content", "blog", `${post.fileSlug}.mdx`);
      if (fs.existsSync(mdxPath)) {
        const raw = fs.readFileSync(mdxPath, "utf8");
        const words = raw.trim().split(/\s+/).filter(Boolean).length;
        readTimeMinutes = Math.max(1, Math.ceil(words / 180));
      }
    } catch {
      // fallback
    }
    return {
      ...post,
      readTimeMinutes,
      topic: getBlogTopic(post.fileSlug, post.title)
    };
  });
}

/**
 * Returns related blog posts excluding the active post
 */
export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPostMeta[] {
  const allPosts = getAllBlogPosts();
  let decodedCurrent = currentSlug;
  try {
    decodedCurrent = decodeURIComponent(currentSlug);
  } catch {
    // ignore
  }

  return allPosts
    .filter((post) => {
      let decodedPost = post.slug;
      try {
        decodedPost = decodeURIComponent(post.slug);
      } catch {
        // ignore
      }

      return (
        post.fileSlug !== currentSlug &&
        post.slug !== currentSlug &&
        post.canonicalSlug !== currentSlug &&
        decodedPost !== currentSlug &&
        post.slug !== decodedCurrent &&
        decodedPost !== decodedCurrent
      );
    })
    .slice(0, limit);
}
