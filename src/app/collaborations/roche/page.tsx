import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CollaborationDetail } from "@/components/artist-site";
import { ArtworkArchiveEmbed } from "@/components/artwork-archive-embed";
import { getProjectBySlug } from "@/lib/site-utils";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Roche | Nicky Myny",
  description:
    "Roche — a corporate art commission for Roche BeLux, created through participatory art with researchers, patients, doctors, and staff, resulting in original artworks on canvas, plexi, and mural surfaces.",
  path: "/collaborations/roche",
});

export default function RocheCollaborationPage() {
  const project = getProjectBySlug("roche")!;
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Collaborations", path: "/collaborations" },
          { name: "Roche", path: "/collaborations/roche" },
        ])}
      />
      <CollaborationDetail project={project} />
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
          <p className="eyebrow">Collection inventory</p>
          <div className="mt-6">
            <ArtworkArchiveEmbed
              embedId="aa_embed_roche"
              scriptSrc="https://www.artworkarchive.com/profile/nicky-myny/collection/roche/embed_js.js"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-8 lg:px-12">
          <Link href="/collaborations" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Collaborations
          </Link>
        </div>
      </section>
    </>
  );
}
