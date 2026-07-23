import Link from "next/link";
import { CollectionIntro, CollectionFallback } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import { btn } from "@/lib/button";
import zerocreteImg from "@/assets/zerocrete.png.asset.json";

const externalUrl = "https://www.artworkarchive.com/profile/nicky-myny";

export const metadata = pageMetadata({
  title: "Zerocrete | Nicky Myny",
  description:
    "Zerocrete — a material collaboration with Johan Coetsee, where painting entered dialogue with Zerocrete as surface, texture, and structure.",
  path: "/works/zerocrete",
  image: zerocreteImg.url,
});

export default function ZerocretePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <CollectionIntro
        title="Zerocrete"
        intro="A material-based collaboration with Johan Coetsee, where painting entered dialogue with Zerocrete as surface, texture, and structure."
        externalUrl={externalUrl}
      />
      <div className="overflow-hidden">
        <img
          src={zerocreteImg.url}
          alt="Zerocrete collection by Nicky Myny"
          className="w-full object-cover"
          loading="eager"
        />
      </div>
      <CollectionFallback url={externalUrl} />
      <div className="mt-10">
        <Link href="/collaborations/zerocrete" className={btn("outline")}>
          View the full collaboration story
        </Link>
      </div>
    </section>
  );
}
