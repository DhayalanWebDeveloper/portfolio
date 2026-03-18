import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhayalan | Full Stack Web Developer",
    short_name: "Dhayalan",
    description:
      "Full Stack Web Developer specializing in Angular, Next.js, FastAPI, and WordPress.",
    start_url: "/",
    display: "standalone",
    background_color: "#082840",
    theme_color: "#3498DB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
