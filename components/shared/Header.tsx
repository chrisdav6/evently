import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently Logo'
          />
        </Link>

        <div className='flex justify-end gap-3 w-32'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-md' size='lg'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
