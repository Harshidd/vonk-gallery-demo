export interface Artist {
  slug: string;
  name: string;
  role: {
    en: string;
    tr: string;
  };
  bio: {
    en: string;
    tr: string;
  };
  approach: {
    en: string;
    tr: string;
  };
  coverImage: string;
}

export const artists: Artist[] = [
  {
    slug: "esra-yigit-sahin",
    name: "Esra Yiğit Şahin",
    role: {
      en: "Painter & Mixed Media Artist",
      tr: "Ressam & Karışık Teknik Sanatçısı",
    },
    bio: {
      en: "Esra Yiğit Şahin works across painting and mixed media, building layered surfaces that hold traces of colour memory and material gesture. Her practice draws on Ottoman decorative traditions and European colour-field painting, seeking a point where ornament dissolves into abstraction.",
      tr: "Esra Yiğit Şahin, renk hafızası ve malzeme jestinin izlerini tutan katmanlı yüzeyler inşa ederek resim ve karma teknik alanlarında çalışmaktadır. Pratiği Osmanlı dekoratif gelenekleri ile Avrupa renk-alan resminden beslenmekte, süslemenin soyutlamaya dönüştüğü noktayı aramaktadır.",
    },
    approach: {
      en: "Focusing on the tension between ornamental structure and raw materiality, Esra uses natural binders, pigments, and gold leaf to create surfaces that react dynamically to changing gallery lights. She views painting as an archaeological process of adding and scraping away.",
      tr: "Süsleme yapısı ile ham malzeme arasındaki gerilime odaklanan Esra; değişen galeri ışıklarına dinamik olarak tepki veren yüzeyler oluşturmak için doğal bağlayıcılar, pigmentler ve altın varak kullanır. Resmi, ekleme ve kazıma yoluyla yürütülen arkeolojik bir süreç olarak görür.",
    },
    coverImage: "/images/hero-1.png",
  },
  {
    slug: "onur-sahin",
    name: "Onur Şahin",
    role: {
      en: "Painter & Sculptor",
      tr: "Ressam & Heykeltıraş",
    },
    bio: {
      en: "Onur Şahin's paintings begin with ground — raw linen, gesso, pigment-stained wood. His process-driven work foregrounds the physical act of painting, with each surface recording the time and pressure of its making. His work has been shown in Istanbul, Berlin and London.",
      tr: "Onur Şahin'in tabloları zemin ile başlar — ham keten, astar, pigment lekeli ahşap. Süreç odaklı çalışmaları, resmin fiziksel eylemini ön plana çıkarır; her yüzey yapımının zaman ve basıncını kaydeder. Eserleri İstanbul, Berlin ve Londra'da sergilenmiştir.",
    },
    approach: {
      en: "Onur is preoccupied with structural simplicity and monochromatic fields. By limiting his color palette, he focuses on texture, density, and the boundary of the canvas frame. In sculpture, he carries these interests into three dimensions using patinated welded steel.",
      tr: "Onur, yapısal sadelik ve monokromatik alanlarla ilgilenir. Renk paletini sınırlayarak doku, yoğunluk ve tuval çerçevesinin sınırlarına odaklanır. Heykelde ise bu ilgilerini patinalı kaynaklı çelik kullanarak üç boyuta taşır.",
    },
    coverImage: "/images/hero-2.png",
  },
];
