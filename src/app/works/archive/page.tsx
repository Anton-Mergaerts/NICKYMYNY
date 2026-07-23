import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import worksArchiveImg from "@/assets/works-archive.png.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "Full Archive | Nicky Myny",
  description:
    "Browse the full archive of available and past works by Nicky Myny, or explore the complete inventory on Artwork Archive.",
  path: "/works/archive",
  image: worksArchiveImg.url,
});

export default function WorksArchivePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="Full Archive"
        intro="A running archive of available and past works. For the complete, continuously updated inventory, browse the full profile on Artwork Archive."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={worksArchiveImg.url}
          alt="Archive of works by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
    </section>
  );
}
