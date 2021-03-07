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

            <label htmlFor="img" >
                <img src={ image || 'https://github.com/EPEduardoPaixao.png'}  alt="Adcionar Foto" />
                {/* <img src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/1200px-Item_sem_imagem.svg.png'}  alt="Adcionar Foto" /> */}
                {/* <button onClick={save}>salvar</button> */}
            </label>
            <div>
                <p>
                    Level {level}
                    <img src="icons/level.svg" alt="Level" />
                </p>
            </div>
        </div>
    );
}

