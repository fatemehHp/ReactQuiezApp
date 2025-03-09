import React, { useContext } from 'react'
import styles from './Question.module.css'
import { StateContext } from '../../App'
import QustionsItems from '../QustionsItems/QustionsItems'
const Question = () => {
    const{question}=useContext(StateContext)
  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{question.question} </h2>
      <ul className={styles.options}>
        {
            question.map((item)=>{
                return <QustionsItems item={item}/>
            })
        }

      </ul>
    </div>

  )
}

export default Question