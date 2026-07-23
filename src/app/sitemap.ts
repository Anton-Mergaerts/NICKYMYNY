import type { MetadataRoute } from "next";
import { publicRouteEntries, SITE_URL } from "@/lib/site-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly" as const },
    ...publicRouteEntries.map((p) => ({
      url: `${SITE_URL}${p}`,
      changeFrequency: "weekly" as const,
    })),
  ];
}
