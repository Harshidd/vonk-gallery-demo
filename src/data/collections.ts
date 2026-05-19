export interface Collection {
  slug: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  coverImage: string;
}

export const collections: Collection[] = [
  {
    slug: "quiet-surfaces",
    title: {
      en: "Quiet Surfaces",
      tr: "Sessiz Yüzeyler",
    },
    description: {
      en: "Works exploring stillness, muted tone, material restraint, and texture.",
      tr: "Durgunluk, yumuşak ton, malzeme kısıtlılığı ve dokuyu keşfeden çalışmalar.",
    },
    coverImage: "/images/card-1.png",
  },
  {
    slug: "colour-memory",
    title: {
      en: "Colour Memory",
      tr: "Renk Hafızası",
    },
    description: {
      en: "Paintings built from layered color and remembered light across different environments.",
      tr: "Farklı ortamlardan katmanlı renkler ve hatırlanan ışıkla inşa edilen tablolar.",
    },
    coverImage: "/images/card-2.png",
  },
  {
    slug: "studio-selection",
    title: {
      en: "Studio Selection",
      tr: "Atölye Seçkisi",
    },
    description: {
      en: "A rotating selection of recent experiments, sketches, and in-progress larger works.",
      tr: "Son deneyler, taslaklar ve devam eden büyük boyutlu çalışmalardan oluşan hareketli bir seçki.",
    },
    coverImage: "/images/card-3.png",
  },
];
