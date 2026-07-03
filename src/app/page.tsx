import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <AboutSection />

      {/* Temporary project section */}
      <section
        id="projects"
        className="scroll-mt-24 border-b border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
            A selection of web development and data-related projects will be
            displayed here.
          </p>
        </div>
      </section>
    </main>
  );
}