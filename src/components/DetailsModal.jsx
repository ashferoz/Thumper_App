import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        <div>
          {props.image}
          {props.name}
          <button
            className="col-md3"
            onClick={() => props.setShowUpdateModal(false)}
          >
            Close
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
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
          setShowUpdateModal={props.setShowUpdateModal}
        />,
        document.querySelector("#root")
      )}
    </>
  );
};

export default DetailsModal;
