import React from "react";
import ReactDOM from "react-dom";
import styles from "./css/EventDetailsModal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  const addUserData = async (type) => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLE, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            name: props.name,
            band: props.band,
            date: props.date,
            time: props.time,
            venue: props.venue,
            saleUrl: props.saleUrl,
            type: type,
          },
        }),
      });
      if (!res.ok) {
        throw new Error("fetch error");
      }
      props.getUserData();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoingBtn = () => {
    addUserData("going");
    props.setShowUpdateModal(false);
  };

  const handleSaveForLaterBtn = () => {
    addUserData("interested");
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
                Genre: {props.genre}, {props.subGenre}
              </p>
              <a href={props.saleUrl} target="_blank">
                <Button>Purchase ticket</Button>
              </a>

              <Button
                onClick={handleGoingBtn}
                setShowUpdateModal={props.setShowUpdateModal}
              >
                I'm going!
              </Button>
              <Button onClick={handleSaveForLaterBtn}>Save for later</Button>
              <Button onClick={handleGoingBtn}>Show similar events</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EventDetailsModal = (props) => {
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
          saleUrl={props.saleUrl}
          getUserData={props.getUserData}
        />,
        document.querySelector("#root")
      )}
    </>
  );
};

export default EventDetailsModal;
