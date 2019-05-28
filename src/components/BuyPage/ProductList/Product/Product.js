import React from "react";
import "./Product.scss";
import buynow from "../../../../assets/buynow.gif";

const Product = props => {
  return (
    <div className="buy-page_product_item">
      <div className="buy-page_product_item_image">
        <img src={props.img} alt="RAGECARDS PRODUCT" />
      </div>
      <div className="buy-page_product_item_container">
        <div className="buy-page_product_item_container_title">
          <h1>{props.title}</h1>
        </div>
        <div className="buy-page_product_item_container_description">
          <p>{props.description}</p>
        </div>
        <div className="buy-page_product_item_container_price">
          <label>{props.price}$</label>
        </div>
        <div className="buy-page_product_item_container_paynow">
          <a href={props.payURL}>
            <img src={buynow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
