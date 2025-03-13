import React, { useContext } from 'react'
import styles from './Progress.module.css'
import { StateContext } from '../../App'
const Progress = () => {
  const{points,indexActiveQuestion,totalQuestion,status}=  useContext(StateContext)
  return (
    <div className={styles.progressContainer}>
      <progress className={styles.progressBar} max={totalQuestion} value={indexActiveQuestion?indexActiveQuestion+1:0}/ >
      <p className={styles.progressInfo}>
        Total Points: <span>{points}</span>
      </p>
      <p className={styles.progressInfo}>
        Question: <span>{status==="active"?indexActiveQuestion+1:0}/{totalQuestion}</span>
      </p>
    </div>
  )
}

export default Progress