import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-neutral-200 bg-neutral-50 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional experience
          </h2>

          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
            Practical experience that has shaped how I approach development,
            collaboration, and problem-solving.
          </p>
        </div>

        {/* Experience list */}
        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
          {experienceItems.map((experience) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className="grid gap-6 border-b border-neutral-200 py-8 dark:border-neutral-800 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-10"
            >
              {/* Experience metadata */}
              <div className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                <p>{experience.type}</p>

                {experience.period ? (
                  <p className="mt-1">{experience.period}</p>
                ) : null}
              </div>

              {/* Experience description */}
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {experience.role}
                </h3>

                <p className="mt-1 text-base font-medium text-neutral-700 dark:text-neutral-300">
                  {experience.organization}
                </p>

                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                  {experience.summary}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="grid grid-cols-[16px_minmax(0,1fr)] gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="text-neutral-400 dark:text-neutral-600"
                      >
                        —
                      </span>

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}