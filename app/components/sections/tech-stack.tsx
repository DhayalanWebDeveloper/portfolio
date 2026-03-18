"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

const techIcons = [
  { name: "Angular", color: "#2DA0D8", icon: "/images/icons/angular.svg" },
  { name: "React", color: "#3CD8C8", icon: "/images/icons/react.svg" },
  { name: "Next.js", color: "#50E8D8", icon: "/images/icons/nextjs.svg" },
  { name: "FastAPI", color: "#1480B8", icon: "/images/icons/fastapi.svg" },
  { name: "Tailwind", color: "#3CD8C8", icon: "/images/icons/tailwind.svg" },
  { name: "WordPress", color: "#50E8D8", icon: "/images/icons/wordpress.svg" },
  { name: "JavaScript", color: "#80F0E0", icon: "/images/icons/javascript.svg" },
  { name: "TypeScript", color: "#2DA0D8", icon: "/images/icons/typescript.svg" },
];

export default function TechStack() {
  return (
    <section className="section-padding bg-card/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I work with daily to build modern web applications"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${tech.color}20`,
              }}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/50"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}10, transparent 70%)`,
                }}
              />

              <Image
                src={tech.icon}
                alt={tech.name}
                width={56}
                height={56}
                className="relative"
              />
              <span className="relative text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
