import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Building2, Mail, MapPin, Phone, Plane, Ship, Train, Truck } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";
import { sendFormMail } from "@/lib/mail.functions";
import { BRANCHES, CUSTOMS_OFFICES, CUSTOMS_REGIONS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim, Şubeler ve Gümrük Ofisleri | Medosa" },
      {
        name: "description",
        content:
          "Medosa İstanbul Merkez, İzmir, Bursa ve Kayseri şubeleri ile Ambarlı, Erenköy, Muratbey, AHL, Sabiha Gökçen ve Gemlik gümrük sahalarındaki ofislerimize ulaşın.",
      },
      { property: "og:title", content: "İletişim, Şubeler ve Gümrük Ofisleri | Medosa" },
      {
        property: "og:description",
        content: "Şube adreslerimiz, gümrük sahası ofislerimiz ve iletişim formu.",
      },
    ],
  }),
  component: Iletisim,
});

const OFFICE_ICONS = { sea: Ship, land: Truck, air: Plane, rail: Train } as const;
const OFFICE_LABELS = { sea: "Deniz gümrüğü", land: "Kara gümrüğü", air: "Hava gümrüğü", rail: "Demiryolu gümrüğü" } as const;

function mapSrc(q: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&hl=tr&z=13&output=embed`;
}

function directionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=driving`;
}

function Iletisim() {
  const sendMail = useServerFn(sendFormMail);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(CUSTOMS_OFFICES[0]!);
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]!);

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın"
        desc="Şubelerimiz ve gümrük sahalarındaki ofislerimizle Türkiye genelinde yanınızdayız."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5">
          <span className="eyebrow text-cobalt">Şubelerimiz</span>
          <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
            İstanbul, İzmir, Bursa ve Kayseri
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BRANCHES.map((b) => (
              <article
                key={b.city}
                className={`soft-card flex flex-col rounded-2xl p-6 transition-colors ${
                  activeBranch.city === b.city ? "ring-2 ring-cobalt" : ""
                }`}
              >
                <Building2 className="h-6 w-6 text-cobalt" />
                <h3 className="mt-4 text-base font-bold text-navy">{b.city}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.address}
                </p>
                <p className="mt-3 text-xs text-muted-foreground/80">{b.note}</p>
                {(b.phone || b.email) && (
                  <div className="mt-3 space-y-1.5 border-t border-border pt-3">
                    {b.phone && (
                      <a
                        href={`tel:${b.phoneHref ?? b.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-cobalt"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0 text-cobalt" /> {b.phone}
                      </a>
                    )}
                    {b.email && (
                      <a
                        href={`mailto:${b.email}`}
                        className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-cobalt"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0 text-cobalt" /> {b.email}
                      </a>
                    )}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveBranch(b)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5" /> Haritada gör
                  </button>
                  <a
                    href={directionsUrl(b.q)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-muted-foreground hover:text-cobalt hover:underline"
                  >
                    Yol tarifi
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              key={activeBranch.city}
              title={`${activeBranch.city} haritası`}
              src={mapSrc(activeBranch.q)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-5">
          <span className="eyebrow text-cobalt">Gümrük sahalarındaki ofislerimiz</span>
          <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
            Beyannamenizin bulunduğu sahada ekibimiz var
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
            <div className="max-h-[460px] space-y-5 overflow-y-auto pr-1">
              {CUSTOMS_REGIONS.map((region) => {
                const offices = CUSTOMS_OFFICES.filter((o) => o.region === region);
                if (offices.length === 0) return null;
                return (
                  <div key={region}>
                    <p className="eyebrow mb-2 text-cobalt">{region}</p>
                    <div className="space-y-2">
                      {offices.map((o) => (
                        <button
                          key={o.name}
                          onClick={() => setActive(o)}
                          className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                            active.name === o.name
                              ? "border-cobalt bg-cobalt/10"
                              : "border-border bg-card hover:border-cobalt/40"
                          }`}
                        >
                          <span className="mt-0.5 flex shrink-0 items-center gap-1">
                            {o.types.map((t) => {
                              const OfficeIcon = OFFICE_ICONS[t];
                              return (
                                <OfficeIcon
                                  key={t}
                                  aria-label={OFFICE_LABELS[t]}
                                  className="h-4 w-4 text-cobalt"
                                />
                              );
                            })}
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-navy">{o.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {o.city} · {o.types.map((t) => OFFICE_LABELS[t]).join(" / ")}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                key={active.name}
                title={`${active.name} haritası`}
                src={mapSrc(active.q)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[460px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Hızlı iletişim</h2>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+902125514307"
                className="flex items-center gap-3 text-sm text-foreground hover:text-cobalt"
              >
                <Phone className="h-5 w-5 text-cobalt" /> 0212 551 43 07
              </a>
              <a
                href="mailto:info@medosa.com.tr"
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <Mail className="h-5 w-5 text-cobalt" /> info@medosa.com.tr
              </a>
              <p className="flex items-start gap-3 text-sm text-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                {BRANCHES[0]!.address}
              </p>
            </div>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const get = (k: string) => String(fd.get(k) ?? "");
              setError(null);
              setSending(true);
              try {
                await sendMail({
                  data: {
                    subject: `Web sitesi iletişim formu — ${get("ad")}`,
                    replyTo: get("email"),
                    fields: [
                      { label: "Ad Soyad", value: get("ad") },
                      { label: "Firma", value: get("firma") },
                      { label: "E-posta", value: get("email") },
                      { label: "Telefon", value: get("tel") },
                      { label: "Hizmet konusu", value: get("konu") },
                      { label: "Mesaj", value: get("mesaj") },
                    ],
                  },
                });
                setSent(true);
                form.reset();
              } catch (err) {
                setError(err instanceof Error ? err.message : "Mesaj gönderilemedi.");
              } finally {
                setSending(false);
              }
            }}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ad Soyad" name="ad" />
              <Field label="Firma" name="firma" />
              <Field label="E-posta" name="email" type="email" />
              <Field label="Telefon" name="tel" type="tel" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground" htmlFor="konu">
                Hizmet konusu
              </label>
              <select
                id="konu"
                name="konu"
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
              >
                {SERVICES.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground" htmlFor="mesaj">
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                required
                maxLength={1000}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
                placeholder="Yük tipi, güzergâh ve termin bilgisi..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-full bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "Gönderiliyor..." : "Mesajı Gönder"}
            </button>
            {sent && (
              <p className="mt-4 rounded-xl border border-cobalt/30 bg-cobalt/10 p-3 text-sm text-navy">
                Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>
            )}
            {error && (
              <p className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={120}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
      />
    </div>
  );
}
