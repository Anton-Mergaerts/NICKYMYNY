// ponytail: tiny className helper replacing shadcn Button + cva/clsx/tailwind-merge.
// No variant-merging edge cases needed here — every call site passes a fixed
// variant/size pair, so plain string concatenation is enough.
const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  outline:
    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  hero: "border border-primary bg-primary text-primary-foreground hover:bg-primary-strong",
  panelPrimary: "border border-primary bg-primary text-primary-foreground hover:bg-primary-strong",
  panelOutline: "border border-panel-border bg-transparent text-panel-foreground hover:bg-panel-subtle",
} as const;

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-sm px-3 text-xs",
  lg: "h-11 rounded-sm px-8 text-[0.78rem] uppercase tracking-[0.2em]",
} as const;

export function btn(
  variant: keyof typeof variants = "default",
  size: keyof typeof sizes = "default",
  extra = "",
) {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}
