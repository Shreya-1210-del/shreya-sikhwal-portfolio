import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-600/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-signal-cyan">Experience</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-paper-100 md:text-4xl">
            Where I've put it to work.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink-600/60">
          {experience.map((item, i) => (
            <Reveal key={item.org} delay={i * 80}>
              <div className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <p className="font-mono text-xs text-paper-400 md:col-span-2">{item.period}</p>
                <div className="md:col-span-3">
                  <p className="font-display text-lg font-bold text-paper-100">{item.role}</p>
                  <p className="text-sm text-signal-amber">{item.org}</p>
                </div>
                <ul className="space-y-2 md:col-span-7">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-paper-300">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-signal-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
