import React from "react";

import CardsGrid from "../components/articles/CardsGrid";
import HeroHeader from "../components/homepage/HeroHeader";

const Home = () => {
  return (
    <div className="home">
      <HeroHeader />
      <CardsGrid />
    </div>
  );
};

export default Home;
