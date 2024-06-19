import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  const [userEvents, setUserEvents] = useState([]);
  const getUserData = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_AIRTABLE + "/recgTIX3IGXHN6bYq",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("fetch error");
      }
      const data = await res.json();
      setUserEvents([data]);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const addUserData = async (name, band, reviews, image) => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLE, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                name: props.name,
                band: props.band,
                reviews: props.reviews,
                image: props.image,
              },
            },
          ],
        }),
      });
      if (!res.ok) {
        throw new Error("fetch error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoingBtn = () => {
    addUserData();
    props.setShowUpdateModal(false);
  };

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div>
            <button
              className={`${styles.closeBtn} fa-solid fa-xmark`}
              onClick={() => props.setShowUpdateModal(false)}
            />
            <div className={styles.details}>
              <h4>{props.band}</h4>
              <hr />
              <p>Date: {props.date}</p>
              <p>Time: {props.time}</p>
              <p>Venue: {props.venue}</p>
              <p>
                Genre: {props.genre} {props.subGenre}
              </p>
              <div className={styles.btnContainer}>
                <Button
                  onClick={() => {
                    handleGoingBtn();
                  }}
                  setShowUpdateModal={props.setShowUpdateModal}
                >
                  I'm going!
                </Button>
                <Button setShowUpdateModal={props.setShowUpdateModal}>
                  Save for later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailsModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          key={props.index}
          band={props.band}
          image={props.image}
          date={props.date}
          time={props.time}
          venue={props.venue}
          genre={props.genre}
          subGenre={props.subGenre}
          setShowUpdateModal={props.setShowUpdateModal}
          getData={props.getData}
        />,
        document.querySelector("#root")
      )}
    </>
  );
};

export default DetailsModal;
