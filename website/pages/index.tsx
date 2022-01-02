import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { IndexContentContainer } from 'components/pages/index/IndexContentContainer';
import { IndexFooter } from 'components/pages/index/IndexFooter';
import { IndexNavbar } from 'components/pages/index/IndexNavbar';
import { IndexWhySection } from 'components/pages/index/IndexWhySection';
import { ResponsiveImage } from 'components/ResponsiveImage';
import type { NextPage } from 'next';
import styles from 'styles/index.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <title>Genesis</title>

      <main>
        <IndexContentContainer
          outerClassName={styles.header}
          ignoreDefaultYPadding
        >
          <IndexNavbar />

          <div className={styles.container}>
            <div className={styles.content}>
              <h1>
                Build better.
                <br />
                Build faster.
              </h1>

              <h2>
                Genesis gives you the power to quickly get started on your
                ideas. Ignore the hours-long setup and get right to work with
                your generated project.
              </h2>

              <div className={styles.buttons}>
                <button className={styles.lightBlueButton}>
                  Build your API
                </button>

                <h2 className={styles.subtleText}>NO ACCOUNT NEEDED</h2>
              </div>
            </div>

            <div className={styles.graphic}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/transact.svg" alt="" />
            </div>
          </div>
        </IndexContentContainer>

        <IndexWhySection />

        <IndexContentContainer usePadding verticalPadding={76}>
          {({ paddingStyles }) => (
            <div className={styles.expressInfoContainer} style={paddingStyles}>
              <div>
                <h1 className={styles.fileName}>User.ts</h1>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/code/express-example-dark.svg" alt="" />
              </div>

              <div className={styles.info}>
                <h1>Generate an ExpressJS project template</h1>

                <h2>
                  Generate all the basic API requirements for an ExpressJS
                  application without the setup and boilerplate.
                </h2>

                <button className={styles.externalButton}>
                  Explore an example
                </button>
              </div>
            </div>
          )}
        </IndexContentContainer>

        <IndexContentContainer
          ignoreDefaultYPadding
          className={styles.frameworksContainer}
        >
          <div className={styles.title}>
            <h1>
              We{' '}
              <span className={styles.icon}>
                <AiFillHeart aria-label="love" />
              </span>{' '}
              open source
            </h1>
          </div>

          <h2 className={styles.subtitle}>
            We strive to empower developers to build the best possible. <br />
            As such, we are constantly working on supporting the most popular
            open source technologies.
          </h2>

          <div className={styles.frameworksImages}>
            <ResponsiveImage
              parentTag="div"
              src="/images/frameworks/nextjs-circle.svg"
              alt=""
              height={35}
              width={35}
            />
            <ResponsiveImage
              parentTag="div"
              src="/images/frameworks/rest-api.png"
              alt=""
              height={35}
              width={35}
            />
          </div>
        </IndexContentContainer>

        <IndexFooter />
      </main>
    </div>
  );
};

export default Home;
