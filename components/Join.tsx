import SectionFrame from "./SectionFrame";

const BENEFITS = [
  "Funding for parts, components, and materials your project needs",
  "Mentorship from students who've already shipped their own builds",
  "Starter tutorials covering CAD, circuit design, and firmware",
  "A support network of newer and more experienced members alike",
];

export default function Join() {
  return (
    <SectionFrame id="join" eyebrow="Get Involved" eyebrowNote="Fig. 06">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        <div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-tight">
            Bring your project idea. We&rsquo;ll help you fund it and build
            it.
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            No prior experience required — just a project you want to build
            and the willingness to learn. If you&rsquo;re a school looking to
            bring Maker Kits to your students, we&rsquo;d love to hear from
            you too.
          </p>
          <a
            href="https://forms.fillout.com/t/n71KpfeyJaus"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 py-3.5 bg-copper text-paper font-mono text-[13px] uppercase tracking-wide hover:bg-copper-light transition-colors"
          >
            Fill out the interest form →
          </a>
        </div>

        <ul className="space-y-4 border-t border-line pt-6 md:border-t-0 md:pt-0">
          {BENEFITS.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-ink/75">
              <span className="mt-1.5 w-1.5 h-1.5 bg-circuit shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  );
}
