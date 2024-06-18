import React, { useEffect, useState } from "react";
import Event from "./Event";

const EventCard = () => {
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
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {events.map((item, index) => {
        return (
          <Event
            key={index}
            name={item.name}
            image={item.images[6].url}
            imageModal={item.images[6].url}
            date={item.dates.start.localDate}
            time={item.dates.start.localTime}
            genre={item.classifications[0].genre.name}
            subGenre={item.classifications[0].subGenre.name}
            venue={item._embedded.venues[0].name}
          />
        );
      })}
    </div>
  );
};

export default EventCard;
