"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Monitor, Zap, Rocket, type LucideProps } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "./section-heading";

const iconMap: Record<string, React.FC<LucideProps>> = {
  Globe,
  Layout,
  Monitor,
  Zap,
  Rocket,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Services"
          subtitle="What I can do for you and your business"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
