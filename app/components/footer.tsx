"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--book-page-alt)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Colophon heading */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-serif), Georgia, serif",
            }}
          >
            Colophon
          </p>
          <div className="chapter-ornament mt-2">
            <span style={{ fontSize: "12px" }}>&#9830;</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/site-logo.png"
                alt="Dhayalan R - Web Developer"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Full Stack Web Developer crafting modern, performant web
              experiences from Chennai, India.
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--foreground)" }}
            >
              Chapters
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--foreground)" }}
            >
              Get in Touch
            </h3>
            <div className="space-y-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <p>{siteConfig.links.email}</p>
              <p>{siteConfig.links.phone}</p>
              <p>{siteConfig.location}</p>
            </div>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border p-2.5 transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p
            className="flex items-center gap-1 text-xs"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-serif), Georgia, serif",
            }}
          >
            Built with <Heart size={12} style={{ color: "var(--accent)" }} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
