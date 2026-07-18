import type { MouseEvent } from "react";

import type { NavigationSectionId } from "@/data/navigation";

export function handleSameSectionNavigation(
  event: MouseEvent<HTMLAnchorElement>,
  sectionId: NavigationSectionId,
) {
  const targetHash = `#${sectionId}`;

  if (window.location.hash !== targetHash) {
    return;
  }

  const targetSection =
    document.getElementById(sectionId);

  if (!targetSection) {
    return;
  }

  event.preventDefault();

  window.requestAnimationFrame(() => {
    targetSection.scrollIntoView({
      block: "start",
    });
  });
}