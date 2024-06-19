import React, { useEffect, useState } from "react";
import styles from "./UserPage.module.css";
import UserGoingEventCard from "./UserGoingEventCard";
import UserInterestedEventCard from "./UserInterestedEventCard";
import ReviewCard from "./ReviewCard";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData();
  }, []);

  return (
    <>
      <h1>Hello Ash.</h1>
      <hr />

      <div className="container">
        <h3>Upcoming concerts</h3>
        {props.userData.map((item) => (
          <UserGoingEventCard
            key={item.id}
            band={item.fields.band}
            date={item.fields.date}
            time={item.fields.time}
            venue={item.fields.venue}
          />
        ))}
      </div>

      <div className="container">
        <h3>Interested in</h3>
        {props.userData.map((item) => (
          <UserInterestedEventCard
            key={item.id}
            band={item.fields.band}
            date={item.fields.date}
            time={item.fields.time}
            venue={item.fields.venue}
          />
        ))}
      </div>

      <div className="container">
        <h3>Review your past events</h3>
        {props.userData.map((item) => (
          <ReviewCard
            key={item.id}
            band={item.fields.band}
            review={item.fields.review}
          />
        ))}
      </div>
    </>
  );
};

export default UserPage;
