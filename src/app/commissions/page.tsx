import Link from "next/link";

import { btn } from "@/lib/button";
import { TestimonialQuote } from "@/components/artist-site";
import commissionExamplesAsset from "@/assets/commission-examples-row.png.asset.json";
import commissionsHeroAsset from "@/assets/commissions-hero.png.asset.json";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commissions | Nicky Myny",
  description:
    "Artist-led commissioned paintings by Nicky Myny that translate personal, relational, and symbolic experience into enduring visual form.",
  path: "/commissions",
});

function CenteredRule() {
  return <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />;
}

function SectionRule() {
  return <span aria-hidden className="mt-5 block h-px w-14 bg-primary/60" />;
}

export default function CommissionsPage() {
  return (
    <>
      {/* HERO ------------------------------------------------------------- */}
      <section className="border-b border-border/70 bg-[hsl(38_35%_94%)]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-28">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-foreground/70">
              Commissions
            </p>
            <span aria-hidden className="mt-5 block h-px w-14 bg-primary/70" />
            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
              Paintings made in dialogue
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/75 md:text-lg">
              Original commissioned works shaped around a person, a relationship, a family, or a significant moment of transition.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Link href="/private-commissions" className={btn("default", "lg")}>
                Explore commissions
              </Link>
              <Link
                href="/inquire"
                className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground underline-offset-8 hover:text-primary hover:underline"
              >
                Begin a conversation →
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <img
              src={commissionsHeroAsset.url}
              alt="Nicky Myny in the studio working on a commissioned portrait"
              className="h-full w-full object-cover"
              width={2400}
              height={1400}
            />
          </div>
        </div>
      </section>

      {/* WHY COMMISSION A PAINTING? ---------------------------------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 lg:py-24">
          <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
            Why commission a painting?
          </h2>
          <CenteredRule />
          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              Perhaps you are looking for a painting for a particular place in your home.
              <br />A wall that asks for something more than decoration.
              <br />A work that carries atmosphere, presence, memory, or meaning.
            </p>
            <p>
              Or perhaps the starting point is not a wall, but a moment: a personal transition,
              a family chapter, a relationship, a beginning, a loss, a return, or the quiet
              sense that something in your life wants to be marked.
            </p>
            <p>
              A commissioned painting begins with a conversation. We speak about what the work
              may hold, where it may live, the scale that fits your space, the colours and
              atmosphere you are drawn to, and any visual references, memories, objects, or
              fragments that may belong to the process.
            </p>
            <p>
              From there, I create an original painting through an artist-led process.
              Sometimes this is intimate and reflective. Sometimes it includes observation,
              documentation, symbolic material, or a shared painterly moment. Always, the
              painting remains the centre.
            </p>
            <p>
              The result is not simply a custom artwork, but a painting made in response to
              what matters. A work created for your life, your space, and the presence it is
              asked to hold.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/inquire" className={btn("outline", "lg")}>
              Begin a Commission Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* COMMISSION PATHWAYS ----------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
              Commission Pathways
            </h2>
            <CenteredRule />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/private-commissions"
              className="group flex flex-col border border-border/70 bg-background px-6 py-8 transition-colors hover:border-primary md:px-8 md:py-10"
            >
              <h3 className="font-display text-2xl text-foreground">Private Commission</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">From €800</p>
              <SectionRule />
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                An original commissioned painting created through dialogue and artistic translation. Private commissions are suited to individuals, couples, collectors, and meaningful personal thresholds.
              </p>
              <p className="mt-6 text-[0.75rem] uppercase tracking-[0.22em] text-foreground group-hover:text-primary">
                Explore Private Commissions →
              </p>
            </Link>
            <Link
              href="/frame"
              className="group flex flex-col border border-border/70 bg-background px-6 py-8 transition-colors hover:border-primary md:px-8 md:py-10"
            >
              <h3 className="font-display text-2xl text-foreground">The FRAME Experience</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">From €2,800</p>
              <SectionRule />
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                A relational commission for families, groups, or shared thresholds. FRAME includes a shared painter-led process as well as the final commissioned painting, usually developed at statement scale.
              </p>
              <p className="mt-6 text-[0.75rem] uppercase tracking-[0.22em] text-foreground group-hover:text-primary">
                Explore The FRAME Experience →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* PREVIOUS COMMISSIONS IMAGE ROW ------------------------------------ */}
      <section id="previous" className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:py-24">
          <div className="mx-auto overflow-hidden">
            <img
              src={commissionExamplesAsset.url}
              alt="Row of previous portrait commissions by Nicky Myny"
              className="mx-auto w-full max-w-[1400px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-16">
            <TestimonialQuote
              quote="It was truly a pleasure to meet and work with you. I wanted to tell you how much I admire your wondrous talent, spirit, and energy. You defined the visual system in a way that will continue to shape its image. The reserves from which you pulled this beauty clearly run deep."
              credit="Joanne Steiner"
              role="Unlocking Eve"
            />
          </div>
        </div>
      </section>

      {/* FINAL INQUIRY CTA ------------------------------------------------- */}
      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[2.75rem] leading-none md:text-[3.5rem]">
              Commission a painting
            </h2>
            <span aria-hidden className="mt-5 inline-block h-px w-14 bg-primary/70" />
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="space-y-5 text-base leading-8 text-panel-muted">
              <p>
                To discuss a commission, request availability, or begin a conversation around a
                potential work, please get in touch through the inquiry page.
              </p>
              <p className="italic">
                A limited number of commissioned works are developed annually between Belgium
                and South Africa.
              </p>
              <p className="font-display text-[1.35rem] italic text-primary/90 md:text-[1.5rem]">
                A commission begins with resonance.
              </p>
            </div>
            <div>
              <Link href="/inquire" className={btn("panelOutline", "lg")}>
                Begin a Commission Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
