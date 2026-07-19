import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { RootContainer } from "@/components/layout/root-container";
import { actionLinkClassName } from "@/components/ui/link-styles";
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
    <footer className="border-t border-border bg-background text-foreground">
      <RootContainer className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <Link
            href="/#home"
            className="inline-flex rounded-control text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          >
            {siteConfig.name}
          </Link>

          <p className="mt-1 break-words text-sm text-muted-foreground [overflow-wrap:anywhere]">
            © {currentYear} {siteConfig.name}. All
            rights reserved.
          </p>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-1 text-muted-foreground">
          {footerSocialLinks.map(
            (socialLink) => {
              const Icon =
                socialLink.icon;

              return (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${socialLink.label} profile`}
                  title={socialLink.label}
                  className="inline-flex size-10 items-center justify-center rounded-control transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </a>
              );
            },
          )}

          <a
            href={`mailto:${siteConfig.email}`}
            className={actionLinkClassName}
          >
            Email
          </a>
        </div>
      </RootContainer>
    </footer>
  );
}