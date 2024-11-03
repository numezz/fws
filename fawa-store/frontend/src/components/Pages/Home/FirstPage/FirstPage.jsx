import React from 'react'
import styles from './FirstPage.module.css'

const FirstPage = () => {
  return (
    <div className={styles.skin}>
      <div className={styles.mainblock}>
        <img className={styles.photo} src="/imgs/sat.jpg" alt="1" />
        <div className={styles.logotext}>
          <div className={styles.logo}>Fawa store</div>
          <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam debitis omnis doloremque recusandae officiis, doloribus animi a consequatur assumenda autem tempora, nam asperiores aspernatur. Eos velit voluptatum neque vero!</div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
