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
      "Şirinevler Mah. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200, Bahçelievler / İstanbul",
    note: "Genel müdürlük ve tüm İstanbul gümrük sahalarında saha kadrosu",
    q: "Medosa Gümrük Müşavirliği, Bahçelievler, İstanbul",
    phone: "0212 551 43 07",
    phoneHref: "+902125514307",
    email: "info@medosa.com.tr",
  },
  {
    city: "İzmir Şubesi",
    address: "1456 Sok. Bener Nural İş Hanı No: 10 Kat: 1, Alsancak / İzmir",
    note: "Ege bölgesi operasyonları (2007)",
    q: "1456 Sok. Bener Nural İş Hanı No: 10 Alsancak Konak İzmir",
    email: "info@medosa.com.tr",
  },
  {
    city: "Bursa Şubesi",
    address:
      "Fethiye Mah. Fesleğen Sok. No: 2/1 Ata Plaza D: 5 (Ata Bulvarı), Nilüfer / Bursa",
    note: "Marmara bölgesi ve Gemlik operasyonları (2011)",
    q: "Fethiye Mah. Fesleğen Sok. No: 2 Ata Plaza Nilüfer Bursa",
    email: "info@medosa.com.tr",
  },
  {
    city: "Kayseri Şubesi",
    address: "Serbest Bölge, Anbar Mah. 54. Cd. 15-D, Melikgazi / Kayseri",
    note: "İç Anadolu bölgesi operasyonları (Şubat 2024)",
    q: "Serbest Bölge Anbar Mah. 54. Cd. 15 Melikgazi Kayseri",
    email: "info@medosa.com.tr",
  },
];

export type CustomsOfficeType = "sea" | "land" | "air" | "rail";

export type CustomsOffice = {
  types: CustomsOfficeType[];
  name: string;
  city: string;
  region: string;
  q: string;
  lat: number;
  lng: number;
};

