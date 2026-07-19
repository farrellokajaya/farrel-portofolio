import Link from "next/link";
import { Download } from "lucide-react";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { RootContainer } from "@/components/layout/root-container";
import { getButtonLinkClassName } from "@/components/ui/link-styles";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 isolate border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-background/90 backdrop-blur-xl"
        aria-hidden="true"
      />

      <RootContainer>
        <div className="relative z-10 flex h-16 items-center justify-between gap-4">
          <Link
            href="/#home"
            aria-label={`${siteConfig.name} homepage`}
            className="group inline-flex min-w-0 items-center gap-3 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-105">
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
              className={`hidden whitespace-nowrap sm:inline-flex ${getButtonLinkClassName(
                {
                  radius: "full",
                  size: "sm",
                  variant: "primary",
                },
              )}`}
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