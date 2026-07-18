import SectionFrame from "./SectionFrame";

export default function Mission() {
  return (
    <SectionFrame id="mission" eyebrow="Mission" eyebrowNote="Fig. 01">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
        <h2 className="font-display font-semibold text-3xl md:text-[2.4rem] leading-[1.15] tracking-tight">
          Most teenagers who want to build something real never get the
          parts, the tools, or the chance.
        </h2>
        <div className="space-y-5 text-ink/70 text-[1.05rem] leading-relaxed">
          <p>
            Forge funds engineering projects designed by teenagers and
            supports them through both teaching and financial means. We
            believe the best way to spark a lasting interest in engineering
            isn&rsquo;t a lecture — it&rsquo;s a soldering iron, a set of
            calipers, and a project worth finishing.
          </p>
          <p>
            That belief drives two programs: one that funds student-designed
            projects while teaching the skills behind them, and one that puts
            a complete first project directly into a younger student&rsquo;s
            hands. Together, they cover the full arc — from a
            student&rsquo;s very first build to the kind of project that
            teaches PCB design, CAD, and firmware from the ground up.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}
