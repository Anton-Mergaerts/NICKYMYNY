import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import spaceInBetweenImg from "@/assets/thespaceinbetween.png.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "The Space in Between | Nicky Myny",
  description:
    "The Space in Between — paintings exploring threshold states, transition, and the atmosphere between two homelands.",
  path: "/works/the-space-in-between",
  image: spaceInBetweenImg.url,
});

export default function SpaceInBetweenPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="The Space in Between"
        intro="Paintings that hold the threshold — the atmosphere of transition, of moving between places, chapters, and states of belonging."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={spaceInBetweenImg.url}
          alt="The Space in Between collection by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
    </section>
  );
}
