"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-ink-950/90 backdrop-blur border-b border-ink-600/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-sm font-bold tracking-tight text-paper-100">
          S. SIKHWAL
          <span className="ml-1 text-signal-cyan">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-paper-400 transition-colors hover:text-signal-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="eyebrow rounded-full border border-ink-600 px-4 py-2 text-paper-200 transition-colors hover:border-signal-cyan hover:text-signal-cyan"
        >
          LinkedIn ↗
        </a>
      </nav>
    </header>
  );
}
