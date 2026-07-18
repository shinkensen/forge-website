import SectionFrame from "./SectionFrame";

// r = 70, circumference = 2πr ≈ 439.82
const CIRCUMFERENCE = 439.82;

const SEGMENTS = [
  {
    label: "Maker Kits",
    pct: 58,
    color: "#B5651D",
    detail: "Manufacturing and distributing kits to partner schools.",
  },
  {
    label: "Project Funding",
    pct: 30,
    color: "#3F7A5C",
    detail:
      "Parts and components for individual student projects — batteries, motors, wire, circuit boards, 3D-printed bodies.",
  },
  {
    label: "Operations",
    pct: 12,
    color: "#24425C",
    detail:
      "7% fiscal sponsorship fee to The Hack Foundation, plus 5% for tools like Notion and Jira that track projects, kits, and spending.",
  },
];

let cumulative = 0;
const ARCS = SEGMENTS.map((s) => {
  const length = (s.pct / 100) * CIRCUMFERENCE;
  const arc = { ...s, length, offset: cumulative };
  cumulative += length;
  return arc;
});

export default function Budget() {
  return (
    <SectionFrame id="budget" eyebrow="Budget & Spending" eyebrowNote="Fig. 04">
      <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
        <div className="mx-auto">
          <svg
            width="240"
            height="240"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Donut chart: 58% Maker Kits, 30% Project Funding, 12% Operations"
          >
            <g transform="rotate(-90 100 100)">
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#E7E3D6"
                strokeWidth="26"
              />
              {ARCS.map((a) => (
                <circle
                  key={a.label}
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke={a.color}
                  strokeWidth="26"
                  strokeDasharray={`${a.length} ${CIRCUMFERENCE - a.length}`}
                  strokeDashoffset={-a.offset}
                />
              ))}
            </g>
            <text
              x="100"
              y="96"
              textAnchor="middle"
              className="fill-ink"
              fontSize="26"
              fontWeight="700"
              fontFamily="var(--font-display)"
            >
              100%
            </text>
            <text
              x="100"
              y="114"
              textAnchor="middle"
              className="fill-ink/50"
              fontSize="9"
              letterSpacing="1"
              fontFamily="var(--font-mono)"
            >
              ALLOCATED
            </text>
          </svg>
        </div>

        <div className="space-y-6">
          {SEGMENTS.map((s) => (
            <div key={s.label} className="grid grid-cols-[16px_1fr_auto] gap-4 items-start">
              <span
                className="w-4 h-4 mt-0.5"
                style={{ backgroundColor: s.color }}
              />
              <div>
                <p className="font-display font-semibold">{s.label}</p>
                <p className="text-sm text-ink/60 leading-relaxed mt-1">
                  {s.detail}
                </p>
              </div>
              <span className="font-mono text-lg tabular-nums">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
