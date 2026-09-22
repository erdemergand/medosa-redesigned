import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Radar } from "lucide-react";

import heroPort from "@/assets/hero-port.jpg";
import { METRICS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medosa | Gümrük Müşavirliği, Dış Ticaret ve Teknoloji" },
      {
        name: "description",
        content:
          "Medosa; ithalat, ihracat, antrepo, transit ticaret ve gümrük mevzuat danışmanlığında dijital çözümler sunar. Beyanname takibi ve e-uygulamalarla hızlı gümrükleme.",
      },
      {
        property: "og:title",
        content: "Medosa | Gümrük Müşavirliği, Dış Ticaret ve Teknoloji",
      },
      {
        property: "og:description",
        content:
          "İthalat, ihracat, antrepo ve transit ticaret operasyonlarınızı teknolojiyle hızlandırın. Medosa e-takip portalı ile beyannamenizi anında sorgulayın.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-navy-deep">
      <img
        src={heroPort}
        alt="Konteyner limanı"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="glow-orb absolute -left-24 top-10 h-96 w-96 opacity-50" />
      <div className="glow-orb absolute -bottom-24 right-0 h-80 w-80 opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12">
        <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
          Customs • Trade • Technology
        </span>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-6xl">
          Gümrük ve dış ticaret operasyonlarınız{" "}
          <span className="bg-gradient-to-r from-steel to-cobalt bg-clip-text text-transparent">
            teknolojiyle hızlansın
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
          İthalattan ihracata, antrepodan transit ticarete kadar tüm süreçlerinizi tek ekipten
          yönetin; beyannamenizi e-takip portalımızdan anında sorgulayın.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/e-takip"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cobalt/30 transition-all hover:-translate-y-0.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <Radar className="h-4 w-4" /> E-Takip Portalı
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/uygulamalar"
            className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
          >
            E-Uygulamalar
          </Link>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
          >
            İletişim
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:max-w-3xl lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="glass-panel rounded-2xl px-5 py-4">
              <div className="font-display text-xl font-extrabold text-white lg:text-2xl">
                {m.value}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-white/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
