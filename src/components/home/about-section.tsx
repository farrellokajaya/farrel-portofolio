import Image from "next/image";

const profileDetails = [
  {
    label: "Background",
    value: "Informatics Engineering",
  },
  {
    label: "Experience",
    value: "Web Developer Intern",
  },
  {
    label: "Focus",
    value: "Web Development & Data",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-neutral-200 bg-neutral-50 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A little about me
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-10 grid items-start gap-8 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
          {/* Small profile photo */}
          <div className="mx-auto sm:mx-0">
            <Image
              src="/images/profile/farrel-profile.jpg"
              alt="Portrait of Farrel Lokajaya"
              width={180}
              height={225}
              sizes="(max-width: 639px) 140px, (max-width: 1023px) 160px, 180px"
              className="aspect-[4/5] h-auto w-[140px] rounded-xl border border-neutral-200 object-cover object-top sm:w-[160px] lg:w-[180px] dark:border-neutral-800"
            />
          </div>

          {/* About content */}
          <div className="max-w-3xl">
            <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              <p>
                I&apos;m a fresh graduate in Informatics Engineering with an
                interest in building useful and accessible web applications.
                I enjoy working across web development, data analysis, and
                machine learning.
              </p>

              <p>
                During my internship at Nutrifood, I gained experience working
                with Django, admin dashboards, and data visualization. I also
                continue developing personal projects to strengthen my
                full-stack development and problem-solving skills.
              </p>

              <p>
                I value clean implementation, practical solutions, and
                continuous learning. I&apos;m currently looking for an
                opportunity where I can contribute while continuing to grow as
                a developer.
              </p>
            </div>

            {/* Supporting details */}
            <dl className="mt-8 grid gap-6 border-t border-neutral-200 pt-6 sm:grid-cols-3 dark:border-neutral-800">
              {profileDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm text-neutral-500 dark:text-neutral-500">
                    {detail.label}
                  </dt>

                  <dd className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}