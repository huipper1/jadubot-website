import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { formatBlogDate } from "@/lib/content/blog-utils";

interface BlogCardProps {
  post: EnrichedBlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = formatBlogDate(post.date);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1422]/80 backdrop-blur-md transition-all duration-300 hover:border-[#0172ff]/40 hover:bg-[#121b2d]/90 hover:shadow-[0_10px_30px_rgba(1,114,255,0.12)] hover:-translate-y-0.5">
      {/* Visual Header */}
      <Link
        href={`/blog/${post.fileSlug}/`}
        className="relative aspect-[16/9] w-full overflow-hidden bg-[#070a10] block"
      >
        <Image
          src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-transparent opacity-60" />
      </Link>

      {/* Body Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Topic & Read Time */}
        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 mb-3">
          <span className="inline-flex items-center rounded-md border border-[#0172ff]/30 bg-[#0172ff]/10 px-2 py-0.5 font-medium text-[#38bdf8]">
            {post.topic}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <Clock className="h-3 w-3 text-slate-400" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#38bdf8] line-clamp-2">
          <Link href={`/blog/${post.fileSlug}/`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-400 flex-1">
          {post.excerpt}
        </p>

        {/* Card Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 text-slate-400 text-[11px]">
            <Calendar className="h-3 w-3 text-slate-400" />
            {formattedDate}
          </span>

          <Link
            href={`/blog/${post.fileSlug}/`}
            className="inline-flex items-center text-xs font-semibold text-[#0172ff] group-hover:text-[#38bdf8] transition-colors"
          >
            <span>Read guide</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
