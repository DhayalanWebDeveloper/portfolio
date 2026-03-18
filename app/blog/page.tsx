import type { Metadata } from "next";
import BlogPage from "@/app/components/pages/blog-page";

export const metadata: Metadata = {
  title: "Blog | Dhayalan - Web Development Tutorials & Insights",
  description:
    "Tutorials and insights on Angular, Next.js, FastAPI, WordPress, and modern web development. Tips on performance, SEO, and best practices by Dhayalan.",
  keywords: ["Web Development Blog", "Angular Tutorial", "Next.js Tips", "FastAPI Guide", "WordPress SEO", "Dhayalan Blog"],
  openGraph: {
    title: "Blog | Dhayalan - Web Development Tutorials",
    description: "Tutorials on Angular, Next.js, FastAPI, WordPress and modern web development.",
    url: "https://dhayalan.dev/blog",
  },
  twitter: { title: "Blog | Dhayalan", description: "Web development tutorials and insights." },
  alternates: { canonical: "https://dhayalan.dev/blog" },
};

export default function Page() {
  return <BlogPage />;
}
