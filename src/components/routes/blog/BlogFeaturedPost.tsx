import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarBlank as Calendar, Clock } from "@/components/icons";

import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";

import { FormattedBlogTitle } from "./FormattedBlogTitle";

interface BlogFeaturedPostProps {
  post: EnrichedBlogPostMeta;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className="group hover:shadow-elevated relative overflow-hidden rounded-3xl border border-border bg-card shadow-card backdrop-blur-md transition-all duration-300 hover:border-[#0172ff]/40">
      <div className="flex flex-col">
        {/* Top: Cinematic Visual Header */}
        <Link
          href={`/${post.slug}/`}
          className="relative block aspect-[16/9] w-full overflow-hidden bg-background sm:aspect-[21/9]"
        >
          <Image
            src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
          <div className="absolute inset-0 ring-1 ring-inset ring-border/30 pointer-events-none" /> */}
        </Link>

        {/* Bottom: Editorial Content */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            {/* Meta Row: Topic & Read Time (Zero pill badges) */}
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#0172ff] dark:text-[#38bdf8]">
                Featured Playbook
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium text-muted-foreground">{post.topic}</span>
            </div>

            {/* Post Title */}
            <h2 className="mt-3.5 font-heading text-xl leading-snug font-bold tracking-tight [text-wrap:balance] text-foreground transition-colors group-hover:text-[#0172ff] sm:text-2xl lg:text-3xl dark:group-hover:text-[#38bdf8]">
              <Link href={`/${post.slug}/`} className="hover:opacity-95">
                <FormattedBlogTitle title={post.title} />
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          {/* Footer Row: Date, Read Time & CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#0172ff] dark:text-[#38bdf8]" />
                {post.readTimeMinutes} min read
              </span>
            </div>

            <Link
              href={`/${post.slug}/`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0172ff] px-4.5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0172ff]/25 transition-all group-hover:translate-x-0.5 hover:bg-[#0052cc]"
            >
              <span>Read playbook</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
