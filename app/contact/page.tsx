import type { Metadata } from "next";
import ContactPage from "@/app/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact | Dhayalan - Hire a Full Stack Developer",
  description:
    "Get in touch with Dhayalan for web development projects. Angular, Next.js, FastAPI, WordPress specialist. Based in Chennai, India. Available for freelance.",
  keywords: ["Hire Web Developer", "Freelance Developer Chennai", "Contact Dhayalan", "Web Development Services", "Angular Developer Hire"],
  openGraph: {
    title: "Contact Dhayalan | Hire a Full Stack Developer",
    description: "Get in touch for web development projects. Angular, Next.js, FastAPI, WordPress. Chennai, India.",
    url: "https://dhayalan.dev/contact",
  },
  twitter: { title: "Contact Dhayalan", description: "Hire Dhayalan for web development. Angular, Next.js, FastAPI, WordPress." },
  alternates: { canonical: "https://dhayalan.dev/contact" },
};

export default function Page() {
  return <ContactPage />;
}
