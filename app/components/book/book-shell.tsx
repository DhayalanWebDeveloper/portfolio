"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { chapters, getChapter, totalPages } from "@/lib/book-config";
import { siteConfig } from "@/lib/data";
import { useTheme } from "@/app/components/theme-provider";

export default function BookShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const chapter = getChapter(pathname);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="open-book md:m-6 md:p-[10px] md:pb-[18px] md:rounded-xl">
      {/* Flex row: left page + spine + right page */}
      <div className="flex flex-row relative min-h-screen md:min-h-[calc(100vh-3rem-28px)]">
        {/* ---- Left page: navigation sidebar (desktop only) ---- */}
        <aside className="hidden md:block md:w-[260px] xl:w-[300px] shrink-0 book-left-page">
          <div className="sticky top-0 flex flex-col p-6 h-screen md:h-[calc(100vh-3rem-28px)] overflow-y-auto">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/site-logo.png"
                alt="Dhayalan R - Web Developer"
                width={140}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Author info */}
            <div className="mb-6">
              <h2
                className="text-lg font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  color: "var(--foreground)",
                }}
              >
                {siteConfig.name}
              </h2>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Full Stack Web Developer
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--muted-foreground)", opacity: 0.7 }}
              >
                {siteConfig.location}
              </p>
            </div>

            {/* Ornamental divider */}
            <div className="chapter-ornament mb-6" style={{ opacity: 0.2 }}>
              <span style={{ fontSize: "10px" }}>&#9830;</span>
            </div>

            {/* Chapter navigation */}
            <nav className="flex flex-col gap-0.5 mb-6">
              {chapters.map((ch) => {
                const isActive = chapter.path === ch.path;
                return (
                  <Link
                    key={ch.path}
                    href={ch.path}
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-r transition-colors book-nav-link"
                    data-active={isActive}
                    style={{
                      color: isActive
                        ? ch.bookmarkColor
                        : "var(--muted-foreground)",
                      borderLeft: `3px solid ${isActive ? ch.bookmarkColor : "transparent"}`,
                      background: isActive
                        ? "var(--bookmark-hover)"
                        : undefined,
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: "0.02em",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className="text-[11px] opacity-40 min-w-[1rem] text-center"
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                      }}
                    >
                      {ch.number}
                    </span>
                    <span>{ch.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Current chapter badge */}
            <div className="book-chapter-badge mb-6">
              Chapter {chapter.number} &mdash; {chapter.title}
            </div>

            {/* Push remaining items to bottom */}
            <div className="mt-auto">
              {/* Social links */}
              <div className="flex gap-2 mb-4">
                {[
                  {
                    icon: Github,
                    href: siteConfig.links.github,
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: siteConfig.links.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${siteConfig.links.email}`,
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-md border transition-colors book-social-link"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                    }}
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-md border cursor-pointer transition-colors book-theme-toggle"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted-foreground)",
                  background: "transparent",
                }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
              </button>

              {/* Page number */}
              <div className="page-number">
                &mdash; {chapter.number} of {totalPages} &mdash;
              </div>
            </div>
          </div>
        </aside>

        {/* ---- Center spine ---- */}
        <div className="hidden md:block w-5 shrink-0 book-spine-center" />

        {/* ---- Right page: main content ---- */}
        <div className="flex-1 min-h-screen relative overflow-hidden book-right-page">
          {/* Mobile header (hidden on desktop) */}
          <div
            className="flex md:hidden items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/images/site-logo.png"
                alt="Dhayalan R - Web Developer"
                width={120}
                height={32}
                className="h-7 w-auto"
                priority
              />
            </Link>
            <span
              className="text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-serif), Georgia, serif",
                letterSpacing: "0.1em",
              }}
            >
              Ch. {chapter.number}
            </span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
