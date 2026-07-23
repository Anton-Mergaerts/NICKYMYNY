import { MinimalPageIntro } from "@/components/artist-site";
import { pageMetadata } from "@/lib/seo";
import { siteMeta } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Privacy & Terms | Nicky Myny",
  description:
    "Privacy notice, contact, and image copyright information for the Nicky Myny studio website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <MinimalPageIntro
        eyebrow="Privacy & Terms"
        title="Privacy & Terms"
        body="A short, plain-language note about how this site handles information, contact, and image use."
      />
      <section className="mx-auto max-w-[900px] px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <div>
            <h2 className="font-display text-[1.6rem] text-foreground md:text-[1.9rem]">Contact</h2>
            <p className="mt-3">
              For any question about this site, an inquiry, or a request to remove information, please write to{" "}
              <a href={`mailto:${siteMeta.contactEmail}`} className="underline underline-offset-4 hover:text-primary">
                {siteMeta.contactEmail}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] text-foreground md:text-[1.9rem]">Data & tracking</h2>
            <p className="mt-3">
              This website does not use tracking cookies, advertising pixels, or third-party analytics that identify individual visitors. Information you submit through the contact or newsletter forms is used only to respond to your inquiry or to send occasional studio news.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] text-foreground md:text-[1.9rem]">Image copyright</h2>
            <p className="mt-3">
              All paintings, studio images, and photographs shown on this site are © Nicky Myny unless otherwise credited. Images may not be copied, reproduced, or reused in any context without prior written permission from the studio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
