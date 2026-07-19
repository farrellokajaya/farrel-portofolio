import Image from "next/image";

import { HomeSection, SectionHeading } from "@/components/home/section-layout";
import { profileContent, profileDetails } from "@/data/profile";
import { siteConfig } from "@/data/site-config";

export function AboutSection() {
  return (
    <HomeSection id="about" tone="muted">
      <SectionHeading
        eyebrow="About"
        title={profileContent.aboutTitle}
      />

      <div className="mt-10 grid items-start gap-8 sm:mt-12 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
        <div className="mx-auto sm:mx-0">
          <Image
            src={siteConfig.profileImage.src}
            alt={siteConfig.profileImage.alt}
            width={180}
            height={225}
            sizes="(max-width: 639px) 140px, (max-width: 1023px) 160px, 180px"
            className="aspect-[4/5] h-auto w-[140px] rounded-xl border border-neutral-200 object-cover object-top sm:w-[160px] lg:w-[180px] dark:border-neutral-800"
          />
        </div>

        <div className="max-w-3xl">
          <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {profileContent.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

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
    </HomeSection>
  );
}