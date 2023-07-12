import UserInfo from '@/components/UserInfo';
import { signOut, getSession } from 'next-auth/react';
import { saveLog } from '../../utils/mongodb';

export default function Home() {
  return (
    <>
      <UserInfo />
      <div className=' sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <button
            onClick={() => signOut({ callbackUrl: window.location.origin })}
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sair
          </button>
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    const error = {
      message: 'Invalid Client (Unauthorized)',
      date: new Date(),
    };

    saveLog(error);

    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
