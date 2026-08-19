import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";

const accentMap: Record<Project["accent"], { text: string; border: string; bg: string }> = {
  cyan: { text: "text-signal-cyan", border: "border-signal-cyan/40", bg: "bg-signal-cyan/10" },
  amber: { text: "text-signal-amber", border: "border-signal-amber/40", bg: "bg-signal-amber/10" },
  coral: { text: "text-signal-coral", border: "border-signal-coral/40", bg: "bg-signal-coral/10" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent];
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        id={project.id}
        className="scroll-mt-24 border-t border-ink-600/60 py-14 md:py-16"
      >
        <div
          className={`grid gap-10 md:grid-cols-12 md:items-start ${
            reversed ? "" : ""
          }`}
        >
          <div className="md:col-span-4">
            <p className={`eyebrow ${accent.text}`}>{project.tag}</p>
            <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-paper-100 md:text-[1.75rem]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-paper-400">{project.domain}</p>

            <p className="mt-5 text-sm leading-relaxed text-paper-300">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono rounded border border-ink-600 px-2 py-1 text-[0.68rem] text-paper-400"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text} transition-opacity hover:opacity-80`}
              >
                View repository ↗
              </a>
            )}
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-5">
              {project.metrics.map((m) => (
                <div key={m.label} className={`rounded-lg border ${accent.border} ${accent.bg} px-4 py-3`}>
                  <p className="font-mono text-lg font-medium text-paper-100 md:text-xl">{m.value}</p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-paper-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <ul className="space-y-4">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-paper-300 md:text-[0.95rem]">
                  <span className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${accent.text} bg-current`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-4 md:py-6">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-signal-cyan">Featured Work</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-paper-100 md:text-4xl">
            Three datasets. Three different kinds of stakes.
          </h2>
        </Reveal>

        <div>
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
