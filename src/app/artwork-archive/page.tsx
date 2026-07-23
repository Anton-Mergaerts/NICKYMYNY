import { ArtworkArchiveEmbed } from "@/components/artwork-archive-embed";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Artwork Archive | Nicky Myny",
  description: "Browse the full, continuously updated inventory of available works by Nicky Myny on Artwork Archive.",
  path: "/artwork-archive",
});

const PROFILE_URL = "https://www.artworkarchive.com/profile/nicky-myny";

export default function ArtworkArchivePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-3 font-display text-[2.25rem] leading-[1.05] text-foreground md:text-[2.75rem]">
        Artwork Archive
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
        Browse the complete, continuously updated inventory of available paintings, prices, and
        dimensions.
      </p>
      {/* ponytail: real Artwork Archive embed script src needs to be pasted in from the
          account's Website Integration settings — placeholder below degrades to the
          noscript/external-link fallback if the src is wrong or missing. */}
      <div className="mt-10">
        <ArtworkArchiveEmbed embedId="aa-full-inventory" scriptSrc={`${PROFILE_URL}/embed.js`} minHeight={800} />
      </div>
      <p className="mt-8 text-sm leading-7 text-muted-foreground">
        If the collection does not load,{" "}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          view it directly on Artwork Archive →
        </a>
      </p>
    </section>
  );
}
