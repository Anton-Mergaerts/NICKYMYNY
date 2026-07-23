import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { pageMetadata } from "@/lib/seo";
import worksTop1 from "@/assets/works-top-1.png.asset.json";
import worksTop2 from "@/assets/works-top-2.png.asset.json";
import worksTop3 from "@/assets/works-top-3.png.asset.json";
import zerocreteImg from "@/assets/zerocrete.png.asset.json";
import earthSistersImg from "@/assets/earthsisters.png.asset.json";
import spaceInBetweenImg from "@/assets/thespaceinbetween.png.asset.json";
import whereWeStandImg from "@/assets/wherewestand.png.asset.json";
import rootingImg from "@/assets/rooting-in-remembrance-new.jpg.asset.json";
import worksArchiveImg from "@/assets/works-archive.png.asset.json";

export const metadata = pageMetadata({
  title: "Works | Nicky Myny",
  description:
    "Original paintings by Nicky Myny — collections including Earth Sisters, The Space in Between, Where We Stand, Zerocrete, Rooting in Remembrance, and the full archive.",
  path: "/works",
});

const collections = [
  { slug: "earth-sisters", title: "Earth Sisters", image: earthSistersImg.url },
  { slug: "the-space-in-between", title: "The Space in Between", image: spaceInBetweenImg.url },
  { slug: "where-we-stand", title: "Where We Stand", image: whereWeStandImg.url },
  { slug: "zerocrete", title: "Zerocrete", image: zerocreteImg.url },
  { slug: "Rootinginremembrance", title: "Rooting in Remembrance", image: rootingImg.url },
  { slug: "archive", title: "Full Archive", image: worksArchiveImg.url },
];

export default function WorksPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">Works</p>
          <h1 className="mt-4 font-display text-[3rem] leading-[1.02] text-foreground md:text-[4.25rem]">
            Original Paintings
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A body of work spanning abstraction, portraiture, and material collaboration —
            organised into collections shaped by process, place, and inquiry.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[worksTop1, worksTop2, worksTop3].map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img src={img.url} alt="Nicky Myny painting" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <Link key={c.slug} href={`/works/${c.slug}`} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h2 className="font-display text-xl text-foreground">{c.title}</h2>
                  <ArrowRight className="h-4 w-4 text-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-sm leading-7 text-muted-foreground">
            Prefer to browse the full inventory?{" "}
            <a
              href="https://www.artworkarchive.com/profile/nicky-myny"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-primary"
            >
              View the complete collection on Artwork Archive →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
