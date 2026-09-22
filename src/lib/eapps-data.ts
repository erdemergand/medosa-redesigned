export type AppLink = { name: string; href: string; code?: string };

export const TICARET_BAKANLIGI: AppLink[] = [
  { name: "E-Fatura Sorgulama", href: "https://efatura.gtb.gov.tr/login" },
  {
    name: "Bağlayıcı Tarife Bilgisi (BTB) E-Başvuru Sistemi",
    href: "https://uygulama.gtb.gov.tr/BTBBasvuru/AnaSayfa",
  },
  {
    name: "LARA Web Sorgulama ve Belge Yükleme Ekranı",
    href: "https://uygulama.gtb.gov.tr/LaraTahlilSorgulama/Ekranlar/Index.aspx",
  },
  { name: "Destek Yönetim Sistemi (DYS)", href: "https://dys.ticaret.gov.tr/" },
  { name: "TASİŞ E-İhale", href: "https://tasis.ticaret.gov.tr/" },
  { name: "TAREKS Firma Tanımlama", href: "https://tarekskayit.ticaret.gov.tr/" },
  { name: "TAREKS Yetkilendirme", href: "https://tareksyetki.ticaret.gov.tr/" },
  {
    name: "Yükümlü Kayıt ve Takip Sistemi",
    href: "https://uygulama.gtb.gov.tr/FirmaVekalet/Login/Login.aspx",
  },
  { name: "Merkezi Sicil Kayıt Sistemi (MERSİS)", href: "https://mersis.ticaret.gov.tr/" },
  {
    name: "Fikri ve Sınai Mülkiyet Hakları E-Başvuru",
    href: "https://uygulama.gtb.gov.tr/FSMH/Login.aspx",
  },
  { name: "NCTS Transit Takip", href: "https://ncts.gtb.gov.tr/Giris.aspx" },
  { name: "Detaylı Beyan Durum Sorgulama", href: "https://uygulama.gtb.gov.tr/BeyannameSorgulama/" },
  {
    name: "GET-APP Gümrük Eşya Takip ve Beyanname Sorgulama",
    href: "https://uygulama.gtb.gov.tr/GETAPP/account/login",
  },
  { name: "GÜVAS", href: "https://guvas.gtb.gov.tr" },
  { name: "DİR-TCGB Takip", href: "https://uygulama.gtb.gov.tr/DIRSorgu/" },
  { name: "Telafi Edici Vergi (TEV)", href: "https://uygulama.gtb.gov.tr/TEV/" },
  { name: "Kota/Kontenjan Sorgulama Uygulaması", href: "https://uygulama.gtb.gov.tr/KotaSorgulama/" },
  { name: "Yetkilendirme Başvuruları", href: "https://basvuru.dtm.gov.tr/yetkiBasvuru/giris.jsp" },
  {
    name: "E-İmza Uygulamalarına Giriş",
    href: "https://eortak.dtm.gov.tr/eortak/login/listApplications.htm",
  },
  { name: "Firma Tanımlama", href: "https://dtvs.dtm.gov.tr/DTVS_FirmaUygulamasi/" },
  { name: "Transfer Bildirim Formu Sorgulama", href: "https://uygulama.gtb.gov.tr/tbfsorgulama/" },
  {
    name: "Tek Pencere Sistemine Giriş",
    href: "https://www.turkiye.gov.tr/gumruk-ve-ticaret-tek-pencere",
  },
  { name: "TOBB Medos Giriş", href: "https://medos-tobb.org.tr/" },
];

export const SAGLIK_BAKANLIGI: AppLink[] = [
  { name: "Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK)", href: "https://ebs.titck.gov.tr/Login/Index" },
  { name: "Ürün Takip Sistemi (ÜTS)", href: "https://utsuygulama.saglik.gov.tr/UTS/" },
];

export const MENSE_SORGULAMA: AppLink[] = [
  { name: "Almanya", href: "https://cert.ihk.de/sigv4/servlet/UZInfoServlet", code: "de" },
  { name: "Amerika Birleşik Devletleri", href: "https://certificates.iccwbo.org/", code: "us" },
  { name: "Avusturya", href: "https://certificates.iccwbo.org/", code: "at" },
  { name: "Belçika", href: "https://certificates.iccwbo.org/", code: "be" },
  { name: "Belçika-DIGI", href: "https://www.digichambers.be/verify", code: "be" },
  { name: "Birleşik Arap Emirlikleri", href: "https://certificates.iccwbo.org/", code: "ae" },
  { name: "Brezilya", href: "https://certificates.iccwbo.org/", code: "br" },
  { name: "Bulgaristan", href: "https://certificates.iccwbo.org/", code: "bg" },
  { name: "Çin Halk Cumhuriyeti-CCP", href: "http://check.ccpiteco.net/", code: "cn" },
  { name: "Çin Halk Cumhuriyeti-GOV", href: "http://origin.customs.gov.cn/", code: "cn" },
  { name: "Çin Halk Cumhuriyeti-ICC", href: "https://certificates.iccwbo.org/", code: "cn" },
  { name: "Danimarka", href: "https://certificates.iccwbo.org/", code: "dk" },
  { name: "Finlandiya", href: "https://certificates.iccwbo.org/", code: "fi" },
  { name: "Finlandiya-FI", href: "https://www.e-vientiasiakirjat.fi", code: "fi" },
  { name: "Fransa", href: "https://certificates.iccwbo.org/", code: "fr" },
  { name: "Güney Kore-KCCI", href: "https://cert.korcham.net/search/index.htm", code: "kr" },
  { name: "Güney Kore-ICC", href: "https://certificates.iccwbo.org/", code: "kr" },
  { name: "Hollanda", href: "https://certificates.iccwbo.org/", code: "nl" },
  { name: "İngiltere", href: "https://www.tax.service.gov.uk/check-eori-number", code: "gb" },
  { name: "İran", href: "https://iccima.ir/co/", code: "ir" },
  { name: "İsveç", href: "https://certificates.iccwbo.org/", code: "se" },
  { name: "İtalya", href: "https://certificates.iccwbo.org/", code: "it" },
  { name: "Japonya (QR kodun okutulması ile)", href: "https://ref.jcci.or.jp", code: "jp" },
  { name: "Kanada", href: "https://certificates.iccwbo.org/", code: "ca" },
  { name: "Litvanya", href: "https://essdocs.com/esscert-certificate-of-origin-verification", code: "lt" },
  { name: "Norveç", href: "https://certificates.iccwbo.org/", code: "no" },
  { name: "Norveç (EUR.1)", href: "https://eur1.toll.no/", code: "no" },
  { name: "Portekiz", href: "https://certificates.iccwbo.org/", code: "pt" },
  { name: "Singapur", href: "https://certificates.iccwbo.org/", code: "sg" },
  { name: "Slovakya", href: "https://certificates.iccwbo.org/", code: "sk" },
  { name: "Slovenya", href: "https://certificates.iccwbo.org/", code: "si" },
  { name: "Umman", href: "https://eservices.chamberoman.om/coo-verify", code: "om" },
];
