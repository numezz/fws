import React from 'react'
import styles from './FooterPage.module.css'
import { Link } from 'react-router-dom'

const FooterPage = () => {

    return (
        <div className={styles.skin}>
            <div className={styles.topline}></div>
            <div className={styles.righttext}>
                <div className={styles.l}>Fawa Store</div>
                <div>All rights reserved © 2024</div>
                <div>Design by fatewake</div>
                <div>Developed by fatewake</div>
            </div>
            <div className={styles.lefttext}>
                <Link to="/privacy-policy"><div className={styles.button}>Privacy Policy</div></Link>
                <div className={styles.button}>Cookie Policy</div>
                <div className={styles.button} >Contact Support</div>
            </div>
        </div>
    )
}

export default FooterPage
