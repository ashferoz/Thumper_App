import React from "react";
import styles from "./css/ReviewCard.module.css";
import DelBtn from "./DelBtn";

const ReviewCard = (props) => {
  return (
    <div className={styles.box}>
      <DelBtn />
      <h4>{props.band}</h4>
      <hr />
      <p>{props.review}</p>
    </div>
  );
};

export default ReviewCard;
