//https://github.com/mariusandra/pigeon-marker/blob/master/src/index.js
import React, { Component } from "react";
import "./Marker.scss";

import pin from "../../../assets/marker/pin.png";
import pinRetina from "../../../assets/marker/pin@2x.png";
import pinHover from "../../../assets/marker/pin-hover.png";
import pinHoverRetina from "../../../assets/marker/pin-hover@2x.png";

const imageOffset = {
  left: 15,
  top: 31
};

export default class Marker extends Component {
  state = {
    hover: false,
    showText: true
  };

  // what do you expect to get back with the event
  eventParameters = event => ({
    event,
    anchor: this.props.anchor,
    payload: this.props.payload
  });

  // controls
  isRetina() {
    return typeof window !== "undefined" && window.devicePixelRatio >= 2;
  }

  // modifiers
  isHover() {
    return typeof this.props.hover === "boolean"
      ? this.props.hover
      : this.state.hover;
  }

  image() {
    return this.isRetina()
      ? this.isHover()
        ? pinHoverRetina
        : pinRetina
      : this.isHover()
      ? pinHover
      : pin;
  }

  showTextComponent() {
    return (
      <div className="marker_showtext">
        <div className="marker_showtext_name">
          <b>Name:</b> {this.props.name}
        </div>
        <div className="marker_showtext_edition">
          <b>Edition:</b> {this.props.edition}
        </div>
        <div className="marker_showtext_deck-id">
          <b>Deck Id:</b> {this.props.deckId}
        </div>
      </div>
    );
  }

  // lifecycle

  componentDidMount() {
    let images = this.isRetina()
      ? [pinRetina, pinHoverRetina]
      : [pin, pinHover];

    images.forEach(image => {
      let img = new window.Image();
      img.src = image;
    });
  }

  // delegators

  handleClick = event => {
    this.props.onClick && this.props.onClick(this.eventParameters(event));
  };

  handleContextMenu = event => {
    this.props.onContextMenu &&
      this.props.onContextMenu(this.eventParameters(event));
  };

  handleMouseOver = event => {
    this.props.onMouseOver &&
      this.props.onMouseOver(this.eventParameters(event));
    this.setState({ hover: true });
  };

  handleMouseOut = event => {
    this.props.onMouseOut && this.props.onMouseOut(this.eventParameters(event));
    this.setState({ hover: false });
  };

  // render

  render() {
    const { left, top, onClick } = this.props;

    const style = {
      position: "absolute",
      transform: `translate(${left - imageOffset.left}px, ${top -
        imageOffset.top}px)`,
      cursor: onClick ? "pointer" : "default"
    };

    return (
      <div
        style={style}
        className="pigeon-click-block"
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <img src={this.image()} width={29} height={34} alt="" />
        {this.state.showText ? this.showTextComponent() : null}
      </div>
    );
  }
}
