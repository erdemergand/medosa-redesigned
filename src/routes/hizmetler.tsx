import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "Hizmetlerimiz | Medosa Gümrük Müşavirliği" },
      {
        name: "description",
        content:
          "İthalat, ihracat, antrepo, transit ticaret, gümrük mevzuat danışmanlığı ve lojistik koordinasyon hizmetleri tek çatı altında.",
      },
      { property: "og:title", content: "Hizmetlerimiz | Medosa" },
      {
        property: "og:description",
        content:
          "Dış ticaretin her adımında uçtan uca gümrük müşavirliği ve operasyon yönetimi hizmetleri.",
      },
    ],
  }),
  component: Hizmetler,
});

function Hizmetler() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Dış ticaretin her adımında yanınızdayız"
        desc="Operasyonun tamamını tek ekiple yürütüyor, mevzuat riskini azaltıyor ve süreçleri ölçülebilir hale getiriyoruz."
      />

      <section className="facet-bg mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="soft-card group relative overflow-hidden rounded-2xl p-7">
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cobalt/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-cobalt text-primary-foreground shadow-md shadow-cobalt/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-sm font-extrabold text-muted-foreground/40">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-5 text-lg font-bold text-navy">{s.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cobalt" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-cobalt/25 transition-all hover:-translate-y-0.5"
          >
            İletişime Geçin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
