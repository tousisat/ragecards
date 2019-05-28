import React from "react";
import "./ProductList.scss";
import Product from "./Product/Product";
import deck1 from "../../../assets/product/deck.png";
import deck2 from "../../../assets/product/2deck.PNG";
import deck4 from "../../../assets/product/4deck.PNG";
import deck6 from "../../../assets/product/6deck.PNG";
import deck12 from "../../../assets/product/12deck.PNG";

const ProductList = props => {
  return (
    <div className="buy-page_product_container">
      <Product
        title="forever alone"
        img={deck1}
        description="One (1) Rage cards deck (plastic sealed)"
        price={9}
        payURL={
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V94SXV5D4HD48"
        }
      />
      <Product
        title="double trouble"
        img={deck2}
        description="Two (2) Rage cards deck (plastic sealed)"
        price={14}
        payURL={
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G8YYBDLBVVJNN"
        }
      />
      <Product
        title="4 packs 4 you"
        img={deck4}
        description="Four (4) Rage cards deck (plastic sealed)"
        price={24}
        payURL={
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U8H2UW7NLECRY"
        }
      />
      <Product
        title="pick half brick"
        img={deck6}
        description="Six (6) Rage cards deck (plastic sealed)"
        price={30}
        payURL={
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6CM3BRQCKBESL"
        }
      />
      <Product
        title="majestic full brick"
        img={deck12}
        description="twelve (12) Rage cards deck (plastic sealed)"
        price={48}
        payURL={
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NCJP3GZ8P3SZQ"
        }
      />
    </div>
  );
};

export default ProductList;
