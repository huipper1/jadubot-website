"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { ArrowRight, BookOpen, ChatTeardropDots as MessageSquare, MagnifyingGlass as Search, X, LinkedinIcon, SiFacebook, SiX } from "@/components/icons";

import { CALENDLY_DEMO_URL, siteConfig } from "@/config/site";

import type { EnrichedBlogPostMeta } from "@/lib/content/blog-utils";

import { PopIn } from "@/components/animations";

import { BlogCard } from "./BlogCard";
import { BlogFeaturedPost } from "./BlogFeaturedPost";

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
      const matchesTopic = selectedTopic === "All" || post.topic === selectedTopic;

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
    <section
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24"
      aria-label="Blog articles and guides"
    >
      {/* Subtle radial lighting glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 opacity-25 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(1,114,255,0.3) 0%, rgba(56,189,248,0.1) 50%, transparent 75%)"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contentsquare-style Split Layout: Left sticky aside, Right scrolling feed */}
        <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Sticky Navigation & Search Aside                */}
          {/* ============================================================ */}
          <aside className="space-y-5 sm:space-y-6 lg:sticky lg:top-24 lg:col-span-4 lg:self-start xl:col-span-4">
            {/* 1. Publication Branding / Header */}
            <div className="space-y-2.5 border-b border-border pb-4">
              <h1 className="font-heading text-2xl leading-[1.18] font-extrabold tracking-tight [text-wrap:balance] text-foreground sm:text-3xl">
                Jadubot Playbooks &amp;{" "}
                <span className="font-serif italic font-medium header-accent drop-shadow-[0_0_25px_rgba(1,114,255,0.35)]">
                  Marketing Insights
                </span>
              </h1>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Proven automation blueprints,{" "}
                <span className="font-medium text-[#38c5ff]">Facebook</span> &amp;{" "}
                <span className="font-medium text-[#fe78e1]">Instagram</span> chatbot workflows, and{" "}
                <span className="font-medium text-[#6dffae]">F-commerce</span> growth strategies.
              </p>
            </div>

            {/* 2. Search Articles */}
            <div className="space-y-2">
              <label
                htmlFor="blog-search"
                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
              >
                Search Articles
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="blog-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides, tutorials..."
                  className="w-full rounded-xl border border-border bg-card/90 py-2.5 pr-10 pl-10 text-xs text-foreground shadow-sm transition-all outline-none placeholder:text-muted-foreground focus:border-[#0172ff] focus:ring-2 focus:ring-[#0172ff]/20 sm:text-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                <span>
                  Showing <strong className="text-foreground">{filteredPosts.length}</strong> of{" "}
                  {posts.length} articles
                </span>
                {(selectedTopic !== "All" || searchQuery.trim() !== "") && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="font-medium text-[#0172ff] hover:underline dark:text-[#38bdf8]"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            {/* 3. Topics Navigation: Desktop Vertical List (Contentsquare style) */}
            <div className="hidden space-y-2 lg:block">
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-left text-xs font-medium transition-all sm:text-sm ${
                        isActive
                          ? "bg-[#0172ff] font-semibold text-white shadow-sm shadow-[#0172ff]/30"
                          : "text-muted-foreground hover:bg-card/90 hover:text-foreground dark:hover:bg-card/40"
                      }`}
                    >
                      <span className="truncate">{topic === "All" ? "All Playbooks" : topic}</span>
                      <span
                        className={`rounded-md px-2 py-0.5 text-[11px] ${
                          isActive
                            ? "bg-white/20 font-semibold text-white"
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
            <div className="space-y-2 lg:hidden">
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Topics
              </div>
              <div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1">
                {TOPICS.map((topic) => {
                  const isActive = selectedTopic === topic;
                  const count = topicCounts[topic] ?? 0;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                        isActive
                          ? "bg-[#0172ff] font-semibold text-white shadow-sm shadow-[#0172ff]/25"
                          : "border border-border bg-card text-muted-foreground hover:bg-card hover:text-foreground"
                      }`}
                    >
                      {topic === "All" ? "All" : topic} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Connect With Us & Quick Consultation Card */}
            <div className="space-y-3 border-t border-border pt-4">
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
                    <SiFacebook color="default" className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jadubot on X"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-[#0172ff]/50 hover:text-[#0172ff]"
                  >
                    <SiX className="h-3 w-3" />
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jadubot on LinkedIn"
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-[#0172ff]/50 hover:text-[#0172ff]"
                  >
                    <LinkedinIcon color="#0A66C2" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="rounded-2xl border border-border bg-card/60 p-3.5 transition-all hover:border-[#0172ff]/30">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0 rounded-lg bg-[#0172ff]/10 p-1.5 text-[#0172ff] dark:text-[#38bdf8]">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-foreground">Need custom automation?</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                      Talk with our team to configure comment-to-inbox, auto replies, and order
                      flows.
                    </p>
                    <Link
                      href={CALENDLY_DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#0172ff] hover:underline dark:text-[#38bdf8]"
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
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:col-span-8 xl:col-span-8">
            {/* 1. Featured Spotlight Story (Default Unfiltered View) */}
            {featuredPost && (
              <PopIn delay={0.05}>
                <BlogFeaturedPost post={featuredPost} />
              </PopIn>
            )}

            {/* 2. Feed Header */}
            <div className="flex items-center justify-between border-b border-border pb-3.5">
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                {selectedTopic === "All" ? "Latest Playbooks" : selectedTopic}
              </h2>
              <span className="text-xs text-muted-foreground">
                {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {/* 3. Empty State or Articles 2-Column Grid */}
            {filteredPosts.length === 0 ? (
              <PopIn className="my-12 rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0172ff]/15 text-[#0172ff] dark:text-[#38bdf8]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">No matching articles found</h3>
                <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; under
                  &ldquo;{selectedTopic}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="btn-primary mt-6 inline-flex items-center rounded-xl px-4 py-2 text-xs font-semibold"
                >
                  Reset all filters
                </button>
              </PopIn>
            ) : (
              <PopIn stagger={0.06} className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
