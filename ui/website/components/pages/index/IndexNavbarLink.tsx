import Link from 'next/link';

export interface IndexNavbarLinkProps {
  name: string;
  href: string;
}

export function IndexNavbarLink({ href, name }: IndexNavbarLinkProps) {
  return (
    <li>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
  );
}
