"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { collections } from "@/data/collections";
import { artworks } from "@/data/artworks";

export default function CollectionsPage() {
  const { lang, t } = useTranslation();

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={t.nav.collections}
            subtitle={lang === "tr" ? "Küratöryel seriler ve tematik gruplar" : "Curated series and thematic groupings"}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {collections.map((coll) => {
              const count = artworks.filter((a) => a.collectionSlug === coll.slug).length;
              return (
                <Link
                  key={coll.slug}
                  href={`/collections/${coll.slug}`}
                  className="group block border border-border overflow-hidden bg-white"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={coll.coverImage}
                      alt={lang === "tr" ? coll.title.tr : coll.title.en}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:underline uppercase tracking-[0.04em]">
                      {lang === "tr" ? coll.title.tr : coll.title.en}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                      {lang === "tr" ? coll.description.tr : coll.description.en}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-semibold">
                      <span>{count} {lang === "tr" ? "ESER" : "WORKS"}</span>
                      <span className="text-foreground group-hover:translate-x-1 transition-transform">
                        {lang === "tr" ? "İNCELE" : "VIEW"} &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
