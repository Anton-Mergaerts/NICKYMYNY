"use client";

import { useEffect } from "react";

/**
 * Reusable Artwork Archive embed. Injects the external script once per
 * `scriptSrc` and renders a target div identified by `embedId` that the
 * script populates.
 */
export function ArtworkArchiveEmbed({
  embedId,
  scriptSrc,
  className,
  minHeight = 500,
}: {
  embedId: string;
  scriptSrc: string;
  className?: string;
  minHeight?: number;
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const target = document.getElementById(embedId);
    if (!target) return;

    // Remove any lingering AA script(s) for this src and clear the
    // container so we start from a known-empty state.
    const scriptSelector = `script[data-aa-src="${scriptSrc}"]`;
    document.querySelectorAll(scriptSelector).forEach((s) => s.remove());
    target.innerHTML = "";

    // The AA loader script is async and can re-execute after we've
    // "cancelled" it (browsers still run a fetched script even after the
    // <script> element is removed). Under StrictMode/HMR, this stacks a
    // second iframe in the same container. A MutationObserver enforces a
    // single iframe child at all times.
    const observer = new MutationObserver(() => {
      const iframes = target.querySelectorAll(":scope > iframe");
      if (iframes.length > 1) {
        for (let i = 1; i < iframes.length; i++) iframes[i].remove();
      }
    });
    observer.observe(target, { childList: true });

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptSrc;
    script.async = true;
    script.dataset.aaSrc = scriptSrc;
    (document.head || document.body).appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      const t = document.getElementById(embedId);
      if (t) t.innerHTML = "";
    };
  }, [scriptSrc, embedId]);

  return (
    <div className={className} style={{ minHeight }}>
      <div id={embedId} style={{ clear: "both", minHeight }} />
      <noscript>
        <p className="text-sm text-muted-foreground">
          Please enable JavaScript to view the artwork.
        </p>
      </noscript>
    </div>
  );
}