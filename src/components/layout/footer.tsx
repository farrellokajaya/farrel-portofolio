import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { siteConfig } from "@/data/site-config";

const footerSocialLinks = [
  {
    ...siteConfig.socialLinks.github,
    icon: FaGithub,
  },
  {
    ...siteConfig.socialLinks.linkedin,
    icon: FaLinkedinIn,
  },
  {
    ...siteConfig.socialLinks.instagram,
    icon: FaInstagram,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="min-w-0">
          <Link
            href="/#home"
            className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            {siteConfig.name}
          </Link>

          <p className="mt-1 break-words text-sm text-neutral-500 [overflow-wrap:anywhere] dark:text-neutral-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-3 text-sm text-neutral-500 dark:text-neutral-400">
          {footerSocialLinks.map((socialLink) => {
            const Icon = socialLink.icon;

            return (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                aria-label={socialLink.label}
                className="transition-colors hover:text-neutral-950 dark:hover:text-white"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </a>
            );
          })}

          <a
            href={`mailto:${siteConfig.email}`}
            className="whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            Email
          </a>

          <Link
            href="/#home"
            className="whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}