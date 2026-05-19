export interface StudioPost {
  slug: string;
  title: {
    en: string;
    tr: string;
  };
  excerpt: {
    en: string;
    tr: string;
  };
  content: {
    en: string;
    tr: string;
  };
  date: string;
  coverImage: string;
}

export const studioPosts: StudioPost[] = [
  {
    slug: "from-the-studio",
    title: {
      en: "From the Studio",
      tr: "Atölyeden",
    },
    excerpt: {
      en: "A look inside the shared workspace where new work takes shape.",
      tr: "Yeni çalışmaların şekillendiği ortak çalışma alanından bir bakış.",
    },
    content: {
      en: "Our studio is a space of continuous negotiation. Located in the heart of Istanbul, it acts as both a workshop and a sanctuary. Here, canvases lean against whitewashed walls, and tables are cluttered with jars of dry pigment, rabbit-skin glue, and steel welding rods. For us, the studio is not just a place where work is produced; it is an active participant in our practice. The light that filters through the high windows at dusk directly influences the color choices in the 'Colour Memory' series. We work side by side, sometimes on separate pieces, but always in constant dialogue about surface, texture, and form.",
      tr: "Atölyemiz, sürekli bir uzlaşı alanıdır. İstanbul'un kalbinde yer alan bu mekân, hem bir işlik hem de bir sığınak görevi görüyor. Burada tuval bezleri kireç badanalı duvarlara yaslanıyor; masalar kuru pigment kavanozları, tavşan derisi tutkalı ve çelik kaynak elektrotlarıyla dolup taşıyor. Bizim için atölye sadece iş üretilen bir yer değil; pratiğimizin aktif bir katılımcısıdır. Akşamüstü yüksek pencerelerden süzülen ışık, 'Renk Hafızası' serisindeki renk seçimlerimizi doğrudan etkiliyor. Yan yana, bazen ayrı eserler üzerinde ama her zaman yüzey, doku ve form hakkında sürekli bir diyalog halinde çalışıyoruz."
    },
    date: "2024-04-12",
    coverImage: "/images/card-1.png",
  },
  {
    slug: "on-colour-and-surface",
    title: {
      en: "On Colour and Surface",
      tr: "Renk ve Yüzey Üzerine",
    },
    excerpt: {
      en: "How the interplay of pigment, medium and ground shapes each painting.",
      tr: "Pigment, bağlayıcı ve zemin etkileşiminin her tabloyu nasıl şekillendirdiği.",
    },
    content: {
      en: "A painting is first and foremost a physical object. Long before any image or color is applied, there is the texture of the ground. We spend days preparing our supports — sizing raw linen with animal glue or coating wood panels with chalk-based gesso. This preparation determines how the pigment will sit, how much light the surface will absorb, and how it will reflect it back to the viewer. When color is introduced, it is rarely in a single solid coat. Instead, we layer transparent washes. A violet area is never just violet; it is a stack of blues, magentas, and deep greys that vibrate together. The surface becomes a record of time, depth, and memory.",
      tr: "Bir resim her şeyden önce fiziksel bir nesnedir. Herhangi bir imge veya renk uygulanmadan çok önce, zeminin dokusu vardır. Desteklerimizi hazırlamak için günler harcıyoruz — ham keteni hayvansal tutkalla astarlamak veya ahşap panelleri tebeşir bazlı astarla kaplamak gibi. Bu hazırlık, pigmentin nasıl oturacağını, yüzeyin ne kadar ışık emip izleyiciye nasıl geri yansıtacağını belirler. Renk devreye girdiğinde, nadiren tek bir düz kat halinde olur. Bunun yerine, şeffaf yıkamaları katmanlandırıyoruz. Mor bir alan asla sadece mor değildir; birlikte titreşen mavilerin, macentaların ve derin grilerin bir birleşimidir. Yüzey; zamanın, derinliğin ve hafızanın bir kaydı haline gelir."
    },
    date: "2024-03-28",
    coverImage: "/images/card-2.png",
  },
  {
    slug: "how-a-work-begins",
    title: {
      en: "How a Work Begins",
      tr: "Bir Eser Nasıl Başlar",
    },
    excerpt: {
      en: "From first gesture to finished surface — the arc of a painting.",
      tr: "İlk hareketten tamamlanmış yüzeye — bir tablonun yolculuğu.",
    },
    content: {
      en: "Every painting starts with an impulse, but its path is never linear. It begins with a gesture, a mark, or a patch of color left over from a previous work. From there, the painting takes over. We do not work from preparatory drawings. Instead, the surface dictating the next move. We apply paint, scrape it back with scrapers, sand it down, and build it up again. This process can take weeks or months. In our collaborative work like 'Studio Form I', the dialogue is even more physical. One of us might weld a steel frame, and the other might patinate the surface or introduce textile elements. A work is finished when it possesses a tension that feels complete yet unresolved.",
      tr: "Her tablo bir dürtüyle başlar, ancak yolu asla doğrusal değildir. Bir hareketle, bir izle veya bir önceki çalışmadan kalan bir renk yamasıyla başlar. Oradan sonra tablo yönetimi ele alır. Ön hazırlık çizimlerinden yola çıkarak çalışmıyoruz. Bunun yerine yüzey, bir sonraki adımı dikte ediyor. Boyayı uyguluyor, spatulalarla kazıyor, zımparalıyor ve tekrar inşa ediyoruz. Bu süreç haftalar veya aylar sürebilir. 'Atölye Formu I' gibi ortak çalışmalarımızda diyalog daha da fizikseldir. Birimiz çelik bir çerçeve kaynaklayabilir, diğerimiz yüzeyi patinalayabilir veya tekstil öğeleri ekleyebilir. Bir eser, hem tamamlanmış hem de henüz çözülmemiş gibi hissettiren bir gerilime sahip olduğunda biter."
    },
    date: "2024-02-15",
    coverImage: "/images/card-3.png",
  },
];
