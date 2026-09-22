import { useServerFn } from "@tanstack/react-start";
import { BellRing } from "lucide-react";
import { useState } from "react";

import { subscribeToAnnouncements } from "@/lib/subscribers.functions";

export function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const subscribe = useServerFn(subscribeToAnnouncements);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const dark = variant === "dark";

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = String(new FormData(form).get("email") ?? "");
        setError(null);
        setState("sending");
        try {
          await subscribe({ data: { email } });
          setState("done");
          form.reset();
        } catch (err) {
          setError(err instanceof Error ? err.message : "Kayıt tamamlanamadı.");
          setState("idle");
        }
      }}
      className="w-full"
    >
      <label
        htmlFor={`sub-${variant}`}
        className={`flex items-center gap-1.5 text-xs font-semibold ${
          dark ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        <BellRing className="h-3.5 w-3.5 text-cobalt" />
        Duyuru bildirimleri
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id={`sub-${variant}`}
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="e-posta adresiniz"
          className={`min-w-0 flex-1 rounded-full px-4 py-2 text-sm outline-none ${
            dark
              ? "border border-white/15 bg-white/10 text-white placeholder:text-white/40 focus:border-white/40"
              : "border border-input bg-background text-foreground focus:border-cobalt"
          }`}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="shrink-0 rounded-full bg-cobalt px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {state === "sending" ? "..." : "Abone ol"}
        </button>
      </div>
      {state === "done" && (
        <p className={`mt-2 text-xs ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          Kaydınız alındı. Yeni duyurular e-posta ile iletilecek.
        </p>
      )}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </form>
  );
}
