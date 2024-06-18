import React, { useState } from "react";
import styles from "./Event.module.css";
import DetailsModal from "./DetailsModal";

const Event = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  return (
    <div>
      <div className={styles.overlay} onClick={() => setShowUpdateModal(true)}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.imageContainer}>
        <img src={props.image} className="eventImage" />
      </div>
      {showUpdateModal && (
        <DetailsModal
          name={props.name}
          date={props.date}
          time={props.time}
          setShowUpdateModal={setShowUpdateModal}
          genre={props.genre}
          subGenre={props.subGenre}
          venue={props.venue}
        />
      )}
    </div>
  );
};

export default Event;
