type RootContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function RootContainer({
  children,
  className = "",
}: RootContainerProps) {
  const containerClassName = [
    "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
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