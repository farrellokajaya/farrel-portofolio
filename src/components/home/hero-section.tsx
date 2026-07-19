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

import { RootContainer } from "@/components/layout/root-container";
import { getButtonLinkClassName } from "@/components/ui/link-styles";
import { profileContent } from "@/data/profile";
import { siteConfig } from "@/data/site-config";

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
      className="border-b border-border bg-background text-foreground"
    >
      <RootContainer className="flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="min-w-0 max-w-3xl">
          <div className="mb-8 flex min-w-0 items-start gap-2 text-sm text-muted-foreground">
            <span
              className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            <span className="min-w-0 break-words [overflow-wrap:anywhere]">
              {profileContent.availability}
            </span>
          </div>

          <p className="mb-3 text-base text-muted-foreground">
            Hello, I&apos;m
          </p>

          <h1 className="break-words text-balance text-4xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <h2 className="mt-4 break-words text-balance text-xl font-medium text-foreground/80 [overflow-wrap:anywhere] sm:text-2xl">
            {siteConfig.headline}
          </h2>

          <p className="mt-6 max-w-2xl break-words text-pretty text-base leading-8 text-muted-foreground [overflow-wrap:anywhere] sm:text-lg">
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

          <div className="mt-8 flex min-w-0 flex-wrap items-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
            {heroSocialLinks.map(
              (socialLink) => {
                const Icon =
                  socialLink.icon;

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-control transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0"
                    />

                    <span>
                      {socialLink.label}
                    </span>
                  </a>
                );
              },
            )}

            <span className="hidden h-4 w-px bg-border-strong sm:block" />

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
      </RootContainer>
    </section>
  );
}