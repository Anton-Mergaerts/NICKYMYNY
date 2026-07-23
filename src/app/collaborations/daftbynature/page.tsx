import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CollaborationDetail } from "@/components/artist-site";
import { ArtworkArchiveEmbed } from "@/components/artwork-archive-embed";
import { getProjectBySlug } from "@/lib/site-utils";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Daft by Nature | Nicky Myny",
  description:
    "Daft by Nature — a collaborative body of work by Nicky Myny and Nina Kay, created during Nina's stay at ARTKOM in Belgium.",
  path: "/collaborations/daftbynature",
});

export default function DaftByNatureCollaborationPage() {
  const project = getProjectBySlug("daftbynature")!;
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Collaborations", path: "/collaborations" },
          { name: "Daft by Nature", path: "/collaborations/daftbynature" },
        ])}
      />
      <CollaborationDetail project={project} />
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
          <p className="eyebrow">Collection inventory</p>
          <div className="mt-6">
            <ArtworkArchiveEmbed
              embedId="aa_embed_daft-by-nature"
              scriptSrc="https://www.artworkarchive.com/profile/nicky-myny/collection/daft-by-nature/embed_js.js"
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
