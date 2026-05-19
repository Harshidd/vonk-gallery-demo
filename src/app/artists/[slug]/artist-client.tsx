"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { artists } from "@/data/artists";
import { artworks } from "@/data/artworks";
import { collections } from "@/data/collections";

export function ArtistDetailClient({ slug }: { slug: string }) {
  const { lang, t } = useTranslation();

  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <>
        <SiteHeader />
        <main className="flex-1 py-20 text-center">
          <p className="text-muted-foreground text-lg">
            {lang === "tr" ? "Sanatçı bulunamadı." : "Artist not found."}
          </p>
          <Link href="/artists" className="mt-4 inline-block underline text-sm">
            {lang === "tr" ? "Sanatçılara Dön" : "Back to Artists"}
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  const role = lang === "tr" ? artist.role.tr : artist.role.en;
  const bio = lang === "tr" ? artist.bio.tr : artist.bio.en;
  const approach = lang === "tr" ? artist.approach.tr : artist.approach.en;

  // Filter artworks by this artist. Since Studio Form I is joint, let's map search to see if artistName contains artist's name.
  const artistWorks = artworks.filter(
    (a) => a.artistSlug === slug || a.artistName.includes(artist.name)
  );

  // Find collections where this artist has works
  const artistCollsSlugs = Array.from(new Set(artistWorks.map((a) => a.collectionSlug)));
  const relatedColls = collections.filter((c) => artistCollsSlugs.includes(c.slug));

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          {/* Header section with split-like grid for artist info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Portrait / Studio view */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
                <Image
                  src={artist.coverImage}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Text details */}
            <div className="lg:col-span-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 opacity-75">
                {lang === "tr" ? "SANATÇI PROFİLİ" : "ARTIST PROFILE"}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-black uppercase tracking-[0.03em] leading-none mb-2">
                {artist.name}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-medium mb-8">
                {role}
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    {lang === "tr" ? "Biyografi" : "Biography"}
                  </h2>
                  <p className="text-sm text-foreground leading-relaxed opacity-85">
                    {bio}
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    {lang === "tr" ? "Sanatsal Yaklaşım" : "Artistic Approach"}
                  </h2>
                  <p className="text-sm text-foreground leading-relaxed opacity-85">
                    {approach}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected works */}
          {artistWorks.length > 0 && (
            <div className="border-t border-border mt-20 pt-16">
              <SectionHeading
                title={lang === "tr" ? "Seçilmiş Eserler" : "Selected Works"}
                subtitle={`${artist.name} tarafından üretilmiş eserler`}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
                {artistWorks.map((work) => (
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

          {/* Related Collections */}
          {relatedColls.length > 0 && (
            <div className="border-t border-border mt-20 pt-16">
              <SectionHeading
                title={lang === "tr" ? "İlişkili Koleksiyonlar" : "Related Collections"}
                subtitle={
                  lang === "tr"
                    ? "Sanatçının eserlerinin yer aldığı tematik seriler"
                    : "Thematic series featuring works by the artist"
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                {relatedColls.map((coll) => (
                  <Link
                    key={coll.slug}
                    href={`/collections/${coll.slug}`}
                    className="group block bg-white p-6 border border-border hover:border-foreground transition-colors"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-[0.04em] text-foreground mb-2 group-hover:underline">
                      {lang === "tr" ? coll.title.tr : coll.title.en}
                    </h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                      {lang === "tr" ? "KOLEKSİYONU GÖR" : "VIEW COLLECTION"} &rarr;
                    </p>
                  </Link>
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
