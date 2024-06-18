import React from "react";

import Display from "./components/Display";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="main" />} />
        <Route path="main" element={<Display />} />
        <Route path="profile" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
