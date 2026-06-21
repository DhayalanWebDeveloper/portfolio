import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import BookShell from "@/app/components/book/book-shell";
import BookmarkNav from "@/app/components/book/bookmark-nav";
import Footer from "@/app/components/footer";
import ScrollProgress from "@/app/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhayalan-dev.vercel.app"),
  title: {
    default: "Dhayalan | Freelance Full Stack Web Developer in Chennai | Angular Next.js FastAPI",
    template: "%s | Dhayalan Web Developer",
  },
  description:
    "Full Stack Web Developer specializing in Angular, Next.js, FastAPI, and WordPress. Top Freelance Web Developer in Chennai offering affordable pricing.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Angular Developer",
    "Next.js Developer",
    "FastAPI Developer",
    "WordPress Developer",
    "Chennai",
    "India",
    "Dhayalan",
    "Web Developer Chennai",
    "Freelance Web Developer Chennai",
    "Best Web Developer in Chennai",
    "Top IT Companies in Chennai",
    "Zoho Chennai",
    "TCS Chennai",
    "Freshworks Chennai",
    "Cognizant Chennai",
    "Next.js Developer India",
    "Angular Developer Chennai",
    "WordPress Developer Chennai",
    "Website Pricing Chennai",
    "Dhayalan Web Developer",
  ],
  authors: [{ name: "Dhayalan" }],
  creator: "Dhayalan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhayalan-dev.vercel.app",
    title: "Freelance Web Developer in Chennai | R. Dhayalan",
    description:
      "Top Freelance Web Developer in Chennai offering affordable pricing for Next.js, Angular, React, and WordPress websites.",
    siteName: "Dhayalan Web Developer",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Freelance Web Developer Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in Chennai | R. Dhayalan",
    description:
      "Top Freelance Web Developer in Chennai offering affordable pricing for Next.js, Angular, React, and WordPress websites.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N4M3QHGW7C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N4M3QHGW7C');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "R. Dhayalan - Freelance Web Developer",
              url: "https://dhayalan-dev.vercel.app",
              email: "dhayalandhaya149@gmail.com",
              telephone: "+91 74025 32025",
              priceRange: "₹1000 - ₹4000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600089",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Angular",
                "React",
                "Next.js",
                "FastAPI",
                "WordPress",
                "JavaScript",
                "TypeScript",
                "WebSockets",
                "RxJS",
                "Tailwind CSS",
                "Bootstrap",
              ],
              sameAs: [
                "https://github.com/DhayalanWebDeveloper",
                "https://www.linkedin.com/in/dhayalan-89ab042b9/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <BookmarkNav />
          <BookShell>
            <main className="min-h-screen pb-16 md:pb-0">{children}</main>
            <Footer />
          </BookShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
