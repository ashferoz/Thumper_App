import React from "react";
import styles from "./css/DelButton.module.css";

const DelBtn = (props) => {
  return (
    <button
      className={`${styles.delBtn} fa-solid fa-xmark`}
      onClick={()=>{props.deleteUserData(props.id)}}
    />
  );
};

export default DelBtn;
