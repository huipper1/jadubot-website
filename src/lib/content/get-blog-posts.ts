import fs from "node:fs";
import path from "node:path";
import type { BlogPostMeta } from "@/types/content";

export function getAllBlogPosts(): BlogPostMeta[] {
  try {
    const indexPath = path.join(process.cwd(), "content", "blog", "index.json");
    if (!fs.existsSync(indexPath)) {
      return [];
    }

    const data = fs.readFileSync(indexPath, "utf8");
    return JSON.parse(data) as BlogPostMeta[];
  } catch (error) {
    console.error("Error loading blog posts index:", error);
    return [];
  }
}

export function getBlogPostBySlug(
  slug: string
): { meta: BlogPostMeta; content: string } | null {
  try {
    const posts = getAllBlogPosts();
    const decodedSlug = decodeURIComponent(slug);

    const post = posts.find(
      (p) =>
        p.slug === slug ||
        p.fileSlug === slug ||
        p.canonicalSlug === slug ||
        p.slug === decodedSlug
    );

    if (!post) {
      return null;
    }

    const mdxPath = path.join(
      process.cwd(),
      "content",
      "blog",
      `${post.fileSlug}.mdx`
    );

    if (!fs.existsSync(mdxPath)) {
      return null;
    }

    const rawFile = fs.readFileSync(mdxPath, "utf8");
    // Strip frontmatter to get markdown body
    const bodyMatch = rawFile.match(/^---[\s\S]*?---\s*([\s\S]*)$/);
    const content = bodyMatch ? bodyMatch[1] : rawFile;

    return {
      meta: post,
      content
    };
  } catch (error) {
    console.error(`Error loading blog post for slug ${slug}:`, error);
    return null;
  }
}
