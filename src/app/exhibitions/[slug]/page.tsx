import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { exhibitionsList, getExhibitionBySlug } from "@/lib/exhibitions-data";
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
  if (!exhibition) notFound();

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    name: exhibition.title,
    description: exhibition.intro,
    startDate: exhibition.date,
    location: {
      "@type": "Place",
      name: exhibition.venue,
      address: exhibition.location,
    },
    performer: { "@id": "https://nickymyny.com/#person" },
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

      <section className="relative border-b border-border/70">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
          <img src={exhibition.image} alt={exhibition.imageAlt} className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/80">{exhibition.type}</p>
            <h1 className="mt-4 font-display text-[2.5rem] leading-[1.02] md:text-[3.75rem]">
              {exhibition.title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/85">
              {exhibition.venue}, {exhibition.location} · {exhibition.date}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:py-24">
          <p className="text-lg leading-8 text-muted-foreground">{exhibition.intro}</p>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{exhibition.about}</p>
        </div>
      </section>

      {exhibition.atmosphere.length ? (
        <section className="bg-surface">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
            <h2 className="eyebrow">Atmosphere</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {exhibition.atmosphere.map((src, i) => (
                <div key={src + i} className="overflow-hidden">
                  <img
                    src={src}
                    alt={`${exhibition.title} — atmosphere image ${i + 1}`}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {exhibition.youtubeId ? (
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:py-20">
            <h2 className="eyebrow">Film</h2>
            {exhibition.filmCaption ? (
              <p className="mt-2 text-sm text-muted-foreground">{exhibition.filmCaption}</p>
            ) : null}
            <div className="mt-6 aspect-video w-full overflow-hidden bg-black/5">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${exhibition.youtubeId}`}
                title={exhibition.filmCaption ?? exhibition.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ) : null}

      {exhibition.selectedWorks.length ? (
        <section className="bg-surface">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="eyebrow">Selected works</h2>
              {exhibition.selectedWorksLink ? (
                <Link
                  href={exhibition.selectedWorksLink.to}
                  className="text-xs uppercase tracking-[0.2em] text-primary hover:underline"
                >
                  {exhibition.selectedWorksLink.label}
                </Link>
              ) : null}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3">
              {exhibition.selectedWorks.map((w, i) => (
                <div key={w.image + i}>
                  <div className="overflow-hidden">
                    <img
                      src={w.image}
                      alt={w.title ?? `${exhibition.title} — selected work ${i + 1}`}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {w.dimensions || w.medium ? (
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {[w.dimensions, w.medium].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-[1.9rem] leading-[1.1] md:text-[2.35rem]">
              Interested in a work from this exhibition?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-panel-muted">
              Get in touch to inquire about availability, pricing, or shipping.
            </p>
          </div>
          {exhibition.primaryCta ? (
            <Link href={exhibition.primaryCta.to} className={btn("panelPrimary", "lg")}>
              {exhibition.primaryCta.label}
            </Link>
          ) : (
            <Link href="/inquire" className={btn("panelPrimary", "lg")}>
              Contact the Studio
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
