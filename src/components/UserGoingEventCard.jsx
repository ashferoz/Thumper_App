import React from "react";
import styles from "./UserGoingEventCard.module.css";

const UserGoingEventCard = (props) => {
  return (
    <div className={styles.box}>
      <h4>{props.band}</h4>
      <hr />
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Venue: {props.venue}</p>
    </div>
  );
};

export default UserGoingEventCard;
