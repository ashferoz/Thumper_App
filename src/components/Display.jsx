import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const Display = (props) => {
  const [events, setEvents] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER +
          "events.json?classificationName=music&dmaId=324&apikey=" +
          import.meta.env.VITE_API_KEY
      );
      if (!res.ok) {
        throw new Error("fetch error");
      }
      const data = await res.json();
      setEvents(data._embedded.events);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Events Around You</h1>
        <hr />
      </div>
      <div>
        {events.map((item, index) => {
          return (
            <EventCard
              key={index}
              band={item.name}
              image={item.images[6].url}
              imageModal={item.images[6].url}
              date={item.dates.start.localDate}
              time={item.dates.start.localTime}
              genre={item.classifications[0].genre.name}
              subGenre={item.classifications[0].subGenre.name}
              venue={item._embedded.venues[0].name}
              saleUrl={item.url}
              getData={getData}
              getUserData={props.getUserData}
            />
          );
        })}
      </div>
    </>
  );
};

export default Display;
