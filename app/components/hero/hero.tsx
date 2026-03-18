"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import OrbitingSkills from "./orbiting-skills";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden animated-gradient">
      <HeroScene />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            <Sparkles size={14} />
            Available for freelance work
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Dhayalan</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground sm:text-base"
          >
            {["Angular", "Next.js", "FastAPI", "WordPress"].map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-accent">|</span>}
                {tech}
              </span>
            ))}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="/pdf/Dhayalan.R.pdf" download
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-7 py-3.5 text-sm font-medium text-accent transition-all hover:bg-accent/20"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right - Profile photo with orbiting skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="hidden lg:flex items-center justify-center"
        >
          <OrbitingSkills />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Scroll Down</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
