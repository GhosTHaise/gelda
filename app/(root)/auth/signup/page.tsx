import Link from 'next/link'
import { ChromeIcon, GithubIcon } from 'lucide-react'

import SignupFormComponent from '@/components/root/auth/signup-form-component'
import SocialAuthComponent from '@/components/root/auth/social-auth-component'

export default function Register() {
  return (
    <div className='flex min-h-[86dvh] items-center justify-center bg-white dark:bg-gray-950'>
      <div className='mx-auto w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            Sign up to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
            Or{' '}
            <Link
              href='/auth/signin'
              className='font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              prefetch={false}
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <SignupFormComponent />
        <SocialAuthComponent />
      </div>
    </div>
  )
}
