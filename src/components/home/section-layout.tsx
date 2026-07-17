import type { ReactNode } from "react";

import type { NavigationSectionId } from "@/data/navigation";

type HomeSectionProps = Readonly<{
  children: ReactNode;
  id: NavigationSectionId;
  tone?: "default" | "muted";
  withBorder?: boolean;
}>;

export function HomeSection({
  children,
  id,
  tone = "default",
  withBorder = true,
}: HomeSectionProps) {
  const sectionClassName = [
    "scroll-mt-24 text-neutral-950 dark:text-white",
    withBorder
      ? "border-b border-neutral-200 dark:border-neutral-800"
      : "",
    tone === "muted"
      ? "bg-neutral-50 dark:bg-neutral-900/30"
      : "bg-white dark:bg-neutral-950",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = Readonly<{
  description?: string;
  eyebrow: string;
  title: string;
}>;

export function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="min-w-0 max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 break-words text-3xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 break-words leading-7 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}