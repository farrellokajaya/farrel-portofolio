import { RootContainer } from "@/components/layout/root-container";

type PagePlaceholderProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background py-20 text-foreground sm:py-28">
      <RootContainer>
        <section className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {description}
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm leading-6 text-muted-foreground">
              This page is ready for development in
              its scheduled milestone.
            </p>
          </div>
        </section>
      </RootContainer>
    </main>
  );
}