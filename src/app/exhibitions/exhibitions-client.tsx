"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import { exhibitionsList, heroExhibitionImage, type ExhibitionType } from "@/lib/exhibitions-data";

type Filter = "All Exhibitions" | "Solo Exhibitions" | "Group Exhibitions" | "Studio Presentations";

const filters: Filter[] = ["All Exhibitions", "Solo Exhibitions", "Group Exhibitions", "Studio Presentations"];

const filterMap: Record<Filter, ExhibitionType | "All"> = {
  "All Exhibitions": "All",
  "Solo Exhibitions": "Solo Exhibition",
  "Group Exhibitions": "Group Exhibition",
  "Studio Presentations": "Studio Presentation",
};

export function ExhibitionsClient() {
  const [active, setActive] = useState<Filter>("All Exhibitions");

  const visible = useMemo(() => {
    const key = filterMap[active];
    const items = key === "All" ? exhibitionsList : exhibitionsList.filter((e) => e.type === key);
    return [...items].sort((a, b) => b.year - a.year);
  }, [active]);

  return (
    <>
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <p className="eyebrow">Exhibitions</p>
              <h1 className="hero-title mt-4">Exhibitions</h1>
              <p className="mt-6 max-w-lg text-xl leading-[1.45] text-foreground md:text-[1.55rem]">
                The work enters the world through exhibitions, studio presentations and curated contexts across Belgium and South Africa.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                Each exhibition reflects a moment of inquiry, response and translation into space.
              </p>
            </div>
          </div>
          <div className="relative min-h-[26rem] lg:min-h-[42rem]">
            <img
              src={heroExhibitionImage}
              alt="Installation view of paintings by Nicky Myny"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-border/70 pb-6">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`text-[0.75rem] uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "border-b border-foreground pb-1 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {visible.map((ex) => {
              const imageEl = (
                <img
                  src={ex.image}
                  alt={ex.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              );
              const linkClass =
                "inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary";
              return (
                <article key={ex.slug} className="group flex flex-col">
                  <Link href={`/exhibitions/${ex.slug}`} className="block overflow-hidden bg-secondary/40">
                    {imageEl}
                  </Link>
                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">{ex.type}</p>
                    <h2 className="mt-2 font-display text-2xl text-foreground">{ex.title}</h2>
                    <div className="mt-3 space-y-1 text-sm leading-7 text-muted-foreground">
                      <p>{ex.venue}</p>
                      <p>{ex.location}</p>
                      <p>{ex.date}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{ex.intro}</p>
                    <div className="mt-5">
                      <Link href={`/exhibitions/${ex.slug}`} className={linkClass}>
                        View Exhibition
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-secondary/40">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-20">
          <p className="font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.6rem]">
            Exhibitions are moments of encounter — between painting, space and human presence.
          </p>
          <div className="space-y-6">
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              To inquire about available works from past exhibitions or upcoming exhibition opportunities, please get in touch with the studio.
            </p>
            <Link
              href="/inquire"
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-primary bg-primary px-8 text-[0.78rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-strong"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
