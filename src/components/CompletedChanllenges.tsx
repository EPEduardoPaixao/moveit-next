import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.CompletedChanllengesContainer}>
            <span>Desafios completados</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}