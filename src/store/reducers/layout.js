import logo from "../../assets/logo.png";

const initialState = {
  logo: logo,
  navItems: [
    { id: 1, link: "/contact", text: "Contact us" },
    { id: 2, link: "/buy", text: "Buy now" }
  ],
  banner: "",
  socialItems: [{ id: 1, link: "", text: "" }, { id: 2, link: "", text: "" }]
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default layoutReducer;
