import React from 'react'
import styles from './SecondPageBlock.module.css'

const SecondPageBlock = ({ photoSrc, rtext, text }) => {
  return (
    <div className={styles.block}>
      <img className={styles.photo} src={`${photoSrc}`} />
      <div>
        <div className={styles.rtext}>{rtext}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default SecondPageBlock
