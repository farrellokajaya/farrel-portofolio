"use client";

import { useEffect, useState } from "react";

import {
  navigationItems,
  type NavigationSectionId,
} from "@/data/navigation";

const NAVBAR_OFFSET = 96;
const PAGE_BOTTOM_TOLERANCE = 2;

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

function getSectionFromHash(): NavigationSectionId | null {
  const sectionId = window.location.hash.slice(1);

  return isNavigationSectionId(sectionId)
    ? sectionId
    : null;
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

    let animationFrameId: number | null = null;

    const updateActiveSection = () => {
      animationFrameId = null;

      const scrollPosition =
        window.scrollY + NAVBAR_OFFSET;

      const hasReachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight -
          PAGE_BOTTOM_TOLERANCE;

      if (hasReachedPageBottom) {
        const lastSection = sections.at(-1);

        if (
          lastSection &&
          isNavigationSectionId(lastSection.id)
        ) {
          setActiveSection(lastSection.id);
        }

        return;
      }

      let currentSection: NavigationSectionId =
        "home";

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (sectionTop > scrollPosition) {
          break;
        }

        if (isNavigationSectionId(section.id)) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const scheduleActiveSectionUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId =
        window.requestAnimationFrame(
          updateActiveSection,
        );
    };

    const updateActiveSectionFromHash = () => {
      const sectionFromHash = getSectionFromHash();

      if (sectionFromHash) {
        setActiveSection(sectionFromHash);
      }
    };

    updateActiveSectionFromHash();
    scheduleActiveSectionUpdate();

    window.addEventListener(
      "scroll",
      scheduleActiveSectionUpdate,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      scheduleActiveSectionUpdate,
    );

    window.addEventListener(
      "hashchange",
      updateActiveSectionFromHash,
    );

    window.addEventListener(
      "popstate",
      updateActiveSectionFromHash,
    );

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(
          animationFrameId,
        );
      }

      window.removeEventListener(
        "scroll",
        scheduleActiveSectionUpdate,
      );

      window.removeEventListener(
        "resize",
        scheduleActiveSectionUpdate,
      );

      window.removeEventListener(
        "hashchange",
        updateActiveSectionFromHash,
      );

      window.removeEventListener(
        "popstate",
        updateActiveSectionFromHash,
      );
    };
  }, []);

  return activeSection;
}