import { ReactNode } from "react";

export default function SectionFrame({
  id,
  eyebrow,
  eyebrowNote,
  dark = false,
  className = "",
  children,
}: {
  id?: string;
  eyebrow: string;
  eyebrowNote?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const markColor = dark ? "border-copper-light/70" : "border-copper/70";
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="relative">
          <span className={`reg-mark reg-mark--tl ${markColor}`} />
          <span className={`reg-mark reg-mark--tr ${markColor}`} />
          <div className="flex items-baseline justify-between gap-6 pt-6 pb-10 border-b border-current/10">
            <span
              className={`eyebrow ${dark ? "text-copper-light" : "text-copper"}`}
            >
              {eyebrow}
            </span>
            {eyebrowNote && (
              <span
                className={`eyebrow ${
                  dark ? "text-paper/40" : "text-ink/40"
                } text-right`}
              >
                {eyebrowNote}
              </span>
            )}
          </div>
          {children}
          <span className={`reg-mark reg-mark--bl ${markColor}`} />
          <span className={`reg-mark reg-mark--br ${markColor}`} />
        </div>
      </div>
    </section>
  );
}
