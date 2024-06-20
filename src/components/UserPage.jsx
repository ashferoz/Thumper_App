import React, { useEffect } from "react";
import UserGoingEventCard from "./UserGoingEventCard";
import UserInterestedEventCard from "./UserInterestedEventCard";
import ReviewCard from "./ReviewCard";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData();
  }, []);

  const goingEvents = props.userData.filter(
    (item) => item.fields.type === "going"
  );
  const interestedEvents = props.userData.filter(
    (item) => item.fields.type === "interested"
  );

  const pastEvents = props.userData.filter(
    (item) => item.fields.type === "going"
  );

  return (
    <>
      <h1>Hello Ash.</h1>
      <hr />

      <div className="container">
        <h3>Your upcoming events</h3>
        {goingEvents.map((item) => (
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
        {interestedEvents.map((item) => (
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
        <h3>Reviews of past events</h3>
        {pastEvents.map((item) => (
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
