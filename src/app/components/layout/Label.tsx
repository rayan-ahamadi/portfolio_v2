type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className = "" }: LabelProps) {
  return (
    <label className={"label text-[length:var(--fluid-label)] " + className}>
      {children}
    </label>
  );
}
