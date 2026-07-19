import { ArrowUpRight } from "lucide-react";

import { ContentRow } from "@/components/home/content-row";
import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";
import { actionLinkClassName } from "@/components/ui/link-styles";
import { trainingItems } from "@/data/training";

export function TrainingSection() {
  return (
    <HomeSection id="training">
      <SectionHeading
        eyebrow="Training"
        title="Courses and professional development"
        description="Courses and focused learning programs that strengthen my skills in software development, data, artificial intelligence, and professional readiness."
      />

      <div className="mt-10 border-t border-border sm:mt-12">
        {trainingItems.map((training) => (
          <ContentRow
            key={`${training.provider}-${training.title}`}
            aside={
              <>
                <p className="break-words font-medium text-foreground/80 [overflow-wrap:anywhere]">
                  {training.provider}
                </p>

                <p className="mt-1">
                  {training.period}
                </p>

                {training.duration ? (
                  <p className="mt-1">
                    {training.duration}
                  </p>
                ) : null}
              </>
            }
          >
            <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
              {training.title}
            </h3>

            <p className="mt-3 break-words leading-7 text-muted-foreground [overflow-wrap:anywhere]">
              {training.summary}
            </p>

            <p className="mt-4 break-words text-sm leading-6 text-muted-foreground/80 [overflow-wrap:anywhere]">
              {training.topics.join(" · ")}
            </p>

            {training.credentialUrl ? (
              <a
                href={training.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 ${actionLinkClassName}`}
              >
                View credential

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
              </a>
            ) : null}
          </ContentRow>
        ))}
      </div>
    </HomeSection>
  );
}