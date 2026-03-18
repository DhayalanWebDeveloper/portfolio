export const chapters = [
  { number: 1, title: "Introduction", path: "/", label: "Home", bookmarkColor: "#F0D840" },
  { number: 2, title: "About the Author", path: "/about", label: "About", bookmarkColor: "#6ECB63" },
  { number: 3, title: "Portfolio", path: "/projects", label: "Projects", bookmarkColor: "#3498DB" },
  { number: 4, title: "Journal", path: "/blog", label: "Blog", bookmarkColor: "#48B8D0" },
  { number: 5, title: "Get in Touch", path: "/contact", label: "Contact", bookmarkColor: "#F0D840" },
];

export function getChapter(pathname: string) {
  // Exact match first
  const exact = chapters.find((ch) => ch.path === pathname);
  if (exact) return exact;
  // Prefix match for sub-pages (e.g. /projects/some-id → chapter 3)
  const prefix = chapters.find(
    (ch) => ch.path !== "/" && pathname.startsWith(ch.path)
  );
  return prefix ?? chapters[0];
}

export function getChapterIndex(pathname: string) {
  const ch = getChapter(pathname);
  return chapters.indexOf(ch);
}

export const totalPages = chapters.length;
