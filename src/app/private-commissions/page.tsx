import Link from "next/link";

import { btn } from "@/lib/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { TestimonialQuote } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import prevCommission1 from "@/assets/prev-commission-1.png.asset.json";
import prevCommission2 from "@/assets/prev-commission-2.png.asset.json";
import prevCommission3 from "@/assets/prev-commission-3.png.asset.json";
import prevCommission4 from "@/assets/prev-commission-4.png.asset.json";

export const metadata = pageMetadata({
  title: "Private Commissions | Nicky Myny",
  description:
    "Original commissioned paintings by Nicky Myny, created through dialogue, resonance, and painterly translation.",
  path: "/private-commissions",
});

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-primary/70 ${className}`} />;
}

const pricing = [
  { size: "50 × 50 cm", price: "€800 – €1,000" },
  { size: "60 × 60 cm", price: "€1,000 – €1,200" },
  { size: "100 × 100 cm", price: "€2,000 – €2,450" },
  { size: "120 – 150 cm works", price: "€2,800 – €4,250" },
  { size: "Large Statement Works", price: "€4,500 – €11,000+" },
];

const steps = [
  { title: "Inquiry", text: "You share what you are looking for: the reason for the commission, preferred scale, timing, location, and any practical considerations." },
  { title: "Studio conversation", text: "We discuss the possible direction of the work, including scale, atmosphere, colour, context, and the paintings of mine you feel most drawn to." },
  { title: "Proposal", text: "You receive a clear proposal with the suggested format, price, timeline, deposit, and any relevant shipping, framing, travel, or installation details." },
  { title: "Studio development", text: "The painting develops in the studio through an intuitive and layered process. I do not work from a fixed sketch. The work evolves through attention, material response, and painterly translation." },
  { title: "Review", text: "Depending on the type of commission, I share images or video when the work has reached a developed stage. Minor refinements can be discussed." },
  { title: "Completion", text: "Once the painting is complete, final payment, drying time, collection, delivery, or installation are arranged." },
];

const notes = [
  { title: "Artistic direction", text: "A commission is not a copy of an existing work. It is a new painting created in response to your context, while remaining fully connected to my artistic language." },
  { title: "Sketches", text: "I do not usually create a fixed sketch before beginning. The work develops through layers, gesture, colour, surface, and response." },
  { title: "Deposit", text: "A deposit secures the commission and reserves studio time." },
  { title: "Timeline", text: "Most commissions take between 6 and 12 weeks, depending on scale, drying time, and the nature of the process." },
  { title: "Revisions", text: "Minor refinements can be discussed once the work has reached a developed stage. The final painting remains artist-led." },
  { title: "Shipping & installation", text: "Shipping, framing, travel, or installation are quoted separately when relevant." },
  { title: "International commissions", text: "Commissions can be developed from Belgium or South Africa and shipped internationally." },
];

const previous = [
  { src: prevCommission1.url, alt: "Portrait commission — young man on deep blue ground" },
  { src: prevCommission2.url, alt: "Portrait commission — woman with collage background" },
  { src: prevCommission3.url, alt: "Portrait commission — young boy smiling" },
  { src: prevCommission4.url, alt: "Portrait commission — girl with headband" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Commission",
  provider: { "@id": "https://nickymyny.com/#person" },
  url: "https://nickymyny.com/private-commissions",
  description:
    "Original commissioned paintings created through dialogue, resonance, and painterly translation.",
  areaServed: ["BE", "ZA", "EU"],
  priceSpecification: {
    "@type": "PriceSpecification",
    price: 800,
    priceCurrency: "EUR",
    description: "from 800 EUR",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: notes.map((n) => ({
    "@type": "Question",
    name: n.title,
    acceptedAnswer: { "@type": "Answer", text: n.text },
  })),
};

export default function PrivateCommissionPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Private Commissions", path: "/private-commissions" },
        ])}
      />
      {/* HERO */}
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <p className="eyebrow">Commissions</p>
          <h1 className="mt-5 font-display text-[3rem] leading-[1.02] text-foreground md:text-[4.5rem]">
            Private Commissions
          </h1>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Original commissioned paintings created through dialogue, resonance, and painterly translation.
          </p>
        </div>
      </section>

      {/* AVAILABILITY & PRICING */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
              Availability &amp; Pricing
            </h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />
          </div>
          <div className="mt-10 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              A limited number of commissioned paintings are developed each year. If you are considering a work, it is worth getting in touch early so we can discuss scale, timing, and intention.
            </p>
            <p>
              Private commissions follow the current studio price ladder for original works of comparable scale. This keeps commissioned work aligned with the wider collection.
            </p>
            <p>
              Pricing depends on scale, complexity, materials, process, and timeline. FRAME works, travel, framing, shipping, or installation are proposed individually.
            </p>
            <p>To give you a sense of the range:</p>
          </div>

          <div className="mt-10">
            <div className="divide-y divide-border border-t border-border">
              {pricing.map((row) => (
                <div key={row.size} className="flex items-baseline justify-between gap-6 py-4 text-sm md:text-base">
                  <span className="font-medium text-foreground">{row.size}</span>
                  <span className="shrink-0 text-muted-foreground">{row.price}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-base leading-8 text-muted-foreground">
            A clear proposal is created after the initial conversation, including scale, price, timeline, and any relevant shipping, framing, travel, or installation costs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/inquire" className={btn("hero", "lg")}>
              Begin a Commission Inquiry
            </Link>
            <Link href="/inquire" className={btn("outline", "lg")}>
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
              How it works
            </h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="border-t border-border pt-6">
                <p className="text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS COMMISSIONS */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
              Previous Commissions
            </h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A selection of commissioned paintings developed for private collectors and homes.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {previous.map((img) => (
              <div key={img.alt + img.src} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
            ))}
          </div>
          <div className="mt-16">
            <TestimonialQuote
              quote="From the moment I wanted to enrich my home with a piece of art that meant more than aesthetic beauty, I knew Nicky would be my go-to person. The result became a beautiful and valuable work of art, and a lasting memory of freedom, peace, and openness."
              credit="Charlotte Bonneux"
              role="Private collector, Belgium"
            />
          </div>
        </div>
      </section>

      {/* A FEW THINGS WORTH KNOWING */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
              A few things worth knowing
            </h2>
            <Rule className="mx-auto mt-6" />
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion className="border-t border-border">
              {notes.map((n) => (
                <AccordionItem key={n.title}>
                  <AccordionTrigger className="py-5 text-[0.92rem] uppercase tracking-[0.18em] text-foreground">
                    {n.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-muted-foreground">
                    {n.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA — single-row */}
      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-[1.9rem] leading-[1.1] md:text-[2.35rem]">
              Begin a commission conversation
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-panel-muted">
              Share a few words about the painting you have in mind and the studio will respond personally.
            </p>
          </div>
          <Link href="/inquire" className={btn("panelPrimary", "lg")}>
            Begin a Commission Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
