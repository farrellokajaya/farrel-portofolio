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
import { getButtonLinkClassName } from "@/components/ui/link-styles";


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
        <div className="min-w-0 max-w-3xl">
          <div className="mb-8 flex min-w-0 items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span
              className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            <span className="min-w-0 break-words [overflow-wrap:anywhere]">
              {profileContent.availability}
            </span>
          </div>

          <p className="mb-3 text-base text-neutral-600 dark:text-neutral-400">
            Hello, I&apos;m
          </p>

          <h1 className="break-words text-4xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-4 break-words text-xl font-medium text-neutral-700 [overflow-wrap:anywhere] dark:text-neutral-300 sm:text-2xl">
            {siteConfig.headline}
          </h2>

          <p className="mt-6 max-w-2xl break-words text-base leading-8 text-neutral-600 [overflow-wrap:anywhere] dark:text-neutral-400 sm:text-lg">
            {profileContent.heroSummary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#projects"
              className={getButtonLinkClassName({
                variant: "secondary",
              })}
            >
              <span>View Projects</span>

              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              />
            </Link>

            <a
              href={siteConfig.cvUrl}
              download
              className={getButtonLinkClassName({
                variant: "secondary",
              })}
            >
              <Download
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              />

              <span>Download CV</span>
            </a>
          </div>

          <div className="mt-8 flex min-w-0 flex-wrap items-center gap-x-6 gap-y-4 text-sm text-neutral-600 dark:text-neutral-400">
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
                    className="h-5 w-5 shrink-0"
                  />

                  <span>{socialLink.label}</span>
                </a>
              );
            })}

            <span className="hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 sm:block" />

            <span className="inline-flex min-w-0 items-start gap-2">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0"
              />

              <span className="break-words [overflow-wrap:anywhere]">
                {siteConfig.location}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}