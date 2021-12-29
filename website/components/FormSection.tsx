import { Children } from 'utils/componentTypes';
import Image from 'next/image';
import responsiveImageProps from 'utils/responsiveImageProps';
import styles from './FormSection.module.scss';
import { IoIosArrowDropright } from '@react-icons/all-files/io/IoIosArrowDropright';
import { GrCheckbox } from '@react-icons/all-files/gr/GrCheckbox';
import { GrCheckboxSelected } from '@react-icons/all-files/gr/GrCheckboxSelected';

export interface FormSectionProps extends Children {
  name: string;
  className?: string;
}

export function FormSection({
  children,
  name,
  className = ''
}: FormSectionProps) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>{name}</h1>

      {children}
    </section>
  );
}

export interface FormSectionSubtitleProps {
  name: string;
}

FormSection.Subtitle = function FormSectionSubtitle({
  name
}: FormSectionSubtitleProps) {
  return <h2 className={styles.subtitle}>{name}</h2>;
};

export interface FormSectionTextInput {
  name: string;
  placeholderText?: string;
}

FormSection.TextInput = function FormSectionTextInput({
  name,
  placeholderText = ''
}: FormSectionTextInput) {
  return (
    <>
      <FormSection.Subtitle name={name} />

      <div className={styles.textInput}>
        <IoIosArrowDropright className={styles.icon} />
        <input
          className={styles.field}
          name={name}
          placeholder={placeholderText}
        />
      </div>
    </>
  );
};

export interface FormSectionCardSelectorProps {
  name: string;
  imageSrc: string;
  imageAlt?: string;
  selected?: boolean;
  setSelected?: () => void;
}

FormSection.CardSelector = function FormSectionCardSelector({
  imageSrc,
  imageAlt = '',
  selected,
  setSelected,
  name
}: FormSectionCardSelectorProps) {
  return (
    <button
      className={`p-4 flex-1 border rounded cursor-pointer hover:shadow transition relative ${
        selected ? 'border-blueA' : ''
      }`}
      onClick={() => setSelected && setSelected()}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        {...responsiveImageProps({ height: '35%' })}
      />

      <div className="text-center mt-3">
        <h1 className="text-lg font-medium">{name}</h1>
      </div>

      {selected ? (
        <GrCheckboxSelected className={styles.cardCheckbox} />
      ) : (
        <GrCheckbox className={styles.cardCheckbox} />
      )}
    </button>
  );
};

export interface FormSectionCheckboxProps {
  name: string;
  selected?: boolean;
  setSelected?: () => void;
}

FormSection.Checkbox = function FormSectionCheckbox({
  name,
  selected,
  setSelected
}: FormSectionCheckboxProps) {
  const checkboxProps = {
    onClick: () => setSelected && setSelected(),
    className: styles.checkbox
  };

  return (
    <div className="flex flex-row items-center my-2">
      {selected ? (
        <GrCheckboxSelected {...checkboxProps} />
      ) : (
        <GrCheckbox {...checkboxProps} />
      )}

      <p className="text-sm text-gray-700">{name}</p>
    </div>
  );
};
