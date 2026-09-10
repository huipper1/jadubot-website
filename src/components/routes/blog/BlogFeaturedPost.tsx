import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";
import { FormattedBlogTitle } from "./FormattedBlogTitle";

interface BlogFeaturedPostProps {
  post: EnrichedBlogPostMeta;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f172a]/90 to-[#0b101d]/90 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#0172ff]/40 hover:shadow-[0_12px_40px_rgba(1,114,255,0.18)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left: Featured Visual */}
        <Link
          href={`/${post.slug}/`}
          className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 overflow-hidden bg-[#070b13] min-h-[260px] sm:min-h-[340px] lg:min-h-full block"
        >
          <Image
            src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-transparent opacity-70 lg:hidden" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        </Link>

        {/* Right: Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            {/* Lead Story Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0172ff]/40 bg-[#0172ff]/15 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
                <Sparkles className="h-3 w-3" />
                Featured playbook
              </span>

              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-slate-300">
                {post.topic}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading mt-4 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug transition-colors [text-wrap:balance]">
              <Link href={`/${post.slug}/`} className="hover:opacity-95">
                <FormattedBlogTitle title={post.title} />
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3 text-sm text-slate-300/90 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Footer Meta & Action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {formattedDate}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
                {post.readTimeMinutes} min read
              </span>
            </div>

            <Link
              href={`/${post.slug}/`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0172ff] hover:bg-[#0052cc] px-4 py-2 rounded-xl transition-all shadow-md shadow-[#0172ff]/25 group-hover:translate-x-0.5"
            >
              <span>Read playbook</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
