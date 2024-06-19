import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  const handleSubmitButton = () => {};

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
              <h4>{props.name}</h4>
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
                    handleSubmitButton();
                  }}
                >
                  I'm going!
                </Button>
                <Button>Save for later</Button>
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
          name={props.name}
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
