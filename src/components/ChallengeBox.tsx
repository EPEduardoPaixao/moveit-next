import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activieChallenge, resetChallenge } = useContext(ChallengesContext)

    // console.log(activieChallenge)

    return (
        <div className={styles.challengeBoxContainer}>
            {activieChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activieChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activieChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activieChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalise um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
                </div>
            )}
        </div>
    )
}