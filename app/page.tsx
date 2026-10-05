"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { About } from "@/components/About";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { SkillsEcosystem } from "@/components/SkillsEcosystem";
import { ProcessSection } from "@/components/ProcessSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TimelineSection } from "@/components/TimelineSection";
import { EducationSection } from "@/components/EducationSection";
import { PersonalBrand } from "@/components/PersonalBrand";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ContactModal } from "@/components/ContactModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Project } from "@/data/portfolioData";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#090a0f] text-[#090a0f] dark:text-[#f8fafc] selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. Executive Credibility Metrics */}
        <CredibilityStrip />

        {/* 3. About / Profile & Manifesto */}
        <About />

        {/* 4. Signature Case Studies */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 5. Additional Systems Archive */}
        <ArchiveSection />

        {/* 6. Technology Ecosystem Map */}
        <SkillsEcosystem />

        {/* 7. "How I Think" 4-Step Process */}
        <ProcessSection />

        {/* 8. Engineering Philosophy */}
        <PhilosophySection />

        {/* 9. Experience Timeline & Career Map */}
        <TimelineSection />

        {/* 10. Education, CMU Africa & Honors */}
        <EducationSection />

        {/* 11. Personal Brand & Industries Map */}
        <PersonalBrand />

        {/* 12. Contact Section */}
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Animated WhatsApp Icon */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
