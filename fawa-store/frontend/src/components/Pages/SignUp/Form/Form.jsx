import React, { useState, useRef } from 'react'
import styles from './Form.module.css'
import UserService from '../../../../services/UserService'

const Form = () => {

    const [cbppa, setCbppa] = useState(0);
    const linkToInputEmail = useRef(null)
    const linkToInputLogin = useRef(null)
    const linkToInputPassword = useRef(null)

    return (
        <div className={styles.skin}>
            <div className={styles.tsignup}>Sign Up</div>
            <form className={styles.form}>
                <input className={styles.fgmail} placeholder='gmail' type='mail' ref={linkToInputEmail} />
                <input className={styles.fsignup} placeholder='login' ref={linkToInputLogin} />
                <input className={styles.fpasswd} placeholder='password' type='password' ref={linkToInputPassword} />
                <input className={styles.fpasswdrp} placeholder='repeat password' type='password' />
                <input className={styles.fcode} placeholder='code' />
                <div className={styles.pp}>
                    <div className={styles.cbppa} onClick={() => {
                        if (cbppa === 0) {
                            setCbppa(1)
                        }
                        else {
                            setCbppa(0)
                        }
                    }}>
                        <div className={styles.cbppaa} style={{ opacity: cbppa }}>

                        </div>
                    </div>
                    <div className={styles.pptext}>asdfsdfsdf</div>
                </div>
                <div className={styles.breg} onClick={(event) => {
                    event.preventDefault()
                    if (linkToInputEmail.current && linkToInputLogin.current && linkToInputPassword.current) {
                        const email = linkToInputEmail.current.value
                        const login = linkToInputLogin.current.value
                        const password = linkToInputPassword.current.value
                        const data = [login, email, password]
                        UserService.createUser(data).then((result) => { console.log(result) }).catch((error) => {
                            console.log(error);
                        })
                    }

                }}>Confirm</div>
            </form>
        </div>
    )
}

export default Form
