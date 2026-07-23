import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { exhibitionsList, heroExhibitionImage } from "@/lib/exhibitions-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Exhibitions | Nicky Myny",
  description:
    "Solo and group exhibitions, studio presentations, and site-responsive shows by contemporary painter Nicky Myny.",
  path: "/exhibitions",
});

export default function ExhibitionsPage() {
  return (
    <>
      <section className="relative border-b border-border/70">
        <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={heroExhibitionImage}
            alt="Installation view of a recent Nicky Myny exhibition"
            className="h-full w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/80">Exhibitions</p>
            <h1 className="mt-4 font-display text-[2.75rem] leading-[1.02] md:text-[4rem]">
              Selected Exhibitions
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {exhibitionsList.map((ex) => (
              <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.imageAlt}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary">{ex.type}</p>
                  <h3 className="mt-2 font-display text-xl text-foreground">{ex.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {ex.venue}, {ex.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{ex.date}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                    View exhibition
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
