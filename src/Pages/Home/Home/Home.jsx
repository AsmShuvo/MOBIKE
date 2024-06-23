import React from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import COunter from "../Counter/COunter";
import Footer from "../../Shared/Footer/Footer";
import PopularBikes from "../Popular/PopularBIkes";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <COunter />
      <PopularBikes />
      
    </div>
  );
};

export default Home;
