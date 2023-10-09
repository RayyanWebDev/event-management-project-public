import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import GamingSite from "../Gaming/GamingSite";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner></Banner>
      <Services></Services>
      <GamingSite></GamingSite>
    </div>
  );
};

export default Home;
