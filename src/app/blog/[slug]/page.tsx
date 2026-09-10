import { notFound, permanentRedirect } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";

interface LegacyBlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const params: { slug: string }[] = [];
  for (const post of posts) {
    params.push({ slug: post.slug });
    if (post.fileSlug && post.fileSlug !== post.slug) {
      params.push({ slug: post.fileSlug });
    }
  }
  return params;
}

export default async function LegacyBlogPostPage({
  params
}: LegacyBlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  permanentRedirect(`/${post.meta.slug}/`);
}
