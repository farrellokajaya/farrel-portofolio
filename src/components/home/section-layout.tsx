import type { ReactNode } from "react";

import { RootContainer } from "@/components/layout/root-container";
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
    "scroll-mt-24 text-foreground",
    withBorder
      ? "border-b border-border"
      : "",
    tone === "muted"
      ? "bg-section-muted"
      : "bg-background",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={sectionClassName}
    >
      <RootContainer className="py-20 sm:py-24">
        {children}
      </RootContainer>
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
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {eyebrow}
      </p>

      <h2 className="mt-3 break-words text-3xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 break-words leading-7 text-muted-foreground [overflow-wrap:anywhere]">
          {description}
        </p>
      ) : null}
    </div>
  );
}