import Link from "next/link";

import { btn } from "@/lib/button";
import { openStudioDates } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import studioHeroHeader from "@/assets/studio-hero-header.png.asset.json";
import studioPaletteTable from "@/assets/studio-palette-table.jpg.asset.json";
import studioSwingChair from "@/assets/studio-swing-chair.jpg.asset.json";
import studioStoolPaintings from "@/assets/studio-stool-paintings.jpg.asset.json";
import studioSaLandscape from "@/assets/studio-sa-landscape.png.asset.json";
import studioGreenCanvas from "@/assets/studio-green-canvas.jpeg.asset.json";

export const metadata = pageMetadata({
  title: "Studio | Nicky Myny",
  description:
    "Inside Nicky Myny's studio practice, working between Aarschot, Belgium and the Cape Winelands, South Africa.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <section className="relative border-b border-border/70">
        <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
          <img src={studioHeroHeader.url} alt="Nicky Myny's studio" className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/80">Studio</p>
            <h1 className="mt-4 font-display text-[2.75rem] leading-[1.02] md:text-[4rem]">
              Two Studios, One Practice
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Studio Aarschot</p>
              <h2 className="section-title mt-3">Belgium</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                A working studio in Aarschot, where paintings develop through layered process,
                material response, and long, unhurried attention.
              </p>
              <div className="mt-6 overflow-hidden">
                <img src={studioPaletteTable.url} alt="Palette and brushes in the Aarschot studio" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="eyebrow">Studio Cape Winelands</p>
              <h2 className="section-title mt-3">South Africa</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                A second studio in the Cape Winelands, where landscape and light shape a different
                register of the same painterly language.
              </p>
              <div className="mt-6 overflow-hidden">
                <img src={studioSaLandscape.url} alt="Studio landscape in the Cape Winelands, South Africa" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">Process</p>
          <h2 className="section-title mt-3">A slow, layered practice</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            <img src={studioSwingChair.url} alt="Studio corner with swing chair" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <img src={studioStoolPaintings.url} alt="Paintings resting against a stool in the studio" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <img src={studioGreenCanvas.url} alt="Large green canvas in progress" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="mt-10">
            <Link href="/studio/immersion" className={btn("outline")}>
              The Studio Immersion
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">Visit</p>
          <h2 className="section-title mt-3">Open Studio Days</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Visitors are invited into the studio to encounter new paintings, works in progress,
            materials, and the atmosphere of an active painting practice.
          </p>
          <div className="mt-10 grid gap-x-8 gap-y-6 border-t border-border/70 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {openStudioDates.map((d) => (
              <div key={d.date}>
                <p className="font-display text-lg text-foreground">{d.date}</p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{d.hours}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary">{d.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/inquire" className={btn("hero")}>
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
