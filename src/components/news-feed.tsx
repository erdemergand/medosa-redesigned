import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Lock, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";

import { AACC_PORTAL_URL, FALLBACK_NEWS, type NewsItem } from "@/lib/news-data";
import { getSectorNews } from "@/lib/news.functions";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long" }).format(new Date(iso));
  } catch {
    return "";
  }
}

type Tab = "haber" | "duyuru";

export function NewsFeed({ compact = false }: { compact?: boolean }) {
  const fetchNews = useServerFn(getSectorNews);
  const [tab, setTab] = useState<Tab>("haber");
  const { data } = useQuery({
    queryKey: ["sector-news"],
    queryFn: () => fetchNews(),
    initialData: FALLBACK_NEWS,
    staleTime: 5 * 60 * 1000,
  });

  // 30 saniyede bir Haberler ↔ Duyurular geçişi
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setTab((t) => (t === "haber" ? "duyuru" : "haber"));
    }, 30000);
    return () => window.clearInterval(id);
  }, [cycle]);

  const [showAll, setShowAll] = useState(false);

  const selectTab = (t: Tab) => {
    setTab(t);
    setShowAll(false);
    setCycle((c) => c + 1); // elle seçimde sayaç sıfırlanır
  };

  const filtered: NewsItem[] = data.filter((n) => (n.kind ?? "haber") === tab);
  const items = showAll ? filtered : filtered.slice(0, 5);
  const hasMore = filtered.length > items.length;

  return (
    <div className="glass-panel flex h-full flex-col rounded-3xl p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          <Newspaper className="h-4 w-4 text-cobalt" /> Sektörel Akış
        </span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cobalt" />
        </span>
      </div>

      <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold">
        {(
          [
            { id: "haber" as const, label: "Haberler" },
            { id: "duyuru" as const, label: "Duyurular" },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => selectTab(t.id)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
              tab === t.id ? "bg-cobalt text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {t.id === "duyuru" && <Lock className="h-3 w-3" />}
            {t.label}
          </button>
        ))}
      </div>

      <ul className="mt-4 flex-1 space-y-3 overflow-hidden">
        {items.map((n, i) => {
          const locked = (n.kind ?? "haber") === "duyuru";
          const href = locked ? AACC_PORTAL_URL : n.href;
          const Wrapper = href ? "a" : "div";
          return (
            <li key={n.id} className="fade-up" style={{ animationDelay: `${0.1 * i + 0.15}s` }}>
              <Wrapper
                {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                className="group block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-cobalt/50 hover:bg-white/10"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cobalt">
                  {n.category}
                  <span className="text-white/40">{formatDate(n.date)}</span>
                  {locked ? (
                    <Lock className="ml-auto h-3.5 w-3.5 text-white/50" />
                  ) : (
                    href && (
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/50 transition-transform group-hover:-translate-y-0.5" />
                    )
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold leading-snug text-white">{n.title}</p>
                {locked ? (
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    Detay için aacc portal girişi gerekir — görmek için tıklayın.
                  </p>
                ) : (
                  !compact && n.summary && (
                    <p className="mt-1 text-xs leading-relaxed text-white/60">{n.summary}</p>
                  )
                )}
              </Wrapper>
            </li>
          );
        })}
        {items.length === 0 && (
          <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-xs text-white/55">
            Şu an gösterilecek içerik yok.
          </li>
        )}
      </ul>

      {(hasMore || showAll) && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-cobalt/60 hover:bg-white/10"
        >
          {showAll ? "Daha az göster" : "Devamını gör"}
          <ArrowUpRight
            className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
      <p className="mt-4 border-t border-white/10 pt-3 text-[11px] text-white/45">
        Haberler herkese açıktır; duyuru detayları yalnızca aacc portal kullanıcılarına gösterilir.
      </p>
    </div>
  );
}
