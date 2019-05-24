import React from "react";
import "./Header.scss";

const UIHeader = props => {
  return (
    <div className="ui_header">
      <div className="ui_header_image ui_header_image--before">
        <img src={props.img} alt="<" />
      </div>
      <div className="ui_header_title">
        <h1>{props.children}</h1>
      </div>
      <div className="ui_header_image ui_header_image--after">
        <img src={props.img} alt=">" />
      </div>
    </div>
  );
};

export default UIHeader;
