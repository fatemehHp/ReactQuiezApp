import React from "react";
import styles from "./QustionsItems.module.css";

const QustionsItems = ({ item }) => {
  return <li className={styles.option}>{item.question}</li>;
};

export default QustionsItems;
