import React from "react";
import { PRODUCTS } from "../../pages/Cart/Products";
import { Product } from "../../pages/Cart/product";
import './catalog.css';

export const Catalog = ({PRODUCTS}) => {
  return (
    <div>
      <div className="item-list">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};


export default Catalog;


