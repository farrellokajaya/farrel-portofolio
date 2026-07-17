import { educationItems } from "@/data/education";

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-b border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic background
          </h2>

          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
            Formal education that established my foundation in software
            development, data, and computing.
          </p>
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
          {educationItems.map((education) => (
            <article
              key={`${education.institution}-${education.degree}`}
              className="grid min-w-0 gap-6 border-b border-neutral-200 py-8 dark:border-neutral-800 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-10"
            >
              <div className="min-w-0 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                <p className="mt-1 break-words [overflow-wrap:anywhere]">
                  {education.location}
                </p>
              </div>

              <div className="min-w-0 max-w-3xl">
                <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
                  {education.degree}
                </h3>

                <p className="mt-1 break-words text-base font-medium text-neutral-700 [overflow-wrap:anywhere] dark:text-neutral-300">
                  {education.institution}
                </p>

                <p className="mt-4 break-words leading-7 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400">
                  {education.summary}
                </p>

                {education.highlights.length > 0 ? (
                  <p className="mt-4 break-words text-sm leading-6 text-neutral-500 [overflow-wrap:anywhere] dark:text-neutral-500">
                    {education.highlights.join(" · ")}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}