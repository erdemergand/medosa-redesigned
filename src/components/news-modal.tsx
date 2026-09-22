import { ArrowUpRight, Lock } from "lucide-react";

import { Modal } from "@/components/modal";
import { AACC_PORTAL_URL, type NewsItem } from "@/lib/news-data";

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

export function NewsModal({ item, onClose }: { item: NewsItem | null; onClose: () => void }) {
  if (!item) return null;
  const locked = (item.kind ?? "haber") === "duyuru";

  return (
    <Modal open onClose={onClose} label={item.title} size="lg">
      <div className="flex items-center gap-2 pr-8 text-[11px] font-semibold uppercase tracking-wider text-cobalt">
        {item.category}
        <span className="text-muted-foreground">{formatDate(item.date)}</span>
        {locked && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
      </div>
      <h2 className="mt-3 text-xl font-bold leading-snug text-navy">{item.title}</h2>

      {locked ? (
        <>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Bu duyurunun detayları yalnızca aacc portal kullanıcılarımıza açıktır. Portala giriş
            yaparak tamamını görüntüleyebilirsiniz.
          </p>
          <a
            href={AACC_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-primary px-6 text-sm font-semibold text-white"
          >
            aacc portalına git <ArrowUpRight className="h-4 w-4" />
          </a>
        </>
      ) : (
        <>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Kaynağa git <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </>
      )}
    </Modal>
  );
}
