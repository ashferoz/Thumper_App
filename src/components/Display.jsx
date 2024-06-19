import React from "react";
import EventCard from "./EventCard";

const Display = (props) => {
  return (
    <>
      <h1>Events Around You</h1>
      <hr />
      <EventCard getUserData={props.getUserData}/>
      
    </>
  );
};

export default Display;
