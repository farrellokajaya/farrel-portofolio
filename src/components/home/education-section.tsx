import { HomeSection, SectionHeading } from "@/components/home/section-layout";
import { educationItems } from "@/data/education";

export function EducationSection() {
  return (
    <HomeSection id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="Formal education that established my foundation in software development, data, and computing."
      />

      <div className="mt-10 border-t border-border sm:mt-12">
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
    </HomeSection>
  );
}