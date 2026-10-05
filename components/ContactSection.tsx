"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, CheckCircle2, Download, Mail, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ContactSectionProps {
  onOpenContact: () => void;
}

export function ContactSection({ onOpenContact }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden section-gradient-indigo">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-neutral-950 text-white dark:bg-[#0e1017] border border-neutral-800 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
              Have a problem worth solving?
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build something meaningful.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
              Whether you need senior architecture leadership, legacy enterprise modernization, or guidance scaling reliable digital platforms, let&apos;s connect.
            </p>
          </div>

          {/* Quick Actions Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {/* Get In Touch Modal Trigger */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-indigo-500/20 cursor-pointer"
            >
              <MessageSquare size={16} />
              <span>Send Message</span>
            </button>

            {/* Direct Email Copy */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/15 cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span className="text-emerald-300">Copied Email</span>
                </>
              ) : (
                <>
                  <Mail size={16} />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            {/* Download CV with PDF download attribute */}
            <a
              href="/cv-yann-vladimir-bajeneza.pdf"
              download="CV-Yann-Vladimir-Bajeneza.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:bg-white/5 font-medium text-sm transition-all cursor-pointer"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>
            <div className="flex items-center gap-1.5 text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Kigali, Rwanda (UTC+2)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
