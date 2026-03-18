import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p
        className="text-6xl font-bold"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          color: "var(--accent)",
        }}
      >
        404
      </p>
      <h1
        className="mt-4 text-2xl font-bold"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        Page Not Found
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
        This chapter doesn&apos;t exist in the book yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
        style={{
          background: "var(--accent)",
          color: "var(--book-page)",
        }}
      >
        Back to Chapter 1
      </Link>
    </div>
  );
}
