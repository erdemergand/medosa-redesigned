import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { FALLBACK_NEWS } from "@/lib/news-data";
import { getSectorNews } from "@/lib/news.functions";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long" }).format(new Date(iso));
  } catch {
    return "";
  }
}

export function NewsFeed({ compact = false }: { compact?: boolean }) {
  const fetchNews = useServerFn(getSectorNews);
  const { data } = useQuery({
    queryKey: ["sector-news"],
    queryFn: () => fetchNews(),
    initialData: FALLBACK_NEWS,
    staleTime: 5 * 60 * 1000,
  });

  const items = compact ? data.slice(0, 4) : data;

  return (
    <div className="glass-panel flex h-full flex-col rounded-3xl p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          <Newspaper className="h-4 w-4 text-cobalt" /> Sektörel Haberler
        </span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cobalt" />
        </span>
      </div>

      <ul className="mt-4 flex-1 space-y-3 overflow-hidden">
        {items.map((n, i) => {
          const Wrapper = n.href ? "a" : "div";
          return (
            <li key={n.id} className="fade-up" style={{ animationDelay: `${0.15 * i + 0.2}s` }}>
              <Wrapper
                {...(n.href ? { href: n.href, target: "_blank", rel: "noreferrer" } : {})}
                className="group block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-cobalt/50 hover:bg-white/10"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cobalt">
                  {n.category}
                  <span className="text-white/40">{formatDate(n.date)}</span>
                  {n.href && (
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/50 transition-transform group-hover:-translate-y-0.5" />
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold leading-snug text-white">{n.title}</p>
                {!compact && n.summary && (
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{n.summary}</p>
                )}
              </Wrapper>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 border-t border-white/10 pt-3 text-[11px] text-white/45">
        Akış, aacc portalındaki haber ve duyurulardan otomatik beslenir.
      </p>
    </div>
  );
}
