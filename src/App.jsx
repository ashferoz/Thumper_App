import React, { useEffect, useState } from "react";

import Display from "./components/Display";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

function App() {
  const [userData, setUserData] = useState([]);
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
      setUserData(data.records);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="main" />} />
        <Route path="main" element={<Display getUserData={getUserData} />} />
        <Route
          path="profile"
          element={<UserPage getUserData={getUserData} userData={userData} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
