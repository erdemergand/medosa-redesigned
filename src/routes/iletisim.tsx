import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";
import { SERVICES, WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim & Teklif | Medosa" },
      {
        name: "description",
        content:
          "Gümrük ve dış ticaret operasyonunuz için teklif alın. Telefon, e-posta ve WhatsApp ile Medosa ekibine ulaşın.",
      },
      { property: "og:title", content: "İletişim & Teklif | Medosa" },
      {
        property: "og:description",
        content: "Formu doldurun, uzman ekibimiz aynı gün içinde size dönüş yapsın.",
      },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Teklif alın"
        desc="Operasyonunuzu birlikte planlayalım. Formu doldurun, uzman ekibimiz aynı gün içinde size dönüş yapsın."
      />

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Bize ulaşın</h2>
            <div className="mt-8 space-y-4">
              <a href="tel:+902120000000" className="flex items-center gap-3 text-sm text-foreground">
                <Phone className="h-5 w-5 text-cobalt" /> +90 212 000 00 00
              </a>
              <a
                href="mailto:info@medosa.com.tr"
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <Mail className="h-5 w-5 text-cobalt" /> info@medosa.com.tr
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-5 w-5 text-cobalt" /> İstanbul, Türkiye
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp ile hızlı destek
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
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
                rows={4}
                required
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
                placeholder="Yük tipi, güzergâh ve termin bilgisi..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Teklif Talebi Gönder
            </button>
            {sent && (
              <p className="mt-4 rounded-xl border border-cobalt/30 bg-cobalt/10 p-3 text-sm text-navy">
                Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
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
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
      />
    </div>
  );
}
