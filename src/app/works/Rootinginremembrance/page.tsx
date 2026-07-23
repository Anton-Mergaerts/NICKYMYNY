import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import rootingImg from "@/assets/rooting-in-remembrance-new.jpg.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "Rooting in Remembrance | Nicky Myny",
  description:
    "Rooting in Remembrance — a collection of paintings holding memory, lineage, and the quiet weight of what came before.",
  path: "/works/Rootinginremembrance",
  image: rootingImg.url,
});

export default function RootingInRemembrancePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="Rooting in Remembrance"
        intro="Paintings that hold memory and lineage — a slow return to what came before, translated through layered pigment and gesture."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={rootingImg.url}
          alt="Rooting in Remembrance collection by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
    </section>
  );
}
