import { CSSProperties } from 'react';
import { Children } from 'utils/componentTypes';

export const PAGE_CONTENT_MAX_WIDTH = 1300;

export interface ContentContainerProps extends Children {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  maxWidth?: number;
  style?: CSSProperties;
}

export function ContentContainer({
  children,
  className,
  style,
  maxWidth,
  tag: Tag = 'div'
}: ContentContainerProps) {
  const display = (
    <Tag
      className="mx-auto px-8"
      style={{ maxWidth: maxWidth ? maxWidth : PAGE_CONTENT_MAX_WIDTH }}
    >
      {children}
    </Tag>
  );

  return className || style ? (
    <div className={className} style={style}>
      {display}
    </div>
  ) : (
    display
  );
}
