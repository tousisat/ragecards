import React from "react";
import UITitle from "./../../components/UI/Title/Title";
import avatar from "../../assets/rainbow.png";
import "./BuyPage.scss";

const BuyPage = props => {
  return (
    <div className="buy-page">
      <div className="buy-page_title">
        <UITitle img={avatar} title="Buy Now" subtitle="Make it yours!" />
      </div>
      blablbla
    </div>
  );
};

export default BuyPage;
