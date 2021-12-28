import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexNavbar.module.scss';

export function IndexNavbar() {
  return (
    <IndexContentContainer tag="nav" className={styles.container}>
      <ul className={styles.links}>
        <li>
          <a>Documentation</a>
        </li>
      </ul>
    </IndexContentContainer>
  );
}
