import { artists } from "@/data/artists";
import { ArtistDetailClient } from "./artist-client";
import type { Metadata } from "next";

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const artist = artists.find((a) => a.slug === params.slug);
  if (!artist) return { title: "Artist Not Found" };

  return {
    title: `${artist.name} — VONK`,
    description: artist.bio.en,
  };
}

export default async function ArtistPage(props: PageProps) {
  const params = await props.params;
  return <ArtistDetailClient slug={params.slug} />;
}
