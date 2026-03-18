import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import BlogPostPage from "@/app/components/pages/blog-post-page";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Dhayalan Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "Dhayalan", "Web Development Blog", post.category],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dhayalan-dev.vercel.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: { title: post.title, description: post.excerpt },
    alternates: { canonical: `https://dhayalan-dev.vercel.app/blog/${post.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
