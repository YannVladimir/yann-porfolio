import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CASE_STUDIES } from "@/data/caseStudies";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2, Lightbulb, TrendingUp, Cpu, Layers } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { WaveformVisualizer } from "@/components/WaveformVisualizer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Yann Vladimir Bajeneza`,
    description: `${project.subtitle}. Architectural deep dive, problem breakdown, and engineering decisions.`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  const caseStudy = CASE_STUDIES[slug];

  if (!project || !caseStudy) {
    notFound();
  }

  const isKinyarwandaAI = project.id === "kinyarwanda-ai";

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#090a0f] text-[#090a0f] dark:text-[#f8fafc]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 space-y-12">
        {/* Breadcrumb Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Works</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.timeframe}</span>
            <span>•</span>
            <span>{project.clientOrOrg}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-mono font-medium">
            {caseStudy.subtitle}
          </p>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors"
              >
                <span>Visit Live Project</span>
                <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Custom AI Waveform Visualizer */}
        {isKinyarwandaAI && (
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Real-Time Speech & Caption Stream Simulation
            </h3>
            <WaveformVisualizer />
          </div>
        )}

        {/* Architecture Flow Diagram */}
        {caseStudy.architecture?.flowSteps && (
          <ArchitectureDiagram
            slug={caseStudy.slug}
            title={caseStudy.title}
            flowSteps={caseStudy.architecture.flowSteps}
          />
        )}

        {/* Problem and Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <ShieldCheck size={18} />
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                The Problem
              </h3>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.problem.overview}
            </p>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800">
              {caseStudy.problem.keyPainPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-500">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <CheckCircle2 size={18} />
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                The Solution
              </h3>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.solution.overview}
            </p>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800">
              {caseStudy.solution.keyDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Technical Decisions */}
        {caseStudy.keyDecisions && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-500" />
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Key Technical Decisions
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.keyDecisions.map((dec, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30"
                >
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1">
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

        {/* Impact Results */}
        {caseStudy.impactAndResults && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-500" />
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Measured Production Impact
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.impactAndResults.map((res, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-neutral-900 text-white dark:bg-neutral-900/80 border border-neutral-800"
                >
                  {res.metric && (
                    <span className="text-2xl font-bold font-mono text-indigo-400 block mb-1">
                      {res.metric}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-neutral-200 block mb-1">
                    {res.label}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {res.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
            Technologies & Frameworks
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
