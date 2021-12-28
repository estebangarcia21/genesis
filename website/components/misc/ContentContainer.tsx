import { CSSProperties } from 'react';
import { Children } from 'utils/componentTypes';

export interface ContentContainerProps extends Children {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

export function ContentContainer({
  children,
  className,
  style,
  tag: Tag = 'div'
}: ContentContainerProps) {
  const display = <Tag className="mx-auto max-w-7xl px-8">{children}</Tag>;

  return className || style ? (
    <div className={className} style={style}>
      {display}
    </div>
  ) : (
    display
  );
}
