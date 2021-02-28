import { createContext, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel:number;
    activieChallenge: Challenge;
    resetChallenge: () => void;
    startNewChallenge: () => void;
    levelUp: () => void;
}
export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(30)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activieChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activieChallenge,
                experienceToNextLevel,
                resetChallenge,
                startNewChallenge,
                levelUp
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}