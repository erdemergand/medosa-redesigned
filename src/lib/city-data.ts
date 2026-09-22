/** Şehir bazlı gümrük müşavirliği sayfaları için içerik ve yerel SEO verileri. */
import { BRANCHES, CUSTOMS_OFFICES } from "@/lib/site-data";

export type CityPage = {
  slug: string;
  city: string;
  /** Şehir adının -de/-da hali (başlık ve metinlerde) */
  locative: string;
  branchCity: string;
  /** Gümrük ofislerini eşleştirmek için kullanılan il adları */
  officeCities: string[];
  lat: number;
  lng: number;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  sectors: string[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "istanbul",
    city: "İstanbul",
    locative: "İstanbul'da",
    branchCity: "İstanbul Merkez",
    officeCities: ["İstanbul", "Tekirdağ", "Edirne", "Kocaeli"],
    lat: 40.9977,
    lng: 28.8503,
    title: "İstanbul Gümrük Müşavirliği | Medosa Gümrük Müşavirliği",
    description:
      "İstanbul gümrük müşavirliği hizmeti: Ambarlı, Erenköy, Muratbey, Halkalı Gar, İstanbul Havalimanı ve Sabiha Gökçen sahalarında ithalat, ihracat, antrepo ve transit işlemleriniz. Tel: 0212 551 43 07.",
    keywords:
      "istanbul gümrük müşavirliği, istanbul gümrük müşaviri, istanbul gümrükleme firması, ambarlı gümrük müşavirliği, erenköy gümrük müşavirliği, muratbey gümrük müşavirliği, istanbul havalimanı gümrükleme",
    intro:
      "Genel müdürlüğümüz Bahçelievler'de; İstanbul'un deniz, kara, hava ve demiryolu gümrük sahalarının tamamında kendi saha kadromuzla çalışıyoruz. Beyanname tescilinden muayene ve teslim aşamasına kadar süreci tek ekipten yönetiyor, gelişmeleri e-takip portalımızdan anlık paylaşıyoruz.",
    highlights: [
      {
        title: "Tüm İstanbul sahalarında saha kadrosu",
        desc: "Ambarlı, Erenköy, Muratbey, Halkalı Gar, İstanbul Havalimanı, Sabiha Gökçen ve Deri Serbest Bölge gümrüklerinde yerinde takip.",
      },
      {
        title: "Havayolu ve acil sevkiyatlar",
        desc: "Havalimanı gümrüklerinde gün içi tescil ve teslim odaklı çalışma; kritik parça ve numune sevkiyatlarında hızlı çözüm.",
      },
      {
        title: "Antrepo ve serbest bölge",
        desc: "Antrepo giriş-çıkış, stok mutabakatı ve serbest bölge işlemlerinizin tek elden yürütülmesi.",
      },
    ],
    sectors: ["Tekstil", "Otomotiv", "Makine", "Ambalaj", "Kimya", "Elektronik"],
  },
  {
    slug: "izmir",
    city: "İzmir",
    locative: "İzmir'de",
    branchCity: "İzmir Şubesi",
    officeCities: ["İzmir", "Balıkesir"],
    lat: 38.4386,
    lng: 27.1435,
    title: "İzmir Gümrük Müşavirliği | Medosa Gümrük Müşavirliği",
    description:
      "İzmir gümrük müşavirliği: Alsancak şubemizle İzmir, Aliağa, Adnan Menderes Havalimanı ve Ayvalık gümrüklerinde ithalat, ihracat, antrepo ve transit ticaret işlemleri.",
    keywords:
      "izmir gümrük müşavirliği, izmir gümrük müşaviri, izmir gümrükleme, aliağa gümrük müşavirliği, adnan menderes gümrük, alsancak gümrük müşavirliği",
    intro:
      "2007'den bu yana Alsancak'taki şubemizle Ege bölgesindeki dış ticaret operasyonlarını yürütüyoruz. Liman, havalimanı ve dökme yük gümrüklerinde deneyimli kadromuzla ihracat yoğun firmaların süreçlerini hızlandırıyoruz.",
    highlights: [
      {
        title: "Liman operasyonları",
        desc: "Alsancak ve Aliağa'da konteyner, dökme yük ve proje kargo gümrükleme deneyimi.",
      },
      {
        title: "İhracat odaklı destek",
        desc: "Menşe ve dolaşım belgeleri, ihracat teşvikleri ve A.TR/EUR.1 süreçlerinde uçtan uca takip.",
      },
      {
        title: "Ege sanayisine yakınlık",
        desc: "Organize sanayi bölgelerindeki üreticiler için düzenli sevkiyat planlaması ve raporlama.",
      },
    ],
    sectors: ["Tekstil", "Gıda", "Makine", "Denizcilik", "Kimya"],
  },
  {
    slug: "bursa",
    city: "Bursa",
    locative: "Bursa'da",
    branchCity: "Bursa Şubesi",
    officeCities: ["Bursa", "Yalova", "Kocaeli"],
    lat: 40.2266,
    lng: 28.9662,
    title: "Bursa Gümrük Müşavirliği | Medosa Gümrük Müşavirliği",
    description:
      "Bursa gümrük müşavirliği: Nilüfer'deki şubemizle Bursa ve Gemlik gümrüklerinde otomotiv, tekstil ve makine sektörüne ithalat, ihracat ve antrepo hizmetleri.",
    keywords:
      "bursa gümrük müşavirliği, bursa gümrük müşaviri, gemlik gümrük müşavirliği, nilüfer gümrükleme, bursa gümrükleme firması",
    intro:
      "2011'den bu yana Nilüfer'deki şubemizle Güney Marmara'daki üretici firmaların gümrük işlemlerini yürütüyoruz. Otomotiv yan sanayi ve tekstil ağırlıklı seri sevkiyatlarda dahilde işleme ve antrepo süreçlerinde uzmanız.",
    highlights: [
      {
        title: "Gemlik Limanı deneyimi",
        desc: "Konteyner ve araç taşımacılığında liman içi süreçlerin yerinde takibi.",
      },
      {
        title: "Dahilde işleme rejimi",
        desc: "İzin belgesi takibi, kapatma işlemleri ve sarfiyat tablolarının hazırlanması.",
      },
      {
        title: "Seri üretim takvimine uyum",
        desc: "Üretim hattını durdurmayacak şekilde planlanan gümrükleme ve teslim programı.",
      },
    ],
    sectors: ["Otomotiv", "Tekstil", "Makine", "Isıtma-soğutma", "Ambalaj"],
  },
  {
    slug: "kayseri",
    city: "Kayseri",
    locative: "Kayseri'de",
    branchCity: "Kayseri Şubesi",
    officeCities: ["Kayseri", "Nevşehir"],
    lat: 38.7205,
    lng: 35.4826,
    title: "Kayseri Gümrük Müşavirliği | Medosa Gümrük Müşavirliği",
    description:
      "Kayseri gümrük müşavirliği: Kayseri Serbest Bölge'deki şubemizle Kayseri ve Nevşehir gümrüklerinde ithalat, ihracat, serbest bölge ve antrepo işlemleri.",
    keywords:
      "kayseri gümrük müşavirliği, kayseri gümrük müşaviri, kayseri serbest bölge gümrük, kayseri gümrükleme firması, nevşehir gümrük müşavirliği",
    intro:
      "Şubat 2024'te açtığımız Kayseri Serbest Bölge şubemizle İç Anadolu'daki üreticilerin ithalat ve ihracat işlemlerini yerinde yürütüyoruz. Mobilya, makine ve metal sektörlerinin ihracat sevkiyatlarında serbest bölge avantajlarını en iyi şekilde kullanıyoruz.",
    highlights: [
      {
        title: "Serbest bölge içinde ofis",
        desc: "Kayseri Serbest Bölge işlemlerinde aynı gün evrak ve saha takibi.",
      },
      {
        title: "İç Anadolu'dan limana kadar",
        desc: "Mersin, İzmir ve İstanbul limanlarına bağlanan sevkiyatlarda tek elden koordinasyon.",
      },
      {
        title: "İhracatçıya teşvik desteği",
        desc: "Menşe belgeleri, ihracat teşvikleri ve gümrük mevzuatı danışmanlığı.",
      },
    ],
    sectors: ["Mobilya", "Makine", "Metal", "Tekstil", "Gıda"],
  },
];

export function getCityPage(slug: string) {
  return CITY_PAGES.find((c) => c.slug === slug);
}

export function cityBranch(page: CityPage) {
  return BRANCHES.find((b) => b.city === page.branchCity);
}

export function cityOffices(page: CityPage) {
  return CUSTOMS_OFFICES.filter((o) => page.officeCities.includes(o.city));
}
