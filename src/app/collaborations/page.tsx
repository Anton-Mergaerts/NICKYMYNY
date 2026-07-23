import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/artist-site";
import { btn } from "@/lib/button";
import collabHeaderImg from "@/assets/collaborations-hero.png.asset.json";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import { collaborationProjects, type CollaborationProject } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Collaborations | Nicky Myny",
  description: "Selected projects where painting enters dialogue with materials, places, and shared contexts.",
  path: "/collaborations",
});

const materialProjects = collaborationProjects.filter((p) => p.group === "material");
const commissionedProjects = collaborationProjects.filter((p) => p.group === "commissioned");

function ProjectGridCard({ project }: { project: CollaborationProject }) {
  return (
    <article className="flex flex-col border border-border/70 bg-background">
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/40">
        <img
          src={project.image}
          alt={project.imageAlt ?? project.title}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1400}
          height={1050}
        />
      </div>
      <div className="flex flex-1 flex-col gap-5 px-6 py-7 md:px-8 md:py-8">
        <h3 className="font-display text-[1.85rem] leading-tight text-foreground md:text-[2.15rem]">
          {project.title}
        </h3>
        <p className="text-base leading-8 text-muted-foreground">{project.description}</p>
        <div className="mt-auto pt-2">
          <Link
            href={`/collaborations/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function CollaborationsPage() {
  return (
    <div className="bg-background text-foreground">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Collaborations", path: "/collaborations" },
        ])}
      />
      <section className="border-b border-border/70 bg-background">
        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 pt-16 pb-14 md:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-12 lg:pt-20 lg:pb-16">
          <div className="max-w-xl lg:py-6">
            <p className="eyebrow">COLLABORATIONS</p>
            <h1
              className="mt-4 font-display font-medium leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Painting in Dialogue
            </h1>
            <p className="mt-6 text-base leading-8 text-foreground md:text-lg">
              Selected projects where painting enters dialogue with materials, places, and shared contexts.
            </p>
            <div className="mt-8">
              <Link href="/inquire" className={btn("hero", "lg")}>
                Contact the Studio
              </Link>
            </div>
          </div>
          <figure className="lg:px-4 lg:py-6">
            <div className="overflow-hidden">
              <img
                src={collabHeaderImg.url}
                alt="Nicky Myny painting a large-scale portrait in the studio"
                className="aspect-[4/3] w-full object-cover object-center"
                width={1600}
                height={1200}
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <SectionHeader
          title="Material & Artistic Collaborations"
          description="Painterly dialogues with other artists and materials, developed through shared process and studio inquiry."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          {materialProjects.map((p) => (
            <ProjectGridCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/30">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
          <SectionHeader
            title="Commissioned Collections & Relational Works"
            description="Painter-led commissions and collections created in dialogue with people, place, and institutional context."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {commissionedProjects.map((p) => (
              <ProjectGridCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">For participatory, healthcare, and corporate contexts</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              For broader studio-based participatory projects, arts & health contexts, and organisational collaborations, visit ARTKOM, the studio framework around the painting practice of Nicky Myny.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://www.artkom.be" target="_blank" rel="noreferrer" className={btn("hero", "lg")}>
                Visit ARTKOM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
