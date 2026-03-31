// components/layout/Container.tsx
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-7.5 gap-5 ${className}`}>{children}</div>;
}
