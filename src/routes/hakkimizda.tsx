import { createFileRoute } from "@tanstack/react-router";
import {
  Anchor,
  Award,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  Flame,
  MapPin,
  Package,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import sectorHeating from "@/assets/sector-heating.jpg";
import sectorMarine from "@/assets/sector-marine.jpg";
import sectorTextile from "@/assets/sector-textile.jpg";
import sectorPackaging from "@/assets/sector-packaging.jpg";
import sectorMachinery from "@/assets/sector-machinery.jpg";
import sectorAutomotive from "@/assets/sector-automotive.jpg";
import { breadcrumbJsonLd, canonical } from "@/lib/seo";

const TITLE = "Hakkımızda | 1989'dan Bu Yana Gümrük Müşavirliği — Medosa";
const DESCRIPTION =
  "Medosa Gümrük Müşavirliği 1989'dan bu yana faaliyette: İstanbul merkez, İzmir, Bursa ve Kayseri şubeleri, 28 gümrük sahasında saha kadrosu, ISO 9001 ve ISO 27001 belgeli hizmet.";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "gümrük müşavirliği firması, gümrük müşaviri, Medosa, gümrük firması İstanbul, gümrük müşavirliği İzmir, gümrük müşavirliği Bursa",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical("/hakkimizda") },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: canonical("/hakkimizda") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hakkımızda", path: "/hakkimizda" },
          ]),
        ),
      },
    ],
  }),
  component: Hakkimizda,
});

const TIMELINE = [
  {
    year: "1978",
    title: "Camianın içinde",
    desc: "Metin Ergand, bilfiil gümrük camiasının içinde çalışmaya başladı.",
  },
  {
    year: "1989",
    title: "MEDOSA kuruldu",
    desc: "Metin Ergand, Doğan Barutçular'ın ortaklığı ile MEDOSA unvanını kurdu.",
  },
  {
    year: "2007",
    title: "İzmir şubesi",
    desc: "Ege bölgesindeki operasyonlar için İzmir şubesi faaliyete geçti.",
  },
  {
    year: "2011",
    title: "Bursa şubesi",
    desc: "2011 yılı sonu itibariyle Bursa şubesi hizmete açıldı.",
  },
  {
    year: "2024",
    title: "Kayseri şubesi",
    desc: "Şubat 2024'te Kayseri şubemiz kurularak İç Anadolu'daki hizmet ağımız genişledi.",
  },
];

const BRANCHES = [
  {
    city: "İstanbul (Merkez)",
    desc: "Şirinevler Mh. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200, Bahçelievler / İstanbul",
    note: "İstanbul'daki tüm gümrük sahalarında saha kadrosu",
  },
  {
    city: "İzmir Şubesi",
    desc: "1456 sok. Bener Nural İş Hanı No:10 Kat:1 / Alsancak / İZMİR (2007 yılında faaliyete geçti.)",
    note: "Ege bölgesi operasyonları",
  },
  {
    city: "Bursa Şubesi",
    desc: "Fethiye Mah. Fesleğen Sok. No:2/1 Ata Plaza D:5 (Ata Bulvarı) Nilüfer / Bursa (2011 yılı sonu itibariyle açıldı.)",
    note: "Marmara bölgesi operasyonları",
  },
  {
    city: "Kayseri Şubesi",
    desc: "Serbest Bölge, Anbar Mah. 54. Cd. 15-D, Melikgazi / KAYSERİ (Şubat 2024'te kuruldu.)",
    note: "İç Anadolu bölgesi operasyonları",
  },
];

const SECTORS = [
  { icon: Flame, name: "Isıtma Sanayi", image: sectorHeating },
  { icon: Anchor, name: "Gemi İnşa & Denizcilik", image: sectorMarine },
  { icon: Factory, name: "Tekstil", image: sectorTextile },
  { icon: Package, name: "Ambalaj Sanayi", image: sectorPackaging },
  { icon: Wrench, name: "Makine & Hırdavat", image: sectorMachinery },
  { icon: Building2, name: "Otomotiv", image: sectorAutomotive },
];

const CERTS = [
  {
    code: "ISO 9001",
    name: "Kalite Yönetim Sistemi",
    desc: "Hizmet süreçlerinin standartlaştırılması ve sürekli iyileştirme.",
  },
  {
    code: "ISO 27001",
    name: "Bilgi Güvenliği Yönetim Sistemi",
    desc: "Müşteri verisi ve dosya bilgilerinin güvenliği için sertifikalı altyapı.",
  },
  {
    code: "Gümrük Müşavirliği",
    name: "İzin Belgesi",
    desc: "Ticaret Bakanlığı lisanslı Gümrük Müşavirliği İzin Belgesi ile gümrük idarelerinde doğrudan/dolaylı temsil ve müşavirlik yetkisi.",
  },
  {
    code: "EDI / e-Birlik",
    name: "Sistem Yetkilendirmeleri",
    desc: "Otomasyona dahil tüm gümrüklerde online tescil ve ihracatta e-birlik yetkisi.",
  },
];

