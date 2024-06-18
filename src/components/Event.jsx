import React from "react";
import styles from "./Event.module.css";

const Event = (props) => {
  console.log(props);
  return (
    <div>
      <div className={styles.overlay}>
      <h3>{props.name}</h3>
      </div>
      <div className={styles.imageContainer}>
        <img src={props.image} />
        
      </div>
    </div>
  );
};

export default Event;
