import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";
import { FormattedBlogTitle } from "./FormattedBlogTitle";

interface BlogFeaturedPostProps {
  post: EnrichedBlogPostMeta;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-md shadow-card transition-all duration-300 hover:border-[#0172ff]/40 hover:shadow-elevated">
      <div className="flex flex-col">
        {/* Top: Cinematic Visual Header */}
        <Link
          href={`/${post.slug}/`}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-background block"
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
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Meta Row: Topic & Read Time (Zero pill badges) */}
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#0172ff] dark:text-[#38bdf8]">
                Featured Playbook
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground font-medium">
                {post.topic}
              </span>
            </div>

            {/* Post Title */}
            <h2 className="font-heading mt-3.5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-snug transition-colors group-hover:text-[#0172ff] dark:group-hover:text-[#38bdf8] [text-wrap:balance]">
              <Link href={`/${post.slug}/`} className="hover:opacity-95">
                <FormattedBlogTitle title={post.title} />
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Footer Row: Date, Read Time & CTA */}
          <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0172ff] hover:bg-[#0052cc] px-4.5 py-2.5 rounded-xl transition-all shadow-md shadow-[#0172ff]/25 group-hover:translate-x-0.5"
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
