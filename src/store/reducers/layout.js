import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";
import iconfacebook from "../../assets/facebook.png";
import iconinstagram from "../../assets/instagram.png";

const initialState = {
  logo,
  navItems: [
    { id: 1, link: "/contact", text: "Contact us" },
    { id: 2, link: "/buy", text: "Buy now" }
  ],
  banner,
  socialItems: [
    { id: 1, link: "https://www.facebook.com/ragecards/", icon: iconfacebook },
    { id: 2, link: "https://www.instagram.com/ragecards/", icon: iconinstagram }
  ]
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default layoutReducer;
