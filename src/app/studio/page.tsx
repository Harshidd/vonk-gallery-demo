"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { studioPosts } from "@/data/studio";

export default function StudioArchive() {
  const { lang, t } = useTranslation();

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <SectionHeading
            title={t.nav.studio}
            subtitle={lang === "tr" ? "Atölyeden düşünceler, makaleler ve günlük notları" : "Thoughts, essays, and daily notes from the studio"}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {studioPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/studio/${post.slug}`}
                className="group block border border-border bg-white overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={lang === "tr" ? post.title.tr : post.title.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 opacity-75">
                    {post.date}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-foreground mt-1 group-hover:underline uppercase tracking-[0.04em]">
                    {lang === "tr" ? post.title.tr : post.title.en}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                    {lang === "tr" ? post.excerpt.tr : post.excerpt.en}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-foreground group-hover:translate-x-1 transition-transform">
                      {lang === "tr" ? "OKU" : "READ MORE"} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
