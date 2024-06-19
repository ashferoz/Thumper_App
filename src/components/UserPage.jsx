import React, { useEffect, useState } from "react";
import styles from "./UserPage.module.css";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData();
  }, []);

  return (
    <>
      {props.userData.map((item) => (
        <div key={item.id}>
          <h1>Hello {item.fields.name}.</h1>
          <hr />
          <div className="container">
            <h3>Upcoming concerts</h3>
            <div className={styles.imageContainer}>
              <img src={item.fields.image} />
            </div>
            <p>{item.fields.band}</p>
          </div>

          <div className="container">
            <h3>Interested in</h3>
            <div className={styles.imageContainer}>
              <img src={item.fields.image} />
            </div>
            <p>{item.fields.band}</p>
          </div>

          <div className="container">
            <h3>Review your past events</h3>
            <p>Reviews: {item.fields.reviews}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserPage;
