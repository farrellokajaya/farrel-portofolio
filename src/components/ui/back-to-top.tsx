import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      title="Back to top"
      className={[
        "fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full",
        "border border-border bg-background/90 text-foreground shadow-lg backdrop-blur-md",
        "transition-transform hover:-translate-y-1 hover:bg-surface",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      ].join(" ")}
    >
      <ArrowUp
        className="size-5"
        aria-hidden="true"
        strokeWidth={1.8}
      />
    </a>
  );
}