import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/components/SideBar.module.css' 
import { HomeIcon } from '../images/HomeIcon' 
import { AwardIcon } from '../images/AwardIcon' 

export function SideBar() {
  const { pathname } = useRouter();

  return (
    <aside className={styles.sideBarContainer} >
      <img src="/icons/moveit-icon.svg" alt="Icone move.it"/>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={pathname === '/' && styles.active} >
                <HomeIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <a className={pathname === '/leaderboard' && styles.active}>
                <AwardIcon />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div/>
    </aside>
  );
}