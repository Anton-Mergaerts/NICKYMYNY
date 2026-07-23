import { collaborationProjects, navItems } from "@/lib/site-data";
import { exhibitionsList } from "@/lib/exhibitions-data";

export const SITE_URL = "https://nickymyny.com";

export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export function getProjectBySlug(slug: string) {
  return collaborationProjects.find((project) => project.slug === slug);
}

export const publicRouteEntries = [
  ...navItems.map((item) => item.to),
  "/frame",
  "/private-commissions",
  "/studio/immersion",
  "/collaborations",
  ...collaborationProjects.map((project) => `/collaborations/${project.slug}`),
  "/exhibitions",
  ...exhibitionsList.map((ex) => `/exhibitions/${ex.slug}`),
  "/works/earth-sisters",
  "/works/the-space-in-between",
  "/works/where-we-stand",
  "/works/zerocrete",
  "/works/Rootinginremembrance",
  "/works/archive",
  "/testimonials",
  "/artwork-archive",
  "/privacy",
];
