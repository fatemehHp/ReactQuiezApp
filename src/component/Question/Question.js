import React, { useContext } from "react";
import styles from "./Question.module.css";
import { StateContext } from "../../App";
import QustionsItems from "../QustionsItems/QustionsItems";
const Question = () => {
  const { question, indexActiveQuestion,answer,dispatch } = useContext(StateContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.question}>
        {question[indexActiveQuestion].question}{" "}
      </h2>
      <ul className={styles.options}>
        {question[indexActiveQuestion].options.map((options, index) => {
          return (
            <QustionsItems
              options={options}
              key={options}
              index={index}
              correctanswer={question[indexActiveQuestion].correctOption}
            />
          );
        })}
      </ul>
      {
        answer || answer===0?<button className={styles.nextButton} onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>:null
      }
      
    </div>
  );
};

export default Question;
