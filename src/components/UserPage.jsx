import React, { useEffect, useState } from "react";

const UserPage = (props) => {
  const [userEvents, setUserEvents] = useState([]);
  const getUserData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLE, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
        },
      });
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

  return (
    <div>
      {userEvents.map((item) => (
        <div key={item.id}>
          <h1>Hello {item.fields.name}.</h1>
          <hr />
          <div className="container">
            <h3>Upcoming concerts</h3>
            <div>
              <img src={item.fields.image} />
            </div>
            <p>{item.fields.event}</p>
          </div>

          <div className="container">
            <h3>Interested in</h3>
            <p>{item.fields.event}</p>
          </div>

          <div className="container">
            <h3>Review your past events</h3>
            <p>Reviews: {item.fields.reviews}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
