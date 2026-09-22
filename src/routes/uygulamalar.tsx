import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, FileSearch, Globe2 } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";
import { PORTALS } from "@/lib/site-data";

export const Route = createFileRoute("/uygulamalar")({
  head: () => ({
    meta: [
      { title: "Uygulamalar & E-Takip | Medosa" },
      {
        name: "description",
        content:
          "Beyanname sorgulama, e-mds dijital dosya portalı, aacc antrepo ve araç kontrol uygulaması ile Ticaret Bakanlığı sistemlerine tek ekrandan erişin.",
      },
      { property: "og:title", content: "Uygulamalar & E-Takip | Medosa" },
      {
        property: "og:description",
        content: "Beyannamenizin durumunu saniyeler içinde sorgulayın, e-uygulamalara tek ekrandan ulaşın.",
      },
    ],
  }),
  component: Uygulamalar,
});

function Uygulamalar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="E-Takip & E-Uygulamalar"
        title="Beyannamenizin durumunu saniyeler içinde görün"
        desc="Beyanname veya dosya numaranızla sorgulama yapın; tescil, muayene, ödeme ve kapanma adımlarını anlık takip edin."
      >
        <div className="glass-panel mt-10 max-w-2xl rounded-2xl p-6">
          <label htmlFor="beyanname" className="text-sm font-semibold text-white/85">
            Beyanname / Dosya Sorgulama
          </label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setResult(
                query.trim()
                  ? `“${query.trim()}” numaralı kayıt için sorgulama talebiniz alındı. Operasyon ekibimiz durum bilgisini en kısa sürede paylaşacaktır.`
                  : null,
              );
            }}
            className="mt-3 flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <FileSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              <input
                id="beyanname"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Örn: 26341300IM123456"
                className="w-full rounded-xl border border-white/20 bg-navy-deep/60 py-3 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-cobalt focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Sorgula
            </button>
          </form>
          {result && (
            <p className="mt-4 rounded-xl border border-cobalt/40 bg-cobalt/10 p-3 text-sm text-white/85">
              {result}
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Tescil", "Muayene", "Vergi Ödeme", "Kapanma"].map((step, i) => (
              <span
                key={step}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
              >
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="facet-bg mx-auto max-w-7xl px-5 py-20">
        <span className="eyebrow text-cobalt">Uygulamalar</span>
        <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
          Medosa e-uygulamaları ve resmî sistemler
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORTALS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="soft-card group flex h-full flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  {p.logo ? (
                    <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary p-2">
                      <img
                        src={p.logo}
                        alt={`${p.name} logosu`}
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
                      <Globe2 className="h-6 w-6 text-cobalt" />
                    </span>
                  )}
                  <ExternalLink className="mt-1 h-4 w-4 text-muted-foreground transition-colors group-hover:text-cobalt" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cobalt">
                Sisteme git <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
