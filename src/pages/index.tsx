import React from "react";
import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import { CompletedChanllenges } from "../components/CompletedChanllenges";
import { Countdown } from "../components/Countdown";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChanllenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
