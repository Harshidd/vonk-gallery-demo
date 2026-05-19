export interface Artwork {
  slug: string;
  title: {
    en: string;
    tr: string;
  };
  artistSlug: string;
  artistName: string;
  year: string;
  technique: {
    en: string;
    tr: string;
  };
  dimensions: string;
  status: {
    en: string;
    tr: string;
  };
  category: string;
  collectionSlug: string;
  image: string;
  description: {
    en: string;
    tr: string;
  };
}

export const artworks: Artwork[] = [
  {
    slug: "quiet-surface-no-7",
    title: {
      en: "Quiet Surface No. 7",
      tr: "Sessiz Yüzey No. 7",
    },
    artistSlug: "esra-yigit-sahin",
    artistName: "Esra Yiğit Şahin",
    year: "2024",
    technique: {
      en: "Oil on linen",
      tr: "Keten üzerine yağlıboya",
    },
    dimensions: "120 × 90 cm",
    status: {
      en: "Available",
      tr: "Mevcut",
    },
    category: "painting",
    collectionSlug: "quiet-surfaces",
    image: "/images/card-1.png",
    description: {
      en: "A meditation on restraint — muted greys and blacks laid in thin, translucent layers over raw linen. The weave of the ground remains visible beneath the paint, grounding the work in its materiality.",
      tr: "Kısıtlama üzerine bir meditasyon — ham keten üzerine ince, yarı saydam katmanlar halinde döşenmiş yumuşak griler ve siyahlar. Zeminin dokusu boyanın altında görünür kalarak eseri malzemeselliğine bağlar.",
    },
  },
  {
    slug: "colour-memory-violet",
    title: {
      en: "Colour Memory — Violet",
      tr: "Renk Hafızası — Mor",
    },
    artistSlug: "onur-sahin",
    artistName: "Onur Şahin",
    year: "2023",
    technique: {
      en: "Acrylic and pigment on canvas",
      tr: "Tuval üzerine akrilik ve pigment",
    },
    dimensions: "150 × 120 cm",
    status: {
      en: "On loan",
      tr: "Ödünçte",
    },
    category: "painting",
    collectionSlug: "colour-memory",
    image: "/images/card-2.png",
    description: {
      en: "Part of the Colour Memory series, this painting builds its violet field through dozens of thin acrylic washes, each shifting the hue by fractions. The resulting surface pulses with an internal light.",
      tr: "Renk Hafızası serisinin bir parçası olan bu tablo, mor alanını düzinelerce ince akrilik yıkamayla inşa eder; her biri tonu kesirlerle kaydırır. Ortaya çıkan yüzey içsel bir ışıkla titrer.",
    },
  },
  {
    slug: "studio-form-i",
    title: {
      en: "Studio Form I",
      tr: "Atölye Formu I",
    },
    artistSlug: "esra-yigit-sahin", // Or a dual project slug, let's map to Esra or Onur, or make it dynamic.
    artistName: "Esra Yiğit Şahin & Onur Şahin",
    year: "2024",
    technique: {
      en: "Welded steel, patinated",
      tr: "Kaynaklı çelik, patinalı",
    },
    dimensions: "210 × 45 × 45 cm",
    status: {
      en: "Available",
      tr: "Mevcut",
    },
    category: "sculpture",
    collectionSlug: "studio-selection",
    image: "/images/card-3.png",
    description: {
      en: "A rare collaborative sculpture from the duo. Rising vertically from a narrow base, the welded steel planes spiral upward, retaining traces of heat and fabrication — honouring the labour of shared making.",
      tr: "İkiliden nadir bir ortak heykel. Dar bir tabandan dikey olarak yükselen kaynaklı çelik düzlemler yukarı doğru spiral çizer; ısı ve fabrikasyon izlerini koruyarak ortak yapım emeğini onurlandırır.",
    },
  },
  {
    slug: "horizon-line-istanbul",
    title: {
      en: "Horizon Line (After Istanbul)",
      tr: "Ufuk Çizgisi (İstanbul Sonrası)",
    },
    artistSlug: "onur-sahin",
    artistName: "Onur Şahin",
    year: "2023",
    technique: {
      en: "Oil and wax on panel",
      tr: "Panel üzerine yağlıboya ve balmumu",
    },
    dimensions: "100 × 180 cm",
    status: {
      en: "Sold",
      tr: "Satıldı",
    },
    category: "painting",
    collectionSlug: "colour-memory",
    image: "/images/card-4.png",
    description: {
      en: "Layered horizontal bands of deep navy, teal and amber evoke the meeting of sky and water along the Bosphorus at dusk. The wax medium lends a quiet luminosity to the surface.",
      tr: "Derin lacivert, turkuaz ve kehribar renklerinin yatay katmanları, akşam karanlığında Boğaz boyunca gökyüzü ile suyun buluşmasını çağrıştırır. Balmumu ortam, yüzeye sessiz bir parlaklık katar.",
    },
  },
  {
    slug: "warm-ground",
    title: {
      en: "Warm Ground",
      tr: "Sıcak Zemin",
    },
    artistSlug: "esra-yigit-sahin",
    artistName: "Esra Yiğit Şahin",
    year: "2024",
    technique: {
      en: "Oil and natural pigment on linen",
      tr: "Keten üzerine yağlıboya ve doğal pigment",
    },
    dimensions: "130 × 100 cm",
    status: {
      en: "Available",
      tr: "Mevcut",
    },
    category: "painting",
    collectionSlug: "quiet-surfaces",
    image: "/images/card-5.png",
    description: {
      en: "Earth pigments — raw sienna, burnt umber, yellow ochre — applied in thick, textured layers over raw linen. The painting holds the warmth and weight of the materials themselves.",
      tr: "Toprak pigmentleri — ham sienna, yanık kahve, sarı okra — ham keten üzerine kalın, dokulu katmanlar halinde uygulanmıştır. Tablo, malzemelerin sıcaklığını ve ağırlığını taşır.",
    },
  },
  {
    slug: "division-indigo",
    title: {
      en: "Division — Indigo",
      tr: "Bölünme — Çivit",
    },
    artistSlug: "onur-sahin",
    artistName: "Onur Şahin",
    year: "2024",
    technique: {
      en: "Acrylic and gesso on canvas",
      tr: "Tuval üzerine akrilik ve astar",
    },
    dimensions: "140 × 110 cm",
    status: {
      en: "Available",
      tr: "Mevcut",
    },
    category: "painting",
    collectionSlug: "studio-selection",
    image: "/images/card-6.png",
    description: {
      en: "Bold divisions of indigo and white intersect across the canvas, their edges softened by the thick impasto application. The painting asserts structure while dissolving boundary.",
      tr: "Cesur çivit ve beyaz bölümler tuval üzerinde kesişir; kenarları kalın impasto uygulamasıyla yumuşatılmıştır. Tablo, sınırı eritirken yapıyı öne sürer.",
    },
  },
];
