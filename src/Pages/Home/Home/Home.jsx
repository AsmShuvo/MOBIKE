import React from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import COunter from "../Counter/COunter";
import PopularBikes from "../Popular/PopularBIkes";
import MostViewed from "../MostViewed/MostViewed";
import HomeReviews from "../Reviews/HomeReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <COunter />
      <PopularBikes />
      <MostViewed />
      <HomeReviews />
    </div>
  );
};

export default Home;
