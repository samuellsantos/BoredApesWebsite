import React from 'react'
import styles from './CircularText.module.css'


export const CircularText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span className={styles.text}></span>
      </div>
    </div>
  )
}
