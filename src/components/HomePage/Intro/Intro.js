import React from "react";
import "./Intro.scss";
import box from "../../../assets/boite.png";

const Intro = props => {
  return (
    <div className="home-page_intro_container">
      <div className="home-page_intro_container_box">
        <img src={box} alt="box" />
      </div>
      <div className="home-page_intro_container_text">
        <h1>The only pack</h1>
        <h2>you'll ever need!</h2>
      </div>
    </div>
  );
};

export default Intro;
