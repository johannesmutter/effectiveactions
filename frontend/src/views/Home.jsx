import React from "react";

import CardsGrid from "../components/articles/CardsGrid";
import Header from "../components/homepage/Header";

import "../styles/homepage.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="trending-container">
        <h2>Trending actions</h2>
      </div>
    </div>
  );
};

export default Home;
