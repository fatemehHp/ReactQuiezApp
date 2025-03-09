import React, { useContext } from "react";
import styles from "./StartScreen.module.css";
import { StateContext } from "../../App";
const StartScreen = () => {
  const{dispatch,totalQuestion}=useContext(StateContext)
  return (

    <>
      <p className={styles.description}>
        Test your knowledge, earn points, and climb the leaderboard.
      </p>
      <p className={styles.infoText}>There are {totalQuestion} questions for you</p>

      <button className={styles.startButton} onClick={()=>dispatch({type:"start"})}>🚀 Start Quiz</button>
    </>
  );
};

export default StartScreen;
