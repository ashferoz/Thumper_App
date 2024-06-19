import React, { useEffect, useState } from "react";
import styles from "./UserPage.module.css";

const UserPage = (props) => {
  useEffect(() => {
    props.getUserData();
  }, []);

  return (
    <>
    <h1>Hello Ash.</h1>
    <hr />
      {props.userData.map((item) => (
        <div key={item.id}>
          
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
