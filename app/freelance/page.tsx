import { freelancePricing } from "@/lib/data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hire Best Web Developer in Chennai | Freelance Pricing",
  description:
    "Looking for a top freelance web developer in Chennai? View transparent pricing for Next.js, React, Angular, and WordPress development services.",
  keywords: [
    "Hire Web Developer Chennai",
    "Freelance Web Developer Chennai",
    "Web Development Pricing India",
    "Top Web Developers in Chennai",
    "Next.js Developer for Hire",
  ],
  openGraph: {
    title: "Hire Best Web Developer in Chennai | Freelance Pricing",
    description: "Premium freelance web development services at accessible prices. Skip the agency overhead.",
    images: [{ url: "/images/freelance-hero.png", width: 1200, height: 630, alt: "Freelance Web Developer Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Best Web Developer in Chennai | Freelance Pricing",
    description: "Premium freelance web development services at accessible prices. Skip the agency overhead.",
    images: ["/images/freelance-hero.png"],
  },
};

export default function FreelancePage() {
  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-24 max-w-6xl mx-auto gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Premium Freelance Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair tracking-tight mb-6">
            Enterprise-Grade Websites.<br />Freelance Pricing.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Skip the agency overhead. Work directly with a senior full-stack developer to build lightning-fast, high-converting websites and applications.
          </p>
        </div>
        <div className="flex-1 relative w-full max-w-lg aspect-square">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
          <Image
            src="/images/freelance-hero.png"
            alt="Premium Web Development Concept"
            fill
            className="object-contain drop-shadow-2xl z-10"
            priority
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">No hidden fees. Pay for the technology and quality your business deserves.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancePricing.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border relative transition-all duration-300 hover:-translate-y-1 ${item.highlight ? 'bg-primary/5 border-primary shadow-xl ring-1 ring-primary' : 'bg-card border-border shadow-sm hover:shadow-md'}`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 mt-2">{item.service}</h3>
              <div className="text-3xl font-bold text-foreground mb-4">
                {item.price}
                <span className="text-sm font-normal text-muted-foreground ml-1">/ page</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  SEO Optimized Structure
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Pixel-Perfect Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  90+ Performance Score
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Me */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Hire Me Over an IT Agency?</h2>
          <p className="text-muted-foreground">Get the best of both worlds: Agency quality without the agency price tag.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Direct Communication</h3>
            <p className="text-muted-foreground">No account managers or confusing support tickets. You communicate directly with the developer building your project, ensuring zero miscommunication.</p>
          </div>
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Speed & Agility</h3>
            <p className="text-muted-foreground">Agencies have massive backlogs and corporate red tape. I move fast, iterate quickly, and deliver high-quality results weeks before an agency would.</p>
          </div>
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
            <p className="text-muted-foreground">You are paying for my coding expertise, not an agency's office rent, HR team, and sales commissions. Your entire budget goes into your product.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">A streamlined process designed to save you time and headaches.</p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary font-bold z-10">1</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2">Discovery & Quote</h3>
              <p className="text-muted-foreground text-sm">We discuss your requirements, target audience, and features. I provide a fixed, transparent quote and timeline.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary font-bold z-10">2</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2">Design & Development</h3>
              <p className="text-muted-foreground text-sm">I build your application using modern frameworks like Next.js or Angular. You receive regular milestone updates.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary font-bold z-10">3</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2">Launch & Handover</h3>
              <p className="text-muted-foreground text-sm">We deploy the application to your server. I ensure technical SEO is in place and provide complete documentation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-lg font-bold mb-2">Do you provide hosting and domain setup?</h3>
            <p className="text-muted-foreground text-sm">Yes! I can help you purchase a domain and set up hosting on platforms like Vercel, AWS, or Hostinger at no extra setup cost.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-lg font-bold mb-2">How long does a standard 5-page website take?</h3>
            <p className="text-muted-foreground text-sm">Depending on the complexity and design requirements, a standard 5-page business website usually takes 1 to 2 weeks from start to finish.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="text-lg font-bold mb-2">Do you optimize for Google SEO?</h3>
            <p className="text-muted-foreground text-sm">Absolutely. Every website I build includes Technical SEO setup, blazing-fast load times, and structured data schema to ensure you rank well on Google.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't settle for mediocre websites. Let's build something your customers will love. Prices are flexible based on your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:dhayalandhaya149@gmail.com" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95">
              Email: dhayalandhaya149@gmail.com
            </a>
            <a href="tel:+917402532025" className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-primary bg-background px-8 text-base font-bold text-primary shadow-sm transition-transform hover:scale-105 active:scale-95">
              Call: +91 74025 32025
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
