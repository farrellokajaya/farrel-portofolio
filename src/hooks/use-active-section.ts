"use client";

import { useEffect, useState } from "react";

import {
  navigationItems,
  type NavigationSectionId,
} from "@/data/navigation";

const navigationSectionIds = navigationItems.map(
  (item) => item.sectionId,
);

function isNavigationSectionId(
  value: string,
): value is NavigationSectionId {
  return navigationSectionIds.some(
    (sectionId) => sectionId === value,
  );
}

export function useActiveSection(): NavigationSectionId {
  const [activeSection, setActiveSection] =
    useState<NavigationSectionId>("home");

  useEffect(() => {
    const sections = navigationSectionIds
      .map((sectionId) =>
        document.getElementById(sectionId),
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      );

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Map<
      string,
      IntersectionObserverEntry
    >();

    const updateActiveSectionFromHash = () => {
      const sectionId = window.location.hash.slice(1);

      if (isNavigationSectionId(sectionId)) {
        setActiveSection(sectionId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(
              entry.target.id,
              entry,
            );
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const closestSection = [
          ...visibleSections.values(),
        ].sort(
          (firstEntry, secondEntry) =>
            Math.abs(
              firstEntry.boundingClientRect.top - 80,
            ) -
            Math.abs(
              secondEntry.boundingClientRect.top - 80,
            ),
        )[0];

        if (
          closestSection &&
          isNavigationSectionId(
            closestSection.target.id,
          )
        ) {
          setActiveSection(closestSection.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -65% 0px",
        threshold: [0, 0.1, 0.25],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    updateActiveSectionFromHash();

    window.addEventListener(
      "hashchange",
      updateActiveSectionFromHash,
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "hashchange",
        updateActiveSectionFromHash,
      );
    };
  }, []);

  return activeSection;
}