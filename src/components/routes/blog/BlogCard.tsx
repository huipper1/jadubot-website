import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/types/content";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <article className="glass-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1422]/80 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-[#111a2e]/90 hover:shadow-[0_0_30px_rgba(1,114,255,0.2)] hover:-translate-y-1">
      {/* Visual Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#06080d]">
        <Image
          src={post.featuredImage || "/assets/images/shared/jadubot-logo.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-80" />
      </div>

      {/* Body Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-400">
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            {post.author}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#38bdf8] line-clamp-2">
          <Link href={`/blog/${post.fileSlug}/`}>
            {post.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-300 flex-1">
          {post.excerpt}
        </p>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <Link
            href={`/blog/${post.fileSlug}/`}
            className="inline-flex items-center text-xs font-semibold text-[#0172ff] transition-colors hover:text-[#38bdf8]"
          >
            Read Full Article
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
