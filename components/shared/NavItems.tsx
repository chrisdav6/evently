'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerLinks } from '@/constants';

export default function NavItems() {
  const pathName = usePathname();

  return (
    <ul className='flex flex-col w-full items-start gap-5 md:flex-between md:flex-row'>
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;

        return (
          <li
            key={link.label}
            className={`flex-center p-medium-16 whitespace-nowrap ${
              isActive && 'text-primary-500'
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
