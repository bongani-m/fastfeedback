import Head from 'next/head';
import { useState } from 'react';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();
  const [message, setMessage] = useState('Please Press...');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FastFeedback
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> 
        <button onClick={() => {
          auth.signinWithGithub();
        }}>Sign In</button>
        <div>{JSON.stringify(auth?.user?.email)}</div>
        {auth?.user && 
        <button onClick={() => {
          auth.signout();
        }}>Sign Out</button>}
      </main>

      <button
        onClick={async () => {
          const result = await fetch('http://localhost:3000/api/hello');
          const { name } = await result.json();
          setMessage(`Hi, my name is ${name}`);
        setMessage(`Hi, my name is ${name}`); 
          setMessage(`Hi, my name is ${name}`);
        }}
      >
        {message}
      </button>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
