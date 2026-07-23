import type { Metadata } from "next";
import { SITE_URL } from "./site-utils";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  ogTitle,
  ogDescription,
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogDesc = ogDescription ?? description;
  const ogT = ogTitle ?? title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogT,
      description: ogDesc,
      url,
      siteName: "Nicky Myny",
      locale: "en_BE",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogT,
      description: ogDesc,
      ...(image ? { images: [image] } : {}),
    },
  };
}
