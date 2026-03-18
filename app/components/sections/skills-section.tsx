"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./section-heading";

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="My technical proficiency across different technologies"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
