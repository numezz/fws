import React from 'react'
import styles from './Main.module.css'

const Main = (props) => {
  return (
    <div className={styles.skin}>
      {props.children}
    </div>
  )
}

export default Main
