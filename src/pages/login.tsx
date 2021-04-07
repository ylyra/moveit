import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import Head from 'next/head';

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if(!loading && session) {
      router.push('/');
    }
  }, [loading])

  function handleSignIn() {
    signIn('github')
  }

  return (
    <div className={styles.overlay}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="/icons/moveit-logo.svg" alt="Logo move.it"/>
        </div>

        <div className={styles.welcomeContainer}>
          <h3>Bem-vindo</h3>

          <p>
            <img src="/icons/github.svg" alt="Github icon"/>
            Faça login com seu Github para começar
          </p>
        </div>

        { !session && (
          <button onClick={handleSignIn} className={styles.loginGithub}>
            Login com GitHub
          </button>
        )}
      </div>
    </div>
  )
}
