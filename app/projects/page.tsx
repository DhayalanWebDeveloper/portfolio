import type { Metadata } from "next";
import ProjectsPage from "@/app/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Projects | Dhayalan - Full Stack Web Developer Portfolio",
  description:
    "Explore 9+ enterprise projects — AI interview platforms, cinema booking, hospital management, e-commerce, news portals built with Angular, Next.js, FastAPI.",
  keywords: ["Web Development Projects", "Angular Projects", "Next.js Projects", "FastAPI Projects", "Full Stack Portfolio", "Dhayalan Projects"],
  openGraph: {
    title: "Projects | Dhayalan - Full Stack Web Developer",
    description: "9+ enterprise projects: AI platforms, booking systems, hospital management, e-commerce.",
    url: "https://dhayalan.dev/projects",
  },
  twitter: { title: "Projects | Dhayalan", description: "9+ enterprise projects built with Angular, Next.js, FastAPI." },
  alternates: { canonical: "https://dhayalan.dev/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
