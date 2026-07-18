export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-blueprint-deep text-paper overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blueprint-deep" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <span className="reg-mark reg-mark--tl border-copper-light/70 !top-2 !left-2" />
        <span className="reg-mark reg-mark--tr border-copper-light/70 !top-2 !right-2" />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="eyebrow text-copper-light">
                Forge — Student Engineering Nonprofit
              </span>
            </div>

            <h1 className="font-display font-bold text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[3.6rem] tracking-tight">
              We fund the projects
              <br />
              teenagers <span className="text-copper-light">design and build.</span>
            </h1>

            <p className="mt-7 text-paper/70 text-lg leading-relaxed max-w-lg">
              Forge exists to empower teenage engineers and spark a lasting
              love of engineering in youth — funding student-designed
              projects, teaching the skills behind them, and putting
              first-build kits directly into younger students&rsquo; hands.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://forms.fillout.com/t/n71KpfeyJaus"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-copper text-paper font-mono text-[13px] uppercase tracking-wide hover:bg-copper-light transition-colors"
              >
                Apply for project funding →
              </a>
              <a
                href="#sponsor"
                className="px-6 py-3.5 border border-paper/25 text-paper font-mono text-[13px] uppercase tracking-wide hover:border-paper/60 transition-colors"
              >
                Support our work
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-paper/15 pt-7">
              <div>
                <dt className="eyebrow text-paper/40">Students interested</dt>
                <dd className="font-display text-2xl font-semibold mt-1">83+</dd>
              </div>
              <div>
                <dt className="eyebrow text-paper/40">Programs</dt>
                <dd className="font-display text-2xl font-semibold mt-1">02</dd>
              </div>
              <div>
                <dt className="eyebrow text-paper/40">Partner network</dt>
                <dd className="font-display text-2xl font-semibold mt-1">~3,500</dd>
              </div>
            </dl>
          </div>

          {/* Schematic visual: one signal, two program outputs */}
          <div className="relative">
            <svg
              viewBox="0 0 380 380"
              className="w-full h-auto max-w-sm mx-auto"
              role="img"
              aria-label="Schematic diagram showing the Forge mission splitting into the Project Funding and Maker Kit programs"
            >
              <circle cx="60" cy="190" r="7" fill="none" stroke="#D98A4A" strokeWidth="2" />
              <circle cx="60" cy="190" r="2.5" fill="#D98A4A" />

              <path
                d="M67 190 H140"
                stroke="#D98A4A"
                strokeWidth="1.5"
                className="trace-line"
              />
              <path
                d="M140 190 V70 H210"
                stroke="#D98A4A"
                strokeWidth="1.5"
                fill="none"
                className="trace-line"
              />
              <path
                d="M140 190 V310 H210"
                stroke="#D98A4A"
                strokeWidth="1.5"
                fill="none"
                className="trace-line"
              />
              <circle cx="140" cy="190" r="3" fill="#D98A4A" />

              <rect
                x="210"
                y="40"
                width="140"
                height="60"
                fill="none"
                stroke="#F7F6F1"
                strokeOpacity="0.5"
                strokeWidth="1.5"
              />
              <text
                x="280"
                y="64"
                textAnchor="middle"
                fill="#F7F6F1"
                fontSize="10"
                fontFamily="var(--font-mono)"
                letterSpacing="0.5"
              >
                PROJECT
              </text>
              <text
                x="280"
                y="78"
                textAnchor="middle"
                fill="#F7F6F1"
                fontSize="10"
                fontFamily="var(--font-mono)"
                letterSpacing="0.5"
              >
                FUNDING
              </text>

              <rect
                x="210"
                y="280"
                width="140"
                height="60"
                fill="none"
                stroke="#F7F6F1"
                strokeOpacity="0.5"
                strokeWidth="1.5"
              />
              <text
                x="280"
                y="304"
                textAnchor="middle"
                fill="#F7F6F1"
                fontSize="10"
                fontFamily="var(--font-mono)"
                letterSpacing="0.5"
              >
                MAKER
              </text>
              <text
                x="280"
                y="318"
                textAnchor="middle"
                fill="#F7F6F1"
                fontSize="10"
                fontFamily="var(--font-mono)"
                letterSpacing="0.5"
              >
                KITS
              </text>

              <text
                x="60"
                y="215"
                textAnchor="middle"
                fill="#D98A4A"
                fontSize="9"
                fontFamily="var(--font-mono)"
                letterSpacing="0.5"
              >
                FORGE
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
