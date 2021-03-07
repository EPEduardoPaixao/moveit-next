import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

import Cookies from 'js-cookie'
import { LevelUpmodal } from '../components/LevelUpModal'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activieChallenge: Challenge;
    image: string;
    resetChallenge: () => void;
    completeChallenge: () => void;
    startNewChallenge: () => void;
    levelUp: () => void;
    closeLevelUpodal: () => void;
    handleImage: (e: any) => void;
    // save: () => void;
}
interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    image: string;
}
export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
    children,
    ...rest
}: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [image, setImage] = useState(rest.image?(`https://github.com/EPEduardoPaixao.png`):(null))
    const [imageBase64, setImageBase64] = useState('')
    const [img1, setImg] = useState('')

    const [activieChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
        Cookies.set('image', String(image))
        console.log(image)
    }, [level, currentExperience, challengesCompleted, image])

    const handleImage = (e: any) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        // setImg(e.target.files[0])
        // setImageBase64(URL.createObjectURL(e.target.files[0]));
    };

    // const convertbase64 = (file: any) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = error => {
    //             reject(error);
    //         };
    //     });
    // };
    // function cutFromString(oldStrRegex: any, fullStr: any) {
    //     return fullStr.replace(oldStrRegex, '');
    //   }
    // const save = async () => {
    //     let img: any = await convertbase64(img1)
    //     let cut = cutFromString(/^data:image.+;base64,/i,img)
    //     setImage(cut)
    //     console.log("image",image)
    // }


    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpodal() {
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio !!!', {
                body: `Valendo${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activieChallenge) {
            return;
        }
        const { amount } = activieChallenge;

        let finalExperience = currentExperience + amount;
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider
            value={{
                image,
                level,
                currentExperience,
                challengesCompleted,
                activieChallenge,
                experienceToNextLevel,
                completeChallenge,
                resetChallenge,
                startNewChallenge,
                levelUp,
                closeLevelUpodal,
                handleImage,
                // save,
            }}
        >
            {children}
            {isLevelUpModalOpen === true ? (<LevelUpmodal />) : (null)}
        </ChallengesContext.Provider>
    )
}