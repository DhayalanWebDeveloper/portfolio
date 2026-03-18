"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  problem: string;
  solution: string;
  techStack: string[];
};

export default function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader title={project.title} />
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{project.title}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{project.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex gap-4"
            >
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-background hover:bg-accent/80 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 overflow-hidden rounded-2xl border border-border"
            >
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover sm:h-96" />
            </motion.div>
          </div>
        </section>
      </SectionPage>

      <SectionPage>
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">The Problem</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">The Solution</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </SectionPage>
    </div>
  );
}
