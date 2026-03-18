import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/app/components/pages/project-detail-page";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: `${project.title} | Dhayalan - Projects`,
    description: project.shortDescription,
    keywords: [...project.techStack, "Dhayalan", "Web Development", project.category],
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `https://dhayalan-dev.vercel.app/projects/${project.id}`,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: { title: project.title, description: project.shortDescription },
    alternates: { canonical: `https://dhayalan-dev.vercel.app/projects/${project.id}` },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
