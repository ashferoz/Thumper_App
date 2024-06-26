import React from "react";
import styles from "./css/Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.btn}
    >
      {props.children}
    </button>
  );
};

export default Button;