function Hakkimizda() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="1989'dan bu yana gümrükte güvenilir çözüm ortağı"
        desc="Gümrük Müşavirliğimiz 1978 yılından bu yana bilfiil gümrük camiasının içinde bulunan Metin Ergand beraberinde, Doğan Barutçular'ın ortaklığı ile 1989 yılında MEDOSA unvanı ile kurulmuştur."
      >
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { v: "1989", l: "Kuruluş yılı" },
            { v: "4", l: "Şube: İstanbul, İzmir, Bursa, Kayseri" },
            { v: "35+", l: "Yıllık gümrük müşavirliği deneyimi" },
            { v: "ISO", l: "9001 & 27001 belgeli" },
          ].map((m) => (
            <div key={m.l} className="glass-panel rounded-2xl px-6 py-6">
              <div className="font-display text-2xl font-extrabold text-white md:text-3xl">{m.v}</div>
              <div className="mt-2 text-xs text-white/60">{m.l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Kurumsal metin */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow text-cobalt">Kurumsal</span>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">Firmamız</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Günbegün gelişmekte olan teknolojinin getirisindeki değişim ve yeniliğe açık olan
                şirketimiz; İstanbul'daki tüm gümrük sahalarında oluşturduğu saha kadrosuyla, geniş
                uzman ve profesyonel ofis kadrosu, kararlı yöneticileri ve sahip olduğu ekipmanlarla,
                zamanın sektördeki öneminden yola çıkarak edindiği araçlarla sektörün liderleri
                arasındadır.
              </p>
              <p>
                Gümrüklerle online işlem olanağını sunan Edi programıyla otomasyona dahil olan tüm
                gümrüklerde tescil işlemlerini ofisten uygulayan firmamız, ihracatta da e-birlik
                sistemine geçişi gerçekleştirerek zaman kaybını minimuma indirmiştir.
              </p>
              <p>
                Büyüme stratejisini mutlak müşteri memnuniyeti ve profesyonel hizmete yoğunlaştırmış
                olan firmamız, ihtiyaçlarınız doğrultusunda alışagelmiş iş yönetimi ve uygulamalarını
                sorgulayan zihniyeti ile en iyi olma yolunda sizlere en kaliteli hizmeti vermek adına
                sorumluluğun sınırlarını genişletmeyi misyon edinmiştir.
              </p>
              <p>
                Başta ısıtma ve gemi inşa sanayi / denizcilik olmak üzere Tekstil, Ambalaj San.,
                Makine, Hırdavat, Otomotiv ve birçok sektörün gümrük işlemlerinde başarısını ispatlamış
                olan firmamız; uzman danışman kadrosuyla çıkma ihtimali olan tebliğ duyumlarında dahi
                müşterilerini birebir haberdar etmeyi ve oluşabilecek sıkıntıların önüne geçmek adına
                gerekli çözüm arayışlarını sonuçlandırmayı kendine görev edinmiştir.
              </p>
            </div>
          </div>

          {/* Tarihçe */}
          <div className="soft-card rounded-2xl p-7">
            <span className="eyebrow text-cobalt">Tarihçe</span>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-cobalt ring-4 ring-cobalt/15" />
                  <div className="font-display text-sm font-extrabold text-cobalt">{t.year}</div>
                  <div className="mt-1 text-base font-bold text-navy">{t.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="bg-navy-deep py-20">
        <div className="mx-auto max-w-7xl px-5">
          <span className="eyebrow text-steel">Değerlerimiz</span>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Vizyonumuz ve Misyonumuz</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="glass-panel rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-primary text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">VİZYONUMUZ</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Medosa Gümrük Müşavirliği müşterilerinin ihtiyaç ve beklentilerini konusunda uzman
                teknik ekibiyle tespit ederek, müşteri memnuniyetini en üst seviyede tutacak şekilde
                kaliteli ve hızlı hizmet sunmayı hedeflemektedir.
              </p>
            </article>
            <article className="glass-panel rounded-2xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-primary text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">MİSYONUMUZ</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Sahip olduğumuz gümrük ve uluslararası ticaret işlerindeki bilgi, tecrübe ve
                deneyimlerimizi, uygulamadan gelen gümrük tekniklerini en etkin biçimde kullanarak,
                gelişen teknolojiyle birlikte bilgi esaslı; mevcut ve değişkenlik gösteren gümrük
                mevzuatına göre yapılan işlemleri müşteri memnuniyetine sunmak.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Müşterinin ihtiyaç ve isteklerini tespit edip, etik kurallar ve mevzuatın gerekliliği
                çerçevesinde istikrarlı ve disiplinli bir şekilde faaliyet gösteren müşterilerinin
                hedeflerine ulaşmalarını sağlamak için mümkün olan en iyi ve kaliteli hizmeti sunan bir
                şirket olmaktır.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Şubeler */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <span className="eyebrow text-cobalt">Şubelerimiz</span>
        <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
          İstanbul, İzmir, Bursa ve Kayseri
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BRANCHES.map((b) => (
            <article key={b.city} className="soft-card rounded-2xl p-7">
              <MapPin className="h-6 w-6 text-cobalt" />
              <h3 className="mt-4 text-lg font-bold text-navy">{b.city}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <p className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-sm text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {b.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Sektörler */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <span className="eyebrow text-cobalt">Başlıca Sektörler</span>
          <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
            Deneyimimizin yoğunlaştığı alanlar
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <article
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={944}
                    height={704}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-white">{s.name}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <span className="eyebrow text-cobalt">Sertifikalarımız</span>
        <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
          Kalite ve yetki belgelerimiz
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Hizmet kalitemizi ve bilgi güvenliğimizi bağımsız denetimlerle belgeliyoruz.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c) => (
            <article key={c.code} className="soft-card group relative overflow-hidden rounded-2xl p-7">
              <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cobalt/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-cobalt text-white">
                {c.code.startsWith("ISO") ? (
                  <Award className="h-6 w-6" />
                ) : (
                  <ShieldCheck className="h-6 w-6" />
                )}
              </div>
              <div className="mt-5 font-display text-sm font-extrabold tracking-wide text-cobalt">
                {c.code}
              </div>
              <h3 className="mt-1 text-base font-bold text-navy">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
