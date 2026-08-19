import { about, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-ink-600/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <Reveal>
          <p className="eyebrow text-signal-cyan">About</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-paper-100 md:text-4xl">
            Data with a reason attached.
          </h2>
        </Reveal>

        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-base leading-relaxed text-paper-300 md:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-1 border-l-2 border-signal-amber/60 pl-5">
              <p className="font-mono text-sm text-paper-200">{education.degree}</p>
              <p className="text-sm text-paper-400">
                {education.school} · {education.period} · {education.detail}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
