import Link from "next/link";
import {
  ArrowDown,
  Download,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { profileContent } from "@/data/profile";
import { siteConfig } from "@/data/site-config";

const actionButtonClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:focus-visible:ring-offset-neutral-950";

const heroSocialLinks = [
  {
    ...siteConfig.socialLinks.github,
    icon: FaGithub,
  },
  {
    ...siteConfig.socialLinks.linkedin,
    icon: FaLinkedinIn,
  },
] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="border-b border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
    >
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span
              className="h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            <span>
              {profileContent.availability}
            </span>
          </div>

          <p className="mb-3 text-base text-neutral-600 dark:text-neutral-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-4 text-xl font-medium text-neutral-700 dark:text-neutral-300 sm:text-2xl">
            {siteConfig.headline}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {profileContent.heroSummary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className={actionButtonClass}
            >
              View Projects

              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>

            <a
              href={siteConfig.cvUrl}
              download
              className={actionButtonClass}
            >
              <Download
                aria-hidden="true"
                className="h-4 w-4"
              />

              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-neutral-600 dark:text-neutral-400">
            {heroSocialLinks.map((socialLink) => {
              const Icon = socialLink.icon;

              return (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-neutral-950 dark:hover:text-white"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                  />

                  {socialLink.label}
                </a>
              );
            })}

            <span className="hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 sm:block" />

            <span className="inline-flex items-center gap-2">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4"
              />

              {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}