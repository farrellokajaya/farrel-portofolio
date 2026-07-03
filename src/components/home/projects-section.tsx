import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>

          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
            A selection of projects that reflect my experience in web
            development and building practical digital products.
          </p>
        </div>

        {/* Project list */}
        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-5 border-b border-neutral-200 py-8 dark:border-neutral-800 md:grid-cols-[48px_minmax(0,1fr)_auto] md:gap-8 md:py-10"
            >
              {/* Project number */}
              <p className="text-sm text-neutral-400 dark:text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* Project information */}
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{project.category}</span>

                  <span aria-hidden="true">·</span>

                  <span>{project.year}</span>

                  <span aria-hidden="true">·</span>

                  <span>{project.status}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.summary}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-500 dark:text-neutral-500">
                  {project.technologies.join(" · ")}
                </p>
              </div>

              {/* Project links */}
              <div className="flex items-start gap-5 md:flex-col md:items-end">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                  >
                    Live site
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                  >
                    GitHub
                    <FaGithub aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}