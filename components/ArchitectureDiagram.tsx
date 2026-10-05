"use client";

import React from "react";
import { ArrowRight, CheckCircle, Database, Server, ShieldCheck, UserCheck, Layers, Cpu } from "lucide-react";

interface FlowStep {
  step: string;
  label: string;
  detail: string;
}

interface ArchitectureDiagramProps {
  slug: string;
  title: string;
  flowSteps: FlowStep[];
}

export function ArchitectureDiagram({ slug, title, flowSteps }: ArchitectureDiagramProps) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white dark:bg-black/60 dark:border dark:border-white/10 border border-neutral-800 space-y-6">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            System Architecture & Pipeline Flow
          </span>
          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight mt-0.5">
            {title} Engineering Topography
          </h4>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-mono text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PRODUCTION VERIFIED</span>
        </div>
      </div>

      {/* Responsive Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {flowSteps.map((step, idx) => (
          <div key={step.step} className="relative flex flex-col justify-between">
            <div className="p-4 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-indigo-500/40 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-neutral-600" />
                </div>
                <h5 className="text-xs font-semibold text-white mb-1 leading-snug">
                  {step.label}
                </h5>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>

            {/* Connecting arrow for desktop */}
            {idx < flowSteps.length - 1 && (
              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-indigo-400/80 pointer-events-none">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer system guarantees */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-emerald-400" />
          <span>Stateless REST & Tokenized Security Gate</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-indigo-400" />
          <span>Cryptographic Integrity & Audit Trail</span>
        </div>
        <div className="flex items-center gap-2">
          <Database size={14} className="text-cyan-400" />
          <span>Optimized Relational Schema</span>
        </div>
      </div>
    </div>
  );
}
