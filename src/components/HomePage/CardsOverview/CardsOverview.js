import React from "react";
import "./CardsOverview.scss";
import TouchCarousel, {
  range,
  clamp,
  precision,
  getTouchPosition,
  getTouchId,
  omit,
  modCursor
} from "react-touch-carousel";
import touchWithMouseHOC from "./touchWithHOC";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";

import data from "./data";

const cardSize = 300; //check carousel-card in scss (width)
const cardPadCount = 3;
const carouselWidth = window.innerWidth;

function CarouselContainer(props) {
  const { cursor, carouselState, ...rest } = props;
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return (
    <NonPassiveTouchTarget className="carousel-container">
      <NonPassiveTouchTarget
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </NonPassiveTouchTarget>
  );
}
const Container = touchWithMouseHOC(CarouselContainer);

function renderCard(index, modIndex, cursor) {
  const item = data[modIndex];
  const rotate = 40 * (index + cursor);
  const onTop = Math.abs(index + cursor) < 0.5;
  return (
    <div key={index} className="carousel-card">
      <div
        className="carousel-card-inner"
        style={{
          backgroundColor: item.background,
          transform: `rotate(${rotate}deg)`,
          zIndex: onTop ? 1 : 0
        }}
      >
        <div className="carousel-title">{item.title}</div>
        <div className="carousel-text">{item.text}</div>
      </div>
    </div>
  );
}

const CardsOverview = props => {
  return (
    <TouchCarousel
      component={Container}
      cardSize={cardSize}
      cardCount={data.length}
      cardPadCount={cardPadCount}
      loop={true}
      autoplay={false}
      renderCard={renderCard}
    />
  );
};

export default CardsOverview;
