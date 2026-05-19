"use client";

import { useTranslation } from "@/hooks/use-translation";
import { VonkWordmark } from "./vonk-wordmark";

/**
 * VONK footer — institutional style, anchored to page sections.
 */
export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer
      id="site-footer"
      className="bg-foreground text-primary-foreground mt-auto"
    >
      <div className="tate-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 — Gallery */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 opacity-75">
              {t.footer.gallery}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  VONK Studio
                </a>
              </li>
              <li>
                <a
                  href="/artworks"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.artworks}
                </a>
              </li>
              <li>
                <a
                  href="/artists"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.artists}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 opacity-75">
              {t.footer.explore}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/collections"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a
                  href="/studio"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.studio}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 opacity-75">
              {t.footer.connect}
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-xs tracking-[0.05em] opacity-80">
                  {t.inquirySection.email}
                </span>
              </li>
              <li>
                <span className="text-xs tracking-[0.05em] opacity-80">
                  {t.inquirySection.phone}
                </span>
              </li>
              <li>
                <span className="text-xs tracking-[0.05em] opacity-50">Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 opacity-75">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-xs tracking-[0.05em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.footer.accessibility}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="tate-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">{t.footer.copyright}</p>
          <div className="opacity-40">
            <VonkWordmark className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
