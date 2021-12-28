import React, { CSSProperties } from 'react';
import {
  ContentContainer,
  ContentContainerProps
} from 'components/misc/ContentContainer';
import { Children } from 'utils/componentTypes';
import styles from 'styles/index.module.scss';

const HORIZONTAL_MARGIN = 64;

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
  verticalPadding?: boolean;
}

export type IndexContentContainerChildFnProps = {
  paddingStyles: Partial<CSSProperties>;
};

export function IndexContentContainer({
  className = 'py-16',
  tag = 'section',
  children,
  verticalPadding,
  usePadding,
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

  return (
    <ContentContainer tag={tag} className={className} {...props}>
      {usePadding && childIsFn ? (
        children({
          paddingStyles: {
            paddingLeft: HORIZONTAL_MARGIN,
            paddingRight: HORIZONTAL_MARGIN,
            paddingTop: verticalPadding ? '64px' : 0,
            paddingBottom: verticalPadding ? '64px' : 0
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
        >
          {children}
        </div>
      )}
    </ContentContainer>
  );
}
