"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREER_EVOLUTION } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2, Milestone } from "lucide-react";

export function CareerMap() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white dark:bg-black/80 border border-neutral-800 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Career Evolution Map
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
            10-Year Progression Topology
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300">
          <Milestone size={13} className="text-indigo-400" />
          <span>2014 — TODAY</span>
        </div>
      </div>

      {/* Horizontal / Grid Evolution Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {CAREER_EVOLUTION.map((node, idx) => (
          <motion.div
            key={node.year}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-bold text-indigo-400">
                  {node.year}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80" />
              </div>

              <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                {node.role}
              </h4>

              <p className="text-[10px] font-mono text-cyan-300 mb-2">
                {node.focus}
              </p>

              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {node.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
