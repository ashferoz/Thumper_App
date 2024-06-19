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
          image={props.image}
          date={props.date}
          time={props.time}
          setShowUpdateModal={setShowUpdateModal}
          genre={props.genre}
          subGenre={props.subGenre}
          venue={props.venue}
          getData={props.getData}
        />
      )}
    </div>
  );
};

export default Event;
