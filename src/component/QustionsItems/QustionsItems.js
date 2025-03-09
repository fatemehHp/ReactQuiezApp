import React from "react";
import styles from "./QustionsItems.module.css";

const QustionsItems = ({ options }) => {
  return <li className={styles.option}>{options}</li>;
};

export default QustionsItems;
