import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { MinimalPageIntro } from "@/components/artist-site";
import { ArtworkArchiveEmbed } from "@/components/artwork-archive-embed";
import { btn } from "@/lib/button";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import worksArchiveImg from "@/assets/works-archive.png.asset.json";

export const metadata = pageMetadata({
  title: "Artwork Archive | Nicky Myny",
  description: "The full archive of available, sold, and selected paintings by Nicky Myny.",
  path: "/works/archive",
  image: worksArchiveImg.url,
});

export default function ArchivePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" },
          { name: "Artwork Archive", path: "/works/archive" },
        ])}
      />
      <MinimalPageIntro
        eyebrow="Archive"
        title="Artwork Archive"
        body="Explore the full archive of available, sold, and selected works."
      />

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
          <ArtworkArchiveEmbed
            embedId="aa_embed"
            scriptSrc="https://www.artworkarchive.com/profile/nicky-myny/embed_js.js"
          />
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-muted-foreground">
              A current collector catalogue with available works, dimensions, and pricing is available upon request.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/inquire" className={btn("hero")}>
                Request Collector Catalogue
              </Link>
              <Link href="/inquire" className={btn("outline")}>
                Contact the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-8 lg:px-12">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Works
          </Link>
        </div>
      </section>
    </>
  );
}
