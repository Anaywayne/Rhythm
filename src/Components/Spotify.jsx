import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
const Spotify = () => {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Spotify;
