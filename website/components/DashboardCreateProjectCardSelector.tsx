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
    <div
      className="p-10 flex-1 border rounded cursor-pointer hover:shadow transition"
      onClick={() => setSelected && setSelected(!selected)}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        {...responsiveImageProps({ height: '10%' })}
      />

      <div className="text-center mt-8">
        <h1 className="text-2xl font-medium">{name}</h1>
      </div>
    </div>
  );
}
