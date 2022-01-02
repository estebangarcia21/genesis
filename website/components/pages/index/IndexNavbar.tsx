import { ResponsiveImage } from 'components/ResponsiveImage';
import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexNavbar.module.scss';
import { IndexNavbarLink } from './IndexNavbarLink';

export function IndexNavbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.linksContainer}>
        <ul className={styles.links}>
          <ResponsiveImage
            parentTag="div"
            src="/images/frameworks/nextjs-circle.svg"
            alt=""
            height={35}
            width={35}
          />

          <IndexNavbarLink name="Documentation" href="/documentation" />
          <IndexNavbarLink name="Explore" href="/explore" />
          <IndexNavbarLink name="Company" href="https://github.com" />
        </ul>

        <div className={styles.buttonsContainer}>
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign up</button>
        </div>
      </ul>
    </nav>
  );
}
