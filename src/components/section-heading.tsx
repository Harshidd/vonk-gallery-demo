import { type ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  children?: ReactNode;
}

/**
 * Section heading — mirrors Tate's section titles.
 * Large bold title, optional subtitle, optional "View all" link aligned right.
 */
export function SectionHeading({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View all",
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black uppercase tracking-[0.04em] leading-none text-foreground">
          {title}
        </h2>
        {viewAllHref && (
          <a
            href={viewAllHref}
            className="text-xs font-bold uppercase tracking-[0.18em] text-foreground tate-link shrink-0"
          >
            {viewAllLabel}
          </a>
        )}
      </div>
      {subtitle && (
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
