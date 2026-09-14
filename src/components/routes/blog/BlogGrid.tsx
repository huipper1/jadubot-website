"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";
import { BlogCard } from "./BlogCard";
import { BlogFeaturedPost } from "./BlogFeaturedPost";
import { PopIn } from "@/components/animations";
import { siteConfig, CALENDLY_DEMO_URL } from "@/config/site";

interface BlogGridProps {
  posts: EnrichedBlogPostMeta[];
}

const TOPICS = [
  "All",
  "Facebook automation",
  "Instagram DMs",
  "Marketing strategy",
  "Free tools & guides"
];

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Calculate dynamic article counts per topic
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach((post) => {
      if (post.topic) {
        counts[post.topic] = (counts[post.topic] || 0) + 1;
      }
    });
    return counts;
  }, [posts]);

  // Filter posts based on selected topic and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTopic =
        selectedTopic === "All" || post.topic === selectedTopic;

      if (!matchesTopic) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = (post.excerpt || "").toLowerCase().includes(q);
      const inTopic = (post.topic || "").toLowerCase().includes(q);

      return inTitle || inExcerpt || inTopic;
    });
  }, [posts, selectedTopic, searchQuery]);

  const isDefaultView = selectedTopic === "All" && searchQuery.trim() === "";
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = isDefaultView ? filteredPosts.slice(1) : filteredPosts;

  const handleClearFilters = () => {
    setSelectedTopic("All");
    setSearchQuery("");
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24" aria-label="Blog articles and guides">
      {/* Subtle radial lighting glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-10 h-96 w-full max-w-7xl opacity-25 dark:opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(1,114,255,0.3) 0%, rgba(56,189,248,0.1) 50%, transparent 75%)"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contentsquare-style Split Layout: Left sticky aside, Right scrolling feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">

          {/* ============================================================ */}
          {/* LEFT COLUMN: Sticky Navigation & Search Aside                */}
          {/* ============================================================ */}
          <aside className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-5 sm:space-y-6">

            {/* 1. Publication Branding / Header */}
            <div className="space-y-2.5 pb-4 border-b border-border">
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-[1.18] [text-wrap:balance]">
                Jadubot Playbooks &amp;{" "}
                <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(1,114,255,0.35)]">
                  Marketing Insights
                </span>
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Proven automation blueprints,{" "}
                <span className="text-[#38c5ff] font-medium">Facebook</span> &amp;{" "}
                <span className="text-[#fe78e1] font-medium">Instagram</span> chatbot workflows, and{" "}
                <span className="text-[#6dffae] font-medium">F-commerce</span> growth strategies.
              </p>
            </div>

            {/* 2. Search Articles */}
            <div className="space-y-2">
              <label htmlFor="blog-search" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Search Articles
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="blog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides, tutorials..."
                  className="w-full rounded-xl border border-border bg-card/90 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground shadow-sm outline-none transition-all focus:border-[#0172ff] focus:ring-2 focus:ring-[#0172ff]/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                <span>
                  Showing <strong className="text-foreground">{filteredPosts.length}</strong> of {posts.length} articles
                </span>
                {(selectedTopic !== "All" || searchQuery.trim() !== "") && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="text-[#0172ff] dark:text-[#38bdf8] font-medium hover:underline"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            {/* 3. Topics Navigation: Desktop Vertical List (Contentsquare style) */}
            <div className="hidden lg:block space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Filter By Topic
              </div>
              <div className="space-y-1">
                {TOPICS.map((topic) => {
                  const isActive = selectedTopic === topic;
                  const count = topicCounts[topic] ?? 0;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-left ${isActive
                        ? "bg-[#0172ff] text-white shadow-sm shadow-[#0172ff]/30 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/90 dark:hover:bg-card/40"
                        }`}
                    >
                      <span className="truncate">{topic === "All" ? "All Playbooks" : topic}</span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-md ${isActive
                          ? "bg-white/20 text-white font-semibold"
                          : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3b. Topics Navigation: Mobile Horizontal Chips */}
            <div className="lg:hidden space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Topics
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {TOPICS.map((topic) => {
                  const isActive = selectedTopic === topic;
                  const count = topicCounts[topic] ?? 0;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${isActive
                        ? "bg-[#0172ff] text-white shadow-sm shadow-[#0172ff]/25 font-semibold"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-card"
                        }`}
                    >
                      {topic === "All" ? "All" : topic} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Connect With Us & Quick Consultation Card */}
            <div className="pt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Connect with us</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jadubot on Facebook"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-[#0172ff]/50 hover:text-[#0172ff]"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jadubot on X"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-[#0172ff]/50 hover:text-[#0172ff]"
                  >
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jadubot on LinkedIn"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-[#0172ff]/50 hover:text-[#0172ff]"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="rounded-2xl border border-border bg-card/60 p-3.5 transition-all hover:border-[#0172ff]/30">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#0172ff]/10 text-[#0172ff] dark:text-[#38bdf8] shrink-0 mt-0.5">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground">Need custom automation?</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                      Talk with our team to configure comment-to-inbox, auto replies, and order flows.
                    </p>
                    <Link
                      href={CALENDLY_DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#0172ff] dark:text-[#38bdf8] hover:underline"
                    >
                      <span>Book a Free Demo</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </aside>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Scrolling Feed of Articles & CTA Banner        */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col space-y-8 sm:space-y-10">

            {/* 1. Featured Spotlight Story (Default Unfiltered View) */}
            {featuredPost && (
              <PopIn delay={0.05}>
                <BlogFeaturedPost post={featuredPost} />
              </PopIn>
            )}

            {/* 2. Feed Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-border">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                {selectedTopic === "All" ? "Latest Playbooks" : selectedTopic}
              </h2>
              <span className="text-xs text-muted-foreground">
                {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {/* 3. Empty State or Articles 2-Column Grid */}
            {filteredPosts.length === 0 ? (
              <PopIn className="my-12 rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0172ff]/15 text-[#0172ff] dark:text-[#38bdf8] mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">No matching articles found</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; under &ldquo;{selectedTopic}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="btn-primary mt-6 inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl"
                >
                  Reset all filters
                </button>
              </PopIn>
            ) : (
              <PopIn stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gridPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </PopIn>
            )}



          </div>

        </div>
      </div>
    </section>
  );
}

