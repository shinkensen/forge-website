import SectionFrame from "./SectionFrame";

const STAGES = [
  {
    tag: "NOW",
    place: "Stevenson",
    detail:
      "Partnering with local schools to distribute Maker Kits starting in September, while our team develops kit variations for different age ranges. Launching project funding for students who've already shown interest, backed by starter tutorials on CAD, circuit design, electrical components, and firmware.",
    active: true,
  },
  {
    tag: "NEXT",
    place: "Illinois",
    detail:
      "Scaling both programs across the state as school partnerships and funded projects prove out the model.",
    active: false,
  },
  {
    tag: "THEN",
    place: "Nationally",
    detail:
      "Growing our reach across the country, leveraging The Hack Foundation's network of student-run organizations.",
    active: false,
  },
  {
    tag: "LONG-TERM",
    place: "Internationally",
    detail:
      "Extending Forge's programs abroad through that same ~3,500-organization network of students building for students.",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <SectionFrame
      id="roadmap"
      eyebrow="Roadmap"
      eyebrowNote="Fig. 03"
      dark
      className="bg-blueprint-deep text-paper"
    >
      <div className="relative">
        {/* connecting trace */}
        <div className="hidden md:block absolute left-0 right-0 top-[9px] h-px">
          <svg width="100%" height="2" preserveAspectRatio="none">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#D98A4A"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              strokeDasharray="3 5"
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {STAGES.map((s) => (
            <div key={s.place} className="relative pl-0">
              <div className="hidden md:flex items-center mb-5">
                <span
                  className={`w-[18px] h-[18px] rounded-full border-2 ${
                    s.active
                      ? "bg-copper-light border-copper-light"
                      : "bg-blueprint-deep border-copper-light/50"
                  }`}
                />
              </div>
              <span className="eyebrow text-copper-light">{s.tag}</span>
              <h3 className="font-display font-semibold text-xl mt-1.5 mb-3">
                {s.place}
              </h3>
              <p className="text-paper/65 text-sm leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
