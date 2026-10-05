"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, GraduationCap, ShieldCheck, Cpu, Building2, Trophy, BookOpen, Database, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { WaveformVisualizer } from "./WaveformVisualizer";

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onSelectProject, index }: ProjectCardProps) {
  const getIcon = (name?: string) => {
    switch (name) {
      case "FileText": return <FileText size={18} />;
      case "GraduationCap": return <GraduationCap size={18} />;
      case "ShieldCheck": return <ShieldCheck size={18} />;
      case "Cpu": return <Cpu size={18} />;
      case "Building2": return <Building2 size={18} />;
      case "Trophy": return <Trophy size={18} />;
      case "BookOpen": return <BookOpen size={18} />;
      case "Database": return <Database size={18} />;
      default: return <FileText size={18} />;
    }
  };

  const isKinyarwandaAI = project.id === "kinyarwanda-ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group relative rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
    >
      <div className="p-6 sm:p-8 space-y-6">
        {/* Top Header & Badges */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              {getIcon(project.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-medium text-neutral-500 dark:text-neutral-400">
                  {project.clientOrOrg}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">· {project.timeframe}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Status Badge */}
          {project.status === "building" && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-medium border border-amber-500/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              CURRENTLY BUILDING
            </span>
          )}
          {project.status === "production" && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-medium border border-emerald-500/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              PRODUCTION
            </span>
          )}
          {project.status === "research" && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-medium border border-indigo-500/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              AI RESEARCH
            </span>
          )}
        </div>

        {/* Subtitle / Role */}
        <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Custom Visual Demo for AI / Speech Project */}
        {isKinyarwandaAI && (
          <div className="pt-2">
            <WaveformVisualizer />
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="space-y-2 pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
            Core Engineering Contributions
          </span>
          <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
            {project.highlightPoints.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
                <span className="leading-normal">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Metrics */}
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40">
            {project.impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <span className="text-xs sm:text-sm font-bold font-mono text-neutral-900 dark:text-neutral-100 block">
                  {metric.value}
                </span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate block">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 sm:px-8 py-4 bg-neutral-50/60 dark:bg-neutral-900/60 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
        <button
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          <span>View Architecture & Case Study</span>
          <ArrowUpRight size={14} />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors font-mono"
          >
            <span>Live Site</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
