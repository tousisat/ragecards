import React from "react";
import "./Footer.scss";

const Footer = props => {
  return (
    <div className="layout_footer">
      <div className="layout_footer_banner">
        <img src={props.banner} alt={props.banner} />
      </div>
      <div className="layout_footer_social">
        <ul>
          {props.socialItems.map(item => {
            return (
              <li key={item.id}>
                <a href={item.link}>
                  <img src={item.icon} alt={item.link} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
