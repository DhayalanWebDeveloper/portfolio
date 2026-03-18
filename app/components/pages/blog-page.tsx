"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

export default function BlogPage() {
  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader />
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Thoughts, tutorials, and insights about web development, best
                practices, and the latest technologies.
              </p>
            </motion.div>

            <div className="mt-12 space-y-6">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                          Read More
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </SectionPage>
    </div>
  );
}
