import React from "react";
import "./CardsOverview.scss";
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "./touchWithHOC";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import UIHeader from "../../UI/Header/Header";
import diamond from "../../../assets/cards/diamond.png";
import spade from "../../../assets/cards/spade.png";
import club from "../../../assets/cards/club.png";
import heart from "../../../assets/cards/heart.png";

import {
  cards_clubs,
  cards_court,
  cards_diamonds,
  cards_hearts,
  cards_spades
} from "./cards";

const cardSize = 300; //check carousel-card in scss (width)
const cardPadCount = 5;
const carouselWidth = window.innerWidth;

const carouselContainer = props => {
  const { cursor, carouselState, ...rest } = props;
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return (
    <NonPassiveTouchTarget className="home-page_cards-overview_container">
      <NonPassiveTouchTarget
        className="home-page_cards-overview_container_track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </NonPassiveTouchTarget>
  );
};
const container = touchWithMouseHOC(carouselContainer);

const renderCard = (cards, rotation) => (index, modIndex, cursor) => {
  const item = cards[modIndex];
  const rotate = rotation * (index + cursor);
  const onTop = Math.abs(index + cursor) < 0.5;
  return (
    <div key={index} className="home-page_cards-overview_container_track_card">
      <div
        className="home-page_cards-overview_container_track_card_card-inner"
        style={{
          transform: `rotate(${rotate}deg)`,
          zIndex: onTop ? 1 : 0
        }}
      >
        <img src={item} alt="card" />
      </div>
    </div>
  );
};

const CardsOverview = props => {
  return (
    <div>
      <UIHeader img={diamond}>the diamonds</UIHeader>
      <TouchCarousel
        component={container}
        cardSize={cardSize}
        cardCount={cards_diamonds.length}
        cardPadCount={cardPadCount}
        loop={true}
        autoplay={1500}
        renderCard={renderCard(cards_diamonds, 90)}
      />
      <UIHeader img={spade}>the spades</UIHeader>
      <TouchCarousel
        component={container}
        cardSize={cardSize}
        cardCount={cards_spades.length}
        cardPadCount={cardPadCount}
        loop={true}
        autoplay={1500}
        renderCard={renderCard(cards_spades, 45)}
      />
      <UIHeader img={club}>the clubs</UIHeader>
      <TouchCarousel
        component={container}
        cardSize={cardSize}
        cardCount={cards_clubs.length}
        cardPadCount={cardPadCount}
        loop={true}
        autoplay={1500}
        renderCard={renderCard(cards_clubs, 90)}
      />
      <UIHeader img={heart}>the hearts</UIHeader>
      <TouchCarousel
        component={container}
        cardSize={cardSize}
        cardCount={cards_hearts.length}
        cardPadCount={cardPadCount}
        loop={true}
        autoplay={1500}
        renderCard={renderCard(cards_hearts, 45)}
      />
    </div>
  );
};

export default CardsOverview;
