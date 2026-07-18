import SectionFrame from "./SectionFrame";

const PROGRAMS = [
  {
    code: "PROGRAM A",
    name: "Project Funding",
    status: "Launching with students who've already shown interest at Stevenson",
    summary:
      "We fund student-designed engineering projects and teach the process of building them — how to design a PCB, model in CAD, and write the firmware to bring it to life.",
    specs: [
      ["Skills taught", "PCB design, CAD, programming, electrical components"],
      ["Support format", "Starter tutorials, mentorship, project funding"],
      ["Also functions as", "A growing knowledge base & peer support network"],
      ["Who it's for", "Students with a project idea and the drive to build it"],
    ],
  },
  {
    code: "PROGRAM B",
    name: "Maker Kits",
    status: "Distribution to partner schools begins September",
    summary:
      "Complete, ready-to-build kits — everything needed for a younger student to build an introductory project like a powered glider or a catapult.",
    specs: [
      ["Contents", "All parts required, no additional purchase needed"],
      ["Distribution", "In partnership with schools"],
      ["Audience", "Younger students building their first project"],
      ["Purpose", "A low-barrier first spark, feeding into Program A"],
    ],
  },
];

export default function Programs() {
  return (
    <SectionFrame id="programs" eyebrow="Programs" eyebrowNote="Fig. 02">
      <div className="grid md:grid-cols-2 gap-6">
        {PROGRAMS.map((p) => (
          <div
            key={p.code}
            className="border border-line bg-white/40 p-7 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="eyebrow text-copper">{p.code}</span>
              <span className="w-1.5 h-1.5 bg-circuit rounded-full" />
            </div>
            <h3 className="font-display font-semibold text-2xl mb-2">
              {p.name}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-wide text-circuit mb-5">
              {p.status}
            </p>
            <p className="text-ink/70 leading-relaxed mb-7">{p.summary}</p>

            <dl className="mt-auto pt-6 border-t border-line space-y-3">
              {p.specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-3 text-sm">
                  <dt className="font-mono text-[11px] uppercase text-ink/40 pt-0.5">
                    {k}
                  </dt>
                  <dd className="text-ink/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
