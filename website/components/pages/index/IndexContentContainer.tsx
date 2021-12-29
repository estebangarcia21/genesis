import classNames from 'classnames';
import {
  ContentContainer,
  ContentContainerProps,
  CONTENT_MAX_WIDTH
} from 'components/misc/ContentContainer';
import React, { CSSProperties } from 'react';
import { Children } from 'utils/componentTypes';

const HORIZONTAL_MARGIN = 128;
const MAX_WIDTH = CONTENT_MAX_WIDTH + HORIZONTAL_MARGIN * 2;

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
  verticalPadding?: number;
  childClassname?: string;
  ignoreDefaultYSpacing?: boolean;
}

export type IndexContentContainerChildFnProps = {
  paddingStyles: Partial<CSSProperties>;
};

export function IndexContentContainer({
  className,
  tag = 'section',
  children,
  verticalPadding = 0,
  usePadding,
  childClassname,
  ignoreDefaultYSpacing,
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

  const ySpacingClassname = ignoreDefaultYSpacing ? '' : 'py-16';

  return (
    <ContentContainer
      maxWidth={MAX_WIDTH}
      tag={tag}
      className={classNames(className, ySpacingClassname)}
      {...props}
    >
      {usePadding && childIsFn ? (
        children({
          paddingStyles: {
            paddingLeft: HORIZONTAL_MARGIN,
            paddingRight: HORIZONTAL_MARGIN,
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
                  marginLeft: HORIZONTAL_MARGIN,
                  marginRight: HORIZONTAL_MARGIN
                }
          }
          className={childClassname}
        >
          {children}
        </div>
      )}
    </ContentContainer>
  );
}
