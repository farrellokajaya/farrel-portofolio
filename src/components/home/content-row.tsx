import type { ReactNode } from "react";

type ContentRowProps = Readonly<{
  aside: ReactNode;
  children: ReactNode;
}>;

export function ContentRow({
  aside,
  children,
}: ContentRowProps) {
  return (
    <article className="grid min-w-0 gap-5 border-b border-border py-7 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-9">
      <div className="min-w-0 text-sm leading-6 text-muted-foreground">
        {aside}
      </div>

      <div className="min-w-0 max-w-3xl">
        {children}
      </div>
    </article>
  );
}