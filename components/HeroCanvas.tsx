"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isPrimary?: boolean;
  type?: "software" | "data" | "ai" | "product" | "people" | "system";
}

interface Signal {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

// These 6 represent Yann's core expertise domains — visible as labeled primary nodes
const PRIMARY_LABELS = [
  { label: "Software", type: "software" as const },
  { label: "Data", type: "data" as const },
  { label: "AI / NLP", type: "ai" as const },
  { label: "Products", type: "product" as const },
  { label: "People", type: "people" as const },
  { label: "Architecture", type: "system" as const },
];

// Desktop = 22 total nodes (6 primary + 16 ambient); mobile = 14 (6 primary + 8 ambient)
const TOTAL_NODES_DESKTOP = 22;
const TOTAL_NODES_MOBILE = 14;

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const nodes: Node[] = [];
    const numNodes = width < 640 ? TOTAL_NODES_MOBILE : TOTAL_NODES_DESKTOP;

    // Create the 6 primary labeled domain nodes
    for (let i = 0; i < PRIMARY_LABELS.length; i++) {
      nodes.push({
        x: (width / (PRIMARY_LABELS.length + 1)) * (i + 1) + (Math.random() - 0.5) * 40,
        y: height * 0.35 + (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 4.5,
        label: PRIMARY_LABELS[i].label,
        isPrimary: true,
        type: PRIMARY_LABELS[i].type,
      });
    }

    // Create subtle ambient background nodes (unlabeled)
    for (let i = PRIMARY_LABELS.length; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        isPrimary: false,
      });
    }

    // Signals traveling along connections
    const signals: Signal[] = [];
    for (let i = 0; i < 4; i++) {
      signals.push({
        fromIndex: Math.floor(Math.random() * nodes.length),
        toIndex: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
      });
    }

    // Mouse proximity interaction
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const isDark = theme === "dark";

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Colors based on theme
      const nodeColor = isDark ? "rgba(248, 250, 252, 0.7)" : "rgba(15, 23, 42, 0.7)";
      const primaryNodeColor = isDark ? "#818cf8" : "#4f46e5";
      const lineColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
      const highlightLineColor = isDark ? "rgba(99, 102, 241, 0.25)" : "rgba(79, 70, 229, 0.2)";
      const textColor = isDark ? "rgba(226, 232, 240, 0.85)" : "rgba(30, 41, 59, 0.85)";
      const tagBg = isDark ? "rgba(17, 24, 39, 0.85)" : "rgba(241, 245, 249, 0.9)";
      const tagBorder = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)";

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from edges
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Mouse gentle repel
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          node.x -= (dx / dist) * force * 0.8;
          node.y -= (dy / dist) * force * 0.8;
        }
      }

      // Draw connecting lines
      const maxDistance = width < 640 ? 110 : 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isPrimary && nodes[j].isPrimary ? highlightLineColor : lineColor;
            ctx.lineWidth = nodes[i].isPrimary && nodes[j].isPrimary ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw traveling signals
      for (const sig of signals) {
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          sig.progress = 0;
          sig.fromIndex = Math.floor(Math.random() * nodes.length);
          sig.toIndex = Math.floor(Math.random() * nodes.length);
        }

        const from = nodes[sig.fromIndex];
        const to = nodes[sig.toIndex];
        if (from && to) {
          const sx = from.x + (to.x - from.x) * sig.progress;
          const sy = from.y + (to.y - from.y) * sig.progress;

          ctx.beginPath();
          ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "#38bdf8" : "#0284c7";
          ctx.fill();

          // Subtle glow
          ctx.beginPath();
          ctx.arc(sx, sy, 6, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "rgba(56, 189, 248, 0.25)" : "rgba(2, 132, 199, 0.2)";
          ctx.fill();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isPrimary ? primaryNodeColor : nodeColor;
        ctx.fill();

        if (node.isPrimary) {
          // Subtle halo
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(79, 70, 229, 0.15)";
          ctx.fill();

          // Draw label badge
          if (node.label) {
            ctx.font = "600 11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
            const textWidth = ctx.measureText(node.label).width;
            const badgeW = textWidth + 16;
            const badgeH = 22;
            const badgeX = node.x - badgeW / 2;
            const badgeY = node.y + 10;

            ctx.fillStyle = tagBg;
            ctx.beginPath();
            ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 6);
            ctx.fill();

            ctx.strokeStyle = tagBorder;
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = textColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(node.label, node.x, badgeY + badgeH / 2);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden glass-panel border border-black/[0.06] dark:border-white/[0.08]">
      {/* Top badge: dynamic counts from constants */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span>SYSTEM TOPOLOGY · {PRIMARY_LABELS.length} DOMAINS · {TOTAL_NODES_DESKTOP} NODES ACTIVE</span>
      </div>

      {/* Bottom strip: all 6 domain names */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
        <span>Software → Data → AI/NLP → Products → People → Architecture</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
    </div>
  );
}
