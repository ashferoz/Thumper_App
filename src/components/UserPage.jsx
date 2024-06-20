import React, { useEffect } from "react";
import UserGoingEventCard from "./UserGoingEventCard";
import UserInterestedEventCard from "./UserInterestedEventCard";
import ReviewCard from "./ReviewCard";
import styles from "./css/UserPage.module.css";

const UserPage = (props) => {
  const deleteUserData = async (id) => {
    const res = await fetch(import.meta.env.VITE_AIRTABLE + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error("error deleting user data");
    }

    props.getUserData();
  };

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
    (item) => item.fields.type === "past"
  );

  const handleDelBtn = (id) => {
    deleteUserData(id);
  };

  return (
    <>
      <h1>Hello Ash.</h1>
      <hr />
      <br />

      <div className={styles.container}>
        <h3 className={styles.sectionTitles}>Upcoming events</h3>
        <div className={styles.box}>
          {goingEvents.length === 0 ? (
            <p>You have no upcoming events.</p>
          ) : (
            goingEvents.map((item) => (
              <UserGoingEventCard
                key={item.id}
                id={item.id}
                band={item.fields.band}
                date={item.fields.date}
                time={item.fields.time}
                venue={item.fields.venue}
                handleDelBtn={handleDelBtn}
              />
            ))
          )}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Interested in</h3>
        <div className={styles.box}>
          {interestedEvents.length === 0 ? (
            <p>You have no events you're currently interested in.</p>
          ) : (
            interestedEvents.map((item) => (
              <UserInterestedEventCard
                key={item.id}
                id={item.id}
                band={item.fields.band}
                date={item.fields.date}
                time={item.fields.time}
                venue={item.fields.venue}
                handleDelBtn={handleDelBtn}
              />
            ))
          )}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Past events</h3>
        <div className={styles.box}>
          {pastEvents.length === 0 ? (
            <p>You have no past events.</p>
          ) : (
            pastEvents.map((item) => (
              <ReviewCard
                key={item.id}
                id={item.id}
                band={item.fields.band}
                review={item.fields.review}
                handleDelBtn={handleDelBtn}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
