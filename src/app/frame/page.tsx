import Link from "next/link";
import {
  Check,
  Frame as FrameIcon,
  Hand,
  Heart,
  MessageCircle,
  Palette,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import frameHero from "@/assets/frame-hero.png.asset.json";
import frameProcess1 from "@/assets/frame-process-1.jpg.asset.json";
import frameProcess2 from "@/assets/frame-process-2.jpg.asset.json";
import frameProcess3 from "@/assets/frame-process-3.jpg.asset.json";
import frameWork1 from "@/assets/frame-work-1.png.asset.json";
import frameWork2 from "@/assets/frame-work-2.png.asset.json";
import frameWork3 from "@/assets/frame-work-3.png.asset.json";

const faqs = [
  {
    q: "Is FRAME a workshop?",
    a: "No. FRAME is a commissioned painting. Your family participates in a painter-led process, and I author the finished work of art.",
  },
  {
    q: "Do we need painting experience?",
    a: "No prior experience is needed. The process is guided through colour, gesture, and material — not technique or skill.",
  },
  {
    q: "How long does a FRAME commission take?",
    a: "From first conversation to finished work, most commissions unfold over two to four months, depending on scale and process depth.",
  },
  {
    q: "Where does the family session take place?",
    a: "Most sessions take place in the studio. On-site sessions can be arranged for specific commissions.",
  },
  {
    q: "Who owns the finished painting?",
    a: "The finished, original painting belongs to your family. It is signed, documented, and prepared for delivery or installation.",
  },
];

export const metadata = pageMetadata({
  title: "FRAME | Nicky Myny",
  description:
    "FRAME is a family commission shaped through shared presence, painterly process, and a finished artwork by Nicky Myny.",
  path: "/frame",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The FRAME Experience",
  provider: { "@id": "https://nickymyny.com/#person" },
  url: "https://nickymyny.com/frame",
  description:
    "A family commission shaped through shared presence, painterly process, and a finished artwork.",
  areaServed: ["BE", "ZA", "EU"],
  priceSpecification: {
    "@type": "PriceSpecification",
    price: 2800,
    priceCurrency: "EUR",
    description: "from 2800 EUR",
  },
};

function Rule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-[2px] w-16 bg-[color:var(--frame-accent)] ${className}`}
    />
  );
}

const pillars = [
  {
    icon: Heart,
    title: "Not a traditional portrait.",
    body: "A translation of relationship, connection, and belonging.",
  },
  {
    icon: Users,
    title: "Your family participates",
    body: "in a shared, creative, meaningful moment.",
  },
  {
    icon: Palette,
    title: "I translate what emerges",
    body: "into a finished, original painting.",
  },
  {
    icon: Sparkles,
    title: "A lasting artwork",
    body: "that carries your family's story in visual form.",
  },
];

const bringItems = [
  {
    icon: Palette,
    title: "Mark-making",
    body: "Everyone contributes through colour, line, shape, and texture.",
  },
  {
    icon: Hand,
    title: "Movement & gesture",
    body: "The body leaves traces through rhythm, stillness, play, or sound.",
  },
  {
    icon: Sparkles,
    title: "Symbols & objects",
    body: "Meaningful items, words, colours, or fragments may enter the process.",
  },
  {
    icon: Users,
    title: "Shared presence",
    body: "A moment together becomes part of the painting.",
  },
];

const examples = [
  { src: frameWork1.url, alt: "FRAME commission — relational family portrait by Nicky Myny" },
  { src: frameWork2.url, alt: "FRAME commission — group portrait by Nicky Myny" },
  { src: frameWork3.url, alt: "FRAME commission — child portrait by Nicky Myny" },
];

const includedItems = [
  "Initial inquiry and fit-check",
  "Family commission conversation",
  "Clarification of intention and scale",
  "Proposal with dates, timeline, and investment",
  "Preparation of the family session",
  "Painter-led family process",
  "Studio translation and completion",
  "Selected process documentation",
  "Documentation of the finished work",
  "Final presentation",
  "Preparation for collection, delivery, or installation",
];

const scales = [
  { name: "Medium works", detail: "For intimate family chapters.", size: "Approx. 60–90 cm" },
  { name: "Large works", detail: "For strong presence in your home.", size: "Approx. 100–150 cm" },
  { name: "Statement works", detail: "For multi-generational or legacy commissions.", size: "150 cm and above" },
  { name: "Custom scale", detail: "For specific spaces or large walls.", size: "By arrangement" },
];

const processSteps = [
  {
    n: "1",
    title: "Inquiry",
    icon: Send,
    desc: "You send a few words about your family, family size, ages, and the intention of the painting.",
  },
  {
    n: "2",
    title: "Conversation",
    icon: MessageCircle,
    desc: "We meet online or in person to explore atmosphere, meaning, context, scale, and possible direction.",
  },
  {
    n: "3",
    title: "Proposal",
    icon: FrameIcon,
    desc: "You receive a clear proposal with size, medium, dates, timeline, investment, and process outline.",
  },
  {
    n: "4",
    title: "Painter-led family process",
    icon: Users,
    desc: "Your family gathers in the studio for a shared painter-led process of mark-making, presence, and material exploration.",
  },
  {
    n: "5",
    title: "Studio translation",
    icon: Palette,
    desc: "I return to the painting in the studio and translate what emerged into a finished work of art. Selected process glimpses may be shared.",
  },
  {
    n: "6",
    title: "Completion",
    icon: Sparkles,
    desc: "The finished work is presented, documented, and prepared for collection, delivery, or installation.",
  },
];

export default function FramePage() {
  return (
    <div
      className="bg-[#f4ece0] text-[#3a322b]"
      style={
        {
          ["--frame-accent" as string]: "#8a5a34",
        } as React.CSSProperties
      }
    >
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />
      {/* Hero */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)]">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
              Family Commission
            </p>
            <h1 className="mt-4 font-display text-[4rem] leading-[0.95] tracking-[0.02em] text-[#2c2620] sm:text-[6rem] lg:text-[7.5rem]">
              FRAME
            </h1>
            <p className="mt-6 max-w-md font-display text-[1.35rem] leading-snug text-[#3a322b] sm:text-2xl">
              A family commission shaped through shared presence, painterly process, and a finished artwork.
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#3a322b]/75">
              FRAME is an original commissioned painting shaped through a painter-led family process.
              The family participates in an intentional creative moment, and I translate what emerges
              into a finished work of art.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#3a322b]/75">
              It is a way to mark connection, memory, relationship, and the current chapter of your
              family&rsquo;s life through form.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#examples"
                className="rounded-none border border-[color:var(--frame-accent)] bg-transparent px-8 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--frame-accent)] transition-colors hover:bg-[color:var(--frame-accent)] hover:text-[#f4ece0]"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden lg:min-h-[600px]">
            <img
              src={frameHero.url}
              alt="Family gathered around a shared painted canvas in Nicky Myny's studio"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Poetic introduction */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)] bg-[#efe4d2]">
        <div className="mx-auto max-w-[1100px] px-5 py-20 text-center md:px-8 lg:py-28">
          <p className="font-display text-3xl leading-tight text-[#2c2620] sm:text-4xl lg:text-5xl">
            Where a group enters the canvas together.
          </p>
          <Rule className="mx-auto mt-8" />
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-[#3a322b]/80 sm:text-base sm:leading-8">
            FRAME is an invitation to step into creation mode, open to the unknown, and let go of the
            perfect outcome. It is a space where difference, connection, rhythm, and presence unfold.
            It is an experience in becoming visible in colour, gesture, and trace.
          </p>
          <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic text-[#2c2620] sm:text-2xl">
            A living mirror of how we move together.
          </p>
        </div>
      </section>

      {/* What this is — 4 pillars */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl leading-snug text-[#2c2620] sm:text-4xl lg:text-[2.75rem]">
            A painting that holds the presence of your family.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-sm border border-[color:rgba(58,50,43,0.12)] bg-[#f9f2e5] px-6 py-10 text-center"
              >
                <Icon className="h-8 w-8 text-[color:var(--frame-accent)]" strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-lg leading-tight text-[#2c2620]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#3a322b]/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What families bring — 3 col with images center */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)] bg-[#efe4d2]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="text-center text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
            The Process
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl leading-snug text-[#2c2620] sm:text-4xl">
            What families bring into the process
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-14">
            {/* left col */}
            <div className="flex flex-col justify-center gap-10">
              {bringItems.slice(0, 2).map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-[color:var(--frame-accent)]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-xl text-[#2c2620]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#3a322b]/75">{body}</p>
                </div>
              ))}
            </div>

            {/* center images */}
            <div className="grid gap-4">
              <div className="overflow-hidden">
                <img
                  src={frameProcess1.url}
                  alt="Family engaged in the FRAME painter-led process"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <img
                    src={frameProcess2.url}
                    alt="Hands and marks during a FRAME family process"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={frameProcess3.url}
                    alt="Colour and gesture on canvas during FRAME"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* right col */}
            <div className="flex flex-col justify-center gap-10">
              {bringItems.slice(2).map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-[color:var(--frame-accent)]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-xl text-[#2c2620]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#3a322b]/75">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="border-b border-[color:rgba(58,50,43,0.1)]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
            Selected Works
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-[#2c2620] sm:text-4xl">
            Selected FRAME works
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#3a322b]/75 sm:text-base sm:leading-8">
            A glimpse into previous family and relational commissions, where shared presence,
            painterly traces, and portraiture become a finished work.
          </p>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((ex) => (
              <div key={ex.src} className="overflow-hidden bg-[#efe4d2]">
                <img
                  src={ex.src}
                  alt={ex.alt}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes / Scale / Investment */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)] bg-[#efe4d2]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-3 lg:gap-10 lg:px-12 lg:py-24">
          {/* Included */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
              What the commission includes
            </p>
            <ul className="mt-8 space-y-3">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#3a322b]/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--frame-accent)]" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scale */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
              Scale &amp; formats
            </p>
            <p className="mt-6 text-sm leading-7 text-[#3a322b]/75">
              FRAME commissions are offered in a range of sizes.
            </p>
            <ul className="mt-6 space-y-6">
              {scales.map((s) => (
                <li key={s.name} className="border-t border-[color:rgba(58,50,43,0.15)] pt-4">
                  <p className="font-display text-lg text-[#2c2620]">{s.name}</p>
                  <p className="mt-1 text-sm text-[#3a322b]/75">{s.detail}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--frame-accent)]">
                    {s.size}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment */}
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
              Investment
            </p>
            <div className="mt-8 rounded-sm border border-[color:rgba(58,50,43,0.15)] bg-[#f9f2e5] px-8 py-10 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-[#3a322b]/65">
                FRAME commissions begin at
              </p>
              <p className="mt-3 font-display text-5xl text-[#2c2620] sm:text-6xl">€2,800</p>
              <Rule className="mx-auto mt-6" />
              <p className="mt-6 text-sm leading-7 text-[#3a322b]/75">
                Larger or deeper-process commissions are quoted individually based on scale,
                complexity, time, and process depth.
              </p>
              <div className="mt-8">
                <Link
                  href="/inquire"
                  className="inline-flex items-center justify-center rounded-none border border-[color:var(--frame-accent)] bg-[color:var(--frame-accent)] px-8 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#f4ece0] transition-colors hover:bg-[#6f4726]"
                >
                  Request a Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the FRAME process — video */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)] bg-[#f4ece0]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
              A glimpse
            </p>
            <h2 className="mt-4 font-display text-3xl leading-snug text-[#2c2620] sm:text-4xl lg:text-[2.75rem]">
              Inside the FRAME process
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#3a322b]/80 sm:text-base sm:leading-8">
              FRAME begins with a shared painterly moment. Through colour, gesture, trace, and
              presence, the family enters the canvas together. From there, I return to the studio
              and translate what emerged into a finished commissioned painting.
            </p>
          </div>
          <div className="mx-auto mt-12 aspect-video w-full max-w-[960px] overflow-hidden bg-black">
            <iframe
              src="https://www.youtube.com/embed/GX6KBs-7B2I?rel=0&modestbranding=1"
              title="Inside the FRAME process — Nicky Myny"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* The FRAME process */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
            The FRAME process
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-[#2c2620] sm:text-4xl">
            From inquiry to finished painting
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ n, title, icon: Icon, desc }) => (
              <li
                key={n}
                className="flex flex-col rounded-sm border border-[color:rgba(58,50,43,0.12)] bg-[#f9f2e5] px-6 py-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--frame-accent)] text-[0.7rem] text-[color:var(--frame-accent)]">
                    {n}
                  </span>
                  <Icon className="h-6 w-6 text-[color:var(--frame-accent)]" strokeWidth={1.25} />
                </div>
                <h3 className="mt-5 font-display text-lg text-[#2c2620]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#3a322b]/75">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[color:rgba(58,50,43,0.1)] bg-[#efe4d2]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--frame-accent)]">
            FAQ
          </p>
          <div className="mt-10">
            <Accordion className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} className="border-[color:rgba(58,50,43,0.15)]">
                  <AccordionTrigger className="text-left text-sm text-[#2c2620]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-[#3a322b]/75">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#221e1b] text-[#efe6d8]">
        <div className="relative mx-auto max-w-[1000px] px-5 py-20 text-center md:px-8 lg:px-12 lg:py-28">
          <h2 className="font-display text-3xl leading-snug text-[#f5ecdd] sm:text-4xl lg:text-5xl">
            Begin a FRAME commission
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#efe6d8]/80 sm:text-base sm:leading-8">
            If you would like to create a painting that holds your family, your story, and this
            chapter of your life, I would love to hear from you.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#efe6d8]/70">
            Send a few words to begin. I reply personally to every inquiry.
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-2 text-left text-sm text-[#efe6d8]/75">
            <li>— who the painting is for</li>
            <li>— the occasion or chapter you want to mark</li>
            <li>— your preferred size or budget range</li>
            <li>— where the painting may live</li>
            <li>— any timing considerations</li>
            <li>— a few images or references, if available</li>
          </ul>

          <div className="mt-12 flex justify-center">
            <Link
              href="/inquire"
              className="rounded-none border border-[color:var(--frame-accent)] bg-transparent px-10 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--frame-accent)] transition-colors hover:bg-[color:var(--frame-accent)] hover:text-[#1f1b18]"
            >
              Inquire About FRAME
            </Link>
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.28em] text-[#efe6d8]/60">
            Or email me directly at{" "}
            <a
              href="mailto:artist@nickymyny.com"
              className="text-[color:var(--frame-accent)] hover:underline"
            >
              artist@nickymyny.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
