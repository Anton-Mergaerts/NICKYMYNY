import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import whereWeStandImg from "@/assets/wherewestand.png.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "Where We Stand | Nicky Myny",
  description:
    "Where We Stand — paintings reflecting on rootedness and passage between two homelands, Belgium and South Africa.",
  path: "/works/where-we-stand",
  image: whereWeStandImg.url,
});

export default function WhereWeStandPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="Where We Stand"
        intro="A body of work reflecting on rootedness and passage — paintings that hold ground between two landscapes and two homes."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={whereWeStandImg.url}
          alt="Where We Stand collection by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
    </section>
  );
}
