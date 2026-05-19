"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ArtworkCard } from "@/components/artwork-card";
import { SiteFooter } from "@/components/site-footer";
import { useTranslation } from "@/hooks/use-translation";
import { studioPosts } from "@/data/studio";
import { artworks } from "@/data/artworks";

export function StudioPostClient({ slug }: { slug: string }) {
  const { lang } = useTranslation();

  const post = studioPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SiteHeader />
        <main className="flex-1 py-20 text-center">
          <p className="text-muted-foreground text-lg">
            {lang === "tr" ? "Yazı bulunamadı." : "Post not found."}
          </p>
          <Link href="/studio" className="mt-4 inline-block underline text-sm">
            {lang === "tr" ? "Atölyeye Dön" : "Back to Studio"}
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  const title = lang === "tr" ? post.title.tr : post.title.en;
  const content = lang === "tr" ? post.content.tr : post.content.en;

  // Selected works as related
  const relatedWorks = artworks.slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="tate-container">
          <article className="max-w-3xl mx-auto">
            {/* Header info */}
            <div className="mb-8">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 opacity-75">
                {post.date}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-black uppercase tracking-[0.03em] leading-none mb-4">
                {title}
              </h1>
              <div className="h-[1px] bg-border w-16" />
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-border mb-10">
              <Image
                src={post.coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Content body */}
            <div className="prose prose-neutral max-w-none text-sm md:text-base text-foreground leading-relaxed opacity-90 space-y-6 max-w-2xl mx-auto">
              <p>{content}</p>
            </div>
          </article>

          {/* Related works */}
          {relatedWorks.length > 0 && (
            <div className="border-t border-border mt-20 pt-16">
              <SectionHeading
                title={lang === "tr" ? "Stüdyodan Eserler" : "Works from the Studio"}
                subtitle={
                  lang === "tr"
                    ? "Yazıda bahsi geçen veya atölyede güncel olarak çalışılan eserler"
                    : "Artworks referenced or currently in progress at the studio"
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
                {relatedWorks.map((work) => (
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

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/studio"
              className="text-xs font-bold uppercase tracking-[0.18em] text-foreground hover:underline"
            >
              &larr; {lang === "tr" ? "TÜM YAZILAR" : "ALL POSTS"}
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
