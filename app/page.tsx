import type { Metadata } from "next";
import HomePage from "@/app/components/pages/home-page";

export const metadata: Metadata = {
  title: "Dhayalan | Full Stack Web Developer | Angular Next.js FastAPI",
  description:
    "R. Dhayalan — Full Stack Web Developer from Chennai, India. Specializing in Angular, Next.js, FastAPI & WordPress. 9+ enterprise projects delivered. Available for freelance.",
  keywords: [
    "Full Stack Developer",
    "Web Developer Chennai",
    "Angular Developer",
    "Next.js Developer",
    "FastAPI Developer",
    "WordPress Developer",
    "Dhayalan",
    "Freelance Web Developer India",
  ],
  openGraph: {
    title: "Dhayalan | Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Chennai. Angular, Next.js, FastAPI, WordPress. 9+ enterprise projects delivered.",
    url: "https://dhayalan-dev.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Dhayalan | Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Chennai. Angular, Next.js, FastAPI, WordPress.",
  },
  alternates: { canonical: "https://dhayalan-dev.vercel.app" },
};

export default function Page() {
  return <HomePage />;
}
