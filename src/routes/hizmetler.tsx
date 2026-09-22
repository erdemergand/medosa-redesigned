import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SERVICES } from "@/lib/site-data";
import { breadcrumbJsonLd, canonical } from "@/lib/seo";

const TITLE = "Gümrük Müşavirliği Hizmetleri | İthalat, İhracat, Antrepo — Medosa";
const DESCRIPTION =
  "Gümrük müşavirliği hizmetlerimiz: ithalat ve ihracat gümrükleme, antrepo, transit ticaret, özet beyan, serbest bölge işlemleri, dış ticaret izinleri ve gümrük mevzuat danışmanlığı.";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "gümrük müşavirliği hizmetleri, ithalat gümrükleme, ihracat gümrükleme, antrepo işlemleri, transit ticaret, özet beyan, serbest bölge işlemleri, YYS, OKSB",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/hizmetler") },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: canonical("/hizmetler") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Medosa gümrük müşavirliği hizmetleri",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              serviceType: "Gümrük müşavirliği",
              provider: { "@type": "Organization", name: "Medosa Gümrük Müşavirliği" },
              areaServed: { "@type": "Country", name: "Türkiye" },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/hizmetler" },
          ]),
        ),
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
                  {String(i + 1).padStart(2, "0")}
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
