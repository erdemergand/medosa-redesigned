/** Site genelinde kullanılan SEO sabitleri ve yapılandırılmış veri yardımcıları. */

export const SITE_URL = "https://www.medosa.com.tr";
export const SITE_NAME = "Medosa Gümrük Müşavirliği";

export function canonical(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

/** Tüm sayfalarda ortak: kurum + şube (LocalBusiness) yapılandırılmış verisi. */
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Medosa Gümrük Müşavirliği Ltd. Şti.",
      alternateName: ["Medosa Gümrük", "Medosa Customs", "Medosa Gümrükleme"],
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      description:
        "1989'dan bu yana gümrük müşavirliği: ithalat, ihracat, antrepo, transit ticaret, serbest bölge ve gümrük mevzuat danışmanlığı hizmetleri.",
      foundingDate: "1989",
      email: "info@medosa.com.tr",
      telephone: "+90 212 551 43 07",
      areaServed: { "@type": "Country", name: "Türkiye" },
      knowsAbout: [
        "Gümrük müşavirliği",
        "Gümrükleme",
        "İthalat işlemleri",
        "İhracat işlemleri",
        "Antrepo",
        "Transit ticaret",
        "Serbest bölge işlemleri",
        "Gümrük mevzuatı danışmanlığı",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Şirinevler Mah. Adnan Kahveci Bulvarı, Kocasinan İş Merkezi B Blok No: 200",
        addressLocality: "Bahçelievler",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      sameAs: [
        "https://www.instagram.com/medosagumruk/",
        "https://www.facebook.com/medosagumruk/",
        "https://tr.linkedin.com/company/medosa-gumruk",
        "https://x.com/medosagumruk",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90 212 551 43 07",
          email: "info@medosa.com.tr",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: ["Turkish", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "tr-TR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
