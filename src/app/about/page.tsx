import Link from "next/link";

import { btn } from "@/lib/button";
import about1Asset from "@/assets/about1.png.asset.json";
import about2Asset from "@/assets/about-studio-table.jpg.asset.json";
import quoteBgAsset from "@/assets/quote-bg.png.asset.json";
import practiceProcessAsset from "@/assets/about-practice-process.jpeg.asset.json";
import studioLandscapeAsset from "@/assets/about-studio-landscape.jpeg.asset.json";
import cvAsset from "@/assets/nicky-myny-cv.pdf.asset.json";
import lifeDialogueAsset from "@/assets/about-life-dialogue.jpg.asset.json";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";

const heroImage = about1Asset.url;
const brushDetailImage = quoteBgAsset.url;
const aboutStudioImage = practiceProcessAsset.url;
const collaborationLandscapeImage = studioLandscapeAsset.url;
const studioTableImage = about2Asset.url;

const aboutFaqs = [
  {
    q: "Who is Nicky Myny?",
    a: "Nicky Myny is a contemporary painter working between Belgium and South Africa. Her practice moves between abstraction and figuration, translating transformation, memory, identity and belonging into painterly form.",
  },
  {
    q: "What is the difference between Nicky Myny Studio and ARTKOM?",
    a: "Nicky Myny Studio is the painting practice: original works, commissions and exhibitions. ARTKOM Arts & Health (artkom.be) is the participatory arts practice she founded for organisations, care contexts and communities. A painting as outcome → this site; a participatory experience → ARTKOM.",
  },
  {
    q: "How do I commission a painting?",
    a: "Private commissions and the FRAME family commission begin with a short inquiry. Share what you have in mind on the commissions page (/commissions) and the studio will respond personally.",
  },
];

