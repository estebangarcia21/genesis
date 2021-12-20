export interface ContainerProps {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export function Container({
  children,
  className,
  tag: Tag = 'div'
}: ContainerProps) {
  const display = <Tag className="mx-auto max-w-6xl">{children}</Tag>;

  return className ? <div className={className}>{display}</div> : display;
}
