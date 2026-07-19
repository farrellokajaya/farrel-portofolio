import { ContentRow } from "@/components/home/content-row";
import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";
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
          <ContentRow
            key={`${education.institution}-${education.degree}`}
            aside={
              <p className="break-words [overflow-wrap:anywhere]">
                {education.location}
              </p>
            }
          >
            <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
              {education.degree}
            </h3>

            <p className="mt-1 break-words text-base font-medium text-foreground/80 [overflow-wrap:anywhere]">
              {education.institution}
            </p>

            <p className="mt-3 break-words leading-7 text-muted-foreground [overflow-wrap:anywhere]">
              {education.summary}
            </p>

            {education.highlights.length > 0 ? (
              <p className="mt-4 break-words text-sm leading-6 text-muted-foreground/80 [overflow-wrap:anywhere]">
                {education.highlights.join(" · ")}
              </p>
            ) : null}
          </ContentRow>
        ))}
      </div>
    </HomeSection>
  );
}