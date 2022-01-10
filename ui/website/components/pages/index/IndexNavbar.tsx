import { ResponsiveImage } from 'components/ResponsiveImage';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './IndexNavbar.module.scss';
import { IndexNavbarLink } from './IndexNavbarLink';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { BiExit } from '@react-icons/all-files/bi/BiExit';

function ExternalLinks() {
  return (
    <>
      <IndexNavbarLink name="Documentation" href="/documentation" />
      <IndexNavbarLink name="Explore" href="/explore" />
      <IndexNavbarLink name="Company" href="https://github.com" />
    </>
  );
}

function DesktopContent() {
  return (
    <div className={styles.desktopContainer}>
      <ul className={styles.links}>
        <ResponsiveImage
          parentTag="div"
          src="/genesis_logo.svg"
          alt=""
          height={35}
          width={35}
        />

        <ExternalLinks />
      </ul>

      <div className={styles.buttonsContainer}>
        <button className={styles.loginButton}>Log in</button>
        <button className={styles.signupButton}>Sign up</button>
      </div>
    </div>
  );
}

interface MobileNavbarState {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

function MobileContent({ isOpened, setIsOpened }: MobileNavbarState) {
  return (
    <div className={styles.mobileContainer}>
      <GiHamburgerMenu
        className={styles.menuIcon}
        onClick={() => setIsOpened(true)}
      />

      {isOpened && (
        <div className={styles.content}>
          <ul>
            <ExternalLinks />
          </ul>

          <BiExit
            className={styles.exitIcon}
            onClick={() => setIsOpened(false)}
          />
        </div>
      )}
    </div>
  );
}

export function IndexNavbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className={styles.container}>
      <DesktopContent />
      <MobileContent isOpened={isOpened} setIsOpened={setIsOpened} />
    </nav>
  );
}