export const metadata = pageMetadata({
  title: "About | Nicky Myny",
  description:
    "Nicky Myny is a contemporary painter working between Belgium and South Africa. Paintings, commissions, and collaborations that translate life transitions into form.",
  path: "/about",
});

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-primary/70 ${className}`} />;
}

const practicePillars = [
  { title: "Attention", desc: "To presence, relationship, place, and threshold." },
  { title: "Language", desc: "As a way to translate what resists simple explanation." },
  { title: "Material", desc: "As emotional residue, embodied time, and visible trace." },
  { title: "Form", desc: "As translation, not illustration; revelation, not repetition." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* HERO --------------------------------------------------------- */}
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <img
            src={heroImage}
            alt="Nicky Myny in the studio in front of a large painting"
            className="h-full w-full object-cover"
            width={1400}
            height={1400}
          />
          <div className="flex items-center px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <div className="max-w-xl">
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-primary">About</p>
              <h1 className="mt-5 font-display text-[3rem] leading-[1.02] tracking-[0.02em] text-foreground md:text-[3.75rem]">
                A life in dialogue with painting
              </h1>
              <Rule className="mt-6" />
              <div className="mt-9">
                <Link href="/inquire" className={btn("hero", "lg")}>
                  Contact the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A LIFE IN DIALOGUE ------------------------------------------ */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">The practice</p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
              The practice
            </h2>
            <Rule className="mt-5" />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Nicky Myny&rsquo;s practice explores connection within, between, and beyond the self
                through painting, material, and relational process.
              </p>
              <p>
                Moving between abstraction and figuration, her work investigates how
                transformation, memory, identity, belonging, and human interconnectedness can be
                translated into visual form.
              </p>
              <p>
                At the centre of the practice is a sustained interest in what remains difficult to
                articulate directly: emotional thresholds, relational atmospheres, invisible
                shifts in identity, and the tension between individual and collective experience.
              </p>
              <p className="font-display text-lg italic text-foreground">
                Painting functions not as illustration, but as translation.
              </p>
            </div>
          </div>
          <img
            src={lifeDialogueAsset.url}
            alt="Nicky Myny in the studio working on small canvases with paint supplies nearby"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1400}
            height={1000}
          />
        </div>
      </section>

      {/* QUOTE BAND -------------------------------------------------- */}
      <section className="relative isolate overflow-hidden border-y border-border/70">
        <img
          src={brushDetailImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-display text-[1.75rem] italic leading-[1.35] text-white md:text-[2.35rem] lg:text-[2.75rem]">
              The painting does not begin as an image, but as a relationship.
              <br />A listening. A remembering. A form slowly arriving.
            </p>
          </div>
        </div>
      </section>

      {/* A PRACTICE ROOTED IN RELATION ------------------------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
            <img
              src={aboutStudioImage}
              alt="Nicky Myny working in the studio"
              className="h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1100}
            />
            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">
                A practice rooted in relation
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
                Autonomous studio inquiry.<br />
                Relational, site-responsive work.
              </h2>
              <Rule className="mt-5" />
              <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  Some works emerge entirely from autonomous studio inquiry. Others develop through
                  dialogue, observation, participation, or site-responsive research.
                </p>
                <p>
                  Across paintings, commissions, and collaborations, the work often begins with
                  attention to a person, a place, a relationship, or a moment of transformation.
                </p>
              </div>
              <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {practicePillars.map((pillar) => (
                  <div key={pillar.title} className="border-t border-border/70 pt-5">
                    <dt className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground">
                      {pillar.title}
                    </dt>
                    <dd className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND --------------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Background</p>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.1] text-foreground md:text-[2.2rem]">
              From psychology and the arts to painterly inquiry
            </h2>
            <Rule className="mt-5" />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Originally trained in the arts and psychology, Nicky Myny&rsquo;s early trajectory
                centred around human development, perception, and relational dynamics.
              </p>
              <p>
                Over time, painting became the primary language through which these questions could
                be explored with depth, ambiguity, and material presence.
              </p>
              <p>
                An experience with autoimmune illness became a turning point in her understanding
                of art, the body, and positive health. It opened new inquiries into healing
                modalities and confirmed, first-hand, how creative practice can support resilience,
                perception, meaning, and connection.
              </p>
              <p>
                This became a thriving force behind her deeper research into arts and health,
                eventually contributing to the foundation of ARTKOM as an arts and health studio
                and studio-based framework around her painting practice.
              </p>
              <p>
                Alongside the studio, she has brought her creative voice into corporate,
                leadership, and institutional contexts, including collaborations with Melexis and
                Roche, and speaking and moderating at the SDG Tent during the World Economic Forum
                in Davos.
              </p>
              <p>
                These trajectories inform the work, but do not define it. The centre of the
                practice remains the painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BETWEEN BELGIUM AND SOUTH AFRICA ---------------------------- */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src={collaborationLandscapeImage}
            alt="Landscape between Belgium and South Africa"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1400}
            height={1000}
          />
          <div className="px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">
              Between Belgium and South Africa
            </p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
              Two landscapes, one practice
            </h2>
            <Rule className="mt-5" />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Working between Belgium and South Africa shapes the atmosphere of the work: light,
                landscape, distance, material memory, and the experience of belonging across place.
              </p>
              <p>
                This movement between contexts continues to influence the emotional and spatial
                language of the paintings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV ---------------------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">Curriculum Vitae</p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem]">
                CV
              </h2>
              <Rule className="mt-5" />
            </div>
            <div>
              <p className="text-base leading-8 text-muted-foreground">
                A full CV with selected exhibitions, collaborations, education and professional contexts is available as a PDF.
              </p>
              <div className="mt-7">
                <a href={cvAsset.url} download="Nicky-Myny-CV-2026.pdf" target="_blank" rel="noreferrer" className={btn("hero", "lg")}>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NICKY MYNY AND ARTKOM --------------------------------------- */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">
              Two practices, one artist
            </p>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.1] text-foreground md:text-[2.2rem]">
              Nicky Myny and ARTKOM
            </h2>
            <Rule className="mt-5" />
            <p className="mt-8 text-base leading-8 text-muted-foreground">
              Nicky Myny is a contemporary painter working between Belgium and South
              Africa. ARTKOM Arts &amp; Health is the participatory arts practice she
              founded, bringing artist-led creative processes into organisations, care
              contexts and communities. The painting practice lives at nickymyny.com;
              the participatory practice at{" "}
              <a
                href="https://artkom.be"
                className="underline underline-offset-4 hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                artkom.be
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ --------------------------------------------------------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[0.78rem] uppercase tracking-[0.26em] text-primary">FAQ</p>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.1] text-foreground md:text-[2.2rem]">
              Frequently asked
            </h2>
            <Rule className="mt-5" />
            <dl className="mt-10 space-y-8">
              {aboutFaqs.map((f) => (
                <div key={f.q} className="border-t border-border/70 pt-5">
                  <dt className="font-display text-lg text-foreground">{f.q}</dt>
                  <dd className="mt-3 text-base leading-8 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FINAL CTA --------------------------------------------------- */}
      <section className="border-t border-border/70 bg-panel text-panel-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p className="max-w-2xl font-display text-[1.4rem] leading-[1.4] text-panel-foreground md:text-[1.6rem]">
            For collectors, commissions, collaborations, studio access, or inquiries, please get
            in touch.
          </p>
          <Link href="/inquire" className={btn("panelPrimary", "lg")}>
            Contact the Studio
          </Link>
        </div>
      </section>
    </>
  );
}
