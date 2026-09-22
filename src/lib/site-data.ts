import {
  Building2,
  FileSearch,
  Globe2,
  Package,
  Scale,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";

export const WHATSAPP = "https://wa.me/905000000000";

export const NAV = [
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/e-takip", label: "E-Takip" },
  { to: "/uygulamalar", label: "E-Uygulamalar" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export const SERVICES = [
  {
    icon: Package,
    title: "İthalat İşlemleri",
    desc: "Eşyanın tarife tespitinden gümrük beyannamesinin kapanmasına kadar tüm ithalat sürecinin uçtan uca yönetimi.",
    points: ["GTİP tespiti", "TAREKS / TSE / TARIM", "Muafiyet ve teşvik"],
  },
  {
    icon: Ship,
    title: "İhracat İşlemleri",
    desc: "Beyanname tescili, menşe ve dolaşım belgeleri ile ihracat operasyonlarınızda kesintisiz akış.",
    points: ["ATR / EUR.1 / Menşe", "Kapanma takibi", "İhracat teşvikleri"],
  },
  {
    icon: Warehouse,
    title: "Antrepo Hizmetleri",
    desc: "Genel ve özel antrepo süreçlerinde stok, süre ve devir takibinin dijital kontrolü.",
    points: ["Antrepo beyannamesi", "Stok mutabakatı", "Süre uyarıları"],
  },
  {
    icon: Truck,
    title: "Transit Ticaret",
    desc: "Transit ve aktarma işlemlerinde rota, teminat ve NCTS süreçlerinin eksiksiz yönetimi.",
    points: ["NCTS / TIR", "Teminat yönetimi", "Liman & aktarma"],
  },
  {
    icon: Scale,
    title: "Gümrük Mevzuat Danışmanlığı",
    desc: "Mevzuat değişikliklerine karşı proaktif danışmanlık, denetim ve itiraz süreçleri.",
    points: ["YYS başvuru desteği", "Denetim & itiraz", "Eğitim programları"],
  },
  {
    icon: Globe2,
    title: "Lojistik Koordinasyon",
    desc: "Taşıma, sigorta ve depolama paydaşlarınızla tek noktadan koordinasyon ve raporlama.",
    points: ["Navlun takibi", "Sigorta", "Maliyet raporu"],
  },
];

export const METRICS = [
  { value: "20+", label: "Yıllık sektör deneyimi" },
  { value: "45.000+", label: "Tamamlanan beyanname" },
  { value: "%99,4", label: "Zamanında gümrükleme" },
  { value: "7/24", label: "Operasyon desteği" },
];

export const VALUES = [
  { icon: Building2, t: "Kurumsal yapı", d: "Kurumsal firmalara özel dedike operasyon ekibi." },
  { icon: Globe2, t: "Global ağ", d: "Yurt dışı acente ve taşıyıcı ağıyla uçtan uca çözüm." },
  { icon: Scale, t: "Mevzuat uyumu", d: "Güncel mevzuat takibi ve risk analizi." },
  { icon: FileSearch, t: "Şeffaf takip", d: "Her aşamada bildirim ve raporlama." },
];
