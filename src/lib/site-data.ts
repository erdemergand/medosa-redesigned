import {
  Building2,
  ClipboardList,
  FileSearch,
  Gavel,
  Globe2,
  Landmark,
  Package,
  Scale,
  Ship,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

export const NAV = [
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/ik", label: "İK" },
  { to: "/uygulamalar", label: "E-Uygulamalar" },
  { to: "/e-takip", label: "E-Takip", featured: true },
  { to: "/iletisim", label: "İletişim" },
] as const;

export type Branch = {
  city: string;
  address: string;
  note: string;
  q: string;
  /** Görünen telefon numarası */
  phone?: string | undefined;
  /** tel: bağlantısı için sadeleştirilmiş numara */
  phoneHref?: string | undefined;
  email?: string | undefined;
};

export const BRANCHES: Branch[] = [
  {
    city: "İstanbul Merkez",
    address:
      "Şirinevler Mh. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200, Bahçelievler / İstanbul",
    note: "Genel müdürlük ve tüm İstanbul gümrük sahalarında saha kadrosu",
    q: "Medosa Gümrük Müşavirliği, Bahçelievler, İstanbul",
    phone: "0212 551 43 07",
    phoneHref: "+902125514307",
    email: "info@medosa.com.tr",
  },
  {
    city: "İzmir Şubesi",
    address: "1456 sok. Bener Nural İş Hanı No:10 Kat:1 / Alsancak / İZMİR",
    note: "Ege bölgesi operasyonları (2007)",
    q: "1456 sok. Bener Nural İş Hanı No:10 Alsancak Konak İzmir",
    email: "info@medosa.com.tr",
  },
  {
    city: "Bursa Şubesi",
    address:
      "Fethiye Mah. Fesleğen Sok. No:2/1 Ata Plaza D:5 (Ata Bulvarı) Nilüfer / Bursa",
    note: "Marmara bölgesi ve Gemlik operasyonları (2011)",
    q: "Fethiye Mah. Fesleğen Sok. No:2 Ata Plaza Nilüfer Bursa",
    email: "info@medosa.com.tr",
  },
  {
    city: "Kayseri Şubesi",
    address: "Serbest Bölge, Anbar Mah. 54. Cd. 15-D, Melikgazi / KAYSERİ",
    note: "İç Anadolu bölgesi operasyonları (Şubat 2024)",
    q: "Serbest Bölge Anbar Mah. 54. Cd. 15 Melikgazi Kayseri",
    email: "info@medosa.com.tr",
  },
];

export type CustomsOfficeType = "sea" | "land" | "air" | "rail";

export const CUSTOMS_OFFICES: {
  types: CustomsOfficeType[];
  name: string;
  city: string;
  region: string;
  q: string;
}[] = [
  // İstanbul
  { types: ["sea"], name: "Ambarlı Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Ambarlı Gümrük Müdürlüğü Avcılar İstanbul" },
  { types: ["land"], name: "Erenköy Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Erenköy Gümrük Müdürlüğü İstanbul" },
  { types: ["land"], name: "Muratbey Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Muratbey Gümrük Müdürlüğü Çatalca İstanbul" },
  { types: ["rail"], name: "Halkalı Gar Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Halkalı Gar Gümrük Müdürlüğü Küçükçekmece İstanbul" },
  {
    name: "İstanbul Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İstanbul",
    region: "İstanbul",
    q: "İstanbul Havalimanı Gümrük Müdürlüğü Arnavutköy",
  },
  {
    name: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İstanbul",
    region: "İstanbul",
    q: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü Pendik",
  },
  // Trakya ve sınır kapıları
  { types: ["land", "rail"], name: "Çerkezköy Gümrük Müdürlüğü", city: "Tekirdağ", region: "Trakya ve Sınır Kapıları", q: "Çerkezköy Gümrük Müdürlüğü Tekirdağ" },
  { types: ["land"], name: "Kapıkule Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "Kapıkule Sınır Kapısı Gümrük Sahası, Edirne" },
  { types: ["land"], name: "İpsala Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "İpsala Gümrük Kapısı Edirne" },
  // Güney Marmara
  { types: ["land"], name: "Bursa Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "T.C. Ticaret Bakanlığı Bursa Gümrük Müdürlüğü, Bursa" },
  { types: ["sea"], name: "Gemlik Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "Gemlik Gümrük Müdürlüğü Bursa" },
  { types: ["sea"], name: "Yalova Gümrük Müdürlüğü", city: "Yalova", region: "Güney Marmara", q: "Yalova Gümrük Müdürlüğü" },
  // Ege
  { types: ["sea", "land"], name: "İzmir (Alsancak) Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Alsancak Gümrük Müdürlüğü İzmir" },
  {
    name: "Adnan Menderes Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İzmir",
    region: "Ege",
    q: "Adnan Menderes Havalimanı Gümrük Müdürlüğü İzmir",
  },
  { types: ["sea"], name: "Aliağa Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Aliağa Gümrük Müdürlüğü İzmir" },
  // İç Anadolu
  { types: ["land"], name: "Kayseri Gümrük Müdürlüğü", city: "Kayseri", region: "İç Anadolu", q: "Kayseri Gümrük Müdürlüğü" },
  // Akdeniz
  { types: ["sea"], name: "Mersin Gümrük Müdürlüğü", city: "Mersin", region: "Akdeniz", q: "T.C. Ticaret Bakanlığı Mersin Gümrük Müdürlüğü, Akdeniz, Mersin" },
  { types: ["sea"], name: "Yumurtalık Gümrük Müdürlüğü", city: "Adana", region: "Akdeniz", q: "Yumurtalık Serbest Bölge Gümrük Müdürlüğü Adana" },
];

export const CUSTOMS_REGIONS = [
  "İstanbul",
  "Trakya ve Sınır Kapıları",
  "Güney Marmara",
  "Ege",
  "İç Anadolu",
  "Akdeniz",
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
    points: [
      "YYS başvuru desteği",
      "OKSB başvuru desteği",
      "Denetim & itiraz",
      "Eğitim programları",
    ],
  },
  {
    icon: ClipboardList,
    title: "Özet Beyan Gümrük İşlemleri",
    desc: "Eşyanın Türkiye gümrük bölgesine girişinden itibaren özet beyan ve taşıma belgesi süreçlerinin eksiksiz yürütülmesi.",
    points: ["Özet beyan tescili", "Antrepo/ardiye girişi", "Eksiklik-fazlalık takibi"],
  },
  {
    icon: Landmark,
    title: "Serbest Bölge İşlemleri",
    desc: "Serbest bölgelere giriş-çıkış işlemleri, ön statü belgeleri ve stok hareketlerinin mevzuata uygun yönetimi.",
    points: ["SB işlem formu", "Giriş-çıkış beyanı", "Stok ve süre takibi"],
  },
  {
    icon: ShieldCheck,
    title: "Dış Ticarette İzin Alım Hizmetleri",
    desc: "İthalat ve ihracatta gerekli tüm kurum izin, uygunluk ve kontrol belgelerinin başvuru ve takibi.",
    points: ["Kontrol belgesi", "TAREKS / TSE / TİTCK", "Tek Pencere başvuruları"],
  },
  {
    icon: Gavel,
    title: "Hukuki İşlem Danışmanlık Hizmetleri",
    desc: "Gümrük idaresi ile yaşanan uyuşmazlıklarda itiraz, uzlaşma ve dava süreçlerinde uzman danışmanlık.",
    points: ["İtiraz ve uzlaşma", "Ceza kararı incelemesi", "Dava süreci desteği"],
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

/** Ana sayfadaki bilgi kaynakları: kısa özet + resmî bağlantı */
export const KNOWLEDGE_LINKS = [
  {
    icon: Globe2,
    title: "Avrupa Birliği",
    desc: "Gümrük Birliği kapsamında A.TR dolaşım belgesi, menşe kuralları ve AB ile ticarette uygulanan tercihli rejimler.",
    href: "https://ticaret.gov.tr/avrupa-birligi",
    source: "Ticaret Bakanlığı – Avrupa Birliği",
  },
  {
    icon: Ship,
    title: "Dış Ticaret",
    desc: "İthalat ve ihracat rejimleri, ürün güvenliği ve denetim mevzuatı ile dış ticaret teşvik ve destekleri.",
    href: "https://ticaret.gov.tr/dis-ticaret",
    source: "Ticaret Bakanlığı – Dış Ticaret",
  },
  {
    icon: Scale,
    title: "Gümrük Mevzuatı",
    desc: "Gümrük Kanunu, yönetmelik, tebliğ ve genelgelerin güncel hâli ile gümrük işlemlerine ilişkin düzenlemeler.",
    href: "https://ticaret.gov.tr/gumruk-islemleri/mevzuat",
    source: "Ticaret Bakanlığı – Gümrük Mevzuatı",
  },
];
