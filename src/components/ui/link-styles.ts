type ButtonLinkVariant =
  | "primary"
  | "secondary";

type ButtonLinkSize =
  | "sm"
  | "md";

type ButtonLinkRadius =
  | "control"
  | "full";

type ButtonLinkOptions = Readonly<{
  fullWidth?: boolean;
  radius?: ButtonLinkRadius;
  size?: ButtonLinkSize;
  variant?: ButtonLinkVariant;
}>;

export function getButtonLinkClassName({
  fullWidth = false,
  radius = "control",
  size = "md",
  variant = "secondary",
}: ButtonLinkOptions = {}) {
  return [
    "inline-flex items-center justify-center gap-2 font-medium",
    "transition-[background-color,border-color,color,opacity]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
    size === "sm"
      ? "min-h-10 px-4 text-sm"
      : "min-h-12 px-5 py-3 text-sm",
    radius === "full"
      ? "rounded-full"
      : "rounded-control",
    fullWidth ? "w-full" : "",
    variant === "primary"
      ? "border border-foreground bg-foreground text-background hover:opacity-80"
      : "border border-border-strong bg-background text-foreground hover:border-border-strong hover:bg-surface",
  ]
    .filter(Boolean)
    .join(" ");
}

export const actionLinkClassName = [
  "inline-flex min-h-10 items-center gap-2 rounded-control px-2",
  "text-sm font-medium text-muted-foreground",
  "transition-colors hover:bg-surface hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
].join(" ");