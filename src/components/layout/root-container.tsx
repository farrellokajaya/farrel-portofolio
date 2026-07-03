type RootContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function RootContainer({
  children,
  className = "",
}: RootContainerProps) {
  const containerClassName = [
    "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
}