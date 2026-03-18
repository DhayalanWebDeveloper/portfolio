export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Book page turning animation */}
        <div className="relative h-16 w-12">
          <div
            className="absolute inset-0 rounded-sm border border-border"
            style={{ background: "var(--book-page-light)" }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-border origin-left animate-[pageFlip_1.2s_ease-in-out_infinite]"
            style={{ background: "var(--book-page)" }}
          />
          <style>{`
            @keyframes pageFlip {
              0%, 100% { transform: rotateY(0deg); }
              50% { transform: rotateY(-160deg); }
            }
          `}</style>
        </div>
        <p
          className="text-sm animate-pulse"
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-serif), Georgia, serif",
            letterSpacing: "0.1em",
          }}
        >
          Turning page...
        </p>
      </div>
    </div>
  );
}
