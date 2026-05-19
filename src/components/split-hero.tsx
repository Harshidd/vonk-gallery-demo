"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

/**
 * Split Hero — VONK adaptation of the Tate structure.
 * Left: large featured artwork. Right: dark panel with VONK copy and two CTAs.
 */
export function SplitHero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Large featured artwork */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px] overflow-hidden">
          <Image
            src="/images/hero-1.png"
            alt="Featured artwork - abstract composition"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
          />
        </div>

        {/* Right — Editorial panel */}
        <div className="relative bg-foreground text-primary-foreground flex flex-col justify-end p-6 md:p-10 lg:p-12 min-h-[320px] lg:min-h-[540px]">
          {/* Background artwork (faded) */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hero-2.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              aria-hidden="true"
            />
          </div>

          {/* Text content */}
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-75">
              {t.hero.label}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-black tracking-[0.05em] uppercase leading-[1.1] mb-5">
              {t.hero.title}
            </h1>
            <p className="text-sm md:text-base opacity-75 mb-10 max-w-md leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/artworks"
                className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] bg-white text-foreground hover:bg-white/90 transition-colors"
              >
                {t.hero.cta1}
              </a>
              <a
                href="/contact"
                className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] border border-white/60 text-white hover:bg-white/10 transition-colors"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
