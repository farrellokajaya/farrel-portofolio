import { ContentRow } from "@/components/home/content-row";
import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";
import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <HomeSection
      id="experience"
      tone="muted"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        description="Practical experience that has shaped how I approach development, collaboration, and problem-solving."
      />

      <div className="mt-10 border-t border-border sm:mt-12">
        {experienceItems.map((experience) => (
          <ContentRow
            key={`${experience.organization}-${experience.role}`}
            aside={
              <>
                <p className="break-words [overflow-wrap:anywhere]">
                  {experience.type}
                </p>

                {experience.period ? (
                  <p className="mt-1">
                    {experience.period}
                  </p>
                ) : null}
              </>
            }
          >
            <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
              {experience.role}
            </h3>

            <p className="mt-1 break-words text-base font-medium text-foreground/80 [overflow-wrap:anywhere]">
              {experience.organization}
            </p>

            <p className="mt-3 break-words leading-7 text-muted-foreground [overflow-wrap:anywhere]">
              {experience.summary}
            </p>

            <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted-foreground sm:text-base">
              {experience.highlights.map(
                (highlight) => (
                  <li
                    key={highlight}
                    className="grid min-w-0 grid-cols-[8px_minmax(0,1fr)] gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] size-1.5 rounded-full bg-muted-foreground/60"
                    />

                    <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                      {highlight}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </ContentRow>
        ))}
      </div>
    </HomeSection>
  );
}