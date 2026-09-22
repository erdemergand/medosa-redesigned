import { FileCheck2, X } from "lucide-react";
import { useEffect, useState } from "react";

export const REQUIRED_DOCUMENTS = [
  { n: "1 Adet Vekâletname", note: "Noter Onaylı" },
  { n: "1 Adet İmza Sirküleri", note: "Asıl veya Noter Onaylı" },
  { n: "1 Adet Ticaret Sicil Gazetesi", note: "e-İmzalı" },
  { n: "1 Adet Vergi Dairesi Mükellefiyet Belgesi", note: "e-Belge" },
  { n: "1 Adet Faaliyet Belgesi", note: "" },
  { n: "1 Adet Ticaret Sicil Tasdiknamesi", note: "" },
];

export function DocumentsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Bize gelmeden önce hazırlamanız gerekenler"
        className="pop-in relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="eyebrow text-cobalt">Bize gelmeden önce</span>
        <h2 className="mt-2 text-xl font-bold text-navy">Hazırlamanız gereken evraklar</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          İlk gümrük işleminizin gecikmeden başlaması için aşağıdaki belgeleri yanınızda getirmenizi
          rica ederiz.
        </p>

        <ul className="mt-5 space-y-2.5">
          {REQUIRED_DOCUMENTS.map((d, i) => (
            <li
              key={d.n}
              className="fade-up flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
              <span className="text-sm text-foreground">
                {d.n}
                {d.note && <span className="text-muted-foreground"> ({d.note})</span>}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-cobalt to-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Anladım
        </button>
      </div>
    </div>
  );
}

export function useDocumentsPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("medosa-docs-popup")) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem("medosa-docs-popup", "1");
    }, 2000);
    return () => window.clearTimeout(t);
  }, []);

  return { open, setOpen };
}
