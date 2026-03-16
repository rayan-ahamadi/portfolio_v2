type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Label({ children, className = "" }: LabelProps) {
  return <label className={"label " + className}>{children}</label>;
}
