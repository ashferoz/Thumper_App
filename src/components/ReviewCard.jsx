import React from "react";
import styles from "./css/ReviewCard.module.css";
import DelBtn from "./DelBtn";

const ReviewCard = (props) => {
  const yearOfEvent = props.date.slice(0, 4);
  return (
    <div className={styles.box}>
      <DelBtn deleteUserData={props.deleteUserData} id={props.id} />
      <h4>
        {props.band} | {yearOfEvent}
      </h4>
      <hr />
      <p>{props.review}</p>
    </div>
  );
};

export default ReviewCard;
