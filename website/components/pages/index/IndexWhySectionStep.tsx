import styles from './IndexWhySectionStep.module.scss';

export interface IndexWhySectionStepProps {
  number: number;
  title: string;
  description: string;
}

export function IndexWhySectionStep({
  description,
  number,
  title
}: IndexWhySectionStepProps) {
  return (
    <div className={styles.container}>
      <h3>{number}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
