
import ParticleWave from "./ParticleWave";

import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const technologies = [
    "Java",
    "Python",
    "TypeScript",
    "C++",
    "Rust",
    "Go",
  ];

  return (
    <section
      id="overview"
      className="relative isolate min-h-[650px] overflow-hidden px-4 pb-16 pt-8 text-center sm:px-6 md:px-12 md:pt-10"
    >
      {/* ================================= */}
      {/* PARTICLE WAVE BACKGROUND */}
      {/* ================================= */}

      <ParticleWave />

      {/* ================================= */}
      {/* HERO CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto max-w-5xl space-y-6">

        {/* RELEASE BADGE */}

        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-2 text-xs text-indigo-300 backdrop-blur-sm">

          <span className="rounded-full bg-emerald-500 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
            Collaborate
          </span>

          <span className="flex items-center gap-1 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Collaborative Coding & Peer Learning
          </span>

        </div>

        {/* MAIN HEADING */}

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl md:leading-[1.15]">

          Code Together in Real Time.

          <br />

          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
            Learn Faster with Embedded AI & Real Time Chat
          </span>

        </h1>

        {/* DESCRIPTION */}

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">

          Ditch the chaotic screen shares, audio latency, and fragmented
          setups. CollabEditor brings collaborative coding, peer learning,
          and communication together in one focused browser workspace.

        </p>

        {/* ACTION BUTTONS */}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

          <a
            href="/signup"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 transition hover:-translate-y-1 hover:bg-indigo-500"
          >
            <span>Create Free Account</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/login"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
          >
            Sign In
          </a>

          <a
            href="/editor"
            className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-5 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-900/40"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>Open Workspace</span>
          </a>

        </div>

        {/* SOCIAL PROOF */}

        <div className="space-y-3 pt-3 text-xs text-slate-400">

          <div className="flex items-center justify-center gap-1.5 text-slate-300">

            <CheckCircle2 className="h-4 w-4 text-emerald-400" />

            <span>
              A focused workspace for collaborative coding and peer learning
            </span>

          </div>

          {/* TECHNOLOGY PILLS */}

          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] text-slate-400">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5 transition hover:border-indigo-500/50 hover:text-white"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
