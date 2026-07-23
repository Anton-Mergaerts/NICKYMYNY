import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// ponytail: native <details>/<summary> accordion, no radix dependency.
// Each item toggles independently (no "close others" behaviour) — fine for
// the FAQ-style lists this is used for.

export function Accordion({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <details className={`group border-b ${className}`}>{children}</details>;
}

export function AccordionTrigger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <summary
      className={`flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium marker:content-none ${className}`}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
    </summary>
  );
}

export function AccordionContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pb-4 pt-0 ${className}`}>{children}</div>;
}
