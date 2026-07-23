import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

import { exhibitionsList, getExhibitionBySlug, type SelectedWork } from "@/lib/exhibitions-data";
import { absoluteUrl } from "@/lib/site-utils";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import { btn } from "@/lib/button";

export function generateStaticParams() {
  return exhibitionsList.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition) return { title: "Not found" };
  return pageMetadata({
    title: `${exhibition.title} | Nicky Myny`,
    description: exhibition.intro,
    path: `/exhibitions/${slug}`,
    image: absoluteUrl(exhibition.image),
    ogTitle: `${exhibition.title} — ${exhibition.venue}`,
  });
}

export default async function ExhibitionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition) {
    return (
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-12">
        <p className="eyebrow">Exhibition not found</p>
        <h1 className="section-title mt-3">This exhibition could not be found.</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          The exhibition you are looking for may have moved. View the current index of exhibitions below.
        </p>
        <div className="mt-6">
          <Link href="/exhibitions" className={btn("hero", "lg")}>
            All Exhibitions
          </Link>
        </div>
        <ul className="mt-10 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
          {exhibitionsList.map((e) => (
            <li key={e.slug}>
              <Link href={`/exhibitions/${e.slug}`} className="hover:text-foreground">
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const atmosphere = exhibition.atmosphere.slice(0, 6);
  const primaryCta = exhibition.primaryCta ?? { label: "Contact the Studio", to: "/inquire" };

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    name: exhibition.title,
    description: exhibition.intro,
    startDate: String(exhibition.year),
    location: {
      "@type": "Place",
      name: exhibition.venue,
      address: exhibition.location,
    },
    performer: { "@id": "https://nickymyny.com/#person" },
    organizer: { "@id": "https://nickymyny.com/#person" },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Exhibitions", path: "/exhibitions" },
          { name: exhibition.title, path: `/exhibitions/${slug}` },
        ])}
      />
      <JsonLd data={eventJsonLd} />

      {/* HERO — split layout */}
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <Link
                href="/exhibitions"
                className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Exhibitions
              </Link>
              <h1 className="hero-title mt-8 uppercase">{exhibition.title}</h1>
              <div className="mt-6 space-y-1 text-[0.78rem] uppercase tracking-[0.2em] text-foreground">
                <p>{exhibition.venue}, {exhibition.location}</p>
                <p>{exhibition.date}</p>
              </div>
              <div className="mt-6 h-px w-16 bg-border" />
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">{exhibition.intro}</p>
              <div className="mt-8">
                <Link href={primaryCta.to} className={btn("outline", "lg")}>
                  {primaryCta.label}
                </Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[26rem] lg:min-h-[42rem]">
            <img
              src={exhibition.image}
              alt={exhibition.imageAlt}
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* ABOUT + ATMOSPHERE — two column */}
      <section className="border-b border-border/70 bg-secondary/30">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-[0.42fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
          <div className="max-w-md">
            <p className="text-[0.75rem] uppercase tracking-[0.24em] text-foreground">About the Exhibition</p>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>{exhibition.about}</p>
            </div>
          </div>
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.24em] text-foreground">Atmosphere</p>
            <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden bg-background">
                <img
                  src={atmosphere[0]}
                  alt={`${exhibition.title} installation view`}
                  loading="lazy"
                  width={1400}
                  height={1400}
                  className="aspect-square w-full object-cover"
                />
              </div>
              {atmosphere.slice(1, 6).map((img: string, i: number) => (
                <div key={i} className="overflow-hidden bg-background">
                  <img
                    src={img}
                    alt={`${exhibition.title} atmosphere ${i + 2}`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILM + POSTER */}
      {exhibition.youtubeId || exhibition.posterImage ? (
        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:px-12 lg:py-20">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-foreground">Exhibition Film</p>
              <div className="relative mt-6 aspect-video w-full overflow-hidden bg-secondary">
                {exhibition.youtubeId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${exhibition.youtubeId}`}
                    title={`${exhibition.title} exhibition film`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={exhibition.image}
                      alt=""
                      className="h-full w-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-between p-6 md:p-8">
                      <p className="max-w-xs text-[0.85rem] uppercase leading-relaxed tracking-[0.2em] text-background drop-shadow">
                        {exhibition.filmCaption ?? exhibition.title}
                      </p>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90">
                        <Play className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {exhibition.posterImage ? (
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.24em] text-foreground">Exhibition Poster</p>
                <div className="mt-6 overflow-hidden bg-secondary">
                  <img
                    src={exhibition.posterImage}
                    alt={exhibition.posterCaption ?? `${exhibition.title} poster`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                    width={900}
                    height={1200}
                  />
                </div>
                {exhibition.posterCaption ? (
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{exhibition.posterCaption}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* SELECTED WORKS */}
      {exhibition.selectedWorks.length > 0 ? (
        <section className="border-b border-border/70">
          <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-18">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-foreground">Selected Works</p>
              {exhibition.selectedWorksLink ? (
                <Link
                  href={exhibition.selectedWorksLink.to}
                  className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-foreground hover:text-primary"
                >
                  View the Full Collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
              {exhibition.selectedWorks.map((work: SelectedWork, i: number) => (
                <div key={i}>
                  <div className="overflow-hidden bg-secondary">
                    <img
                      src={work.image}
                      alt={work.title ?? `Work ${i + 1} from ${exhibition.title}`}
                      loading="lazy"
                      width={600}
                      height={720}
                      className="aspect-[5/6] w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 space-y-1 text-xs leading-6 text-muted-foreground">
                    {work.title ? <p className="text-foreground">{work.title}</p> : null}
                    {work.dimensions ? <p>{work.dimensions}</p> : null}
                    {work.medium ? <p>{work.medium}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FINAL CTA */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-14 md:px-8 lg:grid-cols-[0.9fr_1fr_auto] lg:items-center lg:px-12 lg:py-16">
          <p className="font-display text-[1.9rem] leading-[1.05] text-foreground md:text-[2.4rem]">
            Inquire About
            <br />
            Available Works
          </p>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground">
            For availability, prices, or more information about the works shown in this exhibition, please get in touch.
          </p>
          <Link href="/inquire" className={btn("hero", "lg")}>
            Contact the Studio
          </Link>
        </div>
      </section>
    </>
  );
}
