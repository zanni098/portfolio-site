import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getShippedSlugs, getShippedWork } from "@/data/shipped";
import { WorkDetailView } from "@/views/work-detail";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getShippedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getShippedWork(slug);

  if (!work) {
    return {};
  }

  const url = `/work/${work.slug}`;
  const poster = `https://i.ytimg.com/vi/${work.videoId}/maxresdefault.jpg`;

  return {
    title: work.title,
    description: work.logline,
    alternates: { canonical: url },
    openGraph: {
      title: work.title,
      description: work.logline,
      type: "article",
      url,
      images: [poster],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.logline,
      images: [poster],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getShippedWork(slug);

  if (!work) {
    notFound();
  }

  return <WorkDetailView work={work} />;
}
