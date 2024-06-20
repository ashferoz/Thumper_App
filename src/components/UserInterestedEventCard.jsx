import React from "react";
import styles from "./css/UserInterestedEventCard.module.css";
import DelBtn from "./DelBtn";
import Button from "./Button";

const UserInterestedEventCard = (props) => {
  return (
    <div className={styles.box}>
      <DelBtn deleteUserData={props.deleteUserData} id={props.id} />
      <h4>{props.band}</h4>
      <hr />
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Venue: {props.venue}</p>
      <a className={styles.purchaseBtn} href={props.saleUrl} target="_blank">
        <Button>Purchase ticket</Button>
      </a>
      <div className={styles.goingBtn}>
        <Button
          onClick={() => {
            props.updateUserData(props.id);
          }}
        >
          I'm going
        </Button>
      </div>
    </div>
  );
};

export default UserInterestedEventCard;
