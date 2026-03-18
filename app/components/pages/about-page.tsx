"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Zap,
  Heart,
  Target,
  GraduationCap,
  Briefcase,
  Globe,
  Layers,
} from "lucide-react";
import SectionHeading from "@/app/components/sections/section-heading";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

const highlights = [
  { icon: Briefcase, label: "2+ Years Experience", value: "At Xmedia Solution, Chennai" },
  { icon: Layers, label: "9+ Projects", value: "Enterprise Apps & Platforms" },
  { icon: Globe, label: "AI & Real-Time Apps", value: "WebSockets, RxJS, Voice AI" },
  { icon: Users, label: "Multi-Role Platforms", value: "RBAC, JWT, Token Auth" },
];

const philosophy = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code with TypeScript. Following Angular and React best practices, component-based architecture, and modular design patterns.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing with ISR, Redis caching, code splitting, and lazy loading. Achieved sub-2s load times on Dinamani serving millions of readers.",
  },
  {
    icon: Target,
    title: "SEO & Accessibility",
    description:
      "Implementing structured data, schema markup, dynamic sitemaps, and OpenGraph. Built SEO-optimized sites achieving 82+ SEO scores.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Creating intuitive interfaces with real-time feedback. From interactive seat selectors to AI voice interviews with sub-250ms response times.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader />
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I am <strong className="text-foreground">R. Dhayalan</strong>, an
                  innovative and detail-oriented Full Stack Web Developer from{" "}
                  <strong className="text-foreground">Chennai, Tamil Nadu</strong>{" "}
                  with extensive experience in building dynamic, responsive, and
                  secure web applications using Angular, Next.js, FastAPI, and
                  WordPress.
                </p>
                <p>
                  Currently working at{" "}
                  <strong className="text-foreground">Xmedia Solution</strong>,
                  where I develop enterprise-level solutions including AI-driven
                  interview platforms, cinema booking systems, hospital management
                  systems, and B2B e-commerce platforms — with a strong focus on
                  token-based authentication, role-based access, and real-time data
                  handling.
                </p>
                <p>
                  Skilled in integrating APIs, WebSockets, and third-party services
                  (Stripe, Razorpay, ZOHO, Tally) to deliver seamless user
                  experiences across web and mobile. I demonstrate a strong
                  commitment to code quality, agile development, and delivering
                  scalable solutions that meet business objectives.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </SectionPage>

      <SectionPage>
        <section className="section-padding bg-card/30">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Highlights" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-3 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionPage>

      <SectionPage>
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="Education" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">B.Sc Mathematics</h3>
                <p className="text-sm text-accent">Madras University, Chennai</p>
                <p className="mt-1 text-sm text-muted-foreground">Graduated: 2021 &middot; 72.16%</p>
              </div>
            </motion.div>
          </div>
        </section>
      </SectionPage>

      <SectionPage>
        <section className="section-padding bg-card/30">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Work Philosophy"
              subtitle="The principles that guide my development approach"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionPage>
    </div>
  );
}
