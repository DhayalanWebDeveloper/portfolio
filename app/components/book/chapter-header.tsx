"use client";

import { usePathname } from "next/navigation";
import { getChapter } from "@/lib/book-config";

export default function ChapterHeader({
  title: overrideTitle,
}: {
  title?: string;
} = {}) {
  const pathname = usePathname();
  const chapter = getChapter(pathname);
  const displayTitle = overrideTitle ?? chapter.title;

  return (
    <header className="chapter-header">
      <p className="chapter-number">Chapter {chapter.number}</p>
      <h2 className="chapter-title">{displayTitle}</h2>
      <div className="chapter-ornament">
        <span style={{ fontSize: "14px" }}>&#9830;</span>
      </div>
    </header>
  );
}
