import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
            Tools and technologies I have used across academic, internship,
            and personal projects.
          </p>
        </div>

        {/* Skill groups */}
        <dl className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-b border-neutral-200 py-6 dark:border-neutral-800 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-10 sm:py-7"
            >
              <dt className="font-medium text-neutral-900 dark:text-neutral-200">
                {group.category}
              </dt>

              <dd className="leading-7 text-neutral-600 dark:text-neutral-400">
                {group.skills.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}