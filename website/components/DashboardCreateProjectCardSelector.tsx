import Image from 'next/image';
import responsiveImageProps from 'utils/responsiveImageProps';

export interface DashboardCreateProjectCardSelectorProps {
  name: string;
  imageSrc: string;
  imageAlt?: string;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export function DashboardCreateProjectCardSelector({
  imageSrc,
  imageAlt = '',
  selected,
  setSelected,
  name
}: DashboardCreateProjectCardSelectorProps) {
  return (
    <div className="p-6" onClick={() => setSelected && setSelected(!selected)}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        {...responsiveImageProps({ height: '100%', width: '100%' })}
      />

      <div className="text-center">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
    </div>
  );
}
