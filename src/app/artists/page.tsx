"use client";

import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  const { lang, t } = useTranslation();

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={t.nav.artists}
            subtitle={lang === "tr" ? "VONK'un arkasındaki sanatçılar" : "The artists behind VONK"}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
            {artists.map((artist) => (
              <div key={artist.slug} className="border border-border p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <ArtworkCard
                    href={`/artists/${artist.slug}`}
                    imageSrc={artist.coverImage}
                    imageAlt={artist.name}
                    title={artist.name}
                    subtitle={lang === "tr" ? artist.role.tr : artist.role.en}
                    aspectRatio="landscape"
                  />
                  <p className="text-xs md:text-sm text-muted-foreground mt-6 leading-relaxed">
                    {lang === "tr" ? artist.bio.tr : artist.bio.en}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={`/artists/${artist.slug}`}
                    className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground hover:underline"
                  >
                    {lang === "tr" ? "SANATÇI PROFİLİ" : "VIEW PROFILE"} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
