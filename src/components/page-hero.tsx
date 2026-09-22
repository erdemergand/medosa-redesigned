import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="glow-orb absolute -right-20 -top-28 h-80 w-80 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-20">
        <span className="eyebrow text-steel">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">{desc}</p>
        {children}
      </div>
    </section>
  );
}
