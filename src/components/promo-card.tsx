import Image from "next/image";

interface PromoCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  description?: string;
}

/**
 * Full-width promo card — mirrors Tate's "Stories" / CTA cards.
 * Image background with text overlay, used for call-to-action sections.
 */
export function PromoCard({
  href,
  imageSrc,
  imageAlt,
  label,
  title,
  description,
}: PromoCardProps) {
  return (
    <a
      href={href}
      className="group block relative overflow-hidden aspect-[16/9] md:aspect-[21/9]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 text-white">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-3 opacity-80">
          {label}
        </span>
        <h3 className="text-xl md:text-3xl lg:text-[32px] font-black uppercase tracking-[0.04em] leading-tight mb-2 group-hover:underline">
          {title}
        </h3>
        {description && (
          <p className="text-xs md:text-sm opacity-75 max-w-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
