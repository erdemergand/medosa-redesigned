import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, Radar } from "lucide-react";

import heroPort from "@/assets/hero-port.jpg";
import { DocumentsDialog, useDocumentsPopup } from "@/components/documents-dialog";
import { NewsFeed } from "@/components/news-feed";
import { METRICS, SERVICES } from "@/lib/site-data";

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
  const { open, setOpen } = useDocumentsPopup();

  return (
    <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] flex-col justify-center overflow-hidden bg-navy-deep">
      <img
        src={heroPort}
        alt="Konteyner limanı"
        className="slow-zoom absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="glow-orb float-soft absolute -left-24 top-10 h-96 w-96 opacity-50" />
      <div
        className="glow-orb float-soft absolute -bottom-24 right-0 h-80 w-80 opacity-40"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <span className="fade-up glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
            Customs • Trade • Technology
          </span>
          <h1
            className="fade-up mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Gümrük ve dış ticaret operasyonlarınız{" "}
            <span className="shimmer-text">teknolojiyle hızlansın</span>
          </h1>
          <p
            className="fade-up mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            İthalattan ihracata, antrepodan transit ticarete kadar tüm süreçlerinizi tek ekipten
            yönetin; beyannamenizi e-takip portalımızdan anında sorgulayın.
          </p>

          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
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
            <button
              onClick={() => setOpen(true)}
              className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <FileCheck2 className="h-4 w-4 text-cobalt" /> Bize gelmeden önce
            </button>
            <Link
              to="/uygulamalar"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
            >
              E-Uygulamalar
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="fade-up glass-panel rounded-2xl px-5 py-4 transition-transform hover:-translate-y-1"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="font-display text-xl font-extrabold text-white lg:text-2xl">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-white/60">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up h-full" style={{ animationDelay: "0.35s" }}>
          <NewsFeed compact />
        </div>
      </div>

      {/* Hizmet şeridi */}
      <div className="relative mt-auto overflow-hidden border-t border-white/10 py-4">
        <div className="marquee-track">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span
              key={`${s.title}-${i}`}
              className="mx-6 inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45"
            >
              <s.icon className="h-4 w-4 text-cobalt" />
              {s.title}
            </span>
          ))}
        </div>
      </div>

      <DocumentsDialog open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
