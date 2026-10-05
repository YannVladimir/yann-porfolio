"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Sun, Moon, Menu, X, ArrowUpRight, Download,
  Briefcase, User, Clock, Cpu, Lightbulb, GraduationCap, Mail
} from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

const navLinks = [
  { name: "Work",        href: "#projects",   icon: Briefcase,     desc: "Projects & case studies" },
  { name: "About",       href: "#about",       icon: User,          desc: "My story & values" },
  { name: "Experience",  href: "#experience",  icon: Clock,         desc: "10+ years timeline" },
  { name: "Ecosystem",   href: "#ecosystem",   icon: Cpu,           desc: "Tools & technologies" },
  { name: "Philosophy",  href: "#philosophy",  icon: Lightbulb,     desc: "How I think & build" },
  { name: "Education",   href: "#education",   icon: GraduationCap, desc: "CMU Africa & degrees" },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["projects", "about", "experience", "ecosystem", "philosophy", "education", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/85 dark:bg-[#090a0f]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06] shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 font-bold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-indigo-500/30 dark:ring-indigo-400/40 group-hover:ring-indigo-500 transition-all shadow-xs shrink-0">
              <Image
                src="/yann-avatar.jpg"
                alt="Yann Vladimir Bajeneza"
                fill sizes="36px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider uppercase leading-none text-neutral-950 dark:text-white">
                Yann Vladimir
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-tight mt-0.5">
                Senior Developer & Architect
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
            {navLinks.map((link) => {
              const target = link.href.replace("#", "");
              const isActive = activeSection === target;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium tracking-wide rounded-full transition-all ${
                    isActive
                      ? "text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all border border-transparent hover:border-black/[0.08] dark:hover:border-white/[0.08] cursor-pointer"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open navigation menu"
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[45] md:hidden bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer panel — slides in from right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[46] md:hidden w-[min(320px,100vw)] bg-white dark:bg-[#0c0d14] flex flex-col shadow-2xl shadow-black/30"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-black/[0.06] dark:border-white/[0.07] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-indigo-500/30">
                    <Image src="/yann-avatar.jpg" alt="Yann Vladimir" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-950 dark:text-white leading-tight">Yann Vladimir</p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available for projects
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeMobile}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links List */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600 px-3 pb-2">
                  Navigation
                </p>
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const target = link.href.replace("#", "");
                  const isActive = activeSection === target;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobile}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      className={`flex items-center gap-3.5 px-3 py-3 rounded-2xl transition-all group cursor-pointer ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400"
                          : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"
                      }`}>
                        <Icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-tight">{link.name}</p>
                        <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-tight">{link.desc}</p>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer Footer Actions */}
              <div className="px-4 pb-6 pt-3 border-t border-black/[0.06] dark:border-white/[0.07] space-y-2.5 shrink-0">
                {/* Get in touch — primary */}
                <button
                  onClick={() => { closeMobile(); onOpenContact?.(); }}
                  className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
                >
                  <Mail size={15} />
                  <span>Get in touch</span>
                </button>

                {/* Two utility actions */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/cv-yann-vladimir-bajeneza.pdf"
                    download="CV-Yann-Vladimir-Bajeneza.pdf"
                    onClick={closeMobile}
                    className="py-2.5 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] text-xs font-semibold text-neutral-700 dark:text-neutral-200 flex items-center justify-center gap-1.5 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                  >
                    <Download size={13} />
                    Download CV
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="py-2.5 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] text-xs font-semibold text-neutral-700 dark:text-neutral-200 flex items-center justify-center gap-1.5 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                  >
                    {theme === "dark" ? <><Sun size={13} /> Light mode</> : <><Moon size={13} /> Dark mode</>}
                  </button>
                </div>

                <p className="text-center text-[10px] font-mono text-neutral-400 dark:text-neutral-600 pt-1">
                  +250 782 767 289 · Kigali, Rwanda
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
