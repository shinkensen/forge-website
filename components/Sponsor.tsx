import SectionFrame from "./SectionFrame";

export default function Sponsor() {
  return (
    <SectionFrame
      id="sponsor"
      eyebrow="Support Forge"
      eyebrowNote="Fig. 07"
      dark
      className="bg-ink text-paper"
    >
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14">
        <div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-tight">
            Every dollar goes straight into a student&rsquo;s hands.
          </h2>
          <p className="mt-5 text-paper/65 leading-relaxed max-w-lg">
            Forge is fiscally sponsored by{" "}
            <span className="text-paper">The Hack Foundation</span>, a
            501(c)(3) nonprofit (EIN 81-2908499), and operates under its
            tax-exempt status. Funding goes directly toward project parts,
            Maker Kit manufacturing, and the tools that keep both programs
            running. Our initial funding goal is{" "}
            <span className="text-copper-light">$1,000 or more</span> to
            launch both programs this fall.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://hcb.hackclub.com/stevenson-highschool-forge-club"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-copper text-paper font-mono text-[13px] uppercase tracking-wide hover:bg-copper-light transition-colors"
            >
              View our HCB page →
            </a>
            <a
              href="https://github.com/shinkensen/Zephyr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-paper/25 text-paper font-mono text-[13px] uppercase tracking-wide hover:border-paper/60 transition-colors"
            >
              See a project we&rsquo;ve built
            </a>
          </div>
        </div>

        <dl className="space-y-5 border-t border-paper/15 pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-10">
          <div>
            <dt className="eyebrow text-paper/40">Fiscal sponsor</dt>
            <dd className="mt-1">The Hack Foundation</dd>
          </div>
          <div>
            <dt className="eyebrow text-paper/40">Status</dt>
            <dd className="mt-1">501(c)(3) nonprofit</dd>
          </div>
          <div>
            <dt className="eyebrow text-paper/40">EIN</dt>
            <dd className="mt-1 font-mono">81-2908499</dd>
          </div>
          <div>
            <dt className="eyebrow text-paper/40">Sponsor network</dt>
            <dd className="mt-1">
              ~3,500 student-run organizations worldwide
            </dd>
          </div>
        </dl>
      </div>
    </SectionFrame>
  );
}
