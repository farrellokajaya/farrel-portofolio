"use client";

import {
  useEffect,
  useState,
} from "react";
import { ArrowUp } from "lucide-react";

const VISIBILITY_THRESHOLD = 480;

export function BackToTop() {
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    let animationFrameId: number | null =
      null;

    const updateVisibility = () => {
      animationFrameId = null;

      setIsVisible(
        window.scrollY >
          VISIBILITY_THRESHOLD,
      );
    };

    const scheduleVisibilityUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId =
        window.requestAnimationFrame(
          updateVisibility,
        );
    };

    scheduleVisibilityUpdate();

    window.addEventListener(
      "scroll",
      scheduleVisibilityUpdate,
      { passive: true },
    );

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(
          animationFrameId,
        );
      }

      window.removeEventListener(
        "scroll",
        scheduleVisibilityUpdate,
      );
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={[
        "fixed right-4 bottom-4 z-40 inline-flex size-11 items-center justify-center rounded-full",
        "border border-border-strong bg-background/90 text-foreground shadow-soft backdrop-blur-md",
        "transition-[background-color,transform] hover:-translate-y-1 hover:bg-surface",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
        "sm:right-6 sm:bottom-6",
      ].join(" ")}
    >
      <ArrowUp
        className="size-5"
        aria-hidden="true"
        strokeWidth={1.8}
      />
    </button>
  );
}