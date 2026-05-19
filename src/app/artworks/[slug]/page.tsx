import { artworks } from "@/data/artworks";
import { ArtworkDetailClient } from "./artwork-client";
import type { Metadata } from "next";

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) return { title: "Artwork Not Found" };

  return {
    title: `${artwork.title.en} — VONK`,
    description: artwork.description.en,
  };
}

export default async function ArtworkPage(props: PageProps) {
  const params = await props.params;
  return <ArtworkDetailClient slug={params.slug} />;
}
