"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CAREER_TIMELINE, CareerRole } from "@/data/portfolioData";
import { Briefcase, Building, Calendar, Check, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { CareerMap } from "./CareerMap";

export function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800/80 section-gradient-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Career Trajectory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Experience & leadership.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A chronological track record spanning a decade of software engineering, public sector infrastructure, and enterprise technical management.
            </p>
          </div>
        </div>

        {/* Signature Career Evolution Infographic Map */}
        <CareerMap />

        {/* Detailed Timeline List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-px before:bg-neutral-200 dark:before:bg-neutral-800 before:hidden md:before:block">
          {CAREER_TIMELINE.map((role, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-2xl border transition-all ${
                  role.isCurrent
                    ? "bg-white dark:bg-neutral-900 border-indigo-500/40 shadow-sm"
                    : "bg-white dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">
                        {role.title}
                      </h3>
                      {role.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/20">
                          PRESENT ROLE
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                        <Building size={12} />
                        {role.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {role.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {role.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold hidden sm:inline">
                      {isExpanded ? "Collapse Details" : "View Highlights"}
                    </span>
                    <button
                      className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                      aria-label="Toggle role details"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-4">
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {role.summary}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                        Key Responsibilities & Deliverables
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        {role.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                      {role.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
