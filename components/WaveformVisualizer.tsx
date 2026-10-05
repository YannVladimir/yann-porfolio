"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RefreshCw, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

interface SamplePhrase {
  kinyarwanda: string;
  english: string;
  phonetics: string;
  duration: number; // in seconds
}

const SAMPLE_PHRASES: SamplePhrase[] = [
  {
    kinyarwanda: "Muraho, turishimiye kubagezaho iyi gahunda nshya.",
    english: "Hello, we are pleased to present this new program to you.",
    phonetics: "[mu.ɾaː.ho tu.ɾi.ʃi.mi.je ku.ba.ɡe.zaː.ho iː.ji ɡa.huː.nda nʃja]",
    duration: 3.5,
  },
  {
    kinyarwanda: "Ikoranabuhanga riri guhindura imibereho y'abaturage mu buryo bugaragara.",
    english: "Technology is visibly transforming the livelihoods of citizens.",
    phonetics: "[i.ko.ɾa.na.bu.ha.ŋɡa ɾi.ɾi ɡu.hi.ndu.ɾa i.mi.be.ɾe.ho jaː.ba.tu.ɾa.ɡe]",
    duration: 4.2,
  },
  {
    kinyarwanda: "Gutunganya amakuru mu rurimi kavukire bitanga amahirwe menshi mu burezi.",
    english: "Processing data in indigenous languages unlocks immense opportunities in education.",
    phonetics: "[ɡu.tu.ŋɡa.ɲa a.ma.ku.ɾu mu ɾu.ɾiː.mi ka.vu.ki.ɾe bi.ta.ŋɡa a.ma.hi.ɾwe]",
    duration: 4.8,
  },
];

export function WaveformVisualizer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [decodedTokens, setDecodedTokens] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentPhrase = SAMPLE_PHRASES[activePhraseIndex];

  // Simulation timer for speech playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      const stepMs = 50;
      const totalSteps = (currentPhrase.duration * 1000) / stepMs;

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1 / totalSteps;
          if (next >= 1) {
            // Cycle to next phrase
            setActivePhraseIndex((idx) => (idx + 1) % SAMPLE_PHRASES.length);
            return 0;
          }
          return next;
        });
      }, stepMs);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentPhrase]);

  // Token decoding effect as audio progresses
  useEffect(() => {
    const words = currentPhrase.english.split(" ");
    const numWordsToShow = Math.floor(progress * words.length);
    setDecodedTokens(words.slice(0, numWordsToShow + 1));
  }, [progress, currentPhrase]);

  // Waveform canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 0.05;
      const width = (canvas.width = canvas.parentElement?.clientWidth || 400);
      const height = (canvas.height = 70);

      ctx.clearRect(0, 0, width, height);

      const numBars = Math.floor(width / 6);
      const centerY = height / 2;

      for (let i = 0; i < numBars; i++) {
        const x = i * 6;
        const normalizedX = i / numBars;

        // Wave formula combination for realistic speech cadence
        let amplitude = 0;
        if (isPlaying) {
          const baseWave = Math.sin(normalizedX * 12 + time * 3) * Math.cos(normalizedX * 6 - time * 2);
          const speechSpike = Math.sin(normalizedX * 30 + time * 5) * 0.5;
          amplitude = Math.abs(baseWave + speechSpike) * (height * 0.42);
        } else {
          amplitude = Math.abs(Math.sin(normalizedX * 8)) * 4 + 2;
        }

        // Active progress color
        const isPast = normalizedX <= progress;
        ctx.fillStyle = isPast ? "#6366f1" : "rgba(148, 163, 184, 0.3)";

        // Draw symmetrical audio bar
        const barHeight = Math.max(3, amplitude);
        ctx.beginPath();
        ctx.roundRect(x, centerY - barHeight / 2, 3.5, barHeight, 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, progress]);

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 text-white border border-white/10 space-y-4 shadow-xl">
      {/* Header telemetry */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300">
            Whisper · Real-Time ASR + Translation Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs transition-colors flex items-center gap-1"
            title={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span className="text-[10px] font-mono">{isPlaying ? "PAUSE" : "PLAY"}</span>
          </button>
          <button
            onClick={() => {
              setActivePhraseIndex((idx) => (idx + 1) % SAMPLE_PHRASES.length);
              setProgress(0);
            }}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
            title="Next audio sample"
          >
            <RefreshCw size={12} />
          </button>
        </div>
      </div>

      {/* Waveform Canvas */}
      <div className="w-full h-[70px] relative">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Bilingual Subtitle Pipeline Stream */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* Source Audio Stream (Kinyarwanda) */}
        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1">
              <Volume2 size={11} />
              Audio Input · Kinyarwanda
            </span>
            <span className="text-[10px] font-mono text-neutral-500">16kHz Mono</span>
          </div>
          <p className="text-xs text-neutral-200 font-medium italic leading-relaxed">
            &ldquo;{currentPhrase.kinyarwanda}&rdquo;
          </p>
          <p className="text-[9px] font-mono text-neutral-500 truncate">
            {currentPhrase.phonetics}
          </p>
        </div>

        {/* Real-time Subtitle Output (English) */}
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1">
              <Sparkles size={11} />
              Live Subtitle · English
            </span>
            <span className="text-[10px] font-mono text-indigo-300">Confidence: 96.4%</span>
          </div>
          <p className="text-xs text-cyan-100 font-medium leading-relaxed min-h-[36px]">
            {decodedTokens.join(" ")}
            <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-pulse" />
          </p>
          <div className="flex items-center gap-1 text-[9px] font-mono text-indigo-300">
            <CheckCircle2 size={10} className="text-emerald-400" />
            <span>Low-Latency Streaming Translation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
