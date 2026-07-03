import {
  BriefcaseBusiness,
  Code,
  Mail,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/data/site-config";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.githubUrl,
    icon: Code,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: "Email",
    href: siteConfig.email
      ? `mailto:${siteConfig.email}`
      : "",
    icon: Mail,
    external: false,
  },
].filter((item) => item.href.length > 0);

type SocialLinksProps = Readonly<{
  showLabels?: boolean;
}>;

export function SocialLinks({
  showLabels = false,
}: SocialLinksProps) {
  if (socialLinks.length === 0) {
    return null;
  }

  return (
    <ul
      className="flex flex-wrap items-center gap-2"
      aria-label="Social links"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              aria-label={item.label}
              title={item.label}
              className={[
                "inline-flex min-h-10 items-center justify-center gap-2 rounded-full",
                "border border-border bg-surface px-3 text-sm font-medium text-muted-foreground",
                "transition-colors hover:bg-surface-hover hover:text-foreground",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              ].join(" ")}
            >
              <Icon
                className="size-4"
                aria-hidden="true"
                strokeWidth={1.8}
              />

              {showLabels ? (
                <span>{item.label}</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}