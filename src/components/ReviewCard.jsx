import React from "react";
import styles from "./css/ReviewCard.module.css";
import DelBtn from "./DelBtn";
import Button from "./Button";

const ReviewCard = (props) => {
  console.log(props.review)
  const review = props.review
  const yearOfEvent = props.date.slice(0, 4);
  return (
    <div className={styles.box}>
      <DelBtn deleteUserData={props.deleteUserData} id={props.id} />
      <h4>
        {props.band} | {yearOfEvent}
      </h4>
      <hr />

      {!review ? (
        <div className={styles.reviewBtn}>
        <Button 
          onClick={() => {
            props.updateUserData(props.id);
          }}
        >
          Add a review
        </Button>
        </div>
      ) : (
        <p>{review}</p>
      )}
    </div>
  );
};

export default ReviewCard;
