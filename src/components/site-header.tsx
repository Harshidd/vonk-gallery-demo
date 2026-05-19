"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { VonkWordmark } from "./vonk-wordmark";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, t, toggleLang } = useTranslation();

  const navItems = [
    { label: t.nav.artworks, href: "/artworks" },
    { label: t.nav.artists, href: "/artists" },
    { label: t.nav.collections, href: "/collections" },
    { label: t.nav.studio, href: "/studio" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 bg-white border-b border-border"
      style={{ height: "var(--header-height)" }}
    >
      <div className="tate-container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Hamburger – mobile only */}
          <button
            id="nav-toggle"
            className="lg:hidden p-2 -ml-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            id="site-logo"
            className="text-foreground hover:opacity-85 transition-opacity flex items-center shrink-0"
          >
            <VonkWordmark className="h-5 md:h-[22px] w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav
            id="main-nav"
            className="hidden lg:flex items-center gap-0 h-full"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-0 h-full">
              {navItems.map((item) => (
                <li key={item.href} className="h-full flex items-center">
                  <Link
                    href={item.href}
                    className="block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language switcher */}
            <button
              id="lang-toggle"
              className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-foreground cursor-pointer"
              onClick={toggleLang}
              aria-label={`Switch to ${lang === "en" ? "Turkish" : "English"}`}
            >
              {lang === "en" ? "TR" : "EN"}
            </button>

            {/* Inquire CTA */}
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t.nav.inquire}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-40">
          <nav className="tate-container py-4" aria-label="Mobile navigation">
            <ul className="space-y-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.inquire}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
