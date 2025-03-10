import React, { useContext } from "react";
import styles from "./QustionsItems.module.css";
import { StateContext } from "../../App";

const QustionsItems = ({ options ,index,correctanswer}) => {
  const {dispatch,answer}=useContext(StateContext)
  

  return <li className={`${answer ||answer===0?styles.disable:styles.option} ${answer ||answer===0 ? (correctanswer=== index ? styles.correct : styles.wrong) : ""}`}

  onClick={()=>dispatch({type:"selectItem",payload:index})} >{options}</li>;
};

export default QustionsItems;
