import React from "react";
import styles from "./StartScreen.module.css";
const StartScreen = ({totalQuestion}) => {
  return (
    <div>
      <p className={styles.description}>
        Test your knowledge, earn points, and climb the leaderboard.
      </p>
      <p className={styles.infoText}>There are {totalQuestion} questions for you</p>

      <button className={styles.startButton}>🚀 Start Quiz</button>
    </div>
  );
};

export default StartScreen;
