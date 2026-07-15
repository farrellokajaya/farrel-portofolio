"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { useActiveSection } from "@/hooks/use-active-section";

export function MobileNavigation() {
  const navigationId = useId();
  const activeSection = useActiveSection();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls={navigationId}
        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Menu
          className="size-5"
          aria-hidden="true"
          strokeWidth={1.8}
        />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            onClick={closeNavigation}
            aria-label="Close navigation menu"
            className="absolute inset-0 z-0 cursor-default bg-black/55 backdrop-blur-sm"
          />

          <div
            id={navigationId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 z-10 flex h-dvh w-full flex-col overflow-hidden border-l border-border bg-background shadow-2xl sm:max-w-sm"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Navigation
                </p>

                <p className="text-xs text-muted-foreground">
                  Farrel Lokajaya
                </p>
              </div>

              <button
                type="button"
                onClick={closeNavigation}
                aria-label="Close navigation menu"
                autoFocus
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <X
                  className="size-5"
                  aria-hidden="true"
                  strokeWidth={1.8}
                />
              </button>
            </div>

            <nav
              className="min-h-0 flex-1 overflow-y-auto px-5 py-6"
              aria-label="Mobile primary navigation"
            >
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const isActive =
                    activeSection ===
                    item.sectionId;

                  return (
                    <li key={item.sectionId}>
                      <Link
                        href={item.href}
                        onClick={closeNavigation}
                        aria-current={
                          isActive
                            ? "location"
                            : undefined
                        }
                        className={[
                          "flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-medium transition-colors",
                          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-surface hover:text-foreground",
                        ].join(" ")}
                      >
                        <span>{item.label}</span>

                        {isActive ? (
                          <span
                            className="size-2 rounded-full bg-current"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-border p-5">
              <a
                href={siteConfig.cvUrl}
                download
                onClick={closeNavigation}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Download
                  className="size-4"
                  aria-hidden="true"
                />
                Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}