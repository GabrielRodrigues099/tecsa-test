import { signIn } from 'next-auth/react';
import Button from '@/components/Button';

export default function Login() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-36 h-auto'
            src='/Images/tecsa-logo.jpg'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Acessar conta
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <Button
                label='Entrar com Google'
                size='md'
                color='#403aed'
                onClick={() =>
                  signIn('GoogleProvider', { callbackUrl: '/Home' })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
