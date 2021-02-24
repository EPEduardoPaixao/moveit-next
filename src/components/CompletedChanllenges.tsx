import styles from '../styles/components/CompletedChanllenges.module.css'

export function CompletedChanllenges(){
    return(
        <div className={styles.CompletedChanllengesContainer}>
            <span>Desafios completados</span>
            <span>5</span>
        </div>
    );
}