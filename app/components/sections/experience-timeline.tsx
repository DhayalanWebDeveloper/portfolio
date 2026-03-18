"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function ExperienceTimeline() {
  return (
    <section className="section-padding bg-card/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career milestones"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="h-4 w-4 rounded-full border-2 border-accent bg-background"
                />
                <div className="absolute h-4 w-4 animate-ping rounded-full bg-accent/30" />
              </div>

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <Briefcase size={12} />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2 text-xs text-muted-foreground ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
