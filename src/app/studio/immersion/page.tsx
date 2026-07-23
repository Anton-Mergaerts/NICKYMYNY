import Link from "next/link";

import { btn } from "@/lib/button";
import { pageMetadata } from "@/lib/seo";
import studioHeroMug from "@/assets/studio-hero-mug.png.asset.json";
import brushDetailImage from "@/assets/brush-detail.jpg";
import aboutStudioLandscape from "@/assets/about-studio-landscape.jpeg.asset.json";

export const metadata = pageMetadata({
  title: "Studio Immersion | Nicky Myny",
  description:
    "A guided studio immersion with Nicky Myny — time spent inside the painting process, materials, and working rhythm of the studio.",
  path: "/studio/immersion",
});

export default function StudioImmersionPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Studio</p>
            <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] text-foreground md:text-[3.5rem]">
              The Studio Immersion
            </h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A guided visit into the working rhythm of the studio — materials, process, and the
              slow attention behind each painting.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Suited to collectors, curators, and anyone curious to see how a painting develops
              beyond the finished surface.
            </p>
            <div className="mt-8">
              <Link href="/inquire" className={btn("hero", "lg")}>
                Request an Immersion
              </Link>
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={studioHeroMug.url} alt="Studio corner with a mug and painting materials" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-4 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
          <img src={brushDetailImage.src} alt="Detail of brushes and pigment" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          <img src={aboutStudioLandscape.url} alt="Studio landscape view" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-[1.9rem] leading-[1.1] md:text-[2.35rem]">
              Curious to arrange a visit?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-panel-muted">
              Share your interest and preferred dates, and the studio will follow up personally.
            </p>
          </div>
          <Link href="/inquire" className={btn("panelPrimary", "lg")}>
            Contact the Studio
          </Link>
        </div>
      </section>
    </>
  );
}
