"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Database, Layers, Lightbulb, TrendingUp } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { CASE_STUDIES } from "@/data/caseStudies";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { WaveformVisualizer } from "./WaveformVisualizer";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = CASE_STUDIES[project.slug] || {
    slug: project.slug,
    title: project.title,
    subtitle: project.subtitle,
    category: project.category,
    timeframe: project.timeframe,
    role: project.role,
    clientOrOrg: project.clientOrOrg,
    problem: {
      overview: project.description,
      keyPainPoints: ["Operational bottlenecks", "Data structure fragmentation", "Scalability constraints"],
    },
    solution: {
      overview: project.longDescription || project.description,
      keyDeliverables: project.highlightPoints,
    },
    architecture: {
      description: "Modular enterprise architecture design.",
      flowSteps: [
        { step: "01", label: "Request Ingestion", detail: "Client interaction layer" },
        { step: "02", label: "Security Gate", detail: "Token verification & RBAC" },
        { step: "03", label: "Core Processing", detail: "Business workflows & calculations" },
        { step: "04", label: "Data Persistence", detail: "Optimized database transactions" },
      ],
      techStack: [{ category: "Stack", items: project.technologies }],
    },
    keyDecisions: [
      { title: "Modular Architecture", rationale: "Enables independent scaling and clean maintenance boundaries." },
    ],
    impactAndResults: project.impactMetrics?.map((m) => ({
      metric: m.value,
      label: m.label,
      text: "Validated in active operational environment.",
    })) || [{ metric: "100%", label: "Operational", text: "Verified deployment." }],
    lessonsLearned: ["Simplicity in data modeling drastically reduces downstream complexity."],
    relatedProjects: [],
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0f1118] border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0f1118]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
              Case Study Deep-Dive
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              {project.clientOrOrg}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Hero Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">
                {project.category}
              </span>
              <span>•</span>
              <span>{project.timeframe}</span>
              <span>•</span>
              <span>Role: {project.role}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {caseStudy.title}: {caseStudy.subtitle}
            </h1>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Interactive Waveform if Speech project */}
          {project.id === "kinyarwanda-ai" && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                Live Speech & Subtitle Stream Simulation
              </h3>
              <WaveformVisualizer />
            </div>
          )}

          {/* Architecture Diagram */}
          {caseStudy.architecture?.flowSteps && (
            <ArchitectureDiagram
              slug={caseStudy.slug}
              title={caseStudy.title}
              flowSteps={caseStudy.architecture.flowSteps}
            />
          )}

          {/* Problem & Solution Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 space-y-4">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <ShieldCheck size={18} />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  The Problem & Challenge
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {caseStudy.problem.overview}
              </p>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                {caseStudy.problem.keyPainPoints.map((pain, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">•</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <CheckCircle2 size={18} />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  The Engineering Solution
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {caseStudy.solution.overview}
              </p>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-indigo-200 dark:border-indigo-900/40">
                {caseStudy.solution.keyDeliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Technical Decisions */}
          {caseStudy.keyDecisions && caseStudy.keyDecisions.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb size={18} className="text-amber-500" />
                <h3 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
                  Key Technical Decisions
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.keyDecisions.map((dec, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30"
                  >
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {dec.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact & Measured Outcomes */}
          {caseStudy.impactAndResults && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-500" />
                <h3 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
                  Measured Production Impact
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.impactAndResults.map((res, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-neutral-900 text-white dark:bg-neutral-900/80 border border-neutral-800"
                  >
                    {res.metric && (
                      <span className="text-2xl font-bold font-mono text-indigo-400 block mb-1">
                        {res.metric}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-neutral-200 block mb-1">
                      {res.label}
                    </span>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {res.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack Summary */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
