import Link from "next/link";
import { Download } from "lucide-react";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { RootContainer } from "@/components/layout/root-container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 isolate border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-background/85 backdrop-blur-xl"
        aria-hidden="true"
      />

      <RootContainer>
        <div className="relative z-10 flex h-16 items-center justify-between gap-4">
          <Link
            href="/#home"
            aria-label="Farrel Lokajaya homepage"
            className="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-105">
              {siteConfig.initials}
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm font-semibold text-foreground">
                {siteConfig.name}
              </span>

              <span className="block truncate text-xs text-muted-foreground">
                Portfolio
              </span>
            </span>
          </Link>

          <DesktopNavigation />

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <a
              href={siteConfig.cvUrl}
              download
              className="hidden min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 sm:inline-flex dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
            >
              <Download
                className="size-4 shrink-0"
                aria-hidden="true"
              />
              <span>Download CV</span>
            </a>

            <MobileNavigation />
          </div>
        </div>
      </RootContainer>
    </header>
  );
}