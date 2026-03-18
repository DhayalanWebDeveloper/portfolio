"use client";

import Hero from "@/app/components/hero/hero";
import TechStack from "@/app/components/sections/tech-stack";
import FeaturedProjects from "@/app/components/sections/featured-projects";
import ExperienceTimeline from "@/app/components/sections/experience-timeline";
import SkillsSection from "@/app/components/sections/skills-section";
import ServicesSection from "@/app/components/sections/services-section";
import TestimonialsSection from "@/app/components/sections/testimonials-section";
import CTASection from "@/app/components/sections/cta-section";
import ChapterHeader from "@/app/components/book/chapter-header";
import SectionPage from "@/app/components/book/section-page";

export default function HomePage() {
  return (
    <>
      <SectionPage>
        <Hero />
      </SectionPage>
      <SectionPage>
        <ChapterHeader title="Introduction" />
        <TechStack />
      </SectionPage>
      <SectionPage>
        <FeaturedProjects />
      </SectionPage>
      <SectionPage>
        <ExperienceTimeline />
      </SectionPage>
      <SectionPage>
        <SkillsSection />
      </SectionPage>
      <SectionPage>
        <ServicesSection />
      </SectionPage>
      <SectionPage>
        <TestimonialsSection />
      </SectionPage>
      <SectionPage>
        <CTASection />
      </SectionPage>
    </>
  );
}
