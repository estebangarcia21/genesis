import {
  ContentContainer,
  ContentContainerProps
} from 'components/misc/ContentContainer';
import React from 'react';

const TOP_PADDING = 64;

interface IndexContentContainerProps extends ContentContainerProps {
  ignoreTopPadding?: boolean;
}

export function IndexContentContainer({
  style,
  ignoreTopPadding,
  ...rest
}: IndexContentContainerProps) {
  return (
    <ContentContainer
      style={{ paddingTop: ignoreTopPadding ? undefined : TOP_PADDING }}
      {...rest}
    />
  );
}
