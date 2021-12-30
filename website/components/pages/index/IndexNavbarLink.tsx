import Link from 'next/link';
import styles from './IndexNavbarLink.module.scss';

export interface IndexNavbarLinkProps {
  name: string;
  href: string;
}

export function IndexNavbarLink({ href, name }: IndexNavbarLinkProps) {
  return (
    <li>
      <Link href={href}>
        <a className={styles.link}>{name}</a>
      </Link>
    </li>
  );
}
