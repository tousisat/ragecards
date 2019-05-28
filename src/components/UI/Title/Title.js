import React from "react";
import "./Title.scss";

const UITitle = props => {
  return (
    <div className="ui_title">
      <div className="ui_title_image">
        <img src={props.img} alt="<" />
      </div>
      <div className="ui_title_group">
        <div className="ui_title_group_title">
          <h1>{props.title}</h1>
        </div>
        <div className="ui_title_group_subtitle">
          <h2>{props.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default UITitle;
