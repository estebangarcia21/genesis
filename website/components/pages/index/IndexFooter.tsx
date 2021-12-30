import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexFooter.module.scss';
import { IndexFooterWave } from './IndexFooterWave';

export function IndexFooter() {
  return (
    <div className={styles.waveContainer}>
      <IndexFooterWave />

      <IndexContentContainer
        tag="footer"
        outerClassName={styles.footerContainer}
      >
        <h1>Footer</h1>
      </IndexContentContainer>
    </div>
  );
}
