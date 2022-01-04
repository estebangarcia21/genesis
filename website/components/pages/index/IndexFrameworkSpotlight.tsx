import { PAGE_CONTENT_MAX_WIDTH } from 'components/misc/ContentContainer';
import { useResponsiveValue } from 'utils/useResponsiveValue';
import { IndexContentContainer } from './IndexContentContainer';
import styles from './IndexFrameworkSpotlight.module.scss';

export type IndexFrameworkSpotlightCategory = 'Project development tools';

export interface IndexFrameworkSpotlightProps {
  title: string;
  description: string;
  imgSrc: string;
  category: IndexFrameworkSpotlightCategory;
}

export function IndexFrameworkSpotlight({
  description,
  imgSrc,
  title,
  category
}: IndexFrameworkSpotlightProps) {
  const xPadding = useResponsiveValue(32, { md: 60, lg: 120 });
  const yPadding = useResponsiveValue(40, { md: 45, lg: 90 });

  return (
    <IndexContentContainer maxWidth={PAGE_CONTENT_MAX_WIDTH + xPadding * 2}>
      <div
        className={styles.container}
        style={{
          paddingLeft: xPadding,
          paddingRight: xPadding,
          paddingTop: yPadding,
          paddingBottom: yPadding
        }}
      >
        <div className={styles.subtitle}>
          <h3>{category}</h3>
          <hr />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h1>{title}</h1>

            <h2>{description}</h2>

            <button className={styles.externalButton}>Get started</button>
          </div>

          <div className={styles.imageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </IndexContentContainer>
  );
}
