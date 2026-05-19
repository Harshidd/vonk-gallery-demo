"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SplitHero } from "@/components/split-hero";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { PromoCard } from "@/components/promo-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { artworks } from "@/data/artworks";
import { artists } from "@/data/artists";
import { collections } from "@/data/collections";
import { studioPosts } from "@/data/studio";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function Home() {
  const { lang, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // Only show first 3 artworks as preview
  const featuredArtworks = useMemo(() => {
    const activeArtworks = artworks.slice(0, 3);
    if (!searchQuery.trim()) return activeArtworks;
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

      <main id="content">
        {/* ═══ HERO ═══ */}
        <SplitHero />

        {/* ═══ FEATURED WORKS ═══ */}
        <section
          id="featured-works"
          className="tate-container"
          style={{
            paddingTop: "var(--section-gap)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <SectionHeading
            title={t.sections.featuredWorks}
            subtitle={t.sections.featuredWorksSub}
            viewAllHref="/artworks"
            viewAllLabel={t.sections.viewAll}
          />

          {/* Search inline */}
          <div className="max-w-sm mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder={t.search.placeholder}
                className="w-full px-4 py-2.5 text-sm border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                id="collection-search"
                aria-label={t.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wide font-medium text-muted-foreground hover:text-foreground transition-colors px-1"
                  onClick={() => setSearchQuery("")}
                  aria-label={t.search.clear}
                >
                  {t.search.clear}
                </button>
              )}
            </div>
          </div>

          {featuredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredArtworks.map((artwork) => (
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
            <p className="text-muted-foreground py-12 text-center">
              {t.search.noResults}
            </p>
          )}
        </section>

        {/* ═══ ARTISTS ═══ */}
        <section
          id="artists-section"
          className="bg-secondary"
          style={{
            paddingTop: "var(--section-gap)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <div className="tate-container">
            <SectionHeading
              title={t.sections.artists}
              subtitle={t.sections.artistsSub}
              viewAllHref="/artists"
              viewAllLabel={t.sections.viewAll}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {artists.map((artist) => (
                <div key={artist.slug} className="group">
                  <ArtworkCard
                    href={`/artists/${artist.slug}`}
                    imageSrc={artist.coverImage}
                    imageAlt={artist.name}
                    title={artist.name}
                    subtitle={lang === "tr" ? artist.role.tr : artist.role.en}
                    aspectRatio="landscape"
                  />
                  <p className="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                    {lang === "tr" ? artist.bio.tr : artist.bio.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COLLECTIONS ═══ */}
        <section
          id="collections-section"
          className="tate-container"
          style={{
            paddingTop: "var(--section-gap)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <SectionHeading
            title={t.sections.collections}
            subtitle={t.sections.collectionsSub}
            viewAllHref="/collections"
            viewAllLabel={t.sections.viewAll}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collections.map((coll) => (
              <Link
                key={coll.slug}
                href={`/collections/${coll.slug}`}
                className="group block bg-white p-6 md:p-8 border border-border hover:border-foreground transition-colors"
              >
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:underline uppercase tracking-[0.04em]">
                  {lang === "tr" ? coll.title.tr : coll.title.en}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {lang === "tr" ? coll.description.tr : coll.description.en}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                  {artworks.filter((a) => a.collectionSlug === coll.slug).length} {lang === "tr" ? "ESER" : "WORKS"}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══ STUDIO NOTES ═══ */}
        <section id="studio-notes">
          <div className="tate-container" style={{ paddingTop: "var(--section-gap)" }}>
            <SectionHeading
              title={t.sections.studioNotes}
              subtitle={t.sections.studioNotesSub}
              viewAllHref="/studio"
              viewAllLabel={t.sections.viewAll}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {studioPosts.map((post) => (
              <PromoCard
                key={post.slug}
                href={`/studio/${post.slug}`}
                imageSrc={post.coverImage}
                imageAlt={lang === "tr" ? post.title.tr : post.title.en}
                label={lang === "tr" ? "Yazı" : "Post"}
                title={lang === "tr" ? post.title.tr : post.title.en}
                description={lang === "tr" ? post.excerpt.tr : post.excerpt.en}
              />
            ))}
          </div>
        </section>

        {/* ═══ INQUIRY ═══ */}
        <section
          id="inquiry-section"
          style={{
            paddingTop: "var(--section-gap)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <div className="tate-container">
            <SectionHeading
              title={t.sections.inquiry}
              subtitle={t.sections.inquirySub}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="p-6 md:p-8 border border-border">
                <div className="mb-4 text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.artworkInquiry}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.artworkInquiryDesc}
                </p>
              </div>
              <div className="p-6 md:p-8 border border-border">
                <div className="mb-4 text-foreground">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.commissionRequest}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.commissionRequestDesc}
                </p>
              </div>
              <div className="p-6 md:p-8 border border-border">
                <div className="mb-4 text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2 uppercase tracking-[0.04em]">
                  {t.inquirySection.studioContact}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.inquirySection.studioContactDesc}
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-border pt-8 flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">
                  Email
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {t.inquirySection.email}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">
                  {t.inquirySection.studioContact}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {t.inquirySection.phone}
                </p>
              </div>
              <div className="md:ml-auto">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  {t.inquirySection.contactStudio}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
