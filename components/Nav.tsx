"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#budget", label: "Budget" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <svg width="26" height="26" viewBox="0 0 100 100" className="text-ink">
            <path
              d="M20 60 L80 60 L85 70 L75 80 L25 80 L15 70 Z"
              fill="currentColor"
            />
            <rect x="30" y="50" width="40" height="10" fill="currentColor" />
            <path d="M35 50 L65 50 L70 40 L30 40 Z" fill="currentColor" />
            <g className="text-copper" fill="currentColor">
              <rect
                x="45"
                y="15"
                width="6"
                height="30"
                transform="rotate(-45 48 30)"
              />
              <rect
                x="52"
                y="8"
                width="15"
                height="8"
                rx="2"
                transform="rotate(-45 59.5 12)"
              />
            </g>
          </svg>
          <span className="font-display font-bold tracking-tight text-lg">
            FORGE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-wide uppercase text-ink/60 hover:text-copper transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="font-mono text-[12px] uppercase tracking-wide px-4 py-2 bg-ink text-paper hover:bg-copper transition-colors"
        >
          Get Involved
        </a>
      </nav>
    </header>
  );
}
