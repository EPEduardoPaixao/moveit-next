import React from "react";
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import { CompletedChanllenges } from "../components/CompletedChanllenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";

interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  image:string;
  // imageBase64:string
}
export default function Home(props: HomeProps) {
  console.log("props",props)
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      image={props.image}
      // imageBase64={props.imageBase64}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChanllenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
 
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted, image } = context.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted),
      image:String(image)
    }
  }
}