import React, { useContext } from "react";
import styles from './FinishScreen.module.css'
import { StateContext } from "../../App";
const FinishQuiz = () => {
    const{dispatch}=useContext(StateContext)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quiz Completed!</h2>
      <button className={styles.restartButton} onClick={()=>dispatch({type:"reStart"})}>Play Again</button>
    </div>
  );
};

export default FinishQuiz;
