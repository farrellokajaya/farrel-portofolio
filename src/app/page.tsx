const interests = [
  "Full-Stack Development",
  "Backend Development",
  "Machine Learning",
  "Data Analysis",
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-neutral-950">
      <section className="w-full max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700">
          <span
            className="size-2 rounded-full bg-green-500"
            aria-hidden="true"
          />
          Open to opportunities
        </div>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase">
            Portfolio foundation ready
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Farrel Lokajaya
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-neutral-600 sm:text-2xl">
            Fresh Graduate in Informatics Engineering, Full-Stack Web
            Developer, and Machine Learning Enthusiast.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            This portfolio is being developed with Next.js, TypeScript,
            Tailwind CSS, and a scalable MDX-based project content system.
          </p>
        </div>

        <ul
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Professional interests"
        >
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700"
            >
              {interest}
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">
            Day 1: project setup and scalable folder structure.
          </p>
        </div>
      </section>
    </main>
  );
}