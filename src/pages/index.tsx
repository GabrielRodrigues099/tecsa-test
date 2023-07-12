import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Login from './Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Login page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/Images/tecsa-logo.jpg' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Login />
      </main>
    </>
  );
}
