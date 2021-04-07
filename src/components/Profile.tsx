import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);  
  const { user } = useContext(UserContext);  

  return (
    <div className={styles.profileContainer}>
      <img src={user.image} alt="GitHub user"/>
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}