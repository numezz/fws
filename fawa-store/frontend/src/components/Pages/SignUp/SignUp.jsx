import React, { useEffect, useRef } from 'react'
import styles from './SignUp.module.css'
import Main from './Main/Main'
import TopBar from '../Home/TopBar/TopBar'
import FooterPage from '../Home/FooterPage/FooterPage'
import Form from './Form/Form'

const SignUp = () => {
  const li = useRef(null)
  useEffect(() => { if (li.current) li.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, [li])
  return (
    <div className={styles.skin}>
      <TopBar></TopBar>
      <div ref={li}><Main>
        <Form></Form>
      </Main></div>
      <FooterPage></FooterPage>
    </div>
  )
}

export default SignUp
