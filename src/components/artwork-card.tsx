import Image from "next/image";
import Link from "next/link";

interface ArtworkCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  caption?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

/**
 * Artwork card — mirrors Tate's card components.
 * Image on top, title + metadata below. No border radius (Tate style).
 * Links directly to the specified href.
 */
export function ArtworkCard({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  caption,
  aspectRatio = "landscape",
}: ArtworkCardProps) {
  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square: "aspect-square",
  };

  return (
    <Link href={href} className="group block tate-card-hover text-left w-full">
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden mb-3`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className="text-sm md:text-base font-bold leading-tight text-foreground group-hover:underline">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs md:text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
        {caption && (
          <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.18em]">
            {caption}
          </p>
        )}
      </div>
    </Link>
  );
}
