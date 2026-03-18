"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters, getChapter } from "@/lib/book-config";

export default function BookmarkNav() {
  const pathname = usePathname();
  const activeChapter = getChapter(pathname);

  return (
    /* Mobile bottom tab bar — hidden on desktop (nav is in left page) */
    <nav className="mobile-bottom-nav md:hidden" aria-label="Chapter navigation">
      <div className="flex items-stretch justify-around">
        {chapters.map((ch) => {
          const isActive = activeChapter.path === ch.path;
          return (
            <Link
              key={ch.path}
              href={ch.path}
              className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-center transition-colors"
              style={{
                color: isActive ? ch.bookmarkColor : "var(--muted-foreground)",
                background: isActive ? "var(--bookmark-hover)" : "transparent",
                borderTop: isActive
                  ? `3px solid ${ch.bookmarkColor}`
                  : "3px solid transparent",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="text-[10px] font-bold leading-none">
                {ch.number}
              </span>
              <span className="text-[9px] font-semibold leading-none">
                {ch.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
