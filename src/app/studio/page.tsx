import Link from "next/link";

import { btn } from "@/lib/button";
import { openStudioDates } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import studioStoolPaintings from "@/assets/studio-stool-paintings.jpg.asset.json";
import studioHeroHeader from "@/assets/studio-hero-header.png.asset.json";
import studioSaLandscape from "@/assets/studio-sa-landscape.png.asset.json";
import studioGreenCanvas from "@/assets/studio-green-canvas.jpeg.asset.json";

export const metadata = pageMetadata({
  title: "Studio | Nicky Myny",
  description:
    "A living painting practice. Open Studio, private visits, and Studio Immersions within Nicky Myny's active contemporary studio.",
  path: "/studio",
});

const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04",
  may: "05", june: "06", july: "07", august: "08",
  september: "09", october: "10", november: "11", december: "12",
};

function parseOpenStudioDate(input: string): string | null {
  const match = input.match(/(\d{1,2})\s+([A-Za-z]+)/);
  if (!match) return null;
  const day = match[1].padStart(2, "0");
  const month = MONTHS[match[2].toLowerCase()];
  if (!month) return null;
  const year = new Date().getFullYear();
  return `${year}-${month}-${day}`;
}

const openStudioEventsJsonLd = openStudioDates
  .map((d) => {
    const iso = parseOpenStudioDate(d.date);
    if (!iso) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Open Studio — Nicky Myny",
      startDate: iso,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      isAccessibleForFree: true,
      location: {
        "@type": "Place",
        name: "Studio Aarschot",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aarschot",
          addressCountry: "BE",
        },
      },
      organizer: { "@id": "https://nickymyny.com/#person" },
      description: `Open Studio at Nicky Myny's studio, ${d.hours}. ${d.note}.`,
    };
  })
  .filter(Boolean);

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-primary/70 ${className}`} />;
}

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Studio", path: "/studio" },
        ])}
      />
      {openStudioEventsJsonLd.map((event, i) => (
        <JsonLd key={i} data={event} />
      ))}

      {/* HERO — split panel + image ------------------------------------- */}
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <h1 className="font-display text-[3rem] leading-[1.02] text-foreground md:text-[4rem] lg:text-[4.75rem]">
                The Studio
              </h1>
              <Rule className="mt-5" />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  A living painting practice between works in progress, finished paintings, material
                  research, conversation, and encounter.
                </p>
                <p>
                  At selected moments, Nicky Myny opens the studio to visitors who wish to encounter
                  the paintings, the atmosphere of the space, and the process through which new bodies
                  of work take form.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/inquire" className={btn("hero", "lg")}>
                  View Open Studio Dates
                </Link>
              </div>
            </div>
          </div>
          <img
            src={studioHeroHeader.url}
            alt="Nicky Myny painting on a large canvas in the studio"
            className="h-full w-full object-cover"
            width={1600}
            height={1100}
          />
        </div>
      </section>

      {/* OPEN STUDIO DATES ------------------------------------------------ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-[2.25rem] leading-[1.05] text-foreground md:text-[2.75rem]">
              Open Studio Dates
            </h2>
            <Rule className="mt-5" />
            <p className="mt-7 text-base leading-8 text-muted-foreground">
              Visitors are invited into the studio to encounter works in progress, new paintings, materials, and the atmosphere of an active painting practice.
            </p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {openStudioDates.map((d) => (
              <div key={d.date} className="border-t border-border/70 pt-5">
                <p className="font-display text-xl text-foreground">{d.date}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{d.hours}</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-primary">{d.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/inquire" className={btn("outline")}>
              RSVP via the Studio →
            </Link>
          </div>
        </div>
      </section>

      {/* COMMISSIONED WORKS — text + image ------------------------------ */}
      <section className="bg-surface/60">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[1fr_1.1fr]">
          <div className="px-5 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <h2 className="font-display text-[2rem] leading-[1.08] text-foreground md:text-[2.4rem]">
              Commissioned works<br />through shared process
            </h2>
            <Rule className="mt-5" />
            <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Some commissioned works, including <em>FRAME</em>, may unfold through shared process
                inside the studio. These are not Studio Immersions, but commissioned paintings developed
                through relational artistic process.
              </p>
              <p>
                <em>FRAME</em> is created for families, groups, or shared thresholds and results in a
                final painting by Nicky Myny.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/commissions" className={btn("outline", "lg")}>
                Explore FRAME Commissions
              </Link>
            </div>
          </div>
          <img
            src={studioStoolPaintings.url}
            alt="Nicky Myny seated on a stool in the studio surrounded by paintings"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1500}
            height={900}
          />
        </div>
      </section>

      {/* BELGIUM & SA + NEWSLETTER + still image ------------------------- */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-4">
          <img
            src={studioSaLandscape.url}
            alt="Nicky Myny painting outdoors by a South African mountain lake, unstretched canvases laid on the shore"
            className="h-full w-full object-cover"
            loading="lazy"
            width={800}
            height={900}
          />
          <div className="px-5 py-12 md:px-8 md:py-14 lg:py-16">
            <h3 className="font-display text-2xl leading-[1.1] text-foreground md:text-[1.6rem]">
              Between Belgium<br />and South Africa
            </h3>
            <Rule className="mt-4" />
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                The studio moves seasonally between Aarschot, Belgium and the Cape Winelands, South Africa.
              </p>
              <p>
                <Link href="/about" className="underline underline-offset-4 hover:text-primary">Read more →</Link>
              </p>
            </div>
          </div>
          <div id="newsletter" className="border-l border-border/70 px-5 py-12 md:px-8 md:py-14 lg:py-16">
            <h3 className="font-display text-2xl leading-[1.1] text-foreground md:text-[1.6rem]">
              Stay close to the studio
            </h3>
            <Rule className="mt-4" />
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Receive occasional updates on new paintings, Open Studio dates, available works,
              commissions, studio presentations, and upcoming exhibitions.
            </p>
            <form className="mt-6 space-y-3">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Your email address"
                className="h-11 w-full rounded-none border border-input bg-transparent px-3 text-sm text-foreground shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <button type="submit" className={`${btn("hero")} h-11 w-full`}>
                Join the Studio List
              </button>
            </form>
          </div>
          <img
            src={studioGreenCanvas.url}
            alt="Nicky Myny lifting a large green painting in her Belgian studio, arms raised"
            className="h-full w-full border-l border-border/70 object-cover object-center"
            loading="lazy"
            width={800}
            height={900}
          />
        </div>
      </section>

      {/* BEHIND THE SCENES / INSTAGRAM ---------------------------------- */}
      <section className="border-t border-border/70 bg-background">
        <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Behind the Scenes</p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
              Behind the Scenes
            </h2>
            <Rule className="mt-5" />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Follow the studio process, works in progress, Open Studio moments and behind-the-scenes fragments on Instagram.
            </p>
          </div>
          <div>
            <a href="https://www.instagram.com/nickymyny" target="_blank" rel="noreferrer" className={btn("outline", "lg")}>
              Follow @nickymyny
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT CTA ---------------------------------------------- */}
      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-16">
          <div>
            <h2 className="font-display text-[2.25rem] leading-none md:text-[2.75rem]">
              Let&rsquo;s connect
            </h2>
            <Rule className="mt-5" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-panel-muted">
              To visit during an Open Studio moment, join a Studio Immersion, inquire about a work, or begin
              a commission conversation, please contact the studio.
            </p>
          </div>
          <div>
            <Link href="/inquire" className={btn("panelPrimary", "lg")}>
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
