"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Testimonials"
          subtitle="What my clients say about working with me"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <Quote className="mx-auto mb-4 text-accent/30" size={36} />
              <p className="text-base leading-relaxed text-foreground/90 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="mt-6 flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  {testimonials[current].avatar}
                </div>
                <h4 className="mt-3 text-sm font-semibold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
