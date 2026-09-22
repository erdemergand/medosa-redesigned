import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

export function Modal({
  open,
  onClose,
  label,
  children,
  size = "md",
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  size?: "md" | "lg";
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        style={{ willChange: "transform, opacity" }}
        className={`modal-in relative max-h-[88vh] w-full overflow-y-auto rounded-3xl border border-border bg-card p-7 shadow-2xl ${
          size === "lg" ? "max-w-2xl" : "max-w-lg"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}
