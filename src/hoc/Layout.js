import React from "react";
import { connect } from "react-redux";

import Header from "./../components/Layout/Header/Header";
import Footer from "./../components/Layout/Footer/Footer";

const Layout = props => {
  return (
    <div className="layout">
      <Header logo={props.logo} navItems={props.navItems} />
      <div>{props.children}</div>
      <Footer banner={props.banner} socialItems={props.socialItems} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logo: state.layout.logo,
    navItems: state.layout.navItems,
    banner: state.layout.banner,
    socialItems: state.layout.socialItems
  };
};

export default connect(mapStateToProps)(Layout);
