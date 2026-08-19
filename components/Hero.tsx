"use client";

import { profile, stats } from "@/lib/data";

const points = [
  { x: 40, y: 210 },
  { x: 220, y: 120 },
  { x: 400, y: 150 },
  { x: 580, y: 40 },
];

const path = `M${points[0].x},${points[0].y} L${points[1].x},${points[1].y} L${points[2].x},${points[2].y} L${points[3].x},${points[3].y}`;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow flex items-center gap-2 text-signal-cyan">
          <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-signal-cyan" />
          DATA SCIENCE &amp; ANALYTICS · {profile.location.toUpperCase()}
        </p>

        <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] text-paper-100 sm:text-5xl md:text-6xl">
          {profile.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-400 md:text-lg">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-signal-cyan px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            View the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-paper-200 transition-colors hover:border-signal-cyan hover:text-signal-cyan"
          >
            Get in touch
          </a>
        </div>

        {/* Signature element: a schematic sparkline stitched from the three
            flagship datasets, doubling as quick navigation into each project. */}
        <div className="mt-20">
          <p className="eyebrow mb-4 text-paper-400">Three datasets, one throughline</p>
          <svg
            viewBox="0 0 640 240"
            className="h-40 w-full max-w-3xl md:h-52"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={path}
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1000"
              className="animate-draw-line"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="640" y2="0">
                <stop offset="0%" stopColor="#F0665C" />
                <stop offset="55%" stopColor="#F4A340" />
                <stop offset="100%" stopColor="#4FD1E5" />
              </linearGradient>
            </defs>
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="5" fill="#0A0E14" stroke="#EDEFF2" strokeWidth="1.5" />
            ))}
          </svg>

          <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <a
                key={s.tag}
                href={`#${s.tag}`}
                className="group border-t border-ink-600 pt-3 transition-colors hover:border-signal-cyan"
              >
                <p className="font-mono text-xl font-medium text-paper-100 group-hover:text-signal-cyan md:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-paper-400">{s.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
