"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

const categories = ["All", "Web Apps", "Full Stack", "WordPress", "Frontend"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader />
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                A collection of projects I&apos;ve built, from enterprise
                applications to creative experiments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-lg border border-border bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none w-full sm:w-64"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-accent text-background font-bold"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link href={`/projects/${project.id}`}>
                      <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                          <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                            <a
                              href={project.liveUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="rounded-full bg-accent p-2 text-background hover:scale-110 transition-transform"
                              aria-label="Live demo"
                            >
                              <ExternalLink size={14} />
                            </a>
                            <a
                              href={project.githubUrl}
                              onClick={(e) => e.stopPropagation()}
                              className="rounded-full bg-accent-2/20 p-2 text-accent-2 hover:scale-110 transition-transform border border-accent-2/30"
                              aria-label="GitHub"
                            >
                              <Github size={14} />
                            </a>
                          </div>
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-medium uppercase tracking-wider text-accent">
                            {project.category}
                          </span>
                          <h3 className="mt-1 text-base font-semibold text-foreground">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {project.shortDescription}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="mt-20 text-center text-muted-foreground">
                <p>No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </SectionPage>
    </div>
  );
}
