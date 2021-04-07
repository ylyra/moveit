import Head from 'next/head';

import { SideBar } from '../components/SideBar';


import styles from '../styles/pages/Home.module.css'
import { UserProvider } from '../contexts/UserContext';

export default function Leaderboard() {  
  return (
    <UserProvider>
      <div className={styles.homePage}>
          <SideBar />
          
          <main>
            <div className={styles.container}>
              <Head>
                <title>Leaderboard | move.it</title>
              </Head>

              <h2>Leaderboard</h2>
            </div>
          </main>
        </div>
    </UserProvider>
  )
}