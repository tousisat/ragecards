import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = props => {
  return (
    <div className="layout_header">
      <div className="layout_header_logo">
        <NavLink to={"/"} exact>
          <img src={props.logo} alt={props.logo} />
        </NavLink>
      </div>
      <div className="layout_header_nav-items">
        <ul>
          {props.navItems.map(item => {
            return (
              <li key={item.id}>
                <NavLink
                  activeClassName="layout_header_nav-items--active"
                  to={item.link}
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
