import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Globe2, HeartPulse, Landmark } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";
import {
  MENSE_SORGULAMA,
  SAGLIK_BAKANLIGI,
  TICARET_BAKANLIGI,
  type AppLink,
} from "@/lib/eapps-data";

export const Route = createFileRoute("/uygulamalar")({
  head: () => ({
    meta: [
      { title: "E-Uygulamalar | Medosa" },
      {
        name: "description",
        content:
          "Ticaret Bakanlığı, Sağlık Bakanlığı ve elektronik menşe sorgulama uygulamalarına tek ekrandan hızlı erişim.",
      },
      { property: "og:title", content: "E-Uygulamalar | Medosa" },
      {
        property: "og:description",
        content:
          "NCTS, MERSİS, Tek Pencere, TİTCK, ÜTS ve ülke bazlı menşe sorgulama bağlantıları tek listede.",
      },
    ],
  }),
  component: Uygulamalar,
});

function Uygulamalar() {
  const [q, setQ] = useState("");
  const f = (list: AppLink[]) =>
    list.filter((i) => i.name.toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr").trim()));

  const groups: {
    icon?: typeof Globe2;
    logo?: string;
    title: string;
    items: AppLink[];
  }[] = [
    {
      logo: "/logos/ticaret-bakanligi.svg",
      title: "Ticaret Bakanlığı Uygulamaları",
      items: f(TICARET_BAKANLIGI),
    },
    {
      logo: "/logos/saglik-bakanligi.svg",
      title: "Sağlık Bakanlığı Uygulamaları",
      items: f(SAGLIK_BAKANLIGI),
    },
    { icon: Globe2, title: "Elektronik Menşe Sorgulama", items: f(MENSE_SORGULAMA) },
  ];

  return (
    <>
      <PageHero
        eyebrow="E-Uygulamalar"
        title="Resmî kurum uygulamalarına hızlı erişim"
        desc="Gümrük ve dış ticaret işlemlerinizde sık kullanılan resmî sistemleri tek listede topladık. Aramak istediğiniz uygulamanın adını yazın."
      >
        <div className="glass-panel mt-8 max-w-xl rounded-2xl p-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Uygulama ara: NCTS, MERSİS, menşe..."
            className="w-full rounded-xl border border-white/20 bg-navy-deep/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cobalt focus:outline-none"
          />
        </div>
        <div className="mt-6">
          <Link
            to="/e-takip"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-white"
          >
            Müşteri portalları (e-mds & aacc) için E-Takip sayfasına gidin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-14 px-5 py-20">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="flex items-center gap-3">
              {g.logo ? (
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white p-1.5">
                  <img src={g.logo} alt={`${g.title} logosu`} className="h-full w-full object-contain" />
                </span>
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-cobalt text-white">
                  {g.icon ? <g.icon className="h-5 w-5" /> : null}
                </span>
              )}
              <h2 className="text-xl font-bold text-navy md:text-2xl">{g.title}</h2>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                {g.items.length}
              </span>
            </div>

            {g.items.length === 0 ? (
              <p className="mt-6 text-sm text-muted-foreground">Aramanızla eşleşen uygulama yok.</p>
            ) : (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((i) => (
                  <a
                    key={`${g.title}-${i.name}`}
                    href={i.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-cobalt/50 hover:shadow-md"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium text-foreground group-hover:text-navy">
                      {i.flag && (
                        <span className="text-lg leading-none" aria-hidden>
                          {i.flag}
                        </span>
                      )}
                      {i.name}
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-cobalt" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
