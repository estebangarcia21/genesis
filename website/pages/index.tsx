import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { IndexContentContainer } from 'components/pages/index/IndexContentContainer';
import { IndexNavbar } from 'components/pages/index/IndexNavbar';
import { ResponsiveImage } from 'components/ResponsiveImage';
import type { NextPage } from 'next';
import styles from 'styles/index.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <title>Genesis</title>

      <main>
        <IndexNavbar />

        <IndexContentContainer className={styles.header}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>Quickstart your project ideas.</h1>

              <h2>
                Genesis gives you the power to quickly get started on your
                ideas. Ignore the hours-long setup and get right to work with
                your generated project.
              </h2>

              <div className={styles.buttons}>
                <button className={styles.lightBlueButton}>
                  Generate your project
                </button>

                <h2 className={styles.subtleText}>NO ACCOUNT NEEDED</h2>
              </div>
            </div>

            <div className={styles.graphic}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/server.svg" alt="" />
            </div>
          </div>
        </IndexContentContainer>

        <IndexContentContainer
          ignoreDefaultYSpacing
          childClassname={styles.frameworksContainer}
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
            Bring your ideas to life using the best open source frameworks by
            the community.
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
      </main>
    </div>
  );
};

export default Home;
