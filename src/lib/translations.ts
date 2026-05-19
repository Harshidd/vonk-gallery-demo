export type Lang = "en" | "tr";

export const translations = {
  en: {
    /* ── Navigation ── */
    nav: {
      artworks: "Artworks",
      artists: "Artists",
      collections: "Collections",
      studio: "Studio",
      contact: "Contact",
      inquire: "Inquire",
    },

    /* ── Hero ── */
    hero: {
      label: "Artist Duo",
      title: "VONK",
      description:
        "Contemporary works shaped by colour, surface and shared studio practice.",
      cta1: "Explore Works",
      cta2: "Inquire About a Work",
    },

    /* ── Sections ── */
    sections: {
      featuredWorks: "Featured Works",
      featuredWorksSub:
        "Selected paintings and works on paper from the studio",
      viewAll: "View all",
      artists: "Artists",
      artistsSub: "The duo behind VONK",
      collections: "Collections",
      collectionsSub:
        "Curated groups of works exploring colour, surface and studio practice",
      studioNotes: "Studio Notes",
      studioNotesSub: "Reflections from the studio",
      inquiry: "Inquiry",
      inquirySub:
        "Interested in a work, a commission, or visiting the studio? Get in touch.",
    },

    /* ── Collections ── */
    collectionNames: {
      quietSurfaces: "Quiet Surfaces",
      colourMemory: "Colour Memory",
      studioSelection: "Studio Selection",
    },
    collectionDescriptions: {
      quietSurfaces: "Works exploring stillness, muted tone and material restraint",
      colourMemory: "Paintings built from layered colour and remembered light",
      studioSelection: "A rotating selection of recent and in-progress works",
    },

    /* ── Studio Notes ── */
    studioNoteItems: [
      {
        label: "Journal",
        title: "From the Studio",
        description:
          "A look inside the shared workspace where new work takes shape.",
      },
      {
        label: "Essay",
        title: "On Colour and Surface",
        description:
          "How the interplay of pigment, medium and ground shapes each painting.",
      },
      {
        label: "Process",
        title: "How a Work Begins",
        description:
          "From first gesture to finished surface — the arc of a painting.",
      },
    ],

    /* ── Inquiry section ── */
    inquirySection: {
      heading: "Get in Touch",
      artworkInquiry: "Artwork Inquiry",
      artworkInquiryDesc:
        "Interested in a specific work? Send us details and we will respond within 48 hours.",
      commissionRequest: "Commission Request",
      commissionRequestDesc:
        "Looking for a bespoke work? Tell us about the scale, palette and context you have in mind.",
      studioContact: "Studio Contact",
      studioContactDesc:
        "For studio visits, press, or general questions.",
      email: "info@vonk.studio",
      phone: "+90 (212) 555 0173",
      contactStudio: "Contact the Studio",
    },

    /* ── Footer ── */
    footer: {
      gallery: "Gallery",
      explore: "Explore",
      connect: "Connect",
      legal: "Legal",
      copyright: "© 2024 VONK. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms",
      accessibility: "Accessibility",
    },

    /* ── Modal ── */
    modal: {
      technique: "Technique",
      dimensions: "Dimensions",
      year: "Year",
      status: "Status",
      inquireAbout: "Enquire about this work",
    },

    /* ── Search ── */
    search: {
      placeholder: "Search works...",
      clear: "Clear",
      showing: "Showing",
      of: "of",
      works: "works",
      noResults: "No works match your search.",
    },

    /* ── Artist bios ── */
    artistBios: {
      esra: "Esra Yiğit Şahin works across painting and mixed media, building layered surfaces that hold traces of colour memory and material gesture. Her practice draws on Ottoman decorative traditions and European colour-field painting, seeking a point where ornament dissolves into abstraction.",
      onur: "Onur Şahin's paintings begin with ground — raw linen, gesso, pigment-stained wood. His process-driven work foregrounds the physical act of painting, with each surface recording the time and pressure of its making. His work has been shown in Istanbul, Berlin and London.",
    },
  },

  tr: {
    /* ── Navigasyon ── */
    nav: {
      artworks: "Eserler",
      artists: "Sanatçılar",
      collections: "Koleksiyonlar",
      studio: "Atölye",
      contact: "İletişim",
      inquire: "Bilgi Al",
    },

    /* ── Hero ── */
    hero: {
      label: "Sanatçı İkilisi",
      title: "VONK",
      description:
        "Renk, yüzey ve ortak atölye pratiğiyle şekillenen çağdaş eserler.",
      cta1: "Eserleri Keşfet",
      cta2: "Eser Hakkında Bilgi Al",
    },

    /* ── Bölümler ── */
    sections: {
      featuredWorks: "Öne Çıkan Eserler",
      featuredWorksSub:
        "Atölyeden seçilmiş tablolar ve kâğıt üzerine çalışmalar",
      viewAll: "Tümünü gör",
      artists: "Sanatçılar",
      artistsSub: "VONK'un arkasındaki ikili",
      collections: "Koleksiyonlar",
      collectionsSub:
        "Renk, yüzey ve atölye pratiğini keşfeden küratöryel gruplar",
      studioNotes: "Atölyeden",
      studioNotesSub: "Atölyeden yansımalar",
      inquiry: "İletişim",
      inquirySub:
        "Bir eser, sipariş veya atölye ziyareti için bizimle iletişime geçin.",
    },

    /* ── Koleksiyonlar ── */
    collectionNames: {
      quietSurfaces: "Sessiz Yüzeyler",
      colourMemory: "Renk Hafızası",
      studioSelection: "Atölye Seçkisi",
    },
    collectionDescriptions: {
      quietSurfaces: "Durgunluk, yumuşak ton ve malzeme kısıtlılığını keşfeden eserler",
      colourMemory: "Katmanlı renk ve hatırlanan ışıkla inşa edilen tablolar",
      studioSelection: "Yeni ve devam eden çalışmalardan bir seçki",
    },

    /* ── Atölye Notları ── */
    studioNoteItems: [
      {
        label: "Günlük",
        title: "Atölyeden",
        description:
          "Yeni çalışmaların şekillendiği ortak çalışma alanından bir bakış.",
      },
      {
        label: "Deneme",
        title: "Renk ve Yüzey Üzerine",
        description:
          "Pigment, bağlayıcı ve zemin etkileşiminin her tabloyu nasıl şekillendirdiği.",
      },
      {
        label: "Süreç",
        title: "Bir Eser Nasıl Başlar",
        description:
          "İlk hareketten tamamlanmış yüzeye — bir tablonun yolculuğu.",
      },
    ],

    /* ── İletişim bölümü ── */
    inquirySection: {
      heading: "İletişime Geçin",
      artworkInquiry: "Eser Hakkında Bilgi",
      artworkInquiryDesc:
        "Belirli bir eserle mi ilgileniyorsunuz? Detayları gönderin, 48 saat içinde dönüş yapalım.",
      commissionRequest: "Sipariş Talebi",
      commissionRequestDesc:
        "Özel bir eser mi arıyorsunuz? Boyut, palet ve bağlam hakkında bilgi verin.",
      studioContact: "Atölye İletişimi",
      studioContactDesc:
        "Atölye ziyareti, basın veya genel sorular için.",
      email: "info@vonk.studio",
      phone: "+90 (212) 555 0173",
      contactStudio: "Atölye ile İletişim",
    },

    /* ── Alt bilgi ── */
    footer: {
      gallery: "Galeri",
      explore: "Keşfet",
      connect: "Bağlantı",
      legal: "Yasal",
      copyright: "© 2024 VONK. Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Şartlar",
      accessibility: "Erişilebilirlik",
    },

    /* ── Modal ── */
    modal: {
      technique: "Teknik",
      dimensions: "Boyutlar",
      year: "Yıl",
      status: "Durum",
      inquireAbout: "Bu eser hakkında bilgi al",
    },

    /* ── Arama ── */
    search: {
      placeholder: "Eserlerde ara...",
      clear: "Temizle",
      showing: "Gösterilen",
      of: "/",
      works: "eser",
      noResults: "Aramanızla eşleşen eser bulunamadı.",
    },

    /* ── Sanatçı biyografileri ── */
    artistBios: {
      esra: "Esra Yiğit Şahin, renk hafızası ve malzeme jestinin izlerini tutan katmanlı yüzeyler inşa ederek resim ve karma teknik alanlarında çalışmaktadır. Pratiği Osmanlı dekoratif gelenekleri ile Avrupa renk-alan resminden beslenmekte, süslemenin soyutlamaya dönüştüğü noktayı aramaktadır.",
      onur: "Onur Şahin'in tabloları zemin ile başlar — ham keten, astar, pigment lekeli ahşap. Süreç odaklı çalışmaları, resmin fiziksel eylemini ön plana çıkarır; her yüzey yapımının zaman ve basıncını kaydeder. Eserleri İstanbul, Berlin ve Londra'da sergilenmiştir.",
    },
  },
} satisfies Record<string, Record<string, unknown>>;

export type Translations = (typeof translations)["en"];
