import React from 'react'
import TopBar from './TopBar/TopBar'
import styles from './Home.module.css'
import FirstPage from './FirstPage/FirstPage'
import SecondPage from './SecondPage/SecondPage'
import FooterPage from './FooterPage/FooterPage'

const Home = () => {
  return (
    <div className={styles.skin}>
      <TopBar></TopBar>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <FooterPage></FooterPage>
    </div>
  )
}

export default Home
