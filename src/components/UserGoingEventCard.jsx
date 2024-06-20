import React from "react";
import styles from "./css/UserGoingEventCard.module.css";
import DelBtn from "./DelBtn";

const UserGoingEventCard = (props) => {
  return (
    <div className={styles.box}>
      <DelBtn />
      <h4>{props.band}</h4>
      <hr />
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Venue: {props.venue}</p>
    </div>
  );
};

export default UserGoingEventCard;
