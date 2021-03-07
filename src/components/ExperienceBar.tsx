import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import classes from '../styles/components/ExperienceBar.module.css';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
    const percentToNextLevel = Math.floor(currentExperience *100)/experienceToNextLevel
    return(
        <div>

        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
            
        </header>
        <strong className={classes.strong}>Complete os execíceos ao final de cada intervalo para anvançar de nivel</strong>
        
        </div>
    );
}