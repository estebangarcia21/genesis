import type { ImageProps } from 'next/image';
import Image from 'next/image';

interface ResponsiveImageProps
  extends Omit<ImageProps, 'layout' | 'objectFit' | 'height' | 'width'> {
  width?: ImageProps['width'];
  height?: ImageProps['height'];
  parentTag?: keyof JSX.IntrinsicElements;
}

export function ResponsiveImage({
  parentTag: ParentTag,
  width = '100%',
  height = '100%',
  ...props
}: ResponsiveImageProps) {
  const img = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      width={width}
      height={height}
      layout="fixed"
      objectFit="contain"
    />
  );

  return ParentTag ? <ParentTag>{img}</ParentTag> : img;
}
