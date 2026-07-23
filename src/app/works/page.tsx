import Link from "next/link";

import { btn } from "@/lib/button";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import worksArchiveImage from "@/assets/works-archive.png.asset.json";
import rootingImage from "@/assets/rooting-in-remembrance-new.jpg.asset.json";
import zerocreteImage from "@/assets/zerocrete.png.asset.json";
import earthSistersImage from "@/assets/earth-sisters-button.png.asset.json";
import spaceInBetweenImage from "@/assets/thespaceinbetween.png.asset.json";
import whereWeStandImage from "@/assets/wherewestand.png.asset.json";
import heroArtworkImage from "@/assets/the-emerald-dream.jpg.asset.json";

export const metadata = pageMetadata({
  title: "Works | Nicky Myny",
  description:
    "Available works, sold works, collections, and studio archive paintings by Nicky Myny.",
  path: "/works",
});

const heroArtwork = {
  src: heroArtworkImage.url,
  alt: "Detail of 'The Emerald Dream', 2026 — mixed media on canvas by Nicky Myny",
  title: "Detail of 'The Emerald Dream', 2026",
  medium: "Mixed media on canvas, 60 × 60 cm",
};

const collections = [
  { href: "/works/Rootinginremembrance", title: "Rooting in Remembrance", image: rootingImage.url },
  { href: "/works/zerocrete", title: "Zerocrete", image: zerocreteImage.url },
  { href: "/works/earth-sisters", title: "Earth Sisters", image: earthSistersImage.url },
  { href: "/works/the-space-in-between", title: "The Space In-Between", image: spaceInBetweenImage.url },
  { href: "/works/where-we-stand", title: "Where We Stand", image: whereWeStandImage.url },
];

export default function WorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" },
        ])}
      />
      <section className="border-b border-border/70 bg-background">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 pt-16 pb-14 md:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-12 lg:pt-24 lg:pb-20">
          <div className="max-w-xl">
            <p className="eyebrow">Works</p>
            <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl">
              Painting as translation.
            </h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Original works that turn presence, memory, and transition into lasting form.
            </p>
          </div>
          <figure className="space-y-4">
            <img
              src={heroArtwork.src}
              alt={heroArtwork.alt}
              className="aspect-[4/3] w-full object-cover"
              width={1600}
              height={1200}
            />
            <figcaption className="space-y-1 text-xs leading-relaxed text-muted-foreground">
              <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-foreground">
                {heroArtwork.title}
              </span>
              <span className="block">{heroArtwork.medium}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="collections" className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Bodies of Work</p>
            <h2 className="section-title mt-3">Explore Collections</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Enter a body of work that resonates.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {collections.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col overflow-hidden border border-border/70 bg-surface"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="space-y-2 px-5 py-5">
                  <p className="eyebrow">Collection</p>
                  <p className="font-display text-2xl text-foreground">{c.title}</p>
                  <p className="pt-1 text-[0.75rem] uppercase tracking-[0.2em] text-foreground">
                    Explore →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-12 lg:py-20">
          <img
            src={worksArchiveImage.url}
            alt="Studio archive works"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            width={1400}
            height={1050}
          />
          <div>
            <p className="eyebrow">WORKS</p>
            <h2 className="section-title mt-3">Explore the Archive</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Browse available paintings, sold works, and selected pieces across collections.
            </p>
            <div className="mt-7">
              <Link href="/artwork-archive" className={btn("hero", "lg")}>
                EXPLORE ALL WORKS →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