export const CUSTOMS_OFFICES: CustomsOffice[] = [
  // İstanbul
  { types: ["sea"], name: "Ambarlı Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Ambarlı Gümrük Müdürlüğü Avcılar İstanbul", lat: 40.9667, lng: 28.6892 },
  { types: ["land"], name: "Erenköy Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Erenköy Gümrük Müdürlüğü İstanbul", lat: 40.9776, lng: 29.1069 },
  { types: ["land"], name: "Muratbey Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Muratbey Gümrük Müdürlüğü Çatalca İstanbul", lat: 41.0836, lng: 28.5133 },
  { types: ["rail"], name: "Halkalı Gar Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "Halkalı Gar Gümrük Müdürlüğü Küçükçekmece İstanbul", lat: 41.0326, lng: 28.7906 },
  {
    name: "İstanbul Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İstanbul",
    region: "İstanbul",
    q: "İstanbul Havalimanı Gümrük Müdürlüğü Arnavutköy",
    lat: 41.2753,
    lng: 28.7519,
  },
  {
    name: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İstanbul",
    region: "İstanbul",
    q: "Sabiha Gökçen Havalimanı Gümrük Müdürlüğü Pendik",
    lat: 40.9059,
    lng: 29.3094,
  },
  { types: ["sea", "land"], name: "İstanbul Deri Serbest Bölge Gümrük Müdürlüğü", city: "İstanbul", region: "İstanbul", q: "İstanbul Deri Serbest Bölgesi Gümrük Müdürlüğü Tuzla İstanbul", lat: 40.83, lng: 29.386 },
  // Trakya ve sınır kapıları
  { types: ["land", "rail"], name: "Çerkezköy Gümrük Müdürlüğü", city: "Tekirdağ", region: "Trakya ve Sınır Kapıları", q: "Çerkezköy Gümrük Müdürlüğü Tekirdağ", lat: 41.2854, lng: 27.9986 },
  { types: ["land"], name: "Avrupa Serbest Bölge Gümrük Müdürlüğü", city: "Tekirdağ", region: "Trakya ve Sınır Kapıları", q: "Avrupa Serbest Bölgesi Gümrük Müdürlüğü Çorlu Tekirdağ", lat: 41.169, lng: 27.856 },
  { types: ["land"], name: "Kapıkule Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "Kapıkule Sınır Kapısı Gümrük Sahası, Edirne", lat: 41.7186, lng: 26.3417 },
  { types: ["land"], name: "İpsala Gümrük Müdürlüğü", city: "Edirne", region: "Trakya ve Sınır Kapıları", q: "İpsala Gümrük Kapısı Edirne", lat: 40.9247, lng: 26.38 },
  // Doğu Marmara
  { types: ["sea"], name: "Derince Gümrük Müdürlüğü", city: "Kocaeli", region: "Doğu Marmara", q: "Derince Gümrük Müdürlüğü Kocaeli", lat: 40.758, lng: 29.828 },
  { types: ["sea"], name: "İzmit Gümrük Müdürlüğü", city: "Kocaeli", region: "Doğu Marmara", q: "İzmit Gümrük Müdürlüğü Kocaeli", lat: 40.766, lng: 29.94 },
  { types: ["sea"], name: "Dilovası Gümrük Müdürlüğü", city: "Kocaeli", region: "Doğu Marmara", q: "Dilovası Gümrük Müdürlüğü Kocaeli", lat: 40.777, lng: 29.535 },
  // Güney Marmara
  { types: ["land"], name: "Bursa Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "T.C. Ticaret Bakanlığı Bursa Gümrük Müdürlüğü, Bursa", lat: 40.2266, lng: 28.9662 },
  { types: ["sea"], name: "Gemlik Gümrük Müdürlüğü", city: "Bursa", region: "Güney Marmara", q: "Gemlik Gümrük Müdürlüğü Bursa", lat: 40.4253, lng: 29.13 },
  { types: ["sea"], name: "Yalova Gümrük Müdürlüğü", city: "Yalova", region: "Güney Marmara", q: "Yalova Gümrük Müdürlüğü", lat: 40.655, lng: 29.278 },
  // Ege
  { types: ["sea", "land"], name: "İzmir (Alsancak) Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Alsancak Gümrük Müdürlüğü İzmir", lat: 38.4498, lng: 27.1465 },
  {
    name: "Adnan Menderes Havalimanı Gümrük Müdürlüğü",
    types: ["air"],
    city: "İzmir",
    region: "Ege",
    q: "Adnan Menderes Havalimanı Gümrük Müdürlüğü İzmir",
    lat: 38.2937,
    lng: 27.1567,
  },
  { types: ["sea"], name: "Aliağa Gümrük Müdürlüğü", city: "İzmir", region: "Ege", q: "Aliağa Gümrük Müdürlüğü İzmir", lat: 38.796, lng: 26.97 },
  { types: ["sea"], name: "Ayvalık Gümrük Müdürlüğü", city: "Balıkesir", region: "Ege", q: "Ayvalık Gümrük Müdürlüğü Balıkesir", lat: 39.3167, lng: 26.69 },
  // İç Anadolu
  { types: ["land"], name: "Kayseri Gümrük Müdürlüğü", city: "Kayseri", region: "İç Anadolu", q: "Kayseri Gümrük Müdürlüğü", lat: 38.7333, lng: 35.55 },
  { types: ["land"], name: "Kayseri Serbest Bölge Gümrük Müdürlüğü", city: "Kayseri", region: "İç Anadolu", q: "Kayseri Serbest Bölge Gümrük Müdürlüğü Melikgazi Kayseri", lat: 38.69, lng: 35.559 },
  { types: ["air"], name: "Nevşehir Gümrük Müdürlüğü", city: "Nevşehir", region: "İç Anadolu", q: "Nevşehir Kapadokya Havalimanı Gümrük Müdürlüğü", lat: 38.7719, lng: 34.5344 },
  // Akdeniz
  { types: ["sea"], name: "Mersin Gümrük Müdürlüğü", city: "Mersin", region: "Akdeniz", q: "T.C. Ticaret Bakanlığı Mersin Gümrük Müdürlüğü, Akdeniz, Mersin", lat: 36.792, lng: 34.633 },
  { types: ["sea"], name: "Yumurtalık Gümrük Müdürlüğü", city: "Adana", region: "Akdeniz", q: "Yumurtalık Serbest Bölge Gümrük Müdürlüğü Adana", lat: 36.836, lng: 35.81 },
  // Doğu Anadolu sınır kapıları
  { types: ["land"], name: "Gürbulak Gümrük Müdürlüğü", city: "Ağrı", region: "Doğu Anadolu Sınır Kapıları", q: "Gürbulak Sınır Kapısı Gümrük Müdürlüğü Doğubayazıt Ağrı", lat: 39.55, lng: 44.302 },
  { types: ["land"], name: "Dilucu Gümrük Müdürlüğü", city: "Iğdır", region: "Doğu Anadolu Sınır Kapıları", q: "Dilucu Sınır Kapısı Gümrük Müdürlüğü Aralık Iğdır", lat: 39.906, lng: 44.818 },
];

export const CUSTOMS_REGIONS = [
  "İstanbul",
  "Trakya ve Sınır Kapıları",
  "Doğu Marmara",
  "Güney Marmara",
  "Ege",
  "İç Anadolu",
  "Akdeniz",
  "Doğu Anadolu Sınır Kapıları",
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
    href: "https://ticaret.gov.tr/dis-iliskiler/avrupa-birligi",
    source: "Ticaret Bakanlığı – Avrupa Birliği",
  },
  {
    icon: Ship,
    title: "Dış Ticaret",
    desc: "İthalat ve ihracat rejimleri, ürün güvenliği ve denetim mevzuatı ile dış ticaret teşvik ve destekleri.",
    href: "https://ticaret.gov.tr/ihracat",
    source: "Ticaret Bakanlığı – İhracat / İthalat",
  },
  {
    icon: Scale,
    title: "Gümrük Mevzuatı",
    desc: "Gümrük Kanunu, yönetmelik, tebliğ ve genelgelerin güncel hâli ile gümrük işlemlerine ilişkin düzenlemeler.",
    href: "https://ticaret.gov.tr/gumruk-islemleri/mevzuat",
    source: "Ticaret Bakanlığı – Gümrük Mevzuatı",
  },
];
