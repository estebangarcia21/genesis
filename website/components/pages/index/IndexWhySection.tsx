import styles from 'styles/index.module.scss';
import { IndexContentContainer } from './IndexContentContainer';
import { IndexWhySectionStep } from './IndexWhySectionStep';

export function IndexWhySection() {
  return (
    <IndexContentContainer className={styles.whyContainer}>
      <div className={styles.textContainer}>
        <h3>Why Genesis?</h3>

        <h1 className="">Elimate the burden of long boilerplate in APIs.</h1>

        <p>
          Developers often waste time hours on boilerplate code. Genesis gives
          you the power to quickly get started on your ideas.
        </p>
      </div>

      <div className={styles.stepsContainer}>
        <IndexWhySectionStep
          title={'Rapid innovation'}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
          imgSrc="/images/tree.svg"
        />
        <IndexWhySectionStep
          title={'Scalable documentation'}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
          imgSrc="/images/document.svg"
        />
        <IndexWhySectionStep
          title={'Effortless deployment'}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
          imgSrc="/images/box.svg"
        />
      </div>
    </IndexContentContainer>
  );
}
