import classNames from 'classnames';
import {
  ContentContainer,
  ContentContainerProps,
  CONTENT_MAX_WIDTH
} from 'components/misc/ContentContainer';
import React, { CSSProperties } from 'react';
import { Children } from 'utils/componentTypes';

const DEFAULT_HORIZONTAL_SPACE = 128;

export interface IndexContentContainerProps extends ContentContainerProps {
  /**
   * If the children is a function, padding shall be used instead of margin.
   *
   * The padding styles must be applied to the root child element.
   */
  children:
    | Children['children']
    | ((props: IndexContentContainerChildFnProps) => React.ReactNode);
  usePadding?: boolean;
  horizontalPadding?: number | ((defaultPadding: number) => number);
  verticalPadding?: number;
  className?: string;
  outerClassName?: string;
  ignoreDefaultYPadding?: boolean;
}

export interface IndexContentContainerChildFnProps {
  paddingStyles: Partial<CSSProperties>;
}

export function IndexContentContainer({
  outerClassName,
  tag = 'section',
  children,
  horizontalPadding = DEFAULT_HORIZONTAL_SPACE,
  verticalPadding = 0,
  usePadding,
  className,
  ignoreDefaultYPadding,
  ...props
}: IndexContentContainerProps) {
  const childIsFn = typeof children === 'function';

  if (usePadding && !childIsFn) {
    throw new Error(
      'The usePadding prop is only available when the children prop is a function.'
    );
  }

  if (!usePadding && childIsFn) {
    throw new Error(
      'The children prop is a function, but the usePadding prop is not set.'
    );
  }
  const ySpacingClassName = ignoreDefaultYPadding ? '' : 'py-16';

  const horizontalPaddingValue =
    typeof horizontalPadding === 'function'
      ? horizontalPadding(DEFAULT_HORIZONTAL_SPACE)
      : horizontalPadding;

  return (
    <ContentContainer
      maxWidth={CONTENT_MAX_WIDTH + horizontalPaddingValue * 2}
      tag={tag}
      className={classNames(outerClassName, ySpacingClassName)}
      {...props}
    >
      {usePadding && childIsFn ? (
        children({
          paddingStyles: {
            paddingLeft: horizontalPaddingValue,
            paddingRight: horizontalPaddingValue,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding
          }
        })
      ) : (
        <div
          style={
            usePadding
              ? undefined
              : {
                  marginLeft: horizontalPaddingValue,
                  marginRight: horizontalPaddingValue
                }
          }
          className={className}
        >
          {children}
        </div>
      )}
    </ContentContainer>
  );
}
