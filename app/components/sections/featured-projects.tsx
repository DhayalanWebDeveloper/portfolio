"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useRef } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50">
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/70 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
            <a
              href={project.liveUrl}
              className="rounded-full bg-accent p-2.5 text-background transition-transform hover:scale-110"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              className="rounded-full bg-accent-2/20 p-2.5 text-accent-2 transition-transform hover:scale-110 border border-accent-2/30"
              aria-label="GitHub repo"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="p-5" style={{ transform: "translateZ(20px)" }}>
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
            {project.category}
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
