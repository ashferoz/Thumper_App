import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = (props) => {
  return (
    <div className={styles.box}>
      <h4>{props.band}</h4>
      <hr />
      <p>{props.review}</p>
    </div>
  );
};

export default ReviewCard;
