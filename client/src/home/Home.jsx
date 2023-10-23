import React from "react";
import Banner from "../components/Banner";
import ExampleBooks from "./ExampleBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExampleBooks />
      <FavBook />
      <PromoBanner />
    </div>
  );
};

export default Home;
