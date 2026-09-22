import { BellRing, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NewsletterForm } from "@/components/newsletter-form";

export function SubscribeDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Duyuru bildirimlerine abone olun"
        style={{ willChange: "transform, opacity" }}
        className="modal-in relative w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cobalt/10">
          <BellRing className="h-5 w-5 text-cobalt" />
        </span>
        <h2 className="mt-4 text-xl font-bold text-navy">Gümrük gündemini kaçırmayın</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Mevzuat değişiklikleri ve duyurularımız yayınlandığı anda e-posta kutunuza gelsin.
          Dilediğiniz zaman tek tıkla ayrılabilirsiniz.
        </p>

        <div className="mt-5">
          <NewsletterForm />
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted"
        >
          Şimdi değil
        </button>
      </div>
    </div>
  );
}

/** Evrak popup'ı kapandıktan ~12 sn sonra, oturumda bir kez açılır. */
export function useSubscribePopup(startAfterClosed: boolean) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!startAfterClosed) return;
    if (window.sessionStorage.getItem("medosa-subscribe-popup")) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem("medosa-subscribe-popup", "1");
    }, 12000);
    return () => window.clearTimeout(t);
  }, [startAfterClosed]);

  return { open, setOpen };
}
