import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import { RootContainer } from "@/components/layout/root-container";
import { SocialLinks } from "@/components/layout/social-links";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <RootContainer>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:py-16">
          <section aria-labelledby="footer-profile-title">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex size-10 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background"
                aria-hidden="true"
              >
                {siteConfig.initials}
              </span>

              <div>
                <h2
                  id="footer-profile-title"
                  className="text-base font-semibold text-foreground"
                >
                  {siteConfig.name}
                </h2>

                <p className="text-sm text-muted-foreground">
                  Personal Portfolio
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              Fresh graduate in Informatics Engineering
              focused on full-stack web development,
              backend development, machine learning, and
              data analysis.
            </p>

            <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin
                className="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
                strokeWidth={1.8}
              />

              <span>{siteConfig.location}</span>
            </div>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-foreground">
              Navigation
            </h2>

            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-connect-title">
            <h2
              id="footer-connect-title"
              className="text-sm font-semibold text-foreground"
            >
              Connect
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Open to professional opportunities,
              collaboration, and technology-related
              discussions.
            </p>

            <div className="mt-5">
              <SocialLinks showLabels />
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contact me

              <ArrowUpRight
                className="size-4"
                aria-hidden="true"
                strokeWidth={1.8}
              />
            </Link>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights
            reserved.
          </p>

          <p>
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </RootContainer>
    </footer>
  );
}