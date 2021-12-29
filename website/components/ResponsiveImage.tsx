import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface ResponsiveImageProps {
  /**
   * Static SVG imports are typed as any.
   */
  src: string | StaticImageData | any;
  alt: string;
  width?: ImageProps['width'];
  height?: ImageProps['height'];
  parentTag?: keyof JSX.IntrinsicElements;
}

export function ResponsiveImage({
  alt,
  height = '100%',
  width = '100%',
  src,
  parentTag: ParentTag
}: ResponsiveImageProps) {
  const img = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="fixed"
      objectFit="contain"
    />
  );

  return ParentTag ? <ParentTag>{img}</ParentTag> : img;
}
