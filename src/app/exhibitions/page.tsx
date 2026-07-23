import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/json-ld";
import { ExhibitionsClient } from "./exhibitions-client";

export const metadata = pageMetadata({
  title: "Exhibitions | Nicky Myny",
  description:
    "Selected exhibitions, studio presentations and curated contexts featuring paintings by Nicky Myny across Belgium and South Africa.",
  path: "/exhibitions",
});

export default function ExhibitionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Exhibitions", path: "/exhibitions" },
        ])}
      />
      <ExhibitionsClient />
    </>
  );
}
