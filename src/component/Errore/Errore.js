import React from 'react'
import styles from './Errore.module.css'
const Errore = ({message}) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.icon}>⚠</div>
      <p className={styles.message}>{message }</p>
    </div>
  )
}

export default Errore