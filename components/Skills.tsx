import { skills, achievements } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-t border-ink-600/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow text-signal-cyan">Toolkit</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-paper-100 md:text-4xl">
                What I build with.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-8">
              {groups.map(([group, items], i) => (
                <Reveal key={group} delay={i * 70}>
                  <p className="eyebrow text-paper-400">{group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono rounded border border-ink-600 px-3 py-1.5 text-xs text-paper-200 transition-colors hover:border-signal-cyan hover:text-signal-cyan"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-signal-amber">Track Record</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-paper-100 md:text-4xl">
                Proof points.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-0 divide-y divide-ink-600/60">
              {achievements.map((a, i) => (
                <Reveal key={a.label} delay={i * 60}>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <p className="text-sm font-medium text-paper-100">{a.label}</p>
                    <p className="text-right text-xs text-paper-400">{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
