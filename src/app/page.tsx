import { RootContainer } from "@/components/layout/root-container";

const interests = [
  "Full-Stack Development",
  "Backend Development",
  "Machine Learning",
  "Data Analysis",
];

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background py-12 text-foreground sm:py-16">
      <RootContainer>
        <section className="flex min-h-[calc(100vh-12rem)] items-center py-12">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted-foreground">
              <span
                className="size-2 rounded-full bg-green-500"
                aria-hidden="true"
              />
              Open to opportunities
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                Portfolio foundation ready
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                Farrel Lokajaya
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl">
                Fresh Graduate in Informatics
                Engineering, Full-Stack Web
                Developer, and Machine Learning
                Enthusiast.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                This portfolio is being developed
                with Next.js, TypeScript, Tailwind
                CSS, and a scalable MDX-based project
                content system.
              </p>
            </div>

            <ul
              className="mt-10 flex flex-wrap gap-3"
              aria-label="Professional interests"
            >
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
                >
                  {interest}
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Day 2: navigation and global layout.
              </p>
            </div>
          </div>
        </section>
      </RootContainer>
    </main>
  );
}