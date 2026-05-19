"use client";

import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { artworks } from "@/data/artworks";

export default function ArtworksArchive() {
  const { lang, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtworks = useMemo(() => {
    if (!searchQuery.trim()) return artworks;
    const q = searchQuery.toLowerCase();
    return artworks.filter(
      (a) =>
        a.title.en.toLowerCase().includes(q) ||
        a.title.tr.toLowerCase().includes(q) ||
        a.artistName.toLowerCase().includes(q) ||
        a.technique.en.toLowerCase().includes(q) ||
        a.technique.tr.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={t.nav.artworks}
            subtitle={lang === "tr" ? "VONK koleksiyonundaki tüm eserler" : "All works in the VONK collection"}
          />

          {/* Search box */}
          <div className="max-w-md mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder={t.search.placeholder}
                className="w-full px-5 py-3 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wide font-medium text-muted-foreground hover:text-foreground transition-colors px-1"
                  onClick={() => setSearchQuery("")}
                >
                  {t.search.clear}
                </button>
              )}
            </div>
            {searchQuery.trim() && (
              <p className="text-xs text-muted-foreground mt-2">
                {t.search.showing} {filteredArtworks.length} {t.search.of} {artworks.length} {t.search.works}
              </p>
            )}
          </div>

          {filteredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.slug}
                  href={`/artworks/${artwork.slug}`}
                  imageSrc={artwork.image}
                  imageAlt={lang === "tr" ? artwork.title.tr : artwork.title.en}
                  title={lang === "tr" ? artwork.title.tr : artwork.title.en}
                  subtitle={`${artwork.artistName}, ${artwork.year}`}
                  caption={lang === "tr" ? artwork.technique.tr : artwork.technique.en}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground py-16 text-center border-t border-border mt-8">
              {t.search.noResults}
            </p>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
