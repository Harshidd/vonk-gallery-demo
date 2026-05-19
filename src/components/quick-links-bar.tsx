
import { ArrowRight } from "lucide-react";

interface QuickLink {
  label: string;
  href: string;
}

interface QuickLinksBarProps {
  links: QuickLink[];
}

/**
 * Quick links bar — mirrors Tate's horizontal topic/filter bar.
 * Row of pill-style or inline links for quick navigation within a section.
 */
export function QuickLinksBar({ links }: QuickLinksBarProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-wide"
        >
          {link.label}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      ))}
    </div>
  );
}
