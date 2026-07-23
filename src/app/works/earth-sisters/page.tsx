import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import earthSistersImg from "@/assets/earthsisters.png.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "Earth Sisters | Nicky Myny",
  description:
    "Earth Sisters — a collection exploring feminine lineage, embodiment, and quiet inheritance through painting.",
  path: "/works/earth-sisters",
  image: earthSistersImg.url,
});

export default function EarthSistersPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="Earth Sisters"
        intro="A collection devoted to feminine presence — figures held in warm pigment, standing between portrait and atmosphere. Painting as a slow language for memory, inheritance, and relation."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={earthSistersImg.url}
          alt="Earth Sisters collection by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
    </section>
  );
}
