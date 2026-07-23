import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Testimonials | Nicky Myny",
  description: "Reflections from collectors, partners, and organisations on working with Nicky Myny.",
  path: "/testimonials",
});

const testimonials = [
  {
    quote:
      "It was truly a pleasure to meet and work with you. I wanted to tell you how much I admire your wondrous talent, spirit, and energy. You defined the visual system in a way that will continue to shape its image. The reserves from which you pulled this beauty clearly run deep.",
    credit: "Joanne Steiner",
    role: "Unlocking Eve",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 lg:py-24">
      <p className="eyebrow">Testimonials</p>
      <h1 className="mt-4 font-display text-[2.5rem] leading-[1.05] text-foreground md:text-[3rem]">
        Reflections
      </h1>
      <p className="mt-6 text-base leading-8 text-muted-foreground">
        Words from collectors, partners, and organisations after working with the studio.
      </p>

      <div className="mt-16 space-y-16">
        {testimonials.map((t) => (
          <figure key={t.credit}>
            <blockquote className="font-display text-[1.35rem] italic leading-[1.4] text-foreground md:text-[1.6rem]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[0.78rem] uppercase tracking-[0.22em] text-foreground">
              {t.credit}
              {t.role ? (
                <span className="mt-1 block text-[0.72rem] tracking-[0.2em] text-muted-foreground">
                  {t.role}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
