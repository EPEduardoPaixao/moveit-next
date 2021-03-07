import { rejects } from 'node:assert';
import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level, image, handleImage } = useContext(ChallengesContext)

    // console.log(image)
    return (
        <div className={styles.profileContainer}>

            <input type="file" accept='image/jpeg image/png' id="img" style={{ display: 'none' }} onChange={handleImage} />

            <label htmlFor="img">
                <img src={ image }  alt="Eduardo Cavalcante" />
                {/* <button onClick={save}>salvar</button> */}
            </label>
            <div>
                <strong>Eduardo Cavalcante</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}

