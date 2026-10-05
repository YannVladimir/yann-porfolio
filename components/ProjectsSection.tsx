"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { Layers } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Featured Works" },
    { id: "enterprise", label: "Enterprise & GovTech" },
    { id: "ai", label: "AI & Speech" },
    { id: "education", label: "Education & Platforms" },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "enterprise")
      return p.category.includes("Enterprise") || p.category.includes("Government") || p.category.includes("Document");
    if (activeFilter === "ai")
      return p.category.includes("AI");
    if (activeFilter === "education")
      return p.category.includes("Education") || p.category.includes("Consumer");
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative section-gradient-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Signature Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Engineered for real-world impact.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Selected production systems, modernization architectures, and research initiatives delivered across government, education, and enterprise.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
