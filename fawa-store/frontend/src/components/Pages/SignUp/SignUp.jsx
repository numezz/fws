import React, { useEffect, useRef, useState } from 'react'
import styles from './SignUp.module.css'
import Main from './Main/Main'
import TopBar from '../Home/TopBar/TopBar'
import FooterPage from '../Home/FooterPage/FooterPage'
import Form from './Form/Form'

const SignUp = () => {
  const li = useRef(null)
  const [serverResponce, setServerResponce] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setServerResponce('')
    }, 4000);
  }, [serverResponce])
  useEffect(() => { if (li.current) li.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, [li])
  return (
    <div className={styles.skin}>
      <TopBar></TopBar>
      <div ref={li}><Main>
        <Form functionForChangeErrorStatus={setServerResponce}></Form>
        {serverResponce && <div className={styles.errorstatus}>{serverResponce}</div>}
      </Main>

      </div>
      <FooterPage></FooterPage>
    </div>

  )
}

export default SignUp
