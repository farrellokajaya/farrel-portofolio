import { ArrowUpRight } from "lucide-react";

import { HomeSection, SectionHeading } from "@/components/home/section-layout";
import { trainingItems } from "@/data/training";

export function TrainingSection() {
  return (
    <HomeSection id="training">
      <SectionHeading
        eyebrow="Training"
        title="Courses and professional development"
        description="Courses and focused learning programs that strengthen my skills in software development, data, artificial intelligence, and professional readiness."
      />

      <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
        {trainingItems.map((training) => (
          <article
            key={`${training.provider}-${training.title}`}
            className="grid min-w-0 gap-6 border-b border-neutral-200 py-8 dark:border-neutral-800 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-10"
          >
            <div className="min-w-0 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              <p className="break-words font-medium text-neutral-700 [overflow-wrap:anywhere] dark:text-neutral-300">
                {training.provider}
              </p>

              <p className="mt-1">{training.period}</p>

              {training.duration ? (
                <p className="mt-1">{training.duration}</p>
              ) : null}
            </div>

            <div className="min-w-0 max-w-3xl">
              <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
                {training.title}
              </h3>

              <p className="mt-4 break-words leading-7 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400">
                {training.summary}
              </p>

              <p className="mt-4 break-words text-sm leading-6 text-neutral-500 [overflow-wrap:anywhere] dark:text-neutral-500">
                {training.topics.join(" · ")}
              </p>

              {training.credentialUrl ? (
                <a
                  href={training.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                >
                  View credential

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}