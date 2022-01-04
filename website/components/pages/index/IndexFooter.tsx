import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexFooter.module.scss';

export function IndexFooter() {
  return (
    <div className={styles.footerContainer}>
      <IndexContentContainer tag="footer" ignoreTopPadding>
        <div className={styles.skewContainer}>
          <div className="w-full bg-gradient-to-r from-blue-300 to-violet-300 h-2 -translate-y-1/2" />
        </div>

        <div className={styles.content}>
          <h1>Genesis</h1>
          <h2>The Framework for Modern API Development</h2>
        </div>
      </IndexContentContainer>
    </div>
  );
}
