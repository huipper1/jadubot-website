import Image from "next/image";
import Link from "next/link";

import { ArrowRight, BookOpen, CalendarBlank as Calendar } from "@/components/icons";

import type { BlogPostMeta } from "@/types/content";

import { formatBlogDate } from "@/lib/content/blog-utils";

import { PopIn } from "@/components/animations";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-border pt-16" aria-labelledby="related-posts-heading">
      <PopIn className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
            <BookOpen className="h-3.5 w-3.5" />
            Continue reading
          </span>
          <h2
            id="related-posts-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-foreground"
          >
            Related articles and guides
          </h2>
        </div>
        <Link
          href="/blog/"
          className="inline-flex items-center text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <span>View all articles</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </PopIn>

      <PopIn stagger={0.08} className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => {
          const dateStr = formatBlogDate(post.date);

          return (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:border-[#0172ff]/40 hover:bg-card/90 hover:shadow-card"
            >
              <Link
                href={`/${post.slug}/`}
                className="relative aspect-[16/9] w-full overflow-hidden bg-background"
              >
                <Image
                  src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-[#38bdf8]">
                    <Calendar className="h-3 w-3" />
                    {dateStr}
                  </span>
                  <span>•</span>
                  <span>{post.author || "Jadubot"}</span>
                </div>

                <h3 className="mt-2.5 line-clamp-2 text-sm leading-snug font-bold text-foreground transition-colors group-hover:text-[#38bdf8]">
                  <Link href={`/${post.slug}/`}>{post.title}</Link>
                </h3>

                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 border-t border-border/60 pt-3">
                  <Link
                    href={`/${post.slug}/`}
                    className="inline-flex items-center text-xs font-semibold text-[#0172ff] transition-colors hover:text-[#38bdf8]"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </PopIn>
    </section>
  );
}
