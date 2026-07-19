import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  HomeSection,
  SectionHeading,
} from "@/components/home/section-layout";

import { profileContent } from "@/data/profile";
import { siteConfig } from "@/data/site-config";
import { getButtonLinkClassName } from "@/components/ui/link-styles";

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
    value: siteConfig.socialLinks.linkedin.displayValue,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    ...siteConfig.socialLinks.github,
    value: siteConfig.socialLinks.github.displayValue,
    icon: FaGithub,
    external: true,
  },
  {
    ...siteConfig.socialLinks.instagram,
    value: siteConfig.socialLinks.instagram.displayValue,
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
            className={`mt-8 ${getButtonLinkClassName({
              variant: "secondary",
            })}`}
          >
            <Mail
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <span>Send an email</span>
          </a>
        </div>

        <div className="min-w-0">
          <div className="border-t border-neutral-200 dark:border-neutral-800">
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
                      ? "noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-start justify-between gap-4 border-b border-neutral-200 py-5 dark:border-neutral-800"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-4">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-neutral-500 dark:text-neutral-400"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {contact.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium leading-6 text-neutral-900 [overflow-wrap:anywhere] dark:text-neutral-200 sm:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-neutral-600"
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex min-w-0 items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
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