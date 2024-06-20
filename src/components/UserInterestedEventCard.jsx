import React from "react";
import styles from "./css/UserInterestedEventCard.module.css";
import DelBtn from "./DelBtn";

const UserInterestedEventCard = (props) => {
  return (
    <div className={styles.box}>
      <DelBtn handleDelBtn={props.handleDelBtn} id={props.id}/>
      <h4>{props.band}</h4>
      <hr />
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Venue: {props.venue}</p>
    </div>
  );
};

export default UserInterestedEventCard;
