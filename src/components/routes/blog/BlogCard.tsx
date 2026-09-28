import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";

interface BlogCardProps {
  post: EnrichedBlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0172ff]/40 hover:bg-card hover:shadow-card">
      {/* Visual Header */}
      <Link
        href={`/${post.slug}/`}
        className="relative block aspect-[16/9] w-full overflow-hidden bg-background"
      >
        <Image
          src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
      </Link>

      {/* Body Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Topic & Read Time (Zero pill badges) */}
          <div className="mb-2.5 flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#0172ff] dark:text-[#38bdf8]">{post.topic}</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
              <Clock className="h-3 w-3 text-muted-foreground" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="line-clamp-2 text-base leading-snug font-bold text-foreground transition-colors group-hover:text-[#0172ff] sm:text-lg dark:group-hover:text-[#38bdf8]">
            <Link href={`/${post.slug}/`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-3.5 text-xs">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            {formattedDate}
          </span>

          <Link
            href={`/${post.slug}/`}
            className="inline-flex items-center text-xs font-semibold text-[#0172ff] transition-all group-hover:underline dark:text-[#38bdf8]"
          >
            <span>Read guide</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
