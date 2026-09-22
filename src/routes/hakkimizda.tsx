import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { METRICS, VALUES } from "@/lib/site-data";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Medosa Gümrük Müşavirliği" },
      {
        name: "description",
        content:
          "Medosa, yetkilendirilmiş gümrük müşavirliği tecrübesini kendi geliştirdiği dijital uygulamalarla buluşturan bir ekiptir.",
      },
      { property: "og:title", content: "Hakkımızda | Medosa" },
      {
        property: "og:description",
        content: "Gümrük müşavirliğini teknolojiyle birleştiren deneyimli ekip ve başarı metrikleri.",
      },
    ],
  }),
  component: Hakkimizda,
});

function Hakkimizda() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Gümrük müşavirliğini teknolojiyle birleştiren ekip"
        desc="Her dosya; sorumlu müşavir, operasyon uzmanı ve dijital takip altyapısıyla birlikte yürütülür."
      >
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="glass-panel rounded-2xl px-6 py-6">
              <div className="font-display text-2xl font-extrabold text-white md:text-3xl">
                {m.value}
              </div>
              <div className="mt-2 text-xs text-white/60">{m.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Çalışma yaklaşımımız</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Medosa, yetkilendirilmiş gümrük müşavirliği tecrübesini kendi geliştirdiği dijital
              uygulamalarla buluşturur. Amacımız, işlem sürelerini kısaltırken mevzuat uyumunu en üst
              seviyede tutmaktır.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Yetkin müşavir kadrosu",
                "Şeffaf maliyet raporlaması",
                "Dijital dosya arşivi",
                "Liman ve gümrük sahasında saha ekibi",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((c) => (
              <div key={c.t} className="soft-card rounded-2xl p-6">
                <c.icon className="h-6 w-6 text-cobalt" />
                <h3 className="mt-4 text-base font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
