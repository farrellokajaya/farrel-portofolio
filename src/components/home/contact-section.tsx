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
    <section
      id="contact"
      className="scroll-mt-24 bg-neutral-50 text-neutral-950 dark:bg-neutral-900/30 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {profileContent.contactTitle}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              {profileContent.contactDescription}
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-900 dark:focus-visible:ring-offset-neutral-950"
            >
              <Mail
                aria-hidden="true"
                className="h-4 w-4"
              />

              Send an email
            </a>
          </div>

          <div>
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
                    className="group flex items-center justify-between gap-5 border-b border-neutral-200 py-5 dark:border-neutral-800"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-neutral-500 dark:text-neutral-400"
                      />

                      <div className="min-w-0">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {contact.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-neutral-900 dark:text-neutral-200 sm:text-base">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-neutral-600"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4"
              />

              {siteConfig.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}