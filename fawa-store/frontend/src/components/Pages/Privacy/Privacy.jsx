import React from 'react'
import styles from './Privacy.module.css'
import Main from './Main/Main'
import RuleBlock from './RuleBlock/RuleBlock'
import TopBar from '../Home/TopBar/TopBar'
import FooterPage from '../Home/FooterPage/FooterPage'

const Privacy = () => {
  return (
    <div className={styles.skin}>
      <TopBar></TopBar>
      <Main>
        <RuleBlock></RuleBlock>
      </Main>
      <FooterPage></FooterPage>
    </div>
  )
}

export default Privacy
