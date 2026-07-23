import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { collaborationProjects } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { btn } from "@/lib/button";

export const metadata = pageMetadata({
  title: "Collaborations | Nicky Myny",
  description:
    "Material, institutional, and relational collaborations by Nicky Myny — projects developed in dialogue with partners, organisations, and communities.",
  path: "/collaborations",
});

const materialProjects = collaborationProjects.filter((p) => p.group === "material");
const commissionedProjects = collaborationProjects.filter((p) => p.group === "commissioned");

function ProjectGrid({ projects }: { projects: typeof collaborationProjects }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <Link key={p.slug} href={`/collaborations/${p.slug}`} className="group block">
          <div className="overflow-hidden">
            <img
              src={p.image}
              alt={p.imageAlt ?? p.title}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary">{p.category}</p>
            <h3 className="mt-2 font-display text-xl text-foreground">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.partner} · {p.year}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
              View project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function CollaborationsPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <p className="eyebrow">Collaborations</p>
          <h1 className="mt-5 font-display text-[3rem] leading-[1.02] text-foreground md:text-[4rem]">
            Working in dialogue
          </h1>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-primary/60" />
          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Projects developed alongside artists, organisations, and institutions — where painting
            enters dialogue with material, place, and shared process.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <h2 className="eyebrow">Material &amp; artist collaborations</h2>
          <div className="mt-8">
            <ProjectGrid projects={materialProjects} />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <h2 className="eyebrow">Institutional &amp; commissioned collaborations</h2>
          <div className="mt-8">
            <ProjectGrid projects={commissionedProjects} />
          </div>
        </div>
      </section>

      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-[1.9rem] leading-[1.1] md:text-[2.35rem]">
              Propose a collaboration
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-panel-muted">
              Interested in a material collaboration, institutional commission, or public project?
              Share the context and I will respond personally.
            </p>
          </div>
          <Link href="/inquire" className={btn("panelPrimary", "lg")}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
