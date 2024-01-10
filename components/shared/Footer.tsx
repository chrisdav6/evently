import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex flex-col gap-4 p-5 flex-center wrapper flex-between text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently Logo'
          />
        </Link>

        <p>2024 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
}
