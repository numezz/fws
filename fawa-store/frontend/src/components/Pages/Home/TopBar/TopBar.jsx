import React from 'react'
import styles from './TopBar.module.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import SecondPage from '../SecondPage/SecondPage'

const TopBar = () => {


  return (
    <div className={styles.skin}>
      <Link to="/"><div className={styles.logo}>Fawa store</div></Link>
      <div className={styles.buttons}>
        <HashLink to="/#sp"><div className={styles.button}>Why us?</div></HashLink>
        <div className={styles.button}>FAQ</div>
        <div className={styles.button}>Catalog</div>
      </div>
      <div className={styles.logsign}>
        <div className={styles.button}>Log In</div>
        <Link to="/sign-up"><div className={styles.button}>Sign Up</div></Link>
      </div>
      <div className={styles.botline}></div>
    </div >
  )
}

export default TopBar
