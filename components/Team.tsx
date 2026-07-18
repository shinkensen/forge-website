import SectionFrame from "./SectionFrame";

const LEADERS = [
  {
    initial: "G",
    name: "Govind Nair",
    role: "Co-President",
    tags: ["Electronics", "Coding", "PCB Design"],
    bio: "Expert in electronics and programming, specializing in PCB design and embedded systems.",
  },
  {
    initial: "A",
    name: "Abhinav Gandhi",
    role: "Co-President",
    tags: ["Engineering", "BioTech"],
    bio: "Passionate about engineering innovation and biotechnology applications.",
  },
];

const DIRECTORS = [
  {
    initial: "S",
    name: "Siddharth Nittur",
    role: "Director of Programming",
    tags: ["Hardware Programming", "Embedded Systems"],
    bio: "Focused on hardware programming and microcontroller development.",
  },
  {
    initial: "G",
    name: "Greg Volkov",
    role: "Director of Electrical Engineering",
    tags: ["Breadboards", "Circuitry"],
    bio: "Background in breadboarding and circuit design fundamentals.",
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
