import UserInfo from '@/components/UserInfo';
import { signOut, getSession } from 'next-auth/react';
import { saveLog } from '../../utils/mongodb';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <UserInfo />
      <div className=' sm:mx-auto sm:w-1/4 sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <Button
            label='Sair'
            size='md'
            color='#403aed'
            onClick={() => signOut({ callbackUrl: window.location.origin })}
          />
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
