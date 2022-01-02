import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexFooter.module.scss';

export function IndexFooter() {
  return (
    <IndexContentContainer
      tag="footer"
      outerClassName={styles.footerContainer}
      ignoreDefaultYPadding
    >
      <div className={styles.skewContainer}>
        <div className="w-full bg-gradient-to-r from-blue-300 to-violet-300 h-2 -translate-y-1/2" />
      </div>

      <div className={styles.content}>
        <h1>Genesis</h1>
        <h2>The Platform for Rapid API Development</h2>
      </div>
    </IndexContentContainer>
  );
}
