import React from 'react'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  )
}

export default Loading