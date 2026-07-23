import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { collaborationProjects } from "@/lib/site-data";
import { getProjectBySlug, absoluteUrl } from "@/lib/site-utils";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import { CollaborationDetail } from "@/components/artist-site";

// zerocrete, daftbynature, swartland, and roche have dedicated static pages
// (richer content + a collection-specific Artwork Archive embed), so this
// dynamic route only needs to serve the remaining slugs.
const STATIC_SLUGS = new Set(["zerocrete", "daftbynature", "swartland", "roche"]);

export function generateStaticParams() {
  return collaborationProjects.filter((p) => !STATIC_SLUGS.has(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  return pageMetadata({
    title: `${project.title} | Nicky Myny`,
    description: project.description,
    path: `/collaborations/${slug}`,
    image: absoluteUrl(project.image),
    ogTitle: `${project.title} — ${project.partner}`,
  });
}

export default async function CollaborationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Collaborations", path: "/collaborations" },
          { name: project.title, path: `/collaborations/${slug}` },
        ])}
      />
      <CollaborationDetail project={project} />
    </>
  );
}
