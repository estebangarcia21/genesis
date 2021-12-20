import type { ImageProps } from 'next/image';

export default function responsiveImageProps(
  dimensions?: Pick<ImageProps, 'width' | 'height'>
): Partial<ImageProps> {
  return {
    layout: 'responsive',
    objectFit: 'contain',
    width: dimensions?.width || '100%',
    height: dimensions?.height || '100%'
  };
}
