import React from "react";
import "./Feature.scss";
import UITitle from "./../../UI/Title/Title";
import avatar from "../../../assets/feature.png";
import image from "../../../assets/feature2.gif";

const Feature = props => {
  return (
    <div className="home-page_feature_container">
      <div className="home-page_feature_container_title">
        <UITitle
          img={avatar}
          title="Feature"
          subtitle="What are Rage Comics?"
        />
      </div>
      <div className="home-page_feature_container_blog">
        <div className="home-page_feature_container_blog_text">
          <p>
            <b>Rage Comics</b> are series of web comics with characters,
            sometimes referred to as “rage faces”, that are often created with
            simple drawing software such as MS Paint. The comics are typically
            used to tell stories about real life experiences, and end with a
            humorous punchline. It has become increasingly popular to create the
            comics using web applications often referred to as “rage comic
            generators” or “rage makers”
          </p>
        </div>
        <div className="home-page_feature_container_blog_image-container">
          <div className="home-page_feature_container_blog_image-container_image">
            <img src={image} alt="RAGECARDS" />
          </div>
          <div className="home-page_feature_container_blog_image-container_label" />
          <label>playing cards + rage comics = RAGE CARDS</label>
        </div>
        <div className="home-page_feature_container_blog_text">
          <p>
            Rage cards are fun, quirky and interesting; each one is unique and
            sure to delight! This time we upgraded the cards to reach the
            perfect fit for each image as well as added new rage comic faces to
            make the funniest deck ever!
          </p>
        </div>
        <div className="home-page_feature_container_blog_list">
          <ul>
            <li>
              Printed by a <b>major</b> games printing and manufacturing giant
              in the gaming industry
            </li>
            <li>
              <b>Rage Cards</b> branded
            </li>
            <li>
              <b>100%</b> hand drawn artwork
            </li>
            <li>
              Filled with <b>secrets</b> messages and easter eggs
            </li>
            <li>
              Box representing the <b>amazing</b> rage comic world
            </li>
            <li>
              54 Unique playing cards (<b>even Jokers!</b>)
            </li>
            <li>
              <b>Original back designs</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
