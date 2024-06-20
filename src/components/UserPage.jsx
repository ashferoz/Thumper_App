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
    (item) => item.fields.type === "going"
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
        <h3 className={styles.sectionTitles}>Your upcoming events</h3>
        <div className={styles.box}>
          {goingEvents.map((item) => (
            <UserGoingEventCard
              key={item.id}
              id={item.id}
              band={item.fields.band}
              date={item.fields.date}
              time={item.fields.time}
              venue={item.fields.venue}
              handleDelBtn={handleDelBtn}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Interested in</h3>
        <div className={styles.box}>
          {interestedEvents.map((item) => (
            <UserInterestedEventCard
              key={item.id}
              id={item.id}
              band={item.fields.band}
              date={item.fields.date}
              time={item.fields.time}
              venue={item.fields.venue}
              handleDelBtn={handleDelBtn}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <h3>Reviews of past events</h3>
        <div className={styles.box}>
          {pastEvents.map((item) => (
            <ReviewCard
              key={item.id}
              id={item.id}
              band={item.fields.band}
              review={item.fields.review}
              handleDelBtn={handleDelBtn}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
