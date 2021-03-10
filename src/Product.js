import React from "react";
import ItemDescription from "./ItemDescription";
import "./Product.css";

function Product({ name, description, price }) {
  return (
    <div className="product">
      <ItemDescription name={name} description={description} />
      <h2 className="error">An error Occured</h2>
      <h3 className="product__price">${price}</h3>
    </div>
  );
}

export default Product;
