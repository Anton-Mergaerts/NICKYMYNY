import Link from "next/link";

import { btn } from "@/lib/button";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Testimonials | Nicky Myny",
  description:
    "Reflections from collectors, families, and organisations on commissioned paintings, FRAME family commissions, and artist-led collaborations with Nicky Myny.",
  path: "/testimonials",
});

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-primary/70 ${className}`} />;
}

type Testimonial = {
  quote: string;
  credit: string;
  role?: string;
};

const frameFamilyTestimonials: Testimonial[] = [
  {
    quote:
      "From the moment I wanted to enrich my home with a piece of art that meant more than aesthetic beauty, I knew Nicky would be my go-to person. I longed for something with emotional value — a colourful painting of my girls, brought to life by their own hands and those of their beloved grandmother. Working with Nicky was an absolute dream. The result became a beautiful and valuable work of art, and a lasting memory of freedom, peace, and openness.",
    credit: "Charlotte Bonneux",
    role: "Belgium",
  },
  {
    quote:
      "Experiencing Nicky Myny's family artwork process was beyond words. It brought us immense joy and created an unforgettable bond as a family. Long after the session ended, we found ourselves still speaking about it. It was unforgettable and priceless.",
    credit: "Elzanne Carruthers",
    role: "South Africa",
  },
];

const corporateTestimonials: Testimonial[] = [
  {
    quote:
      "I believe this kind of activity should become an integral part of the HR agenda everywhere in the near future — not only to boost innovation, inclusivity, and collaboration, but also to give new meaning to connection and engagement in hybrid work models. With her open and inviting personality, Nicky transformed the room into a playful and accepting atmosphere. Participants were energized and left feeling renewed.",
    credit: "Heidi Stieglitz",
    role: "SVP HR and Sites, Melexis",
  },
  {
    quote:
      "After a difficult year, we sought an activity that would bring us together in meaningful and creative ways. As progress was made on our project, trust built between us. In connecting over this shared experience, we tapped into collective creativity and forged stronger bonds.",
    credit: "Saskia Creten",
    role: "Librarian, KUL University Library",
  },
  {
    quote:
      "Through your painting method, you were able to connect with people in such a powerful way. Every picture was awe-inspiring and truly showed the beauty of art. We are so thankful for all that you have done.",
    credit: "Dorien Mergaerts",
    role: "HR, TAUW",
  },
  {
    quote:
      "We are incredibly appreciative of Nicky's wisdom and creativity. Our members benefited immensely from the customized sessions she provided, discovering a newfound appreciation for knowledge. We eagerly await future opportunities to collaborate again.",
    credit: "Isabelle Hoet",
    role: "Roche",
  },
];

const collaborationTestimonials: Testimonial[] = [
  {
    quote:
      "It was truly a pleasure to meet and work with you. I wanted to tell you how much I admire your wondrous talent, spirit, and energy. You defined the visual system in a way that will continue to shape its image. The reserves from which you pulled this beauty clearly run deep.",
    credit: "Joanne Steiner",
    role: "Unlocking Eve",
  },
];

function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border-t border-border/70 pt-8">
      <blockquote className="font-display text-[1.15rem] italic leading-[1.55] text-foreground md:text-[1.25rem]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-[0.78rem] uppercase tracking-[0.22em] text-foreground">
        {testimonial.credit}
        {testimonial.role ? (
          <span className="mt-1 block text-[0.72rem] tracking-[0.2em] text-muted-foreground">
            {testimonial.role}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
        {title}
      </h2>
      <Rule className="mt-5" />
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      {/* HERO */}
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[0.78rem] uppercase tracking-[0.28em] text-primary">Testimonials</p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] tracking-[0.02em] text-foreground md:text-[3.4rem] lg:text-[3.9rem]">
              Words from collectors, families, and collaborators
            </h1>
            <Rule className="mt-8" />
            <p className="mt-8 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              A selection of reflections from people, families, and organisations who have
              commissioned artworks, entered a painter-led process, or collaborated with Nicky
              Myny in personal, relational, and institutional contexts.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <figure className="mx-auto max-w-4xl text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">
              Featured reflection
            </p>
            <blockquote className="mt-8 font-display text-[1.6rem] italic leading-[1.35] text-foreground md:text-[2.1rem] lg:text-[2.4rem]">
              &ldquo;You completely sensed us, two analytical people. You listened very carefully to our
              concerns and understood what we didn&apos;t even say. You knew how to convince us and take
              us into your story. Together, step by step and with a very secure feeling, we created
              something that reflects us. You translated us the complexity incredibly. You
              &lsquo;read&rsquo; our children. You named traits and observations about our family
              like I have never been able to put into words myself.&rdquo;
            </blockquote>
            <figcaption className="mt-10 text-[0.8rem] uppercase tracking-[0.28em] text-foreground">
              Family Santermans
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FRAME & FAMILY */}
      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeader eyebrow="Commissioned works" title="FRAME & Family Commissions" />
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {frameFamilyTestimonials.map((t) => (
              <QuoteCard key={t.credit} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeader
            eyebrow="Institutional dialogue"
            title="Corporate & Institutional Commissions"
          />
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            From institutional and participatory collaborations, developed through{" "}
            <a
              href="https://www.artkom.be"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-primary"
            >
              ARTKOM
            </a>
            , the arts &amp; health studio framework around the painting practice.
          </p>
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {corporateTestimonials.map((t) => (
              <QuoteCard key={t.credit} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTIST-LED COLLABORATIONS */}
      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <SectionHeader
            eyebrow="Public & relational contexts"
            title="Artist-Led Collaborations"
          />
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {collaborationTestimonials.map((t) => (
              <QuoteCard key={t.credit} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border/70 bg-panel text-panel-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-panel-muted">
                Get in touch
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-panel-foreground md:text-[2.4rem]">
                Begin a conversation
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-panel-muted md:text-lg md:leading-9">
                For commissioned paintings, FRAME, or artist-led collaborations, please contact the
                studio.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/commissions" className={btn("panelPrimary", "lg")}>
                Inquire About a Commission
              </Link>
              <Link
                href="/inquire"
                className={btn("outline", "lg", "border-panel-foreground/40 bg-transparent text-panel-foreground hover:bg-panel-foreground hover:text-panel")}
              >
                Contact the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
