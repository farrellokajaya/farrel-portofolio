import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";
import { getButtonLinkClassName } from "@/components/ui/link-styles";
import { profileContent } from "@/data/profile";
import { siteConfig } from "@/data/site-config";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    ...siteConfig.socialLinks.linkedin,
    value:
      siteConfig.socialLinks.linkedin.displayValue,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    ...siteConfig.socialLinks.github,
    value:
      siteConfig.socialLinks.github.displayValue,
    icon: FaGithub,
    external: true,
  },
  {
    ...siteConfig.socialLinks.instagram,
    value:
      siteConfig.socialLinks.instagram.displayValue,
    icon: FaInstagram,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <HomeSection
      id="contact"
      tone="muted"
      withBorder={false}
    >
      <div className="grid min-w-0 gap-10 sm:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] xl:gap-20">
        <div className="min-w-0 max-w-2xl">
          <SectionHeading
            eyebrow="Contact"
            title={profileContent.contactTitle}
            description={
              profileContent.contactDescription
            }
          />

          <a
            href={`mailto:${siteConfig.email}`}
            className={`mt-8 ${getButtonLinkClassName(
              {
                variant: "secondary",
              },
            )}`}
          >
            <Mail
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <span>Send an email</span>
          </a>
        </div>

        <div className="min-w-0">
          <div className="border-t border-border">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-start justify-between gap-4 border-b border-border py-5 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-4">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">
                        {contact.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium leading-6 text-foreground [overflow-wrap:anywhere] sm:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/60 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex min-w-0 items-start gap-2 text-sm text-muted-foreground">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0"
            />

            <span className="break-words [overflow-wrap:anywhere]">
              {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}