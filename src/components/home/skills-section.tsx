import { HomeSection, SectionHeading } from "@/components/home/section-layout";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <HomeSection id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="Tools and technologies I have used across academic, internship, and personal projects."
      />

      <dl className="mt-10 border-t border-border sm:mt-12">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 border-b border-neutral-200 py-6 dark:border-neutral-800 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-10 sm:py-7"
          >
            <dt className="font-medium text-neutral-900 dark:text-neutral-200">
              {group.category}
            </dt>

            <dd className="break-words leading-7 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400">
              {group.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </HomeSection>
  );
}