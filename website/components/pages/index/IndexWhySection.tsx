import styles from 'styles/index.module.scss';
import { IndexContentContainer } from './IndexContentContainer';
import { IndexWhySectionStep } from './IndexWhySectionStep';

export function IndexWhySection() {
  return (
    <IndexContentContainer className={styles.whyContainer}>
      <div className={styles.textContainer}>
        <h3>Why Genesis?</h3>

        <h1 className="">Easy to use, powerful, and free.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tenetur
          corporis assumenda delectus, cupiditate perferendis vel corrupti dicta
          in quisquam ea nostrum iure unde cumque optio voluptatibus repellat
          iste doloremque.
        </p>
      </div>

      <div className={styles.stepsContainer}>
        <IndexWhySectionStep
          title={'Create a project'}
          number={1}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
        />
        <IndexWhySectionStep
          title={'Generate code'}
          number={2}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
        />
      </div>
    </IndexContentContainer>
  );
}
