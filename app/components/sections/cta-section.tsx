"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-accent-2/10 p-10 text-center sm:p-16"
        >
          {/* Background decorations */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent-2/5 blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative text-3xl font-bold sm:text-4xl"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-4 text-muted-foreground"
          >
            Have a project in mind? Let&apos;s discuss how I can help bring your
            ideas to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25"
            >
              Hire Me
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
