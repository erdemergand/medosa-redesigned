import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartHandshake, Layers, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";
import { BRANCHES } from "@/lib/site-data";

export const Route = createFileRoute("/ik")({
  head: () => ({
    meta: [
      { title: "İnsan Kaynakları & Kariyer | Medosa" },
      {
        name: "description",
        content:
          "Medosa Gümrük Müşavirliği'nde kariyer: iş başvurusu ve lise/üniversite staj başvurusu formları, çalışma kültürümüz ve açık pozisyonlar.",
      },
      { property: "og:title", content: "İnsan Kaynakları & Kariyer | Medosa" },
      {
        property: "og:description",
        content:
          "Gümrük ve dış ticaretin dijitalleşen tarafında kariyer yapın. İş ve staj başvurularınızı çevrim içi iletin.",
      },
    ],
  }),
  component: IK,
});

const LOCATIONS = BRANCHES.map((b) => b.city);

const POSITIONS = [
  "İthalat Operasyon Uzmanı",
  "İhracat Operasyon Uzmanı",
  "Muhasebe / Finans",
  "Saha Personeli",
  "Gümrük Müşavir Yardımcısı",
  "Müşteri İlişkileri",
  "Bilgi İşlem / Yazılım",
  "Diğer",
];

const CULTURE = [
  {
    icon: Users,
    t: "Ekip olmak",
    d: "Operasyon, saha ve mevzuat ekiplerimiz aynı dosya üzerinde birlikte çalışır; kimse tek başına bırakılmaz.",
  },
  {
    icon: TrendingUp,
    t: "Gelişim",
    d: "Gümrük mevzuatı, dış ticaret ve dijital sistemler üzerine düzenli içeri eğitim ve saha rotasyonu.",
  },
  {
    icon: Layers,
    t: "Teknolojiyle iş",
    d: "e-mds ve aacc gibi kendi geliştirdiğimiz sistemlerle çalışır, süreçleri siz de şekillendirirsiniz.",
  },
  {
    icon: HeartHandshake,
    t: "Uzun soluklu",
    d: "1989'dan bu yana ekibimizin büyük bölümü yıllarca bizimle; kariyerinizi burada uzun vadeli kurabilirsiniz.",
  },
];

function IK() {
  const [tab, setTab] = useState<"is" | "staj">("is");
  const [sent, setSent] = useState<null | "is" | "staj">(null);

  return (
    <>
      <PageHero
        eyebrow="İnsan Kaynakları"
        title="Medosa'da kariyer"
        desc="Gümrük müşavirliğinin köklü tecrübesi ile dijital sistemlerin hızını birleştiren bir ekibin parçası olun. İş ve staj başvurularınızı buradan iletebilirsiniz."
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5">
          <span className="eyebrow text-cobalt">Çalışma kültürümüz</span>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy md:text-3xl">
            Mevzuatı bilen, sahayı tanıyan, teknolojiyi kullanan bir ekip
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Medosa; İstanbul merkez ile İzmir, Bursa ve Kayseri şubelerinde görev yapan saha ve
            operasyon kadrosuyla çalışır. Yeni başlayan arkadaşlarımız deneyimli müşavirlerimizin
            yanında yetişir; gümrük sahasını, beyanname sürecini ve kendi dijital sistemlerimizi
            adım adım öğrenir. Titiz, sorumluluk alan ve öğrenmeye açık ekip arkadaşları arıyoruz.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CULTURE.map((c) => (
              <article key={c.t} className="soft-card rounded-2xl p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-navy text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex rounded-full border border-border bg-background p-1">
            <button
              onClick={() => setTab("is")}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === "is" ? "bg-cobalt text-white" : "text-muted-foreground hover:text-navy"
              }`}
            >
              İş Başvurusu
            </button>
            <button
              onClick={() => setTab("staj")}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === "staj" ? "bg-cobalt text-white" : "text-muted-foreground hover:text-navy"
              }`}
            >
              Staj Başvurusu
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(tab);
            }}
            className="mt-6 rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            {tab === "staj" && (
              <p className="mb-5 flex items-start gap-2 rounded-xl bg-secondary p-3 text-xs leading-relaxed text-muted-foreground">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                Lise ve üniversite öğrencileri için zorunlu ve gönüllü staj başvuruları
                değerlendirilmektedir.
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ad Soyad" name="ad" />
              <Field label="E-Posta" name="email" type="email" />
              <Field label="Telefon" name="tel" type="tel" />
              <Select label="Başvuru Yeri" name="yer" options={LOCATIONS} />

              {tab === "is" ? (
                <Select label="Başvurulan Pozisyon" name="pozisyon" options={POSITIONS} />
              ) : (
                <Select
                  label="Staj Türü"
                  name="stajTuru"
                  options={["Lise Stajı", "Üniversite Stajı"]}
                />
              )}

              {tab === "staj" && (
                <>
                  <Field label="Okul Adı" name="okul" />
                  <Field label="Bölüm" name="bolum" />
                </>
              )}
            </div>

            {tab === "is" && (
              <div className="mt-4">
                <label htmlFor="cv" className="text-sm font-medium text-foreground">
                  CV Dosyası (PDF, DOC, DOCX)
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-cobalt file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                />
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="mesaj" className="text-sm font-medium text-foreground">
                {tab === "is" ? "Ön Yazı / Mesaj" : "Mesajınız"}
              </label>
              <textarea
                id="mesaj"
                rows={4}
                maxLength={1000}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
                placeholder={
                  tab === "is"
                    ? "Deneyiminiz ve kendinizden kısaca bahsedin..."
                    : "Staj döneminiz ve beklentileriniz..."
                }
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {tab === "is" ? "İş Başvurusunu Gönder" : "Staj Başvurusunu Gönder"}
            </button>

            {sent === tab && (
              <p className="mt-4 rounded-xl border border-cobalt/30 bg-cobalt/10 p-3 text-sm text-navy">
                Başvurunuz alındı. İnsan kaynakları ekibimiz uygun pozisyon olması hâlinde sizinle
                iletişime geçecektir.
              </p>
            )}
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Başvurularınızı{" "}
            <a href="mailto:info@medosa.com.tr" className="text-cobalt underline">
              info@medosa.com.tr
            </a>{" "}
            adresine de iletebilirsiniz.
          </p>
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

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:border-cobalt focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
