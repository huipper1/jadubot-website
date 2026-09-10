import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  BlogPostHeader,
  BlogPostBody,
  ReadingProgress
} from "@/components/routes/blog";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  parseBlogMarkdown,
  getRelatedBlogPosts
} from "@/lib/content";
import { UnifiedCta } from "@/components/sections";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const params: { slug: string }[] = [];
  for (const post of posts) {
    params.push({ slug: post.slug });
    try {
      const decoded = decodeURIComponent(post.slug);
      if (decoded !== post.slug) {
        params.push({ slug: decoded });
      }
    } catch {
      // ignore
    }
  }
  return params;
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Jadubot"
    };
  }

  const canonicalUrl = `${siteConfig.url}/${post.meta.slug}/`;
  const imageUrl = post.meta.featuredImage
    ? post.meta.featuredImage.startsWith("http")
      ? post.meta.featuredImage
      : `${siteConfig.url}${post.meta.featuredImage}`
    : `${siteConfig.url}/assets/images/shared/jadubot-logo.png`;

  return {
    title: `${post.meta.title} | Jadubot`,
    description: post.meta.excerpt,
    alternates: {
      canonical: `/${post.meta.slug}/`
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.meta.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [imageUrl]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // If accessed via fileSlug alias (e.g. bangladesh-automation-tools), 301 redirect to canonical live slug
  if (post.meta.fileSlug && post.meta.fileSlug !== post.meta.slug && slug === post.meta.fileSlug) {
    permanentRedirect(`/${post.meta.slug}/`);
  }

  // Parse markdown into HTML with section IDs, extract TOC headings, and calculate reading stats
  const { html, headings, stats } = parseBlogMarkdown(post.content);
  const relatedPosts = getRelatedBlogPosts(post.meta.slug, 3);

  const postUrl = `${siteConfig.url}/${post.meta.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${siteConfig.url}/blog/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.meta.title,
            "item": postUrl
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.meta.title,
        "description": post.meta.excerpt,
        "datePublished": post.meta.date,
        "dateModified": post.meta.date,
        "wordCount": stats.words,
        "timeRequired": `PT${stats.readTimeMinutes}M`,
        "author": {
          "@type": "Person",
          "name": post.meta.author || siteConfig.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jadubot",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.url}/assets/images/shared/jadubot-logo.png`
          }
        },
        "image": post.meta.featuredImage
          ? `${siteConfig.url}${post.meta.featuredImage}`
          : `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": postUrl
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <BlogPostHeader meta={post.meta} stats={stats} />
      <BlogPostBody
        htmlContent={html}
        headings={headings}
        stats={stats}
        meta={post.meta}
        relatedPosts={relatedPosts}
      />
      <UnifiedCta
        badge="AUTOMATE YOUR SOCIAL CHANNELS"
        title="Put What You Just Read into"
        highlightedTitle="Action on Autopilot"
        description="Launch Jadubot's official Meta-approved AI chat assistant in under 3 minutes. Zero setup fees, instant integration, and 24/7 lead conversion."
      />
    </>
  );
}
