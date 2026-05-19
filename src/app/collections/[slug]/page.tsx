import { collections } from "@/data/collections";
import { CollectionDetailClient } from "./collection-client";
import type { Metadata } from "next";

export function generateStaticParams() {
  return collections.map((coll) => ({
    slug: coll.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const coll = collections.find((c) => c.slug === params.slug);
  if (!coll) return { title: "Collection Not Found" };

  return {
    title: `${coll.title.en} — VONK`,
    description: coll.description.en,
  };
}

export default async function CollectionPage(props: PageProps) {
  const params = await props.params;
  return <CollectionDetailClient slug={params.slug} />;
}
