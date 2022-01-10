import { ResponsiveImage } from 'components/ResponsiveImage';
import styles from './IndexWhySectionStep.module.scss';

export interface IndexWhySectionStepProps {
  imgSrc: string;
  title: string;
  description: string;
}

export function IndexWhySectionStep({
  description,
  title,
  imgSrc
}: IndexWhySectionStepProps) {
  return (
    <div className={styles.container}>
      <ResponsiveImage src={imgSrc} alt="" width={50} height={50} />

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
