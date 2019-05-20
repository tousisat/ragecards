import React from "react";

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
                <a href={item.link}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
