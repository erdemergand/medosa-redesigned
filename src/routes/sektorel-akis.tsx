import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Lock, Newspaper } from "lucide-react";
import { useState } from "react";

import { AACC_PORTAL_URL, FALLBACK_NEWS, type NewsItem } from "@/lib/news-data";
import { getSectorNews } from "@/lib/news.functions";

export const Route = createFileRoute("/sektorel-akis")({
  head: () => ({
    meta: [
      { title: "Sektörel Akış — Medosa Gümrük Müşavirliği" },
      {
        name: "description",
        content:
          "Gümrük ve dış ticaret gündeminden güncel haberler ile Medosa müşteri duyuruları tek sayfada.",
      },
      { property: "og:title", content: "Sektörel Akış — Medosa Gümrük Müşavirliği" },
      {
        property: "og:description",
        content: "Gümrük ve dış ticaret haberleri ile Medosa duyuruları.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SektorelAkisPage,
});

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

type Tab = "haber" | "duyuru";

function SektorelAkisPage() {
  const fetchNews = useServerFn(getSectorNews);
  const [tab, setTab] = useState<Tab>("haber");
  const { data } = useQuery({
    queryKey: ["sector-news"],
    queryFn: () => fetchNews(),
    initialData: FALLBACK_NEWS,
    staleTime: 5 * 60 * 1000,
  });

  const items: NewsItem[] = data.filter((n) => (n.kind ?? "haber") === tab);

  return (
    <main className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <section className="relative mx-auto max-w-5xl px-5 py-16 md:py-20">
        <span className="eyebrow inline-flex items-center gap-2">
          <Newspaper className="h-4 w-4 text-cobalt" /> Sektörel Akış
        </span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Haberler ve Duyurular</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Gümrük ve dış ticaret gündemindeki gelişmeler herkese açıktır. Duyuru detayları yalnızca
          aacc portal kullanıcılarına gösterilir.
        </p>

        <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold">
          {[
            { id: "haber" as const, label: "Haberler" },
            { id: "duyuru" as const, label: "Duyurular" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors ${
                tab === t.id ? "bg-cobalt text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.id === "duyuru" && <Lock className="h-3 w-3" />}
              {t.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 space-y-4">
          {items.map((n) => {
            const locked = (n.kind ?? "haber") === "duyuru";
            const href = locked ? AACC_PORTAL_URL : n.href;
            const Wrapper = href ? "a" : "div";
            return (
              <li key={n.id}>
                <Wrapper
                  {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                  className="soft-card group block rounded-2xl p-5 transition-colors hover:border-cobalt/50"
                >
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cobalt">
                    {n.category}
                    <span className="text-muted-foreground">{formatDate(n.date)}</span>
                    {locked ? (
                      <Lock className="ml-auto h-4 w-4 text-muted-foreground" />
                    ) : (
                      href && (
                        <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
                      )
                    )}
                  </div>
                  <p className="mt-2 text-base font-semibold leading-snug">{n.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {locked
                      ? "Detay için aacc portal girişi gerekir — görmek için tıklayın."
                      : n.summary}
                  </p>
                </Wrapper>
              </li>
            );
          })}
          {items.length === 0 && (
            <li className="soft-card rounded-2xl p-8 text-center text-sm text-muted-foreground">
              Şu an gösterilecek içerik yok.
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}
