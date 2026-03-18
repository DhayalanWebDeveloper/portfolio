import type { Metadata } from "next";
import AboutPage from "@/app/components/pages/about-page";

export const metadata: Metadata = {
  title: "About Me | Dhayalan - Full Stack Web Developer",
  description:
    "R. Dhayalan — Full Stack Web Developer from Chennai. 2+ years at Xmedia Solution building enterprise apps with Angular, Next.js, FastAPI, WordPress. 9+ projects delivered.",
  keywords: ["Dhayalan", "Full Stack Developer", "Web Developer Chennai", "Angular Developer", "Next.js Developer", "FastAPI", "Xmedia Solution"],
  openGraph: {
    title: "About Dhayalan | Full Stack Web Developer",
    description: "Full Stack Web Developer from Chennai. Angular, Next.js, FastAPI, WordPress. Enterprise-grade web applications.",
    url: "https://dhayalan.dev/about",
    type: "profile",
  },
  twitter: { title: "About Dhayalan | Full Stack Web Developer", description: "Full Stack Web Developer from Chennai. Angular, Next.js, FastAPI, WordPress." },
  alternates: { canonical: "https://dhayalan.dev/about" },
};

export default function Page() {
  return <AboutPage />;
}
