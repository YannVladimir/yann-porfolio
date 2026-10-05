"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Kigali",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#07080c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-800/80">
          <div className="space-y-1">
            <span className="text-sm font-bold tracking-tight text-neutral-950 dark:text-white uppercase font-mono">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Senior Software Developer · Technology Builder · Project Manager
            </p>
          </div>

          {/* Location & Real-Time Clock */}
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Kigali, Rwanda
            </span>
            <span>·</span>
            <span>{time ? `${time} CAT` : "UTC+2"}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#ecosystem" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Ecosystem
            </a>
            <a href="#philosophy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#education" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Education
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Yann Vladimir Bajeneza.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
