import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexWhySection.module.scss';
import { IndexWhySectionStep } from './IndexWhySectionStep';

const code = `\
@set database = mongodb

@model User {
  id Number = 0 << PrimaryKey, AutoIncrement;
  firstName String;
  lastName  String;
  purchases Purchase[];
}

@model Purchase {
  id Number = 0 << PrimaryKey, AutoIncrement;
}

@model Admin extends User {
  id Number = 0 << PrimaryKey, AutoIncrement;
  privelageHistory String[];
}
`;

function CodeWindow() {
  return (
    <div className={styles.codeWindow}>
      <div className={styles.header}>
        <h1>MyProject.gen</h1>
      </div>

      <div className={styles.codeArea}>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function IndexWhySection() {
  return (
    <IndexContentContainer className={styles.container}>
      <div className={styles.skew} />

      <div className={styles.content}>
        <div className={styles.overviewContainer}>
          <div className={styles.textContainer}>
            <h3>Why Genesis?</h3>

            <h1>Eliminate the repetitiveness in your APIs.</h1>

            <p>
              API development is a tedious and repetitive process. Genesis gives
              you the power to quickly get started on your APIs.
            </p>
          </div>

          <div className={styles.stepsContainer}>
            <IndexWhySectionStep
              title={'Rapid innovation'}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
              imgSrc="/images/tree.svg"
            />
            <IndexWhySectionStep
              title={'Effortless deployment'}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora."
              imgSrc="/images/box.svg"
            />
          </div>
        </div>

        <div className={styles.codeContainer}>
          <CodeWindow />
        </div>
      </div>
    </IndexContentContainer>
  );
}
