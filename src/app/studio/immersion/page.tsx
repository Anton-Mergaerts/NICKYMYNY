import Link from "next/link";

import { btn } from "@/lib/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import {
  aboutStudioImage,
  brushDetailImage,
  collaborationLandscapeImage,
  heroImage,
  studioTableImage,
} from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Studio Immersion | Nicky Myny",
  description:
    "A small-group day inside the living practice of Nicky Myny. Ritual, movement, journaling, material exploration, painting, reflection, and conversation.",
  path: "/studio/immersion",
});

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-primary/70 ${className}`} />;
}

const unfold = [
  { n: "01", title: "Arrival", desc: "A quiet beginning to enter the studio space with attention." },
  { n: "02", title: "Movement", desc: "Simple embodied movement to arrive in the body before working with material." },
  { n: "03", title: "Journaling", desc: "Writing as a way to notice what is present before it becomes image or gesture." },
  { n: "04", title: "Material exploration", desc: "Encountering pigment, surface, texture, trace, paper, canvas, tools, and mark." },
  { n: "05", title: "Painting / mark-making", desc: "A painterly process of response, not performance." },
  { n: "06", title: "Reflection", desc: "Time to witness what has appeared without forcing meaning too quickly." },
  { n: "07", title: "Connection", desc: "Conversation and shared presence around process, material, and experience." },
];

const whatThisIsNot = [
  "Not a workshop or art class",
  "Not a coaching session",
  "Not a therapeutic format",
  "Not built around technique or productivity",
  "Not a personal development outcome",
  "A painter-led encounter inside a living artistic practice",
];

const formatDetails = [
  { label: "Frequency", value: "A few times per year" },
  { label: "Group size", value: "Small group" },
  { label: "Location", value: "Nicky Myny Studio / ARTKOM, Belgium, or selected studio locations" },
  { label: "Experience", value: "Ritual, movement, journaling, material exploration, painting, reflection, conversation" },
  { label: "Participation", value: "Limited" },
];

const faqs = [
  {
    q: "Is Studio Immersion a workshop?",
    a: "No. Studio Immersion is not a workshop, art class, coaching session, or therapeutic format. It is a painter-led encounter inside a living artistic practice.",
  },
  {
    q: "Do I need artistic experience?",
    a: "No artistic experience is required. What matters is openness, attention, and willingness to enter a process without needing to control the outcome.",
  },
  {
    q: "Will I leave with a finished painting?",
    a: "The intention is not to produce a perfect artwork or follow a fixed creative exercise. What emerges belongs to the day and to your own process.",
  },
  {
    q: "How often are Studio Immersions offered?",
    a: "Studio Immersions are offered only a few times per year, in small groups, to preserve intimacy and depth. Dates are announced through the studio list.",
  },
];

const threeWaysIn = [
  { title: "Open Studio", body: "Free public access to the paintings, works in progress, and studio atmosphere.", href: "/studio", cta: "Visit the Studio" },
  { title: "Studio Immersion", body: "A small-group day inside the artistic process — painter-led, image-led, material-led.", href: "/inquire", cta: "Inquire About Studio Immersions" },
  { title: "FRAME", body: "A commissioned artwork developed through shared relational process. Belongs under Commissions.", href: "/commissions", cta: "Explore FRAME Commissions" },
];

export default function StudioImmersionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Studio", path: "/studio" },
          { name: "Studio Immersion", path: "/studio/immersion" },
        ])}
      />
      {/* HERO --------------------------------------------------------- */}
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Offering</p>
              <h1 className="mt-4 font-display text-[3rem] leading-[1.02] text-foreground md:text-[4rem] lg:text-[4.75rem]">
                Studio Immersion
              </h1>
              <Rule className="mt-6" />
              <p className="mt-8 max-w-lg font-display text-[1.55rem] leading-[1.25] text-foreground md:text-[1.85rem]">
                A small-group day inside the living practice of Nicky Myny.
              </p>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Studio Immersions offer a deeper way to enter the studio: through ritual, movement,
                journaling, material exploration, painting, reflection, and conversation. The day
                is painter-led, but not technique-led — an encounter with the conditions from which
                the work emerges.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/inquire" className={btn("hero", "lg")}>
                  Inquire About Studio Immersions
                </Link>
                <Link href="/inquire#newsletter" className={btn("outline", "lg")}>
                  Join the Studio List
                </Link>
              </div>
            </div>
          </div>
          <img
            src={aboutStudioImage.src}
            alt="Nicky Myny in the studio surrounded by paintings and materials"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
        </div>
      </section>

      {/* WHAT IS A STUDIO IMMERSION ---------------------------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">The invitation</p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.4rem]">
                What is a<br />Studio Immersion?
              </h2>
              <Rule className="mt-5" />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  A Studio Immersion is an invitation to spend time inside the artistic field of
                  the studio.
                </p>
                <p>
                  Unlike Open Studio, where visitors come to encounter the paintings and works in
                  progress, a Studio Immersion asks for deeper participation.
                </p>
              </div>
            </div>
            <img
              src={studioTableImage.src}
              alt="Studio table with brushes and pigments"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
            <div className="border border-border/70 bg-surface/60 px-6 py-8 md:px-8 md:py-10">
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">The purpose</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  The day unfolds through a carefully held rhythm of attention, movement, writing,
                  material exploration, mark-making, painting, reflection, and shared presence.
                </p>
                <p>
                  The purpose is not to learn a method, produce a perfect artwork, or follow a
                  fixed creative exercise.
                </p>
                <p className="font-display text-base text-foreground">
                  The purpose is to enter the atmosphere from which the paintings emerge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAY UNFOLD --------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.9fr_2.1fr]">
          <img
            src={brushDetailImage.src}
            alt="Hand working with painterly materials"
            className="h-full w-full object-cover"
            loading="lazy"
            width={900}
            height={1200}
          />
          <div className="border-l border-border/70 px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">
              What may unfold during the day
            </p>
            <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {unfold.map((item) => (
                <li key={item.n}>
                  <p className="font-display text-2xl text-foreground">{item.n}</p>
                  <p className="mt-3 font-display text-[1.05rem] text-foreground">{item.title}</p>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ol>
            <p className="mt-14 max-w-2xl text-sm leading-7 text-muted-foreground">
              Each Studio Immersion is shaped by the current body of work, the atmosphere of the
              studio, and the questions alive within the practice.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT + WHO IT IS FOR ---------------------------- */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2">
          <div className="px-6 py-12 md:px-10 md:py-16 lg:border-r lg:border-border/70 lg:px-14 lg:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">What this is not</p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {whatThisIsNot.map((item) => (
                <li key={item} className="border-t border-border/70 pt-3 text-sm leading-7 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3 font-display text-lg text-foreground">
              <p>The paintings remain the source.</p>
              <p>The process is the method.</p>
              <p>The transformation is the effect.</p>
            </div>
          </div>
          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Who it is for</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
              <p>Studio Immersions are for people who feel drawn to enter the studio more slowly.</p>
              <p>
                They may speak to those navigating a threshold, seeking a deeper relationship with
                creativity, longing for material presence, or wishing to experience the painterly
                field from the inside.
              </p>
              <p>No artistic experience is required.</p>
              <p className="font-display text-lg text-foreground">
                What matters is openness, attention, and willingness to enter a process without
                needing to control the outcome.
              </p>
              <p className="pt-2 text-sm leading-7 text-muted-foreground">
                For team- or care-oriented participatory sessions, visit{" "}
                <a
                  href="https://artkom.be"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  ARTKOM →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT ------------------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[1.1fr_1fr]">
          <img
            src={collaborationLandscapeImage.src}
            alt="Landscape near the studio"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1400}
            height={1100}
          />
          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Format</p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.4rem]">
              Rarely offered.<br />Deliberately small.
            </h2>
            <Rule className="mt-5" />
            <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Studio Immersions are offered only a few times per year — small-group days, held in
                the studio, with limited participation to preserve intimacy and depth.
              </p>
              <p>
                Dates, duration, participation details, and pricing are announced through the
                studio list. You are welcome to inquire or add your name to be informed of future
                Immersions.
              </p>
            </div>
            <dl className="mt-10 divide-y divide-border/70 border-y border-border/70">
              {formatDetails.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                  <dt className="min-w-[9rem] text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {detail.label}
                  </dt>
                  <dd className="text-sm leading-7 text-foreground">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP TO OPEN STUDIO AND FRAME ----------------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Three ways in</p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.4rem]">
              Open Studio, Studio Immersion, and FRAME
            </h2>
            <Rule className="mt-5" />
            <p className="mt-7 text-base leading-8 text-muted-foreground">
              Each offers a different way of entering the practice. This distinction matters
              because the studio remains first and foremost a place of painting.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {threeWaysIn.map((item) => (
              <div key={item.title} className="flex flex-col border border-border/70 bg-surface/60 px-6 py-8 md:px-8 md:py-10">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <Rule className="mt-4" />
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.body}</p>
                <div className="mt-auto pt-8">
                  <Link href={item.href} className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground underline-offset-4 hover:underline">
                    {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <img
            src={studioTableImage.src}
            alt="Studio corner with materials"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1000}
            height={900}
          />
          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">FAQ</p>
            <Accordion className="mt-6">
              {faqs.map((item) => (
                <AccordionItem key={item.q} className="border-border/70">
                  <AccordionTrigger className="py-5 text-left font-display text-base text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CLOSING CTA -------------------------------------------------- */}
      <section className="border-t border-border/70 bg-panel text-panel-foreground">
        <div className="mx-auto grid max-w-[1600px] items-stretch gap-0 lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
          <img
            src={brushDetailImage.src}
            alt="Row of studio brushes"
            className="hidden h-full w-full object-cover lg:block"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="px-6 py-14 text-center md:px-10 md:py-20">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Stay connected</p>
            <h2 className="mt-5 font-display text-[2rem] leading-[1.1] text-panel-foreground md:text-[2.5rem]">
              Enter the studio more deeply.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-panel-muted">
              If you would like to be informed about upcoming Studio Immersions, please join the
              studio list or send a short inquiry.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/inquire#newsletter" className={btn("panelPrimary", "lg")}>
                Join the Studio List
              </Link>
              <Link href="/inquire" className={btn("panelOutline", "lg")}>
                Inquire About Studio Immersions
              </Link>
            </div>
          </div>
          <img
            src={heroImage.src}
            alt="Painted surface detail"
            className="hidden h-full w-full object-cover lg:block"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </section>
    </>
  );
}
