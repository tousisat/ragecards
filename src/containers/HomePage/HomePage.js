import React from "react";
import "./HomePage.scss";
import Intro from "../../components/HomePage/Intro/Intro";
import CardsOverview from "./../../components/HomePage/CardsOverview/CardsOverview";
import Feature from "./../../components/HomePage/Feature/Feature";

const HomePage = props => {
  return (
    <div className="home-page">
      <div className="home-page_intro">
        <Intro />
      </div>
      <div className="home-page_feature">
        <Feature />
      </div>
      <div className="home-page_cards-overview">
        <CardsOverview />
      </div>
    </div>
  );
};

export default HomePage;
