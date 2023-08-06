import React from "react";
import { PRODUCTS } from "./Products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </>
  );
};