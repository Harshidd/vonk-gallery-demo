"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { collections } from "@/data/collections";
import { artworks } from "@/data/artworks";

export function CollectionDetailClient({ slug }: { slug: string }) {
  const { lang } = useTranslation();

  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <>
        <SiteHeader />
        <main className="flex-1 py-20 text-center">
          <p className="text-muted-foreground text-lg">
            {lang === "tr" ? "Koleksiyon bulunamadı." : "Collection not found."}
          </p>
          <Link href="/collections" className="mt-4 inline-block underline text-sm">
            {lang === "tr" ? "Koleksiyonlara Dön" : "Back to Collections"}
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  const title = lang === "tr" ? collection.title.tr : collection.title.en;
  const description = lang === "tr" ? collection.description.tr : collection.description.en;

  // Filter artworks by this collection
  const collectionWorks = artworks.filter((a) => a.collectionSlug === slug);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={title}
            subtitle={description}
          />

          {collectionWorks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
              {collectionWorks.map((work) => (
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
          ) : (
            <p className="text-muted-foreground py-16 text-center border-t border-border mt-8">
              {lang === "tr" ? "Bu koleksiyonda henüz eser yok." : "No works in this collection yet."}
            </p>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/collections"
              className="text-xs font-bold uppercase tracking-[0.18em] text-foreground hover:underline"
            >
              &larr; {lang === "tr" ? "TÜM KOLEKSİYONLAR" : "ALL COLLECTIONS"}
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
