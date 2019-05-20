import React from "react";
import "./HomePage.scss";
import Intro from "../../components/HomePage/Intro/Intro";

const HomePage = props => {
  return (
    <div className="home-page">
      <div className="home-page_intro">
        <Intro />
      </div>
      <div>Cards overview</div>
      <div>Deck Features</div>
    </div>
  );
};

export default HomePage;
