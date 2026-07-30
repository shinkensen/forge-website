import SectionFrame from "./SectionFrame";

const LEADERS = [
  {
    initial: "G",
    name: "Govind Nair",
    role: "Founder",
    tags: ["Operations", "Founding Staff"],
    bio: "Founded Forge in April 2025, built forge from the ground up",
  },
  {
    initial: "G",
    name: "Greg Volkov",
    role: "Technical and Operations Lead",
    tags: ["Operations", "Founding Staff"],
    bio: "Serves as a technical and operational lead, overseeing all forge programs",
  },
];
const DIRECTORS = [
  {
    initial: "S",
    name: "Bryce Goldstine",
    role: "Design and Production Team Lead",
    tags: ["MakerKits", "Founding Staff"],
    bio: "Focused on leading a team of engineers to develop MakerKits for youth",
  },
  {
    initial: "L",
    name: "Lucas Lyubenko",
    role: "Distribution Team Lead",
    tags: ["MakerKits", "Founding Staff"],
    bio: "Manages the Distribution and Assembly of MakerKits",
  },
];

function MemberCard({
  m,
  large = false,
}: {
  m: (typeof LEADERS)[number];
  large?: boolean;
}) {
  return (
    <div className="border border-line bg-white/40 p-6 flex gap-5">
      <div
        className={`shrink-0 flex items-center justify-center font-display font-bold ${
          large ? "w-14 h-14 text-xl" : "w-12 h-12 text-lg"
        } bg-ink text-paper`}
      >
        {m.initial}
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg leading-tight">
          {m.name}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-wide text-copper mt-1">
          {m.role}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {m.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-line text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-ink/60 leading-relaxed mt-3">{m.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <SectionFrame id="team" eyebrow="Team" eyebrowNote="Fig. 05">
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {LEADERS.map((m) => (
          <MemberCard key={m.name} m={m} large />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {DIRECTORS.map((m) => (
          <MemberCard key={m.name} m={m} />
        ))}
      </div>
    </SectionFrame>
  );
}
