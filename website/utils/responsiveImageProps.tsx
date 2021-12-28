import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { CSSProperties } from 'react';

export default function responsiveImageProps(
  dimensions?: Pick<ImageProps, 'width' | 'height'>
): Partial<ImageProps> {
  return {
    layout: 'fixed',
    objectFit: 'contain',
    width: dimensions?.width || '100%',
    height: dimensions?.height || '100%'
  };
}

interface ResponsiveImageProps {
  /**
   * Static SVG imports are typed as any.
   */
  src: string | StaticImageData | any;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

export function ResponsiveImage({
  className = '',
  style,
  alt,
  src
}: ResponsiveImageProps) {
  return (
    <div className={`relative ${className}`} style={style}>
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
}
