import { HomeSection, SectionHeading } from "@/components/home/section-layout";
import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <HomeSection id="experience" tone="muted">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        description="Practical experience that has shaped how I approach development, collaboration, and problem-solving."
      />

      <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
        {experienceItems.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className="grid min-w-0 gap-6 border-b border-neutral-200 py-8 dark:border-neutral-800 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-10"
          >
            <div className="min-w-0 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              <p className="break-words [overflow-wrap:anywhere]">
                {experience.type}
              </p>

              {experience.period ? (
                <p className="mt-1">{experience.period}</p>
              ) : null}
            </div>

            <div className="min-w-0 max-w-3xl">
              <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
                {experience.role}
              </h3>

              <p className="mt-1 break-words text-base font-medium text-neutral-700 [overflow-wrap:anywhere] dark:text-neutral-300">
                {experience.organization}
              </p>

              <p className="mt-4 break-words leading-7 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400">
                {experience.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="grid min-w-0 grid-cols-[8px_minmax(0,1fr)] gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"
                    />

                    <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}