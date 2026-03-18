"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string[];
};

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader title={post.title} />
        <article className="section-padding">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/blog" className="hover:text-accent transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground truncate">{post.title}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Blog content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 space-y-5 leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {post.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl font-bold mt-8 mb-3"
                      style={{ color: "var(--foreground)" }}
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-base leading-7">
                    {block}
                  </p>
                );
              })}
            </motion.div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 rounded-xl border p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--book-page-alt)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                Written by R. Dhayalan
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
                Full Stack Web Developer from Chennai, India. Building enterprise apps with Angular, Next.js, FastAPI &amp; WordPress.
              </p>
            </motion.div>
          </div>
        </article>
      </SectionPage>
    </div>
  );
}
