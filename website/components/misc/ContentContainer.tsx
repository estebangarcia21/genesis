export interface ContentContainerProps {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export function ContentContainer({
  children,
  className,
  tag: Tag = 'div'
}: ContentContainerProps) {
  const display = <Tag className="mx-auto max-w-6xl">{children}</Tag>;

  return className ? <div className={className}>{display}</div> : display;
}
