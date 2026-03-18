"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.links.phone, href: `tel:${siteConfig.links.phone}` },
  { icon: Mail, label: "Email", value: siteConfig.links.email, href: `mailto:${siteConfig.links.email}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: "#map" },
];

const projectTypes = ["Website Development", "Web Application", "WordPress Site", "E-commerce", "API Development", "Other"];
const budgets = ["Less than $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-8">
      <SectionPage>
        <ChapterHeader />
        <section className="section-padding">
          <div className="mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl font-bold sm:text-5xl">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-10 lg:grid-cols-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 space-y-6"
              >
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
                  >
                    <div className="rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
                <div className="pt-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Follow Me</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Github, href: siteConfig.links.github },
                      { icon: Linkedin, href: siteConfig.links.linkedin },
                      { icon: Mail, href: `mailto:${siteConfig.links.email}` },
                    ].map(({ icon: Icon, href }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="rounded-xl border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center"
                  >
                    <CheckCircle size={48} className="text-accent-2 mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", projectType: "", budget: "", message: "" }); }}
                      className="mt-6 text-sm text-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">Your Name *</label>
                        <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">Your Email *</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className="mb-1.5 block text-xs font-medium text-muted-foreground">Project Type</label>
                        <select id="projectType" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none">
                          <option value="">Select a type</option>
                          {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-muted-foreground">Budget Range</label>
                        <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none">
                          <option value="">Select budget</option>
                          {budgets.map((b) => (<option key={b} value={b}>{b}</option>))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Your Message *</label>
                      <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none" placeholder="Tell me about your project..." />
                    </div>
                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25 sm:w-auto">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </SectionPage>

      <SectionPage>
        <section className="section-padding">
          <div className="mx-auto max-w-6xl">
            <motion.div
              id="map"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296514!2d80.06892559281498!3d13.047985940765896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6571d0c4!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location - Chennai, India"
              />
            </motion.div>
          </div>
        </section>
      </SectionPage>
    </div>
  );
}
