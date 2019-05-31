import React from "react";
import "./ProofOfAuthenticityPage.scss";
import avatar from "../../assets/roi.png";
import UITitle from "./../../components/UI/Title/Title";
import Map from "./../../components/ProofOfAuthenticityPage/Map/Map";

const ProofOfAuthenticityPage = props => {
  return (
    <div className="proof-of-authenticity-page">
      <div className="proof-of-authenticity-page_title">
        <UITitle
          img={avatar}
          title="Authentic"
          subtitle="Here's the legends!"
        />
      </div>
      <Map />
    </div>
  );
};

export default ProofOfAuthenticityPage;
