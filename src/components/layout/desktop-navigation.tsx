"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";
import { isActivePath } from "@/utils/is-active-path";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:block"
      aria-label="Primary navigation"
    >
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const isActive = isActivePath(
            pathname,
            item.href,
          );

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  isActive ? "page" : undefined
                }
                className={[
                  "inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  isActive
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}