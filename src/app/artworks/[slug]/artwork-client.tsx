"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { artworks } from "@/data/artworks";
import { collections } from "@/data/collections";

export function ArtworkDetailClient({ slug }: { slug: string }) {
  const { lang, t } = useTranslation();

  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) {
    return (
      <>
        <SiteHeader />
        <main className="flex-1 py-20 text-center">
          <p className="text-muted-foreground text-lg">
            {lang === "tr" ? "Eser bulunamadı." : "Artwork not found."}
          </p>
          <Link href="/artworks" className="mt-4 inline-block underline text-sm">
            {lang === "tr" ? "Eserlere Dön" : "Back to Artworks"}
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  const title = lang === "tr" ? artwork.title.tr : artwork.title.en;
  const technique = lang === "tr" ? artwork.technique.tr : artwork.technique.en;
  const status = lang === "tr" ? artwork.status.tr : artwork.status.en;
  const description = lang === "tr" ? artwork.description.tr : artwork.description.en;

  // Find collection title
  const coll = collections.find((c) => c.slug === artwork.collectionSlug);
  const collectionTitle = coll ? (lang === "tr" ? coll.title.tr : coll.title.en) : "";

  // Related works: other artworks (excluding current)
  const related = artworks.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left: Large artwork image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
                <Image
                  src={artwork.image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>             {/* Right: Metadata & description */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 opacity-75">
                  {artwork.year}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-[40px] font-black uppercase tracking-[0.03em] leading-none mb-2">
                  {title}
                </h1>
                <Link
                  href={`/artists/${artwork.artistSlug}`}
                  className="text-base md:text-lg text-muted-foreground hover:underline hover:text-foreground transition-colors font-medium"
                >
                  {artwork.artistName}
                </Link>

                {/* Specs list */}
                <div className="border-t border-border pt-6 mt-6 space-y-3.5">
                  <div className="flex">
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground w-28 shrink-0">
                      {t.modal.technique}
                    </span>
                    <span className="text-xs md:text-sm text-foreground">{technique}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground w-28 shrink-0">
                      {t.modal.dimensions}
                    </span>
                    <span className="text-xs md:text-sm text-foreground">{artwork.dimensions}</span>
                  </div>
                  <div className="flex">
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground w-28 shrink-0">
                      {t.modal.status}
                    </span>
                    <span className="text-xs md:text-sm text-foreground font-semibold uppercase tracking-wider">{status}</span>
                  </div>
                  {coll && (
                    <div className="flex">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground w-28 shrink-0">
                        {lang === "tr" ? "Koleksiyon" : "Collection"}
                      </span>
                      <Link
                        href={`/collections/${artwork.collectionSlug}`}
                        className="text-xs md:text-sm text-foreground hover:underline font-medium"
                      >
                        {collectionTitle}
                      </Link>
                    </div>
                  )}
                </div>

                <p className="text-sm md:text-base text-foreground leading-relaxed mt-8 opacity-85">
                  {description}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] bg-foreground text-background hover:bg-foreground/90 transition-colors w-full text-center"
                >
                  {t.modal.inquireAbout}
                </Link>
              </div>
            </div>
          </div>

          {/* Related works */}
          {related.length > 0 && (
            <div className="border-t border-border mt-20 pt-16">
              <SectionHeading
                title={lang === "tr" ? "İlgili Eserler" : "Related Works"}
                subtitle={
                  lang === "tr"
                    ? "VONK stüdyosundan diğer seçilmiş çalışmalar"
                    : "Other selected works from the VONK studio"
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
                {related.map((work) => (
                  <ArtworkCard
                    key={work.slug}
                    href={`/artworks/${work.slug}`}
                    imageSrc={work.image}
                    imageAlt={lang === "tr" ? work.title.tr : work.title.en}
                    title={lang === "tr" ? work.title.tr : work.title.en}
                    subtitle={`${work.artistName}, ${work.year}`}
                    caption={lang === "tr" ? work.technique.tr : work.technique.en}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
