import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";
import { actionLinkClassName } from "@/components/ui/link-styles";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <HomeSection id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A selection of projects that reflect my experience in web development and building practical digital products."
      />

      <div className="mt-10 border-t border-border sm:mt-12">
        {featuredProjects.map(
          (project, index) => (
            <article
              key={project.title}
              className="grid min-w-0 gap-5 border-b border-border py-7 sm:py-9 xl:grid-cols-[48px_minmax(0,1fr)_auto] xl:gap-8"
            >
              <p className="text-sm text-muted-foreground/70">
                {String(index + 1).padStart(
                  2,
                  "0",
                )}
              </p>

              <div className="min-w-0 max-w-3xl">
                <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                  <span className="break-words [overflow-wrap:anywhere]">
                    {project.category}
                  </span>

                  <span aria-hidden="true">
                    ·
                  </span>

                  <span>{project.year}</span>

                  <span aria-hidden="true">
                    ·
                  </span>

                  <span>{project.status}</span>
                </div>

                <h3 className="mt-3 break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl break-words leading-7 text-muted-foreground [overflow-wrap:anywhere]">
                  {project.summary}
                </p>

                <p className="mt-4 break-words text-sm leading-6 text-muted-foreground/80 [overflow-wrap:anywhere]">
                  {project.technologies.join(
                    " · ",
                  )}
                </p>
              </div>

              <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 xl:flex-col xl:items-end">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`whitespace-nowrap ${actionLinkClassName}`}
                  >
                    Live site

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                    />
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`whitespace-nowrap ${actionLinkClassName}`}
                  >
                    GitHub

                    <FaGithub
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                    />
                  </a>
                ) : null}
              </div>
            </article>
          ),
        )}
      </div>
    </HomeSection>
  );
}