import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="grid-bg relative border-t border-ink-600/60 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950" />
      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="eyebrow text-signal-cyan">Contact</p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold text-paper-100 md:text-5xl">
          Have a dataset with real stakes? Let's talk.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-paper-400">
          Open to data analyst and data science internships, and research collaborations at the intersection of data and behaviour.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-signal-cyan px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-paper-400 transition-colors hover:text-signal-cyan"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-paper-400 transition-colors hover:text-signal-cyan"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center gap-2 px-6 text-center md:px-10">
        <p className="font-mono text-xs text-paper-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
