import { studioPosts } from "@/data/studio";
import { StudioPostClient } from "./post-client";
import type { Metadata } from "next";

export function generateStaticParams() {
  return studioPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const post = studioPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title.en} — VONK`,
    description: post.excerpt.en,
  };
}

export default async function StudioPostPage(props: PageProps) {
  const params = await props.params;
  return <StudioPostClient slug={params.slug} />;
}
