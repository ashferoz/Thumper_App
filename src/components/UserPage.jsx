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

  const updateUserData = async (id) => {
    const res = await fetch(import.meta.env.VITE_AIRTABLE + id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          type: 'going',
        },
      }),
    });
    if (!res.ok) {
      throw new Error("error updating user data");
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

  return (
    <>
      <h1>Hello Ash.</h1>
      <hr />
      <br />

      <div className={styles.container}>
        <h3 className={styles.sectionTitles}>Upcoming events</h3>
        <div className={styles.goingBox}>
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
                deleteUserData={deleteUserData}
              />
            ))
          )}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Interested in</h3>
        <div className={styles.interestedBox}>
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
                saleUrl={item.fields.saleUrl}
                type={item.fields.type}
                deleteUserData={deleteUserData}
                updateUserData={updateUserData}
              />
            ))
          )}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Past events</h3>
        <div className={styles.pastBox}>
          {pastEvents.length === 0 ? (
            <p>You have no past events.</p>
          ) : (
            pastEvents.map((item) => (
              <ReviewCard
                key={item.id}
                id={item.id}
                band={item.fields.band}
                review={item.fields.review}
                deleteUserData={deleteUserData}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
