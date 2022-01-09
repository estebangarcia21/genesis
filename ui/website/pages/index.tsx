import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { ContentContainer } from 'components/misc/ContentContainer';
import { IndexContentContainer } from 'components/pages/index/IndexContentContainer';
import { IndexFooter } from 'components/pages/index/IndexFooter';
import { IndexFrameworkSpotlight } from 'components/pages/index/IndexFrameworkSpotlight';
import { IndexNavbar } from 'components/pages/index/IndexNavbar';
import { IndexWhySection } from 'components/pages/index/IndexWhySection';
import { ResponsiveImage } from 'components/ResponsiveImage';
import type { NextPage } from 'next';
import styles from 'styles/index.module.scss';
import { useResponsiveValue } from 'utils/useResponsiveValue';

const Home: NextPage = () => {
  const expressCodeImagePath = useResponsiveValue(
    '/images/code/express-example-mobile.svg',
    { xl: '/images/code/express-example-desktop.svg' }
  );

  return (
    <div>
      <title>Genesis</title>

      <main>
        <ContentContainer className={styles.header}>
          <IndexNavbar />

          <div className={styles.container}>
            <div className={styles.content}>
              <h1>
                Build smarter.
                <br />
                Build better.
              </h1>

              <h2>
                Genesis gives you the power to quickly get started on your
                APIs. Ignore the long tedious setup and get right to work with
                the tools Genesis provides.
              </h2>

              <div className={styles.buttons}>
                <button className={styles.button}>Build your API</button>

                <h2 className={styles.subtleText}>NO ACCOUNT NEEDED</h2>
              </div>
            </div>

            <div className={styles.graphic}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/transact-indigo.svg" alt="" />
            </div>
          </div>
        </ContentContainer>

        <IndexWhySection />

        <IndexFrameworkSpotlight
          title="Scale efficiently with a managed ExpressJS API"
          description="Generate all the necessary API routes for your program model using the Genesis API SDL. Add authorization and validation to your API routes in just a few lines of code."
          imgSrc={expressCodeImagePath}
          category="Project development tools"
        />

        <IndexContentContainer className={styles.frameworksContainer}>
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
            We strive to empower developers to build with the best possible productivity. <br />
            As such, we are constantly working on supporting the latest
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
