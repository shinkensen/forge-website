export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 border-t border-paper/10">
      <div className="mx-auto max-w-content px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 100 100" className="text-paper/60">
            <path d="M20 60 L80 60 L85 70 L75 80 L25 80 L15 70 Z" fill="currentColor" />
            <rect x="30" y="50" width="40" height="10" fill="currentColor" />
            <path d="M35 50 L65 50 L70 40 L30 40 Z" fill="currentColor" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-wide">
            Forge · Fiscally sponsored by The Hack Foundation
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wide">
          © 2026 Forge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
