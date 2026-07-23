import { MinimalPageIntro } from "@/components/artist-site";
import { ArtworkArchiveEmbed } from "@/components/artwork-archive-embed";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Artwork Archive | Nicky Myny",
  description: "Explore the full archive of available, sold, and selected works by Nicky Myny.",
  path: "/artwork-archive",
});

export default function ArtworkArchivePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Artwork Archive", path: "/artwork-archive" },
        ])}
      />
      <MinimalPageIntro
        eyebrow="Archive"
        title="Artwork Archive"
        body="Explore the full archive of available, sold, and selected works."
      />

      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-8 lg:px-12 lg:py-14">
          <ArtworkArchiveEmbed
            embedId="aa_embed"
            scriptSrc="https://www.artworkarchive.com/profile/nicky-myny/embed_js.js"
          />
        </div>
      </section>
    </>
  );
}
